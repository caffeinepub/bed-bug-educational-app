import { format } from "date-fns";
import { Bug, Loader2, Phone, Send } from "lucide-react";
import { type KeyboardEvent, useEffect, useRef, useState } from "react";
import {
  useGetMessagesForThread,
  useSendMessage,
} from "../hooks/useChatQueries";
import { cn } from "../lib/utils";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

// Local area technician info (97761 - Community Health)
const LOCAL_TECHNICIAN = {
  name: "Community Health Pest Technician",
  area: "Area Code 97761",
  phone: "541-553-2352",
};

// Generate a stable anonymous guest ID stored in sessionStorage
function getGuestId(): string {
  const stored = sessionStorage.getItem("guestChatId");
  if (stored) return stored;
  const id = `guest-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  sessionStorage.setItem("guestChatId", id);
  return id;
}

interface LocalMessage {
  id: string;
  content: string;
  senderId: string;
  isTechnician: boolean;
  timestamp: number;
}

export function ChatInterface() {
  const guestId = getGuestId();
  const threadId = `${guestId}-community-health-97761`;

  const [message, setMessage] = useState("");
  const [localMessages, setLocalMessages] = useState<LocalMessage[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const sendMessageMutation = useSendMessage();

  // Try to load messages from backend; fall back to local state gracefully
  const { data: backendMessages = [] } = useGetMessagesForThread(threadId);

  // Merge backend messages with local messages for display
  const allMessages: LocalMessage[] =
    backendMessages.length > 0
      ? backendMessages.map((m) => ({
          id: m.id.toString(),
          content: m.content,
          senderId: m.senderId.toString(),
          isTechnician: m.isTechnician,
          timestamp: Number(m.timestamp) / 1_000_000,
        }))
      : localMessages;

  // biome-ignore lint/correctness/useExhaustiveDependencies: scroll on message count change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [allMessages.length]);

  const handleSend = async () => {
    const trimmed = message.trim();
    if (!trimmed || sendMessageMutation.isPending) return;

    // Optimistic local update
    const optimistic: LocalMessage = {
      id: `local-${Date.now()}`,
      content: trimmed,
      senderId: guestId,
      isTechnician: false,
      timestamp: Date.now(),
    };
    setLocalMessages((prev) => [...prev, optimistic]);
    setMessage("");
    if (textareaRef.current) textareaRef.current.style.height = "auto";

    try {
      await sendMessageMutation.mutateAsync({
        isTechnician: false,
        content: trimmed,
        threadId,
      });
    } catch {
      // Keep the optimistic message visible even if backend fails
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-full" data-ocid="chat.panel">
      {/* Technician info banner */}
      <div className="px-4 py-3 bg-green-50 border-b border-green-200 flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center shrink-0">
          <Bug className="h-5 w-5 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-sm text-green-900">
              {LOCAL_TECHNICIAN.name}
            </span>
            <Badge
              variant="secondary"
              className="text-xs bg-green-100 text-green-800 border-green-300"
            >
              {LOCAL_TECHNICIAN.area}
            </Badge>
          </div>
          <div className="flex items-center gap-1 mt-0.5">
            <Phone className="h-3 w-3 text-green-700" />
            <a
              href={`tel:${LOCAL_TECHNICIAN.phone.replace(/-/g, "")}`}
              className="text-xs text-green-700 hover:underline"
            >
              {LOCAL_TECHNICIAN.phone}
            </a>
            <span className="text-xs text-green-600 ml-2">
              · No login required
            </span>
          </div>
        </div>
        <span
          className="h-3 w-3 rounded-full bg-green-500 animate-pulse shrink-0"
          aria-label="Online"
        />
      </div>

      {/* Messages */}
      <div
        className="flex-1 overflow-y-auto p-4 space-y-3"
        data-ocid="chat.list"
      >
        {allMessages.length === 0 ? (
          <div
            className="flex flex-col items-center justify-center h-full text-center text-muted-foreground gap-2"
            data-ocid="chat.empty_state"
          >
            <Bug className="h-10 w-10 opacity-30" />
            <p className="font-medium">Start a conversation</p>
            <p className="text-sm">
              Ask the Community Health pest technician for advice about bed bugs
              or other pests.
            </p>
          </div>
        ) : (
          allMessages.map((msg) => {
            const isMe =
              !msg.isTechnician &&
              (msg.senderId === guestId || msg.senderId.startsWith("guest-"));
            return (
              <div
                key={msg.id}
                className={cn(
                  "flex flex-col",
                  isMe ? "items-end" : "items-start",
                )}
              >
                {!isMe && (
                  <span className="text-xs font-semibold text-green-700 mb-1 px-1">
                    Technician · {LOCAL_TECHNICIAN.area}
                  </span>
                )}
                <div
                  className={cn(
                    "max-w-[78%] rounded-2xl px-4 py-2 text-sm whitespace-pre-wrap break-words",
                    isMe
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-green-50 text-green-950 border border-green-200 rounded-bl-sm",
                  )}
                >
                  {msg.content}
                </div>
                <span className="text-xs text-muted-foreground mt-0.5 px-1">
                  {format(new Date(msg.timestamp), "h:mm a")}
                </span>
              </div>
            );
          })
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="border-t p-3 flex gap-2 items-end">
        <Textarea
          ref={textareaRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask the technician a question… (Enter to send)"
          className="min-h-[52px] max-h-[120px] resize-none text-sm"
          disabled={sendMessageMutation.isPending}
          data-ocid="chat.textarea"
        />
        <Button
          onClick={handleSend}
          disabled={!message.trim() || sendMessageMutation.isPending}
          size="icon"
          className="h-[52px] w-[52px] shrink-0"
          data-ocid="chat.submit_button"
        >
          {sendMessageMutation.isPending ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <Send className="h-5 w-5" />
          )}
        </Button>
      </div>
    </div>
  );
}
