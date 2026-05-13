"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Globe } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  const handleGoogleSignIn = async () => {
    await signIn.social({
      provider: "google",
      callbackURL: "/onboarding",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-950 p-4">
      <div className="w-full max-w-md space-y-8 bg-white dark:bg-neutral-900 p-10 rounded-3xl shadow-2xl border border-neutral-200 dark:border-neutral-800">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl shadow-lg transform rotate-6 mb-6">
            <span className="text-white text-3xl font-bold -rotate-6">O</span>
          </div>
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">Welcome back</h1>
          <p className="text-neutral-500 dark:text-neutral-400 mt-2">Log in to your Ogle.ng account</p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="name@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
          <Button className="w-full py-6 font-bold text-lg" onClick={() => router.push("/onboarding")}>
            Sign In
          </Button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-neutral-200 dark:border-neutral-800" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white dark:bg-neutral-900 px-2 text-neutral-500">Or continue with</span>
          </div>
        </div>

        <Button variant="outline" className="w-full py-6" onClick={handleGoogleSignIn}>
          <Globe className="mr-2 h-5 w-5" />
          Google
        </Button>

        <p className="text-center text-sm text-neutral-500">
          Don't have an account?{" "}
          <a href="#" className="text-blue-600 font-semibold hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
}
