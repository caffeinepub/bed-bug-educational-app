import { Share2, MapPin, HelpCircle, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ShareQrCodeDialog } from './ShareQrCodeDialog';
import { HelpContactDialog } from './HelpContactDialog';
import { useState } from 'react';

export function Header() {
  const [shareDialogOpen, setShareDialogOpen] = useState(false);
  const [helpDialogOpen, setHelpDialogOpen] = useState(false);

  const handleLocationFinderClick = () => {
    window.location.hash = '#location-finder';
  };

  const handleHomeClick = () => {
    window.location.hash = '#home';
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="/assets/generated/bed-bug-icon.dim_128x128.png" 
            alt="Pest Control" 
            className="h-8 w-8"
          />
          <h1 className="text-xl font-bold tracking-tight">Pest Control Guide</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleHomeClick}
            className="gap-2"
            aria-label="Return to Home"
          >
            <Home className="h-4 w-4" />
            <span className="hidden sm:inline">Home</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleLocationFinderClick}
            className="gap-2"
          >
            <MapPin className="h-4 w-4" />
            <span className="hidden sm:inline">Location Finder</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setHelpDialogOpen(true)}
            className="gap-2"
            aria-label="Help and Contact Information"
          >
            <HelpCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Help</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShareDialogOpen(true)}
            className="gap-2"
          >
            <Share2 className="h-4 w-4" />
            <span className="hidden sm:inline">Share</span>
          </Button>
        </div>
      </div>
      <ShareQrCodeDialog open={shareDialogOpen} onOpenChange={setShareDialogOpen} />
      <HelpContactDialog open={helpDialogOpen} onOpenChange={setHelpDialogOpen} />
    </header>
  );
}
