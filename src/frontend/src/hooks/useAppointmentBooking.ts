import { useState } from "react";

export type AppointmentStep = "date" | "time" | "address" | "confirm";

const STEPS: AppointmentStep[] = ["date", "time", "address", "confirm"];

export interface AppointmentBookingState {
  currentStep: AppointmentStep;
  currentStepIndex: number;
  selectedDate: Date | null;
  selectedTime: string | null;
  homeAddress: string;
}

export interface AppointmentBookingActions {
  setSelectedDate: (date: Date | null) => void;
  setSelectedTime: (time: string | null) => void;
  setHomeAddress: (address: string) => void;
  goNext: () => void;
  goBack: () => void;
  canGoNext: () => boolean;
  reset: () => void;
}

export function useAppointmentBooking(): AppointmentBookingState &
  AppointmentBookingActions {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [homeAddress, setHomeAddress] = useState("");

  const currentStep = STEPS[currentStepIndex];

  const canGoNext = (): boolean => {
    switch (currentStep) {
      case "date":
        return selectedDate !== null;
      case "time":
        return selectedTime !== null;
      case "address":
        return homeAddress.trim().length > 0;
      case "confirm":
        return true;
      default:
        return false;
    }
  };

  const goNext = () => {
    if (currentStepIndex < STEPS.length - 1) {
      setCurrentStepIndex((i) => i + 1);
    }
  };

  const goBack = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((i) => i - 1);
    }
  };

  const reset = () => {
    setCurrentStepIndex(0);
    setSelectedDate(null);
    setSelectedTime(null);
    setHomeAddress("");
  };

  return {
    currentStep,
    currentStepIndex,
    selectedDate,
    selectedTime,
    homeAddress,
    setSelectedDate,
    setSelectedTime,
    setHomeAddress,
    goNext,
    goBack,
    canGoNext,
    reset,
  };
}
