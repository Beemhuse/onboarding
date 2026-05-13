"use client";

import React from "react";
import { useOnboardingStore } from "@/store/onboarding-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  businessName: z.string().min(2, "Business name is too short"),
  businessDescription: z.string().optional(),
  businessCategory: z.string().min(2, "Category is required"),
});

type FormData = z.infer<typeof schema>;

export default function BusinessInfoStep() {
  const { data, updateData, setStep } = useOnboardingStore();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      businessName: data.businessName || "",
      businessDescription: data.businessDescription || "",
      businessCategory: data.businessCategory || "",
    },
  });

  const onSubmit = (formData: FormData) => {
    updateData(formData);
    setStep("profile-photo");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">Business Details</h2>
        <p className="text-neutral-500 dark:text-neutral-400 mt-2">
          Tell us about your business or services
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="businessName">Business Name</Label>
        <Input id="businessName" {...register("businessName")} placeholder="Ogle Realty" />
        {errors.businessName && <p className="text-sm text-red-500">{errors.businessName.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="businessCategory">Category</Label>
        <Input id="businessCategory" {...register("businessCategory")} placeholder="Real Estate" />
        {errors.businessCategory && <p className="text-sm text-red-500">{errors.businessCategory.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="businessDescription">Description</Label>
        <Input id="businessDescription" {...register("businessDescription")} placeholder="A brief description..." />
      </div>

      <div className="flex justify-between pt-4">
        <Button variant="outline" type="button" onClick={() => setStep("personal-info")}>Back</Button>
        <Button type="submit">Continue</Button>
      </div>
    </form>
  );
}
