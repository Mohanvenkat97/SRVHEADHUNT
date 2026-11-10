"use client";

import React, { useState } from "react";
import {
  Briefcase,
  MapPin,
  Clock,
  Search,
  Filter,
  ArrowRight,
  Sparkles,
  Building,
  CheckCircle2,
  DollarSign,
} from "lucide-react";

interface JobBoardSectionProps {
  onApplyJob: (jobTitle: string) => void;
}

export default function JobBoardSection({ onApplyJob }: JobBoardSectionProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const jobs = [
    {
      id: "srv-01",
      title: "Lead Full Stack Software Engineer",
      category: "Tech & Software",
      department: "Enterprise Technology",
      location: "Noida / Remote",
      exp: "6–9 Years",
      salary: "₹24–32 LPA",
      type: "Full-Time",
      urgent: true,
      skills: ["React", "Node.js", "Next.js", "TypeScript", "Microservices"],
      description: "Leading architect for next-generation enterprise SaaS products. Immediate joiners preferred.",
    },
    {
      id: "srv-02",
      title: "SAP S/4HANA Functional Consultant (FICO / MM)",
      category: "SAP & ERP",
      department: "ERP & Digital Transformation",
      location: "Greater Noida (Hybrid)",
      exp: "5–8 Years",
      salary: "₹20–28 LPA",
      type: "Full-Time",
      urgent: false,
      skills: ["SAP FICO", "S/4HANA", "Integration", "Financial Accounting"],
      description: "Lead implementation and configuration for a leading manufacturing MNC client.",
    },
    {
      id: "srv-03",
      title: "Senior HR Business Partner & Statutory Specialist",
      category: "HR & People Ops",
      department: "People & Organization",
      location: "Greater Noida (On-site)",
      exp: "7–11 Years",
      salary: "₹18–25 LPA",
      type: "Full-Time",
      urgent: true,
      skills: ["Labor Laws", "Factories Act", "Payroll Audit", "Talent Acquisition"],
      description: "Direct oversight of 1,200+ employees, regulatory compliance, and performance management.",
    },
    {
      id: "srv-04",
      title: "Cloud & DevOps Solutions Architect",
      category: "Tech & Software",
      department: "Cloud Infrastructure",
      location: "Bengaluru / Hybrid",
      exp: "8–12 Years",
      salary: "₹32–42 LPA",
      type: "Full-Time",
      urgent: true,
      skills: ["AWS", "Kubernetes", "Terraform", "CI/CD", "Security"],
      description: "Design multi-region scalable cloud architecture for a top fintech company.",
    },
    {
      id: "srv-05",
      title: "Senior QA Automation Engineer (Lead)",
      category: "Tech & Software",
      department: "Quality Engineering",
      location: "Noida (Hybrid)",
      exp: "4–7 Years",
      salary: "₹16–22 LPA",
      type: "Full-Time",
      urgent: false,
      skills: ["Selenium", "Playwright", "Cypress", "Python/Java", "API Testing"],
      description: "Establish robust automated testing frameworks for high-throughput distributed applications.",
    },
    {
      id: "srv-06",
      title: "Vice President - B2B Business Development",
      category: "Leadership",
      department: "Executive Leadership",
      location: "Delhi NCR / Mumbai",
      exp: "12–16 Years",
      salary: "₹45–60 LPA + Equity",
      type: "Executive",
      urgent: true,
      skills: ["Enterprise Sales", "Client Acquisition", "Strategic Accounts", "P&L Management"],
      description: "Drive large enterprise contracts and revenue expansion across North & West India.",
    },
  ];

  const categories = ["All", "Tech & Software", "SAP & ERP", "HR & People Ops", "Leadership"];

  const filteredJobs = jobs.filter((job) => {
    const matchesCategory = selectedCategory === "All" || job.category === selectedCategory;
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="jobs" className="py-20 lg:py-28 bg-[#F4EFE6] relative border-b border-stone-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-300 text-xs font-bold text-emerald-700 mb-3 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Career Opportunities at SRV Headhunt</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Opportunities &amp; Leadership Openings
            </h2>
            <p className="text-base text-slate-600 mt-2 max-w-xl">
              We connect top-tier professionals with premier employers across India. Apply directly with your CV for confidential placement review.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-600 font-semibold bg-white px-3 py-1.5 rounded-xl border border-stone-200 shadow-xs">
              Showing <span className="text-slate-900 font-bold">{filteredJobs.length}</span> Active Positions
            </span>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-md mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Keyword Search */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by role, skill (e.g. React, SAP, HR)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white shadow-xs"
                    : "bg-white text-slate-600 hover:text-slate-900 border border-stone-200 hover:border-stone-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Job Cards Grid in Crisp White */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-2xl p-6 border border-stone-200 hover:border-blue-400 shadow-xs hover:shadow-lg flex flex-col justify-between group transition-all"
            >
              <div>
                {/* Header tags */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold text-blue-700 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200">
                    {job.department}
                  </span>
                  {job.urgent && (
                    <span className="text-[10px] font-bold text-rose-700 px-2 py-0.5 rounded-full bg-rose-50 border border-rose-200 animate-pulse">
                      Urgent Need
                    </span>
                  )}
                </div>

                {/* Job Title */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                  {job.title}
                </h3>

                {/* Meta row */}
                <div className="space-y-1.5 text-xs text-slate-500 mb-4 font-medium">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{job.exp}</span>
                    </span>
                    <span className="text-emerald-700 font-bold flex items-center gap-1">
                      <span>💰</span>
                      <span>{job.salary}</span>
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                  {job.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {job.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-semibold text-slate-700 bg-stone-100 px-2 py-0.5 rounded-md border border-stone-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onApplyJob(job.title)}
                className="w-full py-2.5 rounded-xl bg-stone-50 hover:bg-blue-600 hover:text-white text-blue-700 border border-stone-200 hover:border-transparent text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer group/btn shadow-2xs"
              >
                <span>Quick Apply Now</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Don't see your role banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-stone-200 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-slate-900">
              Don&apos;t see a matching position right now?
            </h4>
            <p className="text-xs text-slate-500 mt-0.5 font-medium">
              Submit your CV to our confidential Executive Talent Registry. When leadership or niche roles open up, our senior recruiters contact you first.
            </p>
          </div>
          <button
            onClick={() => onApplyJob("General Executive Application")}
            className="px-5 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 text-xs font-bold whitespace-nowrap transition cursor-pointer shadow-xs"
          >
            Submit Resume to Registry →
          </button>
        </div>

      </div>
    </section>
  );
}
