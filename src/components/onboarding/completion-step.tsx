"use client";

import React, { useEffect } from "react";
import { useOnboardingStore } from "@/store/onboarding-store";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import confetti from "canvas-confetti";

export default function CompletionStep() {
  const { data } = useOnboardingStore();
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#2563eb", "#3b82f6", "#60a5fa"]
    });
  }, []);

  const handleFinish = async () => {
    setLoading(true);
    // Simulate API call to save onboarding state
    await new Promise(resolve => setTimeout(resolve, 2000));
    router.push("/dashboard");
  };

  return (
    <div className="text-center space-y-8 py-4">
      <div className="flex justify-center">
        <div className="w-24 h-24 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
          <CheckCircle2 className="h-12 w-12 text-green-600" />
        </div>
      </div>

      <div>
        <h2 className="text-4xl font-bold text-neutral-900 dark:text-white">All set!</h2>
        <p className="text-neutral-500 dark:text-neutral-400 mt-4 text-lg">
          Your account is ready. Welcome to the Ogle.ng community, {data.firstName}.
        </p>
      </div>

      <div className="pt-8">
        <Button 
          size="lg" 
          onClick={handleFinish} 
          disabled={loading}
          className="w-full max-w-sm rounded-full py-6 text-lg font-bold shadow-xl shadow-blue-500/20"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Preparing your dashboard...
            </>
          ) : (
            "Go to Dashboard"
          )}
        </Button>
      </div>
    </div>
  );
}
