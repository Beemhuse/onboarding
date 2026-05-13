"use client";

import React from "react";
import { useOnboardingStore } from "@/store/onboarding-store";
import { Button } from "@/components/ui/button";
import { Building2, User, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const roles = [
  {
    id: "CUSTOMER",
    title: "Customer",
    description: "Looking for properties or services to rent or buy.",
    icon: User,
  },
  {
    id: "BUSINESS",
    title: "Business",
    description: "Offering properties or professional real estate services.",
    icon: Building2,
  },
  {
    id: "ADMIN",
    title: "Admin",
    description: "Managing the platform and overseeing operations.",
    icon: ShieldCheck,
  },
] as const;

export default function RoleSelectionStep() {
  const { data, updateData, setStep } = useOnboardingStore();

  const handleSelect = (role: typeof roles[number]["id"]) => {
    updateData({ role });
    setStep("personal-info");
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">Choose your role</h2>
        <p className="text-neutral-500 dark:text-neutral-400 mt-2">
          Select how you plan to use Ogle.ng
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {roles.map((role) => {
          const Icon = role.icon;
          const isSelected = data.role === role.id;

          return (
            <button
              key={role.id}
              onClick={() => handleSelect(role.id)}
              className={cn(
                "flex items-center p-6 text-left border-2 rounded-2xl transition-all duration-200 group",
                isSelected
                  ? "border-blue-600 bg-blue-50/50 dark:bg-blue-900/10"
                  : "border-neutral-200 dark:border-neutral-800 hover:border-blue-400"
              )}
            >
              <div className={cn(
                "p-3 rounded-xl mr-4",
                isSelected ? "bg-blue-600 text-white" : "bg-neutral-100 dark:bg-neutral-800 text-neutral-500 group-hover:text-blue-600"
              )}>
                <Icon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-neutral-900 dark:text-white">{role.title}</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">{role.description}</p>
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex justify-between pt-4">
        <Button variant="ghost" onClick={() => setStep("welcome")}>Back</Button>
      </div>
    </div>
  );
}
