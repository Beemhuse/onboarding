import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type OnboardingStep =
  | "welcome"
  | "role-selection"
  | "personal-info"
  | "business-info"
  | "profile-photo"
  | "preferences"
  | "workspace-setup"
  | "completion";

interface OnboardingData {
  role?: "ADMIN" | "BUSINESS" | "CUSTOMER";
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  businessName?: string;
  businessDescription?: string;
  businessCategory?: string;
  avatarUrl?: string;
  theme?: "light" | "dark" | "system";
  notifications?: boolean;
}

interface OnboardingState {
  step: OnboardingStep;
  data: OnboardingData;
  setStep: (step: OnboardingStep) => void;
  updateData: (data: Partial<OnboardingData>) => void;
  reset: () => void;
}

export const useOnboardingStore = create<OnboardingState>()(
  persist(
    (set) => ({
      step: "welcome",
      data: {},
      setStep: (step) => set({ step }),
      updateData: (newData) =>
        set((state) => ({ data: { ...state.data, ...newData } })),
      reset: () => set({ step: "welcome", data: {} }),
    }),
    {
      name: "ogle-onboarding-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
