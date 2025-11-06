import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import DemoShowcase from './components/DemoShowcase';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-emerald-900">
      {/* Simple top nav */}
      <header className="sticky top-0 z-20 w-full border-b border-emerald-100/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#4CAF50] text-white font-bold">VP</span>
            <span className="font-semibold">Virtual Plant Care</span>
          </div>
          <nav className="hidden gap-6 text-sm text-emerald-800/90 sm:flex">
            <a href="#explore" className="hover:text-emerald-900">Features</a>
            <a href="#demo" className="hover:text-emerald-900">Demo</a>
            <a href="#login" className="hover:text-emerald-900">Login</a>
            <a href="#register" className="rounded-full bg-[#81C784] px-3 py-1.5 text-emerald-900 hover:bg-emerald-400/90">Register</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <section id="demo">
          <DemoShowcase />
        </section>
      </main>

      <Footer />
    </div>
  );
}
