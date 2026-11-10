"use client";

import React, { useState } from "react";
import {
  Laptop,
  Landmark,
  HeartPulse,
  Factory,
  ShoppingBag,
  Truck,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";

export default function ClientMarquee() {
  const industries = [
    {
      name: "IT, SaaS & AI Innovation",
      icon: Laptop,
      hires: "3,800+ Placements",
      roles: "Full Stack, Cloud Architects, AI/ML, DevOps, Cyber Security",
      highlight: "Average 10-day fill rate",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "BFSI & FinTech",
      icon: Landmark,
      hires: "2,100+ Placements",
      roles: "Risk Analysts, Quant Traders, Compliance Officers, Wealth Managers",
      highlight: "100% Background verified",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Healthcare & Life Sciences",
      icon: HeartPulse,
      hires: "1,450+ Placements",
      roles: "Clinical Research, Bio-Tech, Hospital Ops, Medical Devices",
      highlight: "Stringent regulatory compliance",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Manufacturing & Heavy Industry",
      icon: Factory,
      hires: "2,900+ Placements",
      roles: "Plant Heads, Quality Assurance, Industrial Automation, Safety Leads",
      highlight: "Factories Act certified",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "E-Commerce, FMCG & Retail",
      icon: ShoppingBag,
      hires: "1,850+ Placements",
      roles: "Supply Chain Directors, Category Managers, Regional Sales",
      highlight: "Rapid seasonal scaling",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Logistics & Fleet Operations",
      icon: Truck,
      hires: "1,200+ Placements",
      roles: "Fleet Supervisors, Hub Managers, Route Optimization Experts",
      highlight: "Pan-India footprint",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-16 bg-[#F4EFE6] border-b border-stone-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-stone-300 text-xs font-bold text-blue-700 mb-2 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Multi-Sector Industry Depth</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Cross-Industry Executive Expertise
            </h2>
            <p className="text-slate-600 text-sm mt-1 max-w-xl">
              From fast-scaling venture-backed technology startups to legacy multinational conglomerates,
              SRV delivers customized talent search and compliance architectures.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-700 bg-white px-3 py-2 rounded-xl border border-stone-200 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>Active Talent Pools Across 28 States &amp; Union Territories</span>
          </div>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            const isSelected = activeTab === idx;
            return (
              <div
                key={ind.name}
                onClick={() => setActiveTab(idx)}
                className={`rounded-2xl cursor-pointer overflow-hidden group transition-all duration-300 flex flex-col justify-between bg-white border shadow-xs hover:shadow-lg ${
                  isSelected
                    ? "border-blue-500 ring-2 ring-blue-500/20 shadow-md"
                    : "border-stone-200 hover:border-stone-300"
                }`}
              >
                {/* Sector Image Header */}
                <div className="relative h-36 w-full overflow-hidden">
                  <img
                    src={ind.image}
                    alt={ind.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent"></div>
                  
                  {/* Floating Icon badge on image */}
                  <div className="absolute bottom-3 left-4 flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-blue-600/90 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-white drop-shadow">
                      {ind.name}
                    </span>
                  </div>

                  <span className="absolute top-3 right-3 text-[11px] font-bold text-slate-900 px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md shadow-xs border border-white/40">
                    {ind.hires}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    <span className="font-bold text-slate-900">Key Roles:</span> {ind.roles}
                  </p>

                  <div className="flex items-center justify-between text-xs pt-3 border-t border-stone-100">
                    <span className="text-blue-700 font-bold flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
                      {ind.highlight}
                    </span>
                    <span className="text-slate-500 group-hover:text-blue-600 transition-colors text-[11px] font-semibold">
                      View Talent Bench →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Corporate Trust Strip */}
        <div className="mt-12 pt-8 border-t border-stone-300 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-600">
          <div className="flex items-center gap-3">
            <span className="font-bold text-slate-800 uppercase tracking-wider text-[11px]">
              Compliance Standard Accreditations:
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6 sm:gap-10 font-semibold text-slate-700">
            <div className="flex items-center gap-2">
              <span className="text-blue-600 font-black">✓</span>
              <span>Labor Laws &amp; Statutory Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-600 font-black">✓</span>
              <span>EPF &amp; ESIC Certified Operations</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-600 font-black">✓</span>
              <span>POSH Framework Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-600 font-black">✓</span>
              <span>GDPR / Data Privacy Adherent</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
