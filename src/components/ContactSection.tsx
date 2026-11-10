"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Building,
  Sparkles,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

export default function ContactSection() {
  const [formType, setFormType] = useState<"employer" | "candidate">("employer");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Executive Search & Talent Acquisition",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F4EFE6] relative border-t border-stone-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-300 text-xs font-bold text-blue-700 mb-3 shadow-xs">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect with SRV Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Initiate Your Strategic Partnership
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Whether you need to close critical executive hires, outsource payroll operations, or conduct an immediate statutory compliance audit—we respond within 4 business hours.
          </p>
        </div>

        {/* 2-Column Contact Layout in Crisp White */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Details & Headquarters Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Info Card */}
            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Building className="w-5 h-5 text-blue-600" />
                <span>SRV Headhunt Private Limited</span>
              </h3>

              <div className="space-y-5 text-sm">
                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                      Direct Advisory Line
                    </div>
                    <a
                      href="tel:+919717160136"
                      className="text-base font-extrabold text-slate-900 hover:text-blue-600 transition"
                    >
                      +91 9717160136
                    </a>
                    <div className="text-[11px] text-slate-500 font-medium">
                      Available on Call &amp; WhatsApp Business
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                      Executive Leadership Email
                    </div>
                    <a
                      href="mailto:ritika@srvheadhunt.com"
                      className="text-base font-extrabold text-slate-900 hover:text-blue-600 transition"
                    >
                      ritika@srvheadhunt.com
                    </a>
                    <div className="text-[11px] text-slate-500 font-medium">
                      Direct inbox of Founder &amp; Managing Director
                    </div>
                  </div>
                </div>

                {/* Corporate Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                      Registered Corporate Office
                    </div>
                    <div className="text-sm text-slate-700 font-medium leading-relaxed">
                      L-6/062, Assotech Springfields, Zeta-I,<br />
                      Greater Noida, Gautam Buddha Nagar,<br />
                      Noida, Uttar Pradesh, India - 201306
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                      Operating Hours
                    </div>
                    <div className="text-sm text-slate-700 font-medium">
                      Monday to Saturday • 9:30 AM – 6:30 PM IST
                    </div>
                    <div className="text-[11px] text-emerald-700 font-bold mt-0.5">
                      Emergency hiring hotline active 24/7 for retained clients
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="pt-4 border-t border-stone-200 flex items-center gap-2.5 text-xs text-slate-600 font-medium">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                <span>NDA &amp; Confidentiality strictly honored for all client mandates.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Intake Form in Crisp White */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-stone-200 shadow-xl relative">
              
              {/* Form Type Selector */}
              <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-stone-100 border border-stone-200 mb-8">
                <button
                  type="button"
                  onClick={() => setFormType("employer")}
                  className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                    formType === "employer"
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  I Want to Hire Talent / Outsource HR
                </button>
                <button
                  type="button"
                  onClick={() => setFormType("candidate")}
                  className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                    formType === "candidate"
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  I am a Job Seeker / Candidate
                </button>
              </div>

              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-200 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Inquiry Received Successfully</h3>
                  <p className="text-slate-600 text-sm max-w-md">
                    Thank you, <span className="font-bold text-slate-900">{formData.name}</span>. Ritika Saxena and our senior advisory team will review your requirements and reach out to you within 4 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        company: "",
                        service: "Executive Search & Talent Acquisition",
                        message: "",
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-stone-50 border border-stone-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Work / Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. rahul@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-stone-50 border border-stone-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Contact Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-stone-50 border border-stone-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        {formType === "employer" ? "Company / Organization *" : "Current Employer / Institute"}
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. TechCorp Solutions"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 bg-stone-50 border border-stone-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Primary Service Requirement
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-300 rounded-xl text-sm text-slate-900 font-medium focus:outline-none focus:border-blue-500 focus:bg-white transition"
                    >
                      <option>Executive Search &amp; Leadership Hiring</option>
                      <option>IT &amp; Niche Tech Talent Acquisition</option>
                      <option>Payroll &amp; Compensation Outsourcing</option>
                      <option>HR Statutory &amp; Labor Law Compliance Audit</option>
                      <option>Candidate Background Verification (BGV)</option>
                      <option>Corporate Training &amp; POSH Workshops</option>
                      <option>Contract Staffing &amp; RPO Retainers</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Brief Message or Role Description
                    </label>
                    <textarea
                      rows={3}
                      placeholder={
                        formType === "employer"
                          ? "Tell us about the roles to fill, timeline, expected seniority, or compliance scope..."
                          : "Describe your experience, current CTC, notice period, and desired next role..."
                      }
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm shadow-xl shadow-blue-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {loading ? (
                      <span>Submitting Mandate...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Partnership Inquiry</span>
                      </>
                    )}
                  </button>

                  <div className="text-center text-[11px] text-slate-500 font-medium pt-1">
                    By submitting, you agree to receive tailored correspondence from SRV Headhunt Private Limited.
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
