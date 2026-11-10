"use client";

import React, { useState } from "react";
import {
  UserCheck,
  Calculator,
  Scale,
  GraduationCap,
  ShieldAlert,
  Users2,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Clock,
  Check,
} from "lucide-react";

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [activeTab, setActiveTab] = useState("recruitment");

  const services = [
    {
      id: "recruitment",
      title: "Executive Search & Talent Acquisition",
      shortDesc: "Targeted headhunting for C-suite, leadership, and niche technical roles across IT and non-IT sectors.",
      icon: UserCheck,
      badge: "Flagship Service",
      sla: "Average 7–12 Days Delivery",
      image: "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?auto=format&fit=crop&w=800&q=80",
      imageCaption: "Executive Leadership Candidate Interview",
      deliverables: [
        "Specialized Headhunting for C-Suite, VP & Senior Tech talent",
        "Pre-screened technical vetting and behavioral competency scoring",
        "Passive candidate outreach with high response conversion",
        "90-Day Free Replacement Guarantee with zero hassle",
        "Market salary benchmarking and candidate offer negotiation support",
      ],
      metrics: {
        stat: "98%",
        label: "Offer Acceptance Rate",
      },
    },
    {
      id: "payroll",
      title: "Payroll & Compensation Outsourcing",
      shortDesc: "End-to-end salary processing, statutory deductions, tax computations, and automated digital payslips.",
      icon: Calculator,
      badge: "Zero-Error Guarantee",
      sla: "100% On-Time Processing",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
      imageCaption: "Statutory Payroll & Tax Computations",
      deliverables: [
        "Full computation of employee salaries, bonuses, and incentives",
        "Statutory deductions: PF, ESIC, Professional Tax, and TDS",
        "Automated employee digital portal & payslip generation",
        "Full and final settlement (F&F) management with gratuity computations",
        "Form 16 generation & year-end tax reconciliation",
      ],
      metrics: {
        stat: "99.98%",
        label: "Payroll Accuracy Record",
      },
    },
    {
      id: "compliance",
      title: "HR Statutory & Labor Law Compliance",
      shortDesc: "Shielding your business from legal liabilities through rigorous compliance audits and regulatory filings.",
      icon: Scale,
      badge: "Zero Legal Risk",
      sla: "100% Audit Readiness",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
      imageCaption: "Labor Law & Regulatory Compliance Auditing",
      deliverables: [
        "Factories Act & Shops and Commercial Establishments compliance",
        "EPF, ESI, Minimum Wages & Bonus Act advisory and filings",
        "POSH (Prevention of Sexual Harassment) Committee constitution & training",
        "Statutory register maintenance and periodic on-site compliance audits",
        "Government inspection representation and notices resolution",
      ],
      metrics: {
        stat: "0",
        label: "Penalties for Partner Clients",
      },
    },
    {
      id: "bgv",
      title: "Candidate Verification & Background Checks (BGV)",
      shortDesc: "360-degree employment, academic, criminal, and identity verification to safeguard workplace integrity.",
      icon: ShieldAlert,
      badge: "High-Integrity Assurance",
      sla: "48–72 Hours Turnaround",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      imageCaption: "Multi-Source Background Verification & Credential Check",
      deliverables: [
        "Previous employment tenure, salary, and exit conduct verification",
        "Educational degree authenticity checks with recognized universities",
        "Court record checks, police verification, and criminal database scans",
        "Residential address physical and digital geocoded verification",
        "Professional reference checks with direct reporting managers",
      ],
      metrics: {
        stat: "100%",
        label: "Verified Credential Authenticity",
      },
    },
    {
      id: "training",
      title: "Corporate Training & Leadership Development",
      shortDesc: "Custom-designed training programs starting with organizational need assessments and measurable skill tracking.",
      icon: GraduationCap,
      badge: "Organizational Growth",
      sla: "Custom Tailored Modules",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
      imageCaption: "Executive Leadership & Team Upskilling Workshop",
      deliverables: [
        "Organizational Training Needs Analysis (TNA) and gap identification",
        "Executive leadership and mid-management communication workshops",
        "Diversity, Equity & POSH statutory awareness programs",
        "Sales mastery, team collaboration, and client relationship coaching",
        "Post-training performance metrics and retention evaluation",
      ],
      metrics: {
        stat: "94%",
        label: "Participant Satisfaction Score",
      },
    },
    {
      id: "rpo",
      title: "On-Demand RPO & Flexible Contract Staffing",
      shortDesc: "Dedicated embedded recruiters and contract workforce management for rapid project scaling.",
      icon: Users2,
      badge: "Rapid Scale",
      sla: "Plug & Play in 48 Hours",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
      imageCaption: "Dedicated Embedded RPO Talent Acquisition Team",
      deliverables: [
        "Dedicated full-time offshore recruiters aligned to your internal team",
        "Contract-to-hire and seasonal project staffing solutions",
        "Transparent weekly pipeline analytics and applicant tracking",
        "Reduced hiring cost per seat by up to 45% compared to internal HR",
        "Scalable contracts that expand or contract with your roadmap",
      ],
      metrics: {
        stat: "45%",
        label: "Recruitment Cost Reduction",
      },
    },
  ];

  const currentService = services.find((s) => s.id === activeTab) || services[0];
  const CurrentIcon = currentService.icon;

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-300 text-xs font-bold text-blue-700 mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive HR Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            End-to-End Solutions for Modern Enterprises
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Eliminate the overhead of hiring fragmented internal HR departments.
            SRV Headhunt serves as your unified strategic partner for talent search, payroll accuracy, and labor compliance.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {services.map((s) => {
            const Icon = s.icon;
            const isActive = activeTab === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/20 scale-105"
                    : "bg-white text-slate-700 hover:text-slate-900 border border-stone-200 hover:border-stone-300 shadow-xs"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-blue-600"}`} />
                <span>{s.title.split("&")[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Active Service Showcase Card in Pure White */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Col: Description & Deliverables */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                  {currentService.badge}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  {currentService.sla}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {currentService.title}
              </h3>

              <p className="text-base text-slate-600 leading-relaxed">
                {currentService.shortDesc}
              </p>

              {/* Deliverable Bullets */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500">
                  Key Scope &amp; Client Deliverables:
                </h4>
                {currentService.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Inquire CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => onSelectService(currentService.title)}
                  className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-600/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Request Proposal for {currentService.title.split("&")[0].trim()}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Col: High-Impact Card with Stock Photo + Stats */}
            <div className="lg:col-span-5 flex flex-col space-y-5">
              
              {/* Image Preview Box with Luxury Overlay */}
              <div className="relative rounded-2xl overflow-hidden border border-stone-200 shadow-md group h-56 sm:h-64">
                <img
                  src={currentService.image}
                  alt={currentService.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                  <span className="font-semibold text-white drop-shadow-md">
                    {currentService.imageCaption}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white text-slate-900 text-[10px] font-extrabold shadow-sm">
                    SRV Certified
                  </span>
                </div>
              </div>

              {/* Highlight Stat Box in Soft Blue/Cream Container */}
              <div className="rounded-2xl bg-[#F4EFE6] border border-stone-300 p-5 flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-white text-blue-600 border border-stone-200 shadow-xs flex items-center justify-center font-bold">
                    <CurrentIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-slate-900">
                      {currentService.metrics.stat}
                    </div>
                    <div className="text-xs font-bold text-blue-700">
                      {currentService.metrics.label}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] text-emerald-700 font-bold block">
                    ✓ Verified Metric
                  </span>
                  <span className="text-[10px] text-slate-500">
                    500+ Clients
                  </span>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Dedicated Key Account Manager assigned within 2 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Transparent SLA tracking with real-time progress updates</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
