"use client";

import React from "react";
import { useOnboardingStore } from "@/store/onboarding-store";
import { Button } from "@/components/ui/button";
import { Globe, Settings2 } from "lucide-react";

export default function WorkspaceSetupStep() {
  const { setStep } = useOnboardingStore();

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">Workspace Setup</h2>
        <p className="text-neutral-500 dark:text-neutral-400 mt-2">
          Finalize your account settings
        </p>
      </div>

      <div className="p-8 border-2 border-dashed border-neutral-200 dark:border-neutral-800 rounded-3xl flex flex-col items-center justify-center text-center space-y-4">
        <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-full">
          <Settings2 className="h-10 w-10 text-blue-600" />
        </div>
        <h3 className="font-bold text-lg">Initial Configuration</h3>
        <p className="text-sm text-neutral-500 max-w-xs">
          We're optimizing your workspace for the best real estate experience.
        </p>
      </div>

      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={() => setStep("preferences")}>Back</Button>
        <Button onClick={() => setStep("completion")}>Finish Setup</Button>
      </div>
    </div>
  );
}
