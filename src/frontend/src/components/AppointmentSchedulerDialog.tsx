import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAppointmentBooking } from "@/hooks/useAppointmentBooking";
import { useAppointmentMutation } from "@/hooks/useAppointmentMutation";
import {
  AlertCircle,
  CalendarCheck,
  CalendarClock,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Loader2,
  MapPin,
  Phone,
  UserCheck,
} from "lucide-react";
import { useEffect } from "react";

const TIME_SLOTS = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

const STEP_LABELS = ["Select Date", "Choose Time", "Your Address", "Confirm"];

interface AppointmentSchedulerDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function StepIndicator({ currentIndex }: { currentIndex: number }) {
  return (
    <div className="flex items-center justify-center gap-1 mb-6">
      {STEP_LABELS.map((label, i) => (
        <div key={label} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold transition-colors ${
                i < currentIndex
                  ? "bg-green-500 text-white"
                  : i === currentIndex
                    ? "bg-orange-500 text-white"
                    : "bg-muted text-muted-foreground"
              }`}
            >
              {i < currentIndex ? <CheckCircle2 className="h-4 w-4" /> : i + 1}
            </div>
            <span
              className={`mt-1 hidden text-[10px] sm:block ${
                i === currentIndex
                  ? "text-orange-600 dark:text-orange-400 font-medium"
                  : "text-muted-foreground"
              }`}
            >
              {label}
            </span>
          </div>
          {i < STEP_LABELS.length - 1 && (
            <div
              className={`mx-1 h-0.5 w-6 sm:w-10 transition-colors ${
                i < currentIndex ? "bg-green-400" : "bg-muted"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/** Returns midnight of today + N days */
function addDays(base: Date, days: number): Date {
  const d = new Date(base);
  d.setDate(d.getDate() + days);
  d.setHours(0, 0, 0, 0);
  return d;
}

export function AppointmentSchedulerDialog({
  open,
  onOpenChange,
}: AppointmentSchedulerDialogProps) {
  const booking = useAppointmentBooking();
  const mutation = useAppointmentMutation();

  // Earliest selectable date: 14 days (2 weeks) from today — no upper limit
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const minDate = addDays(today, 14); // earliest: 2 weeks out

  // Reset when dialog closes
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentionally reset only on open change
  useEffect(() => {
    if (!open) {
      booking.reset();
      mutation.reset();
    }
  }, [open]);

  const handleConfirm = () => {
    if (!booking.selectedDate || !booking.selectedTime || !booking.homeAddress)
      return;
    mutation.mutate({
      date: booking.selectedDate,
      time: booking.selectedTime,
      address: booking.homeAddress,
    });
  };

  const handleClose = () => {
    onOpenChange(false);
  };

  // Success screen
  if (mutation.isSuccess) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center gap-4 py-6 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/40">
              <CheckCircle2 className="h-9 w-9 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-green-700 dark:text-green-400">
                Appointment Request Submitted!
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Your request has been received.
              </p>
            </div>

            {/* Pending confirmation status badge */}
            <div className="flex items-center gap-2 rounded-full border border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/40 px-4 py-2">
              <UserCheck className="h-4 w-4 text-amber-600 dark:text-amber-400 flex-shrink-0" />
              <span className="text-sm font-semibold text-amber-700 dark:text-amber-300">
                Awaiting Technician Confirmation
              </span>
            </div>

            {/* Confirmation note */}
            <Alert className="w-full border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 text-left">
              <CalendarClock className="h-4 w-4 text-amber-600 dark:text-amber-400" />
              <AlertTitle className="text-amber-800 dark:text-amber-200 text-sm font-semibold">
                Pending Technician Confirmation
              </AlertTitle>
              <AlertDescription className="text-amber-700 dark:text-amber-300 text-xs mt-1">
                Your appointment must be confirmed by the pest technician. You
                will be contacted once your appointment is confirmed.
              </AlertDescription>
            </Alert>

            <div className="w-full rounded-lg border bg-muted/40 p-4 text-left space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <CalendarCheck className="h-4 w-4 text-orange-500 flex-shrink-0" />
                <span className="font-medium">Date:</span>
                <span className="text-muted-foreground">
                  {booking.selectedDate
                    ? formatDate(booking.selectedDate)
                    : "—"}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-orange-500 flex-shrink-0" />
                <span className="font-medium">Time:</span>
                <span className="text-muted-foreground">
                  {booking.selectedTime}
                </span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="font-medium">Address:</span>
                <span className="text-muted-foreground">
                  {booking.homeAddress}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm pt-1 border-t">
                <Badge
                  variant="outline"
                  className="border-amber-400 text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/30 text-xs"
                >
                  Pending Confirmation
                </Badge>
              </div>
            </div>

            <div className="w-full rounded-lg border border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950/30 p-4">
              <p className="text-sm font-medium text-orange-800 dark:text-orange-200 mb-2">
                Questions? Call Community Health:
              </p>
              <a
                href="tel:5415532352"
                className="flex items-center justify-center gap-2 text-lg font-bold text-orange-600 dark:text-orange-400 hover:underline"
              >
                <Phone className="h-5 w-5" />
                541-553-2352
              </a>
            </div>

            <Button className="w-full" onClick={handleClose}>
              Done
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/40">
              <CalendarCheck className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            </div>
            <DialogTitle>Schedule an Appointment</DialogTitle>
          </div>
          <DialogDescription>
            Book a Community Health pest management visit to your home.
          </DialogDescription>
        </DialogHeader>

        <StepIndicator currentIndex={booking.currentStepIndex} />

        {/* Step 1: Date */}
        {booking.currentStep === "date" && (
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 self-start">
              <CalendarCheck className="h-5 w-5 text-orange-500" />
              <h3 className="font-semibold text-base">Select a Date</h3>
            </div>

            <p className="text-xs text-muted-foreground self-start">
              Available Monday–Friday, at least 2 weeks from today. Confirmed by
              the pest technician.
            </p>

            <Calendar
              mode="single"
              selected={booking.selectedDate ?? undefined}
              onSelect={(d) => booking.setSelectedDate(d ?? null)}
              disabled={(date) => {
                const d = new Date(date);
                d.setHours(0, 0, 0, 0);
                const day = date.getDay();
                // Disable weekends (0 = Sunday, 6 = Saturday) and dates fewer than 14 days out
                // All Monday–Friday dates 14+ days from today are always open
                return d < minDate || day === 0 || day === 6;
              }}
              className="rounded-lg border shadow-sm"
            />
            {booking.selectedDate && (
              <p className="text-sm text-muted-foreground text-center">
                Selected:{" "}
                <span className="font-medium text-foreground">
                  {formatDate(booking.selectedDate)}
                </span>
              </p>
            )}
          </div>
        )}

        {/* Step 2: Time */}
        {booking.currentStep === "time" && (
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-orange-500" />
              <h3 className="font-semibold text-base">Choose a Time Slot</h3>
            </div>
            {booking.selectedDate && (
              <p className="text-sm text-muted-foreground">
                For{" "}
                <span className="font-medium text-foreground">
                  {formatDate(booking.selectedDate)}
                </span>
              </p>
            )}
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {TIME_SLOTS.map((slot) => (
                <button
                  type="button"
                  key={slot}
                  onClick={() => booking.setSelectedTime(slot)}
                  className={`rounded-lg border px-3 py-3 text-sm font-medium transition-all hover:shadow-sm ${
                    booking.selectedTime === slot
                      ? "border-orange-500 bg-orange-50 dark:bg-orange-950/40 text-orange-700 dark:text-orange-300 shadow-sm"
                      : "border-border bg-background hover:border-orange-300 hover:bg-orange-50/50 dark:hover:bg-orange-950/20"
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Address */}
        {booking.currentStep === "address" && (
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-orange-500" />
              <h3 className="font-semibold text-base">Your Home Address</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Enter the address where you'd like the pest management visit.
            </p>
            <div className="space-y-2">
              <Label htmlFor="home-address">Home Address</Label>
              <Input
                id="home-address"
                placeholder="123 Main St, Warm Springs, OR 97761"
                value={booking.homeAddress}
                onChange={(e) => booking.setHomeAddress(e.target.value)}
                className="text-base"
                autoFocus
              />
            </div>
            <p className="text-xs text-muted-foreground">
              Service area: 97761 — Community Health serves the Warm Springs
              area.
            </p>
          </div>
        )}

        {/* Step 4: Confirm */}
        {booking.currentStep === "confirm" && (
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-orange-500" />
              <h3 className="font-semibold text-base">
                Confirm Your Appointment
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Please review your appointment details before submitting.
            </p>

            {/* Technician confirmation notice on confirm step */}
            <Alert className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30">
              <UserCheck className="h-4 w-4 text-amber-600 dark:text-amber-400" />
              <AlertTitle className="text-amber-800 dark:text-amber-200 text-sm font-semibold">
                Subject to Technician Confirmation
              </AlertTitle>
              <AlertDescription className="text-amber-700 dark:text-amber-300 text-xs mt-1">
                Your appointment must be confirmed by the pest technician. You
                will be contacted once confirmed.
              </AlertDescription>
            </Alert>

            <div className="rounded-lg border bg-muted/40 p-4 space-y-3">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-orange-100 dark:bg-orange-900/40">
                  <CalendarCheck className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    Date
                  </p>
                  <p className="text-sm font-medium">
                    {booking.selectedDate
                      ? formatDate(booking.selectedDate)
                      : "—"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-orange-100 dark:bg-orange-900/40">
                  <Clock className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    Time
                  </p>
                  <p className="text-sm font-medium">{booking.selectedTime}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-orange-100 dark:bg-orange-900/40">
                  <MapPin className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    Home Address
                  </p>
                  <p className="text-sm font-medium">{booking.homeAddress}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1 border-t">
                <Badge
                  variant="outline"
                  className="border-amber-400 text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/30 text-xs"
                >
                  Pending Technician Confirmation
                </Badge>
              </div>
            </div>

            {/* Error state */}
            {mutation.isError && (
              <div className="flex items-start gap-3 rounded-lg border border-destructive/40 bg-destructive/10 p-3">
                <AlertCircle className="h-5 w-5 flex-shrink-0 text-destructive mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-destructive">
                    Submission failed
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Please call us directly at{" "}
                    <a
                      href="tel:5415532352"
                      className="font-semibold text-orange-600 hover:underline"
                    >
                      541-553-2352
                    </a>{" "}
                    to schedule your appointment.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Navigation footer */}
        <div className="flex items-center justify-between pt-4 border-t mt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={
              booking.currentStepIndex === 0 ? handleClose : booking.goBack
            }
            disabled={mutation.isPending}
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            {booking.currentStepIndex === 0 ? "Cancel" : "Back"}
          </Button>

          {booking.currentStep !== "confirm" ? (
            <Button
              size="sm"
              onClick={booking.goNext}
              disabled={!booking.canGoNext()}
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          ) : (
            <Button
              size="sm"
              onClick={handleConfirm}
              disabled={
                mutation.isPending ||
                !booking.selectedDate ||
                !booking.selectedTime ||
                !booking.homeAddress
              }
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              {mutation.isPending ? (
                <>
                  <Loader2 className="h-4 w-4 mr-1 animate-spin" />
                  Submitting…
                </>
              ) : (
                <>
                  <CheckCircle2 className="h-4 w-4 mr-1" />
                  Submit Request
                </>
              )}
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
