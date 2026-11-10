"use client";

import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Building2,
  ShieldCheck,
  ArrowUp,
  Heart,
  Globe,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#03060f] text-slate-400 text-xs border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-16 pb-12">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          
          {/* Column 1: Brand & Identity (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 flex items-center justify-center font-black text-white text-base shadow-lg shadow-blue-600/30">
                SRV
              </div>
              <div>
                <span className="text-lg font-bold text-white tracking-tight flex items-center gap-1.5">
                  SRV HEADHUNT
                  <span className="text-[9px] uppercase font-semibold px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                    PVT LTD
                  </span>
                </span>
                <p className="text-[10px] text-slate-400 tracking-wider uppercase font-medium">
                  Workforce &amp; HR Excellence
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              SRV Headhunt Private Limited is an industry-leading HR solutions and executive search provider specializing in Talent Acquisition, Statutory &amp; Payroll Outsourcing, Corporate Training, and Candidate Verification.
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <a href="tel:+919717160136" className="hover:text-cyan-400 transition">
                  +91 9717160136
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <a href="mailto:ritika@srvheadhunt.com" className="hover:text-cyan-400 transition">
                  ritika@srvheadhunt.com
                </a>
              </div>
              <div className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  L-6/062, Assotech Springfields, Zeta-I, Greater Noida, Gautam Buddha Nagar, UP - 201306
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Core Capabilities
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#services" className="hover:text-cyan-400 transition">
                  Executive Search &amp; Headhunting
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition">
                  Niche Tech Talent Acquisition
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition">
                  Payroll Outsourcing &amp; Tax Deductions
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition">
                  HR Statutory &amp; Labor Law Compliance
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition">
                  Candidate Background Verification (BGV)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition">
                  Corporate Training &amp; POSH
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Industry Verticals
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#why-us" className="hover:text-cyan-400 transition">
                  Information Technology &amp; SaaS
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-cyan-400 transition">
                  FinTech, Banking &amp; Insurance
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-cyan-400 transition">
                  Healthcare &amp; Life Sciences
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-cyan-400 transition">
                  Manufacturing &amp; Engineering
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-cyan-400 transition">
                  E-Commerce &amp; Retail
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-cyan-400 transition">
                  Supply Chain &amp; Logistics
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Navigation & Certifications */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Company &amp; Careers
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#leadership" className="hover:text-cyan-400 transition">
                  About Founder: Ritika Saxena
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-cyan-400 transition">
                  Why SRV Advantage
                </a>
              </li>
              <li>
                <a href="#jobs" className="hover:text-cyan-400 transition flex items-center gap-1.5">
                  <span>Current Job Openings</span>
                  <span className="px-1.5 py-0.2 text-[9px] bg-emerald-500/20 text-emerald-400 rounded-full">
                    Active
                  </span>
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-cyan-400 transition">
                  Workforce ROI Calculator
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-cyan-400 transition">
                  Client Case Studies
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition">
                  Corporate Inquiries
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 text-slate-500 text-[11px]">
            <span>© 2026 SRV Headhunt Private Limited. All Rights Reserved.</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Statutory Compliance Disclosures</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 transition px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
