import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { AlertTriangle } from "lucide-react";
import { useEffect, useRef } from "react";

interface HeatTreatmentChecklistReminderDialogProps {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export function HeatTreatmentChecklistReminderDialog({
  open,
  onConfirm,
  onCancel,
}: HeatTreatmentChecklistReminderDialogProps) {
  const confirmButtonRef = useRef<HTMLButtonElement>(null);

  // Focus the primary action when dialog opens
  useEffect(() => {
    if (open && confirmButtonRef.current) {
      // Small delay to ensure dialog is fully rendered
      const timer = setTimeout(() => {
        confirmButtonRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <AlertDialog open={open} onOpenChange={(isOpen) => !isOpen && onCancel()}>
      <AlertDialogContent
        aria-labelledby="reminder-title"
        aria-describedby="reminder-description"
        className="max-w-lg max-h-[85vh] overflow-y-auto"
      >
        <AlertDialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10">
              <AlertTriangle className="h-5 w-5 text-destructive" />
            </div>
            <AlertDialogTitle id="reminder-title" className="text-left">
              Important Safety Reminder
            </AlertDialogTitle>
          </div>
          <AlertDialogDescription
            id="reminder-description"
            className="text-left space-y-3 text-sm"
          >
            <p>
              Before using this checklist, please ensure you have reviewed
              professional guidance for heat treatment preparation. This
              checklist is provided as a general reference and should be used in
              conjunction with specific instructions from your pest control
              professional.
            </p>
            <p>
              <strong className="font-semibold text-foreground">
                Critical Safety Warning:
              </strong>{" "}
              You must remove all firearms, ammunition, and any explosive items
              from the home before heat treatment. High temperatures can cause
              ammunition and explosive materials to discharge or detonate,
              creating serious safety hazards.
            </p>
            <p>
              <strong className="font-semibold text-foreground">
                Do Not Discard Furniture:
              </strong>{" "}
              Bed bugs can hitchhike on furniture and belongings. Discarding
              infested items without proper treatment may spread the infestation
              to others. Heat treatment can effectively eliminate bed bugs from
              furniture and belongings when done correctly.
            </p>
            <p>
              <strong className="font-semibold text-foreground">
                Occupancy Restriction:
              </strong>{" "}
              Only the heat treatment technician is allowed in the home while it
              is being heat treated. All other occupants, including family
              members and pets, must vacate the premises during the entire
              treatment process.
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex-col sm:flex-row gap-2">
          <AlertDialogCancel onClick={onCancel} className="sm:mr-auto">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            ref={confirmButtonRef}
            onClick={onConfirm}
            className="bg-primary hover:bg-primary/90"
          >
            I Understand
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
