import React from 'react';

export default function DemoShowcase() {
  return (
    <section className="bg-[#F5F5F5] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-emerald-900">Dashboard Preview</h3>
            <p className="mt-2 text-sm text-emerald-800/80">
              Monitor upcoming tasks, weather insights, and your plant collection at a glance.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="h-32 rounded-lg bg-gradient-to-br from-emerald-50 to-emerald-100" />
              <div className="h-32 rounded-lg bg-gradient-to-br from-emerald-50 to-emerald-100" />
              <div className="h-32 rounded-lg bg-gradient-to-br from-emerald-50 to-emerald-100" />
              <div className="h-32 rounded-lg bg-gradient-to-br from-emerald-50 to-emerald-100" />
            </div>
          </div>

          <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-emerald-900">Care Planner Preview</h3>
            <p className="mt-2 text-sm text-emerald-800/80">
              Plan watering, fertilizing, and pruning with a calm, color-coded timeline.
            </p>
            <div className="mt-4 h-48 w-full rounded-lg bg-gradient-to-r from-emerald-50 via-emerald-100 to-emerald-50" />
          </div>
        </div>
      </div>
    </section>
  );
}
