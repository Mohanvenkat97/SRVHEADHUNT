"use client";

import React, { useState } from "react";
import { Star, Quote, ArrowLeft, ArrowRight, Building, CheckCircle2 } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "SRV Headhunt transformed our technology scaling roadmap. When we needed 35 senior cloud architects and full-stack developers within a single quarter, other agencies brought us unqualified resumes. SRV vetted and submitted candidate shortlists with a 92% interview-to-offer ratio. Their speed is unmatched.",
      author: "Vikram Malhotra",
      role: "Chief Technology Officer",
      company: "NextGen Cloud Platforms (Bengaluru)",
      sector: "Enterprise Tech",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      stars: 5,
      impact: "35 Hires in 45 Days",
    },
    {
      quote:
        "Managing statutory compliance and payroll for over 850 manufacturing personnel across multiple shifts was a continuous regulatory hazard. SRV took over our statutory audits and payroll computations. In three years, we have had zero non-compliance notices and flawless labor department audit clearance.",
      author: "Sanjay Singhal",
      role: "Vice President - Operations & Plant HR",
      company: "Apex Precision Engineering Ltd. (NCR)",
      sector: "Manufacturing",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      stars: 5,
      impact: "100% Audit Compliance",
    },
    {
      quote:
        "Ritika and the SRV leadership team operate with rare executive diligence. They treat our confidential leadership searches with discretion and unmatched industry insight. Their 90-day replacement guarantee gave our board complete confidence. A true strategic asset to our organization.",
      author: "Ananya Deshmukh",
      role: "Head of People & Culture",
      company: "ZetaFin Payments (Mumbai)",
      sector: "BFSI & FinTech",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
      stars: 5,
      impact: "C-Suite & VP Placements",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#F4EFE6] relative border-b border-stone-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-300 text-xs font-bold text-amber-600 mb-3 shadow-xs">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>Verified Client Success</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Trusted by C-Suite &amp; HR Leaders
            </h2>
            <p className="text-base text-slate-600 mt-2 max-w-xl">
              Discover how leading organizations rely on SRV Headhunt to solve high-stakes recruitment mandates and eliminate compliance overhead.
            </p>
          </div>

          {/* Aggregate Rating Pill in Crisp White */}
          <div className="bg-white px-5 py-3 rounded-2xl border border-stone-200 shadow-sm flex items-center gap-3">
            <div className="text-2xl font-black text-slate-900">4.9<span className="text-blue-600 text-lg">/5</span></div>
            <div className="flex flex-col">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-[11px] text-slate-500 font-semibold">Over 400+ Enterprise Reviews</span>
            </div>
          </div>
        </div>

        {/* Big Testimonial Feature Card in Pure White */}
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-stone-200 shadow-xl relative overflow-hidden">
          <Quote className="w-24 h-24 text-blue-50 absolute top-6 right-8 pointer-events-none" />

          <div className="max-w-4xl relative">
            {/* Stars & Tag */}
            <div className="flex items-center gap-2 text-amber-400 mb-6">
              {[...Array(current.stars)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-2 text-xs font-bold text-blue-800 px-3 py-1 rounded-full bg-blue-50 border border-blue-200">
                {current.impact}
              </span>
            </div>

            {/* Quote Body */}
            <blockquote className="text-lg sm:text-2xl text-slate-800 font-normal leading-relaxed mb-8">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            {/* Author Profile with Stock Headshot & Nav Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-stone-200">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl overflow-hidden border border-blue-200 p-0.5 bg-gradient-to-tr from-blue-600 to-indigo-600 shrink-0 shadow-md">
                  <img
                    src={current.avatar}
                    alt={current.author}
                    className="w-full h-full object-cover rounded-[14px]"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900">
                    {current.author}
                  </h4>
                  <p className="text-xs sm:text-sm text-blue-700 font-bold">
                    {current.role} • {current.company}
                  </p>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                    Sector: {current.sector}
                  </p>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  className="w-11 h-11 rounded-xl bg-stone-50 hover:bg-white border border-stone-300 text-slate-700 hover:text-slate-900 flex items-center justify-center transition active:scale-95 cursor-pointer shadow-2xs"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <div className="text-xs font-bold text-slate-600 px-2">
                  {currentIndex + 1} / {testimonials.length}
                </div>
                <button
                  onClick={next}
                  className="w-11 h-11 rounded-xl bg-stone-50 hover:bg-white border border-stone-300 text-slate-700 hover:text-slate-900 flex items-center justify-center transition active:scale-95 cursor-pointer shadow-2xs"
                  aria-label="Next testimonial"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
