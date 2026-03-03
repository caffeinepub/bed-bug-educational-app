import { useState } from "react";
import { ChatDialog } from "./ChatDialog";

export function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Chat with a pest technician"
        className="fixed bottom-6 right-6 z-[9998] h-16 w-16 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/50 overflow-visible"
        style={{ background: "none", border: "none", padding: 0 }}
      >
        {/* Pulsing live indicator dot */}
        <span
          className="absolute top-0 right-0 h-4 w-4 rounded-full bg-green-500 border-2 border-white z-10 animate-pulse-green"
          aria-hidden="true"
        />
        {/* Bug + chat FAB image */}
        <img
          src="/assets/generated/chat-bug-fab.dim_128x128.png"
          alt=""
          className="h-16 w-16 rounded-full object-cover shadow-lg"
          draggable={false}
        />
      </button>
      <ChatDialog open={isOpen} onOpenChange={setIsOpen} />
    </>
  );
}
