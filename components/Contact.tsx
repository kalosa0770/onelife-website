"use client";

import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck 
} from "lucide-react";

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
  },
};

export const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    discipline: "brand",
    timeline: "immediate",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API or server action transmission
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
    }, 700);
  };

  return (
    <section 
      id="contact" 
      className="py-24 px-4 sm:px-8 bg-[#F4F4F0] border-t border-charcoal/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* 1. LEFT COLUMN: DIRECTORY & STRATEGIC ENGAGEMENT */}
        <motion.div 
          className="lg:col-span-5 space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInLeft}
        >
          <div>
            <span className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-onelife-red block mb-2">
              Engagement &amp; Enquiries
            </span>
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-charcoal tracking-tight leading-tight">
              Let&apos;s Build Something Bold.
            </h2>
          </div>

          <p className="text-[12px] md:text-base text-slate-grey leading-relaxed">
            Tell us about your upcoming project, corridor programme, or event. We review every brief with strategic leadership first to assemble the right discipline.
          </p>

          {/* Contact Details Cards */}
          <div className="space-y-3 pt-2">
            <div className="p-4 flex items-start gap-4">
              <div className="w-10 h-10 rounded bg-warm-white flex items-center justify-center shrink-0 border border-charcoal/5">
                <MapPin className="w-5 h-5 text-onelife-red" />
              </div>
              <div>
                <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-slate-grey block">
                  Headquarters
                </span>
                <p className="text-[10px] md:text-[12px] font-semibold text-charcoal">
                  Lusaka, Zambia
                </p>
              </div>
            </div>

            <div className="p-4 flex items-start gap-4">
              <div className="w-10 h-10 rounded bg-warm-white flex items-center justify-center shrink-0 border border-charcoal/5">
                <Mail className="w-5 h-5 text-onelife-red" />
              </div>
              <div>
                <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-slate-grey block">
                  Direct Inquiries
                </span>
                <a 
                  href="mailto:info@onelife.co.zm" 
                  className="text-[10px] md:text-[12px] font-semibold text-charcoal hover:text-onelife-red transition-colors"
                >
                  info@onelife.co.zm
                </a>
              </div>
            </div>

            <div className="p-4 flex items-start gap-4">
              <div className="w-10 h-10 rounded bg-warm-white flex items-center justify-center shrink-0 border border-charcoal/5">
                <Clock className="w-5 h-5 text-onelife-red" />
              </div>
              <div>
                <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-slate-grey block">
                  Response Commitment
                </span>
                <p className="text-[10px] md:text-[12px] font-semibold text-charcoal">
                  Direct partner assessment within 24 business hours
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. RIGHT COLUMN: STRATEGIC BRIEF INTAKE FORM */}
        <motion.div 
          className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-lg shadow-sm border border-charcoal/10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInRight}
        >
          {formSubmitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-14 h-14 bg-onelife-red/10 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 text-onelife-red" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-charcoal">Strategic Brief Received</h3>
              <p className="text-[12px] sm:text-sm text-slate-grey max-w-md mx-auto leading-relaxed">
                Thank you for reaching out. A OneLife practice lead will evaluate your project context and get in touch with you directly.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="text-[12px] font-heading font-semibold text-charcoal hover:text-onelife-red underline block mx-auto pt-4 transition-colors"
              >
                Submit another engagement brief
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-[10px] font-heading font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                    Your Name &amp; Title
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Maria Phiri, Director"
                    className="w-full px-4 py-3 text-[10px] bg-warm-white border border-charcoal/15 rounded focus:outline-none focus:border-charcoal transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[10px] font-heading font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="maria@apexholdings.zm"
                    className="w-full px-4 py-3 text-[10px] bg-warm-white border border-charcoal/15 rounded focus:outline-none focus:border-charcoal transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="discipline" className="block text-[10px] font-heading font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                    Area of Engagement
                  </label>
                  <select
                    id="discipline"
                    name="discipline"
                    value={formData.discipline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-[10px] bg-warm-white border border-charcoal/15 rounded focus:outline-none focus:border-charcoal transition-colors"
                  >
                    <option value="brand">Brand Strategy &amp; Communications</option>
                    <option value="events">Strategic Events &amp; Summits</option>
                    <option value="impex">IMPEX / Trade Corridor Partnership</option>
                    <option value="sws">Smart Woman Summit Sponsorship</option>
                    <option value="accelerator">OneLife Brand Accelerator</option>
                    <option value="other">General Advisory</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-[10px] font-heading font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                    Target Execution Window
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-[10px] bg-warm-white border border-charcoal/15 rounded focus:outline-none focus:border-charcoal transition-colors"
                  >
                    <option value="immediate" >Immediate (Next 1–3 Months)</option>
                    <option value="mid-term">Mid-Term (3–6 Months)</option>
                    <option value="annual-2026">2026 Summit / Event Calendar</option>
                    <option value="exploratory">Exploratory Dialogue</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-[10px] font-heading font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                  Challenge Outline / Strategic Objectives
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Outline your project scope, core stakeholders, and key targets..."
                  className="w-full px-4 py-3 text-[10px] bg-warm-white border border-charcoal/15 rounded focus:outline-none focus:border-charcoal transition-colors"
                ></textarea>
              </div>

              {/* Single High-Visibility Red Moment Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-onelife-red hover:bg-[#d1171e] text-white font-heading font-semibold text-[10px] uppercase tracking-wider py-4 rounded transition-all duration-200 flex items-center justify-center gap-2 group disabled:opacity-50 shadow-md shadow-onelife-red/10"
              >
                <span>{loading ? "Transmitting Brief..." : "Send Strategic Brief"}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
};