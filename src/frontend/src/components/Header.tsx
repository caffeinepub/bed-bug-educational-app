import { useState } from 'react';
import { Bug, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ShareQrCodeDialog } from './ShareQrCodeDialog';

export function Header() {
  const [shareDialogOpen, setShareDialogOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Bug className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">Pest ID & Guide</h1>
              <p className="text-xs text-muted-foreground">Identify, Learn, Prevent</p>
            </div>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setShareDialogOpen(true)}
            className="gap-2"
            aria-label="Share app via QR code"
          >
            <Share2 className="h-4 w-4" />
            <span className="hidden sm:inline">Share</span>
          </Button>
        </div>
      </header>

      <ShareQrCodeDialog open={shareDialogOpen} onOpenChange={setShareDialogOpen} />
    </>
  );
}
