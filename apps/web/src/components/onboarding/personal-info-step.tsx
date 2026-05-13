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
  firstName: z.string().min(2, "First name is too short"),
  lastName: z.string().min(2, "Last name is too short"),
  phoneNumber: z.string().min(10, "Invalid phone number"),
});

type FormData = z.infer<typeof schema>;

export default function PersonalInfoStep() {
  const { data, updateData, setStep } = useOnboardingStore();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: data.firstName || "",
      lastName: data.lastName || "",
      phoneNumber: data.phoneNumber || "",
    },
  });

  const onSubmit = (formData: FormData) => {
    updateData(formData);
    if (data.role === "BUSINESS") {
      setStep("business-info");
    } else {
      setStep("profile-photo");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">Personal Information</h2>
        <p className="text-neutral-500 dark:text-neutral-400 mt-2">
          Tell us a bit about yourself
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" {...register("firstName")} placeholder="John" />
          {errors.firstName && <p className="text-sm text-red-500">{errors.firstName.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" {...register("lastName")} placeholder="Doe" />
          {errors.lastName && <p className="text-sm text-red-500">{errors.lastName.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phoneNumber">Phone Number</Label>
        <Input id="phoneNumber" {...register("phoneNumber")} placeholder="+234..." />
        {errors.phoneNumber && <p className="text-sm text-red-500">{errors.phoneNumber.message}</p>}
      </div>

      <div className="flex justify-between pt-4">
        <Button variant="outline" type="button" onClick={() => setStep("role-selection")}>Back</Button>
        <Button type="submit">Continue</Button>
      </div>
    </form>
  );
}
