"use client";

import React, { useState, useEffect } from "react";
import { Phone, Mail, Menu, X, ArrowRight, ShieldCheck, Sparkles, Building2 } from "lucide-react";

interface NavbarProps {
  onOpenConsultation: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top micro banner */}
      <div className="bg-[#0F172A] text-xs text-slate-300 py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[11px] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              ISO 9001 Certified HR Partner
            </span>
            <span className="hidden md:inline text-slate-400">
              Transforming Talent Acquisition &amp; Statutory Compliance Across India
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="tel:+919717160136"
              className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>+91 9717160136</span>
            </a>
            <a
              href="mailto:ritika@srvheadhunt.com"
              className="hidden lg:flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>ritika@srvheadhunt.com</span>
            </a>
            <div className="hidden sm:flex items-center gap-1 text-[11px] text-slate-400">
              <Building2 className="w-3 h-3 text-cyan-400" />
              <span>Greater Noida (NCR), India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAF7F2]/95 backdrop-blur-xl border-b border-stone-200/90 shadow-md py-3"
            : "bg-[#FAF7F2]/80 backdrop-blur-md border-b border-stone-200/60 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-slate-900 shadow-md shadow-blue-500/15 border border-white/40 group-hover:scale-105 transition-transform">
              <span className="font-extrabold text-white text-lg tracking-wider">SRV</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 flex items-center gap-1.5">
                SRV HEADHUNT
                <span className="text-[10px] uppercase font-bold px-1.5 py-0.2 rounded bg-blue-50 text-blue-700 border border-blue-200">
                  PVT LTD
                </span>
              </span>
              <span className="text-[10px] tracking-widest text-slate-500 uppercase font-semibold">
                Workforce &amp; HR Excellence
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700">
            <a href="#services" className="hover:text-blue-600 transition-colors">
              Services
            </a>
            <a href="#why-us" className="hover:text-blue-600 transition-colors">
              Why SRV
            </a>
            <a href="#jobs" className="hover:text-blue-600 transition-colors flex items-center gap-1.5">
              <span>Careers</span>
              <span className="px-1.5 py-0.2 text-[10px] font-bold bg-emerald-100 text-emerald-800 rounded-full border border-emerald-200">
                Hiring Now
              </span>
            </a>
            <a href="#calculator" className="hover:text-blue-600 transition-colors">
              ROI Calculator
            </a>
            <a href="#leadership" className="hover:text-blue-600 transition-colors">
              Leadership
            </a>
            <a href="#testimonials" className="hover:text-blue-600 transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">
              Contact
            </a>
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="relative inline-flex items-center justify-center px-5 py-2.5 overflow-hidden text-xs font-bold text-white rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md shadow-blue-600/20 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-200" />
              <span>Hire Top Talent</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-stone-100 border border-stone-200 text-slate-700 hover:text-slate-900"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF7F2] border-b border-stone-200 px-6 py-6 mt-3 space-y-4 shadow-xl">
            <div className="flex flex-col space-y-3 text-base font-semibold text-slate-800">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-blue-600 py-1"
              >
                Services
              </a>
              <a
                href="#why-us"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-blue-600 py-1"
              >
                Why SRV
              </a>
              <a
                href="#jobs"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-blue-600 py-1 flex items-center justify-between"
              >
                <span>Careers &amp; Openings</span>
                <span className="px-2 py-0.5 text-xs bg-emerald-100 text-emerald-800 rounded-full font-bold">
                  12 Active Roles
                </span>
              </a>
              <a
                href="#calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-blue-600 py-1"
              >
                ROI Calculator
              </a>
              <a
                href="#leadership"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-blue-600 py-1"
              >
                Leadership
              </a>
              <a
                href="#testimonials"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-blue-600 py-1"
              >
                Client Reviews
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-blue-600 py-1"
              >
                Contact
              </a>
            </div>

            <div className="pt-4 border-t border-stone-200 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md"
              >
                <Sparkles className="w-4 h-4" />
                Schedule Consultation
              </button>
              <a
                href="tel:+919717160136"
                className="w-full py-2.5 rounded-xl bg-white border border-stone-200 text-slate-800 font-semibold text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                Call: +91 9717160136
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
