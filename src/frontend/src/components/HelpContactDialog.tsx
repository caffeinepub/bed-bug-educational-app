import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, MapPin } from 'lucide-react';

interface HelpContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function HelpContactDialog({ open, onOpenChange }: HelpContactDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Help & Contact Information</DialogTitle>
          <DialogDescription>
            Need assistance with pest management? Contact our local community health services.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-sm text-muted-foreground mb-2">Service Provider</h3>
                  <p className="text-lg font-medium">Community Health</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground mb-1">Service Area</h3>
                    <p className="text-base">Area Code: 97761</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground mb-1">Phone Number</h3>
                    <a 
                      href="tel:5415532352" 
                      className="text-lg font-medium text-primary hover:underline"
                    >
                      541-553-2352
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}
