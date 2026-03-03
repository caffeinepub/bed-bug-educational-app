import { format } from "date-fns";
import { useEffect, useRef } from "react";
import type { ChatMessage } from "../backend";
import { cn } from "../lib/utils";

interface MessageListProps {
  messages: ChatMessage[];
  currentUserId: string;
}

export function MessageList({ messages, currentUserId }: MessageListProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: scroll on message count change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length]);

  if (messages.length === 0) {
    return (
      <div className="flex items-center justify-center h-full p-6 text-center">
        <div className="text-muted-foreground">
          <p className="text-lg font-medium mb-2">No messages yet</p>
          <p className="text-sm">
            Start the conversation by sending a message below
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4">
      {messages.map((message) => {
        const isCurrentUser = message.senderId.toString() === currentUserId;
        const timestamp = Number(message.timestamp) / 1_000_000; // Convert nanoseconds to milliseconds
        const formattedTime = format(new Date(timestamp), "MMM d, h:mm a");

        return (
          <div
            key={message.id.toString()}
            className={cn(
              "flex flex-col",
              isCurrentUser ? "items-end" : "items-start",
            )}
          >
            <div
              className={cn(
                "max-w-[75%] rounded-lg px-4 py-2",
                isCurrentUser
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground",
              )}
            >
              {!isCurrentUser && message.isTechnician && (
                <div className="text-xs font-semibold mb-1 opacity-80">
                  Technician
                </div>
              )}
              <p className="text-sm whitespace-pre-wrap break-words">
                {message.content}
              </p>
            </div>
            <span className="text-xs text-muted-foreground mt-1 px-1">
              {formattedTime}
            </span>
          </div>
        );
      })}
      <div ref={bottomRef} />
    </div>
  );
}
