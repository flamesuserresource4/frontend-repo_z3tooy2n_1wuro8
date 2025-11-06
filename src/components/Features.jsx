import React from 'react';
import { Droplet, Sun, Calendar, Bell } from 'lucide-react';

const features = [
  {
    icon: Droplet,
    title: 'Smart Watering',
    desc: 'Personalized watering schedules based on season and local weather.'
  },
  { icon: Sun, title: 'Sunlight Insights', desc: 'Know when your plants need more or less light.' },
  {
    icon: Calendar,
    title: 'Care Planner',
    desc: 'Plan fertilizing, pruning, and repotting with a simple calendar.'
  },
  { icon: Bell, title: 'Gentle Reminders', desc: 'Never miss a task with timely notifications and emails.' }
];

export default function Features() {
  return (
    <section className="bg-white py-16" id="explore">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold text-emerald-900 sm:text-4xl">Key Features</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-emerald-800/80">
          Everything you need to help your plants thrive — beautifully organized and easy to use.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-xl border border-emerald-100 bg-emerald-50 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#81C784] text-emerald-900">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-emerald-900">{title}</h3>
              <p className="mt-1 text-sm text-emerald-800/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
