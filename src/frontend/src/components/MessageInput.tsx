import { Loader2, Send } from "lucide-react";
import { type KeyboardEvent, useRef, useState } from "react";
import { toast } from "sonner";
import { useSendMessage } from "../hooks/useChatQueries";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

interface MessageInputProps {
  threadId: string;
  isTechnician: boolean;
}

export function MessageInput({ threadId, isTechnician }: MessageInputProps) {
  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const sendMessageMutation = useSendMessage();

  const handleSend = async () => {
    const trimmedMessage = message.trim();
    if (!trimmedMessage || sendMessageMutation.isPending) return;

    try {
      await sendMessageMutation.mutateAsync({
        isTechnician,
        content: trimmedMessage,
        threadId,
      });
      setMessage("");
      // Reset textarea height
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="p-4 flex gap-2">
      <Textarea
        ref={textareaRef}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type your message... (Shift+Enter for new line)"
        className="min-h-[60px] max-h-[120px] resize-none"
        disabled={sendMessageMutation.isPending}
      />
      <Button
        onClick={handleSend}
        disabled={!message.trim() || sendMessageMutation.isPending}
        size="icon"
        className="h-[60px] w-[60px] shrink-0"
      >
        {sendMessageMutation.isPending ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <Send className="h-5 w-5" />
        )}
      </Button>
    </div>
  );
}
