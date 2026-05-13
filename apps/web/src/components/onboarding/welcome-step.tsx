"use client";

import React from "react";
import { useOnboardingStore } from "@/store/onboarding-store";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function WelcomeStep() {
  const { setStep } = useOnboardingStore();

  return (
    <div className="flex flex-col items-center text-center space-y-6">
      <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12 mb-4">
        <span className="text-white text-4xl font-bold -rotate-12">O</span>
      </div>
      <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
        Welcome to Ogle.ng
      </h1>
      <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-md">
        Let's get your account set up. This will only take a few minutes and will help us personalize your experience.
      </p>
      <div className="pt-6">
        <Button 
          size="lg" 
          onClick={() => setStep("role-selection")}
          className="rounded-full px-8 py-6 text-lg font-semibold group"
        >
          Get Started
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
}
