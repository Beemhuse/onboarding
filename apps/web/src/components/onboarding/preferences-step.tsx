"use client";

import React from "react";
import { useOnboardingStore } from "@/store/onboarding-store";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PreferencesStep() {
  const { data, updateData, setStep } = useOnboardingStore();

  const handleTheme = (theme: "light" | "dark" | "system") => {
    updateData({ theme });
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">Preferences</h2>
        <p className="text-neutral-500 dark:text-neutral-400 mt-2">
          Customize your experience
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold text-neutral-900 dark:text-white">Appearance</h3>
        <div className="grid grid-cols-3 gap-4">
          {[
            { id: "light", icon: Sun, label: "Light" },
            { id: "dark", icon: Moon, label: "Dark" },
            { id: "system", icon: Monitor, label: "System" },
          ].map((theme) => {
            const Icon = theme.icon;
            const isSelected = data.theme === theme.id;

            return (
              <button
                key={theme.id}
                onClick={() => handleTheme(theme.id as any)}
                className={cn(
                  "flex flex-col items-center justify-center p-4 border-2 rounded-2xl transition-all",
                  isSelected
                    ? "border-blue-600 bg-blue-50/50 dark:bg-blue-900/10"
                    : "border-neutral-200 dark:border-neutral-800 hover:border-blue-400"
                )}
              >
                <Icon className={cn("h-6 w-6 mb-2", isSelected ? "text-blue-600" : "text-neutral-500")} />
                <span className="text-sm font-medium">{theme.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={() => setStep("profile-photo")}>Back</Button>
        <Button onClick={() => setStep("workspace-setup")}>Continue</Button>
      </div>
    </div>
  );
}
