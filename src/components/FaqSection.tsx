"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqSection() {
  const faqs = [
    {
      q: "What is SRV Headhunt's commercial model for executive search & recruitment?",
      a: "We offer flexible models tailored to enterprise needs: contingency-based placement (payable only upon successful onboarding), dedicated retained search for critical C-suite positions, and monthly RPO (Recruitment Process Outsourcing) retainers for high-volume rapid hiring surges. We never charge hidden discovery fees.",
    },
    {
      q: "How fast can we expect pre-vetted candidate shortlists?",
      a: "For roles in our active talent bench (Tech, SAP, Mid-Management, Sales), we deliver the first batch of thoroughly screened candidates within 48 to 72 hours. Specialized executive headhunting mandates average 7 to 12 working days from intake briefing to first client interviews.",
    },
    {
      q: "What is the policy regarding candidate replacement warranty?",
      a: "Every permanent placement by SRV Headhunt is backed by our standard 90-Day Free Replacement Guarantee. In the rare event that a hired candidate resigns or does not meet contractual expectations within the first 90 days, we source and place an equivalent replacement at zero additional charge.",
    },
    {
      q: "How does your statutory compliance & payroll outsourcing work?",
      a: "Our compliance team conducts a comprehensive initial audit of your existing registers, contracts, and filings under the Factories Act, Shops & Establishment Act, EPF, ESIC, and POSH. For payroll, we manage monthly salary computations, statutory deductions, tax filings, and provide an automated employee portal for payslips and Form 16.",
    },
    {
      q: "Can SRV Headhunt manage hiring and compliance outside Delhi NCR?",
      a: "Yes. While our registered corporate office is in Greater Noida (NCR), our talent network and statutory advisory practice operates pan-India, with heavy placement volumes across Bengaluru, Hyderabad, Pune, Mumbai, Chennai, Kolkata, and distributed remote teams.",
    },
    {
      q: "What methods do you use for Candidate Background Verification (BGV)?",
      a: "We conduct 360-degree verification encompassing past employment tenure, reporting manager reference checks, salary slips authenticity, university degree authentication, residential address validation, and national court/criminal database checks.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 lg:py-24 bg-[#FAF7F2] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-300 text-xs font-bold text-blue-700 mb-3 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Everything You Need to Know
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Clear, transparent answers about how SRV Headhunt operates, our guarantees, and our service delivery SLAs.
          </p>
        </div>

        {/* FAQ Accordion in Pure White Cards */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-stone-200 shadow-xs hover:border-stone-300 transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50 transition"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center shrink-0 text-blue-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-blue-50 border-blue-200" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-stone-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
