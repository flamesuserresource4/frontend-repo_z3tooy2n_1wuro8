import React from 'react';
import { Instagram, Youtube, Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-emerald-100 bg-emerald-50/60">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2 text-emerald-900">
            <Leaf className="h-5 w-5" />
            <span className="font-semibold">Virtual Plant Care Assistant</span>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-4 text-sm text-emerald-800/80">
            <a href="#about" className="hover:text-emerald-900">About</a>
            <a href="#faqs" className="hover:text-emerald-900">FAQs</a>
            <a href="#contact" className="hover:text-emerald-900">Contact</a>
            <a href="#privacy" className="hover:text-emerald-900">Privacy</a>
          </nav>
          <div className="flex items-center gap-3 text-emerald-800">
            <a aria-label="Instagram" href="#" className="rounded-md p-2 hover:bg-emerald-100"><Instagram className="h-5 w-5" /></a>
            <a aria-label="YouTube" href="#" className="rounded-md p-2 hover:bg-emerald-100"><Youtube className="h-5 w-5" /></a>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-emerald-700/70">
          © {new Date().getFullYear()} Grow smart. Care easy.
        </p>
      </div>
    </footer>
  );
}
