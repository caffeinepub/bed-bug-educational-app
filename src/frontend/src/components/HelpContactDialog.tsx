import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CalendarCheck, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { AppointmentSchedulerDialog } from "./AppointmentSchedulerDialog";

interface HelpContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** 'help' shows generic contact info; 'appointment' emphasizes scheduling */
  mode?: "help" | "appointment";
}

export function HelpContactDialog({
  open,
  onOpenChange,
  mode = "help",
}: HelpContactDialogProps) {
  const isAppointment = mode === "appointment";
  const [schedulerOpen, setSchedulerOpen] = useState(false);

  const handleOpenScheduler = () => {
    onOpenChange(false);
    setTimeout(() => setSchedulerOpen(true), 150);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center gap-2">
              {isAppointment && (
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/40">
                  <CalendarCheck className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                </div>
              )}
              <DialogTitle>
                {isAppointment
                  ? "Book a Community Health Appointment"
                  : "Help & Contact Information"}
              </DialogTitle>
            </div>
            <DialogDescription>
              {isAppointment
                ? "Call our Community Health team or use our online scheduler to book a pest management appointment."
                : "Need assistance with pest management? Contact our local community health services."}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-1 text-sm font-semibold text-muted-foreground">
                      Service Provider
                    </h3>
                    <p className="text-lg font-medium">Community Health</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-muted-foreground" />
                    <div>
                      <h3 className="mb-1 text-sm font-semibold text-muted-foreground">
                        Service Area
                      </h3>
                      <p className="text-base">Area Code: 97761</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-muted-foreground" />
                    <div>
                      <h3 className="mb-1 text-sm font-semibold text-muted-foreground">
                        Phone Number
                      </h3>
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

            {isAppointment && (
              <div className="flex flex-col gap-2">
                <Button
                  className="w-full gap-2 bg-orange-600 hover:bg-orange-700 text-white dark:bg-orange-600 dark:hover:bg-orange-700"
                  onClick={handleOpenScheduler}
                >
                  <CalendarCheck className="h-4 w-4" />
                  Schedule Online
                </Button>
                <a href="tel:5415532352" className="block">
                  <Button variant="outline" className="w-full gap-2">
                    <Phone className="h-4 w-4" />
                    Call to Schedule Appointment
                  </Button>
                </a>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <AppointmentSchedulerDialog
        open={schedulerOpen}
        onOpenChange={setSchedulerOpen}
      />
    </>
  );
}
