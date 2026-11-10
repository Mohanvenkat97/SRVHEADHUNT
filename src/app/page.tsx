"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientMarquee from "@/components/ClientMarquee";
import ServicesSection from "@/components/ServicesSection";
import ComparisonSection from "@/components/ComparisonSection";
import RoiCalculator from "@/components/RoiCalculator";
import JobBoardSection from "@/components/JobBoardSection";
import LeadershipSection from "@/components/LeadershipSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { ConsultationModal, QuickApplyModal } from "@/components/Modals";
import { Phone, MessageSquare, Sparkles } from "lucide-react";

export default function Home() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Executive Search & Talent Acquisition");
  const [quickApplyOpen, setQuickApplyOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState("Lead Full Stack Software Engineer");

  const handleOpenConsultation = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setConsultationOpen(true);
  };

  const handleOpenQuickApply = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setQuickApplyOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-slate-900 relative selection:bg-blue-600 selection:text-white">
      {/* Sticky Header */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      {/* Hero Section */}
      <Hero onOpenConsultation={() => handleOpenConsultation()} />

      {/* Cross-Industry Marquee & Trust Accreditations */}
      <ClientMarquee />

      {/* End-to-End Core Services */}
      <ServicesSection onSelectService={(service) => handleOpenConsultation(service)} />

      {/* Why SRV: Traditional vs SRV Headhunt */}
      <ComparisonSection onOpenConsultation={() => handleOpenConsultation()} />

      {/* Interactive Workforce ROI Calculator */}
      <RoiCalculator onOpenConsultation={() => handleOpenConsultation()} />

      {/* Live Featured Job Board & Career Opportunities */}
      <JobBoardSection onApplyJob={(job) => handleOpenQuickApply(job)} />

      {/* Founder & Leadership Spotlight: Ritika Saxena */}
      <LeadershipSection />

      {/* Client Testimonials & Enterprise Endorsements */}
      <TestimonialsSection />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Direct Contact & Corporate Inquiry */}
      <ContactSection />

      {/* Comprehensive Footer */}
      <Footer />

      {/* Floating Action Button for Immediate Call / WhatsApp */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
        <a
          href="https://wa.me/919717160136?text=Hello%20SRV%20Headhunt,%20I%20would%20like%20to%20inquire%20about%20your%20HR%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-xl shadow-emerald-700/20 hover:scale-105 active:scale-95 transition-all"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
          <span className="hidden sm:inline">WhatsApp Advisor</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>

        <button
          onClick={() => handleOpenConsultation()}
          className="group flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white font-bold text-xs shadow-xl shadow-blue-600/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-cyan-200" />
          <span className="hidden sm:inline">Book Talent Consultation</span>
          <span className="sm:hidden">Hire</span>
        </button>
      </div>

      {/* Modals */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        defaultService={selectedService}
      />

      <QuickApplyModal
        isOpen={quickApplyOpen}
        onClose={() => setQuickApplyOpen(false)}
        jobTitle={selectedJob}
      />
    </main>
  );
}
