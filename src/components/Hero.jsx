import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-[#F5F5F5]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Tu-wEVxfDuICpwJI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient to improve text contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 py-16 text-center">
        <span className="rounded-full bg-emerald-100 px-4 py-1 text-sm font-medium text-emerald-700 shadow">
          Virtual Plant Care Assistant
        </span>
        <h1 className="mt-6 text-4xl font-extrabold leading-tight text-emerald-900 sm:text-5xl">
          Grow smart. Care easy.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-emerald-800/80 sm:text-lg">
          Track watering, sunlight, and fertilization schedules with weather‑based tips and a serene, plant‑themed experience.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#login"
            className="rounded-full bg-[#4CAF50] px-5 py-2.5 text-white shadow hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            Login
          </a>
          <a
            href="#register"
            className="rounded-full bg-[#81C784] px-5 py-2.5 text-emerald-900 shadow hover:bg-emerald-400/90 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            Register
          </a>
          <a
            href="#explore"
            className="rounded-full border border-emerald-300 bg-white px-5 py-2.5 text-emerald-900 shadow hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-300"
          >
            Explore Plants
          </a>
        </div>
      </div>
    </section>
  );
}
