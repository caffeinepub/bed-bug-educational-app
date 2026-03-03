import { useMutation } from "@tanstack/react-query";
import { useActor } from "./useActor";

interface SubmitAppointmentParams {
  date: Date;
  time: string;
  address: string;
}

export function useAppointmentMutation() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async ({ date, time, address }: SubmitAppointmentParams) => {
      if (!actor) throw new Error("Not connected. Please try again.");

      // Parse the time string (e.g. "9:00 AM") and combine with date
      const [timePart, meridiem] = time.split(" ");
      const [hoursStr, minutesStr] = timePart.split(":");
      let hours = Number.parseInt(hoursStr, 10);
      const minutes = Number.parseInt(minutesStr, 10);

      if (meridiem === "PM" && hours !== 12) hours += 12;
      if (meridiem === "AM" && hours === 12) hours = 0;

      const appointmentDate = new Date(date);
      appointmentDate.setHours(hours, minutes, 0, 0);

      // Convert to nanoseconds (ICP uses nanoseconds for timestamps)
      const appointmentTimestamp =
        BigInt(appointmentDate.getTime()) * BigInt(1_000_000);

      await actor.submitAppointment(appointmentTimestamp, address);
    },
  });
}
