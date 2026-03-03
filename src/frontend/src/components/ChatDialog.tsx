import { ChatInterface } from "./ChatInterface";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

interface ChatDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ChatDialog({ open, onOpenChange }: ChatDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl h-[600px] flex flex-col p-0">
        <DialogHeader className="px-6 py-4 border-b">
          <DialogTitle className="flex items-center gap-2 text-base">
            Chat with Local Pest Technician (97761)
            <span
              className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold text-white bg-green-500 animate-pulse-green select-none"
              aria-label="Live"
            >
              Live · No Login
            </span>
          </DialogTitle>
        </DialogHeader>
        <div className="flex-1 overflow-hidden">
          <ChatInterface />
        </div>
      </DialogContent>
    </Dialog>
  );
}
