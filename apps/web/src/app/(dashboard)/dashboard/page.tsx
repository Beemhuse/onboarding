import React from "react";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <div className="p-8">
      <header className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-white">Dashboard</h1>
          <p className="text-neutral-500 mt-2">Welcome to your Ogle.ng overview</p>
        </div>
        <Button variant="outline" className="rounded-full">Logout</Button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: "Total Views", value: "1,284", change: "+12%" },
          { label: "Active Listings", value: "42", change: "+5%" },
          { label: "New Leads", value: "18", change: "+25%" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white dark:bg-neutral-900 p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-sm">
            <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider">{stat.label}</p>
            <div className="flex items-baseline gap-2 mt-4">
              <span className="text-4xl font-bold text-neutral-900 dark:text-white">{stat.value}</span>
              <span className="text-sm font-medium text-green-600">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-white dark:bg-neutral-900 p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-sm min-h-[400px] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-neutral-100 dark:bg-neutral-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">✨</span>
          </div>
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Start creating</h3>
          <p className="text-neutral-500 mt-2 max-w-sm">You haven't added any listings yet. Click the button below to get started.</p>
          <Button className="mt-8 rounded-full px-8">Add New Listing</Button>
        </div>
      </div>
    </div>
  );
}
