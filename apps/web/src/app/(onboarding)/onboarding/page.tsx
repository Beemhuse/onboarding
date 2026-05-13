"use client";

import React from "react";
import { useOnboardingStore, type OnboardingStep } from "@/store/onboarding-store";
import { AnimatePresence, motion } from "framer-motion";
import WelcomeStep from "@/components/onboarding/welcome-step";
import RoleSelectionStep from "@/components/onboarding/role-selection-step";
import PersonalInfoStep from "@/components/onboarding/personal-info-step";
import BusinessInfoStep from "@/components/onboarding/business-info-step";
import ProfilePhotoStep from "@/components/onboarding/profile-photo-step";
import PreferencesStep from "@/components/onboarding/preferences-step";
import WorkspaceSetupStep from "@/components/onboarding/workspace-setup-step";
import CompletionStep from "@/components/onboarding/completion-step";

export default function OnboardingPage() {
  const { step } = useOnboardingStore();

  const renderStep = () => {
    switch (step) {
      case "welcome":
        return <WelcomeStep key="welcome" />;
      case "role-selection":
        return <RoleSelectionStep key="role-selection" />;
      case "personal-info":
        return <PersonalInfoStep key="personal-info" />;
      case "business-info":
        return <BusinessInfoStep key="business-info" />;
      case "profile-photo":
        return <ProfilePhotoStep key="profile-photo" />;
      case "preferences":
        return <PreferencesStep key="preferences" />;
      case "workspace-setup":
        return <WorkspaceSetupStep key="workspace-setup" />;
      case "completion":
        return <CompletionStep key="completion" />;
      default:
        return <WelcomeStep key="welcome" />;
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div className="p-8 md:p-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-neutral-100 dark:bg-neutral-800">
        <motion.div
          className="h-full bg-blue-600"
          initial={{ width: "0%" }}
          animate={{ width: `${getStepProgress(step)}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
}

function getStepProgress(step: OnboardingStep): number {
  const steps: OnboardingStep[] = [
    "welcome",
    "role-selection",
    "personal-info",
    "business-info",
    "profile-photo",
    "preferences",
    "workspace-setup",
    "completion",
  ];
  const index = steps.indexOf(step);
  return ((index + 1) / steps.length) * 100;
}
