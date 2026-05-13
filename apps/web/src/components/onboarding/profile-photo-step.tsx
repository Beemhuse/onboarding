"use client";

import React from "react";
import { useOnboardingStore } from "@/store/onboarding-store";
import { Button } from "@/components/ui/button";
import { Camera, Upload } from "lucide-react";

export default function ProfilePhotoStep() {
  const { data, updateData, setStep } = useOnboardingStore();

  const handleUpload = () => {
    // In a real app, this would use UploadThing
    updateData({ avatarUrl: "https://github.com/shadcn.png" });
    setStep("preferences");
  };

  return (
    <div className="space-y-8 text-center">
      <div>
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">Profile Photo</h2>
        <p className="text-neutral-500 dark:text-neutral-400 mt-2">
          Add a face to your account
        </p>
      </div>

      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="relative w-40 h-40 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center overflow-hidden border-4 border-white dark:border-neutral-900 shadow-xl">
          {data.avatarUrl ? (
            <img src={data.avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
          ) : (
            <Camera className="h-16 w-16 text-neutral-400" />
          )}
        </div>
        
        <div className="flex gap-4">
          <Button variant="outline" className="rounded-full" onClick={handleUpload}>
            <Upload className="mr-2 h-4 w-4" />
            Upload Photo
          </Button>
          <Button variant="ghost" onClick={() => setStep("preferences")}>
            Skip for now
          </Button>
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={() => {
          if (data.role === "BUSINESS") {
            setStep("business-info");
          } else {
            setStep("personal-info");
          }
        }}>Back</Button>
      </div>
    </div>
  );
}
