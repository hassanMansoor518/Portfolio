"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MapPin,
  Clock,
  Send,
  Check,
  Copy,
  Sparkles,
  AlertCircle,
  User,
  AtSign,
  Tag,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { useMagnetic } from "@/hooks/useMagnetic";
import { SocialLinks } from "@/components/SocialLinks";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [localTime, setLocalTime] = useState("");

  const emailAddress = "hassanmansoor518@gmail.com";

  // Magnetic button ref
  const { ref: submitBtnRef, magneticProps: submitBtnProps } = useMagnetic<HTMLButtonElement>(0.2);

  // Dynamic Karachi/Lahore time update (GMT+5)
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Karachi",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      const formatter = new Intl.DateTimeFormat([], options);
      setLocalTime(formatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please complete all required fields.");
      setFormStatus("error");
      return;
    }

    setFormStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setFormStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setErrorMessage(data.error || "Failed to send message. Please try again.");
        setFormStatus("error");
      }
    } catch (err) {
      console.error("Failed to submit form:", err);
      setErrorMessage("An unexpected error occurred. Please check your internet connection.");
      setFormStatus("error");
    }
  };

  const resetForm = () => {
    setFormStatus("idle");
    setErrorMessage("");
  };

  return (
    <section
      id="contact"
      className="w-full py-24 md:py-32 px-6 md:px-12 bg-[#F7F3EC] text-[#111111] relative z-30 overflow-hidden border-t border-[#EBE6DD]"
    >
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#FF581A]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#D9A520]/8 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid Background Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#11111106_1px,transparent_1px),linear-gradient(to_bottom,#11111106_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Editorial Heading & Interactive Info Cards (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
            <div>
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EBE6DD] text-[10px] font-mono tracking-widest uppercase text-[#FF581A] mb-8 shadow-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF581A] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF581A]"></span>
                </span>
                <span>Get In Touch</span>
                <span className="text-[#111111]/20">•</span>
                <span className="text-[#111111]/60 font-sans normal-case">Open for opportunities</span>
              </motion.div>

              {/* Editorial Syne Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-syne font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight uppercase leading-[1.05] text-[#111111] mb-6"
              >
                Let&apos;s Create <br />
                Something <br />
                <span className="text-[#FF581A] relative inline-block">
                  Extraordinary
                  <svg
                    className="absolute -bottom-1.5 left-0 w-full h-2.5 text-[#FF581A]/40"
                    viewBox="0 0 200 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 10C50 3 150 3 198 10"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xs sm:text-sm text-[#111111]/60 max-w-md font-medium leading-relaxed"
              >
                Have a project in mind, want to discuss collaboration opportunities, or simply want to say hello? Drop a line and let&apos;s get the conversation started.
              </motion.p>
            </div>

            {/* Quick Info Cards */}
            <div className="space-y-4">
              {/* Email Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="flex items-center justify-between p-4.5 rounded-2xl bg-white border border-[#EBE6DD] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:border-[#FF581A]/40 hover:shadow-[0_8px_25px_rgba(0,0,0,0.06)] transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F7F3EC] border border-[#EBE6DD] flex items-center justify-center text-[#FF581A] group-hover:bg-[#FF581A] group-hover:text-white transition-colors duration-300">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#111111]/40 font-mono uppercase tracking-wider font-semibold">Email Me Direct</span>
                    <a
                      href={`mailto:${emailAddress}`}
                      className="block text-xs sm:text-sm font-bold text-[#111111] hover:text-[#FF581A] transition-colors mt-0.5"
                    >
                      {emailAddress}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-[#F7F3EC] border border-[#EBE6DD] hover:border-[#FF581A]/40 text-[#111111]/50 hover:text-[#FF581A] transition-all active:scale-95 cursor-pointer flex items-center gap-1.5 text-[11px] font-mono"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600 font-semibold hidden sm:inline">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Copy</span>
                    </>
                  )}
                </button>
              </motion.div>

              {/* Location Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center gap-4 p-4.5 rounded-2xl bg-white border border-[#EBE6DD] shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F7F3EC] border border-[#EBE6DD] flex items-center justify-center text-[#FF581A]">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-[10px] text-[#111111]/40 font-mono uppercase tracking-wider font-semibold">Location</span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs sm:text-sm font-bold text-[#111111]">
                      Pakistan
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] bg-emerald-50 text-emerald-600 font-mono font-medium px-2 py-0.5 rounded-md border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Remote Worldwide
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Timezone Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="flex items-center justify-between p-4.5 rounded-2xl bg-white border border-[#EBE6DD] shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F7F3EC] border border-[#EBE6DD] flex items-center justify-center text-[#FF581A]">
                    <Clock className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#111111]/40 font-mono uppercase tracking-wider font-semibold">Local Time Zone</span>
                    <span className="block text-xs sm:text-sm font-mono font-bold text-[#111111] mt-0.5">
                      {localTime || "12:00:00 PM"} <span className="text-xs text-[#111111]/40 font-normal">(GMT+5)</span>
                    </span>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-1 text-[10px] font-mono text-[#111111]/40 bg-[#F7F3EC] px-2.5 py-1 rounded-lg border border-[#EBE6DD]">
                  <span>PKT</span>
                </div>
              </motion.div>
            </div>

            {/* Social Connect */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-6 border-t border-[#EBE6DD] flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-[#111111]/40 font-mono uppercase tracking-widest font-semibold">Follow My Work</span>
                <span className="text-[10px] text-[#FF581A] font-mono font-semibold flex items-center gap-1">
                  Active Online <Sparkles className="w-2.5 h-2.5" />
                </span>
              </div>
              <SocialLinks />
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Redesigned Contact Form Card (7 Cols) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-6 sm:p-10 md:p-12 rounded-[28px] bg-white border border-[#EBE6DD] shadow-[0_8px_35px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_45px_rgba(0,0,0,0.07)] transition-shadow duration-500 overflow-hidden"
            >
              {/* Subtle Top Color Bar Accent */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF581A] via-[#FF8C38] to-[#D9A520]" />

              <AnimatePresence mode="wait">
                {formStatus === "success" ? (
                  /* Success Feedback Screen */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="text-center py-12 flex flex-col items-center justify-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-[#FF581A]/10 border border-[#FF581A]/20 flex items-center justify-center text-[#FF581A] mb-6 shadow-sm">
                      <Check className="w-10 h-10 stroke-[2.5]" />
                    </div>

                    <h3 className="font-syne font-black text-2xl sm:text-3xl text-[#111111] uppercase tracking-tight mb-3">
                      Message Sent!
                    </h3>

                    <p className="text-xs sm:text-sm text-[#111111]/60 max-w-sm mb-8 leading-relaxed font-medium">
                      Thank you for reaching out! Your message has been sent directly to my inbox. I will get back to you within 24 hours.
                    </p>

                    <button
                      onClick={resetForm}
                      className="px-8 py-3 rounded-full border border-[#EBE6DD] text-xs font-mono font-bold uppercase tracking-wider text-[#111111] hover:border-[#FF581A] hover:text-[#FF581A] transition-colors duration-300 cursor-pointer flex items-center gap-2"
                    >
                      <span>Send Another Message</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="mt-8 pt-6 border-t border-[#EBE6DD] w-full flex items-center justify-center gap-2 text-[11px] font-mono text-[#111111]/40">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Direct Delivery to hassanmansoor518@gmail.com</span>
                    </div>
                  </motion.div>
                ) : (
                  /* High-Precision Clean Form */
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    {/* Header Banner */}
                    <div className="flex items-center justify-between border-b border-[#EBE6DD] pb-5">
                      <div>
                        <h3 className="font-syne font-bold text-xl text-[#111111] uppercase tracking-tight">
                          Send a Direct Message
                        </h3>
                        <p className="text-xs text-[#111111]/50 font-medium mt-0.5">
                          Fill out the details below to start a conversation.
                        </p>
                      </div>
                      <Sparkles className="w-5 h-5 text-[#FF581A]/60 shrink-0" />
                    </div>

                    {/* Inputs Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name input */}
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="block text-[11px] font-mono font-semibold uppercase tracking-wider text-[#111111]/70"
                        >
                          Full Name <span className="text-[#FF581A]">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute left-3.5 top-3.5 text-[#111111]/30 pointer-events-none">
                            <User className="w-4 h-4" />
                          </div>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full bg-[#F7F3EC] border border-[#EBE6DD] rounded-xl pl-10 pr-4 py-3 text-xs text-[#111111] font-semibold placeholder:text-[#111111]/30 focus:outline-none focus:bg-white focus:border-[#FF581A] focus:ring-2 focus:ring-[#FF581A]/15 transition-all"
                            placeholder="Your Name"
                            required
                          />
                        </div>
                      </div>

                      {/* Email input */}
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="block text-[11px] font-mono font-semibold uppercase tracking-wider text-[#111111]/70"
                        >
                          Email Address <span className="text-[#FF581A]">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute left-3.5 top-3.5 text-[#111111]/30 pointer-events-none">
                            <AtSign className="w-4 h-4" />
                          </div>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full bg-[#F7F3EC] border border-[#EBE6DD] rounded-xl pl-10 pr-4 py-3 text-xs text-[#111111] font-semibold placeholder:text-[#111111]/30 focus:outline-none focus:bg-white focus:border-[#FF581A] focus:ring-2 focus:ring-[#FF581A]/15 transition-all"
                            placeholder="your.email@example.com"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Subject input */}
                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="block text-[11px] font-mono font-semibold uppercase tracking-wider text-[#111111]/70"
                      >
                        Subject <span className="text-[#111111]/30 font-normal">(Optional)</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-3.5 top-3.5 text-[#111111]/30 pointer-events-none">
                          <Tag className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full bg-[#F7F3EC] border border-[#EBE6DD] rounded-xl pl-10 pr-4 py-3 text-xs text-[#111111] font-semibold placeholder:text-[#111111]/30 focus:outline-none focus:bg-white focus:border-[#FF581A] focus:ring-2 focus:ring-[#FF581A]/15 transition-all"
                          placeholder="Project Discussion / Collaboration"
                        />
                      </div>
                    </div>

                    {/* Message textarea */}
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="block text-[11px] font-mono font-semibold uppercase tracking-wider text-[#111111]/70"
                      >
                        Your Message <span className="text-[#FF581A]">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-3.5 top-3.5 text-[#111111]/30 pointer-events-none">
                          <MessageSquare className="w-4 h-4" />
                        </div>
                        <textarea
                          name="message"
                          id="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={5}
                          className="w-full bg-[#F7F3EC] border border-[#EBE6DD] rounded-xl pl-10 pr-4 py-3 text-xs text-[#111111] font-semibold placeholder:text-[#111111]/30 focus:outline-none focus:bg-white focus:border-[#FF581A] focus:ring-2 focus:ring-[#FF581A]/15 transition-all resize-none"
                          placeholder="Tell me about your project, timeline, or any questions..."
                          required
                        />
                      </div>
                    </div>

                    {/* Error Feedback */}
                    {formStatus === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2.5 text-red-600 text-xs font-medium bg-red-500/10 p-3.5 rounded-xl border border-red-500/20"
                      >
                        <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                        <span>{errorMessage || "Please complete all required fields."}</span>
                      </motion.div>
                    )}

                    {/* Submit Row */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <button
                        ref={submitBtnRef}
                        {...submitBtnProps}
                        type="submit"
                        disabled={formStatus === "submitting"}
                        className="w-full sm:w-auto relative group inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl bg-[#111111] text-[#F7F3EC] text-xs font-mono font-bold uppercase tracking-widest hover:bg-[#FF581A] hover:shadow-[0_10px_25px_rgba(255,88,26,0.3)] transition-all duration-300 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
                      >
                        {formStatus === "submitting" ? (
                          <>
                            <span>Sending...</span>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                          </>
                        )}
                      </button>

                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#111111]/40">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#FF581A]" />
                        <span>Direct Inbox Delivery</span>
                      </div>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
