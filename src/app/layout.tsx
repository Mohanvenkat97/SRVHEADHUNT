import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SRV Headhunt | Premier Executive Search & HR Solutions Provider",
  description:
    "SRV Headhunt Private Limited is an industry-leading HR solutions and executive search provider specializing in Talent Acquisition, Statutory & Payroll Outsourcing, Corporate Training, and Candidate Verification.",
  keywords: [
    "SRV Headhunt",
    "Executive Search",
    "Talent Acquisition",
    "HR Consulting",
    "Payroll Outsourcing",
    "Statutory Compliance",
    "Candidate Verification",
    "Ritika Saxena",
    "Recruitment Agency India",
  ],
  authors: [{ name: "SRV Headhunt Private Limited" }],
  openGraph: {
    title: "SRV Headhunt - Strategic Partner in Workforce Excellence",
    description:
      "Precision recruitment, statutory compliance, and end-to-end payroll management for high-growth enterprises.",
    url: "https://srvheadhunt.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full w-full scroll-smooth antialiased" suppressHydrationWarning>
      <body
        className="min-h-screen w-full flex flex-col bg-[#FAF7F2] text-slate-900 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
