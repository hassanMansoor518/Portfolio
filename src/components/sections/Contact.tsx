"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Clock, Send, Check, Copy, Sparkles, AlertCircle } from "lucide-react";
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
  const [copied, setCopied] = useState(false);
  const [localTime, setLocalTime] = useState("");

  const emailAddress = "hassanmansoor518@gmail.com"; // Easily customizable

  // Magnetic button ref
  const { ref: submitBtnRef, magneticProps: submitBtnProps } = useMagnetic<HTMLButtonElement>(0.2);

  // Dynamic Lahore, Pakistan (GMT+5) time update
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
      setTimeout(() => setCopied(false), 2000);
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
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 3000);
      return;
    }

    setFormStatus("submitting");

    // Simulate sending message with delay
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  const resetForm = () => {
    setFormStatus("idle");
  };

  return (
    <section id="contact" className="w-full py-24 px-6 md:px-12 bg-[#F7F3EC] text-[#111111] relative z-30 overflow-hidden border-t border-[#EBE6DD]">
      {/* Decorative Subtle Warm Background Blobs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#FF581A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#D9A520]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* LEFT SIDE: Contact Info and Typographic Heading (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Header Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#EBE6DD] text-[10px] font-mono tracking-widest uppercase text-[#FF581A] mb-6 shadow-sm"
              >
                <Sparkles className="w-3 h-3" />
                <span>Get In Touch</span>
              </motion.div>

              {/* Bold Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-syne font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight uppercase leading-[1.05] text-[#111111] mb-6"
              >
                Let&apos;s Create <br />
                Something <br />
                <span className="text-[#FF581A]">Extraordinary</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xs sm:text-sm text-[#111111]/55 max-w-sm mb-12 font-medium leading-relaxed"
              >
                Have a project in mind, want to discuss collaboration opportunities, or simply want to say hello? Drop a line and let&apos;s get the conversation started.
              </motion.p>
            </div>

            {/* Interactive Info Cards */}
            <div className="space-y-4 mb-8">
              {/* Email Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="flex items-center justify-between p-4 rounded-2xl bg-white border border-[#EBE6DD] shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:border-[#FF581A]/30 hover:shadow-[0_8px_20px_rgba(0,0,0,0.07)] transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F7F3EC] border border-[#EBE6DD] flex items-center justify-center text-[#FF581A]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#111111]/40 font-mono uppercase tracking-wider">Email Me</span>
                    <a href={`mailto:${emailAddress}`} className="block text-xs sm:text-sm font-semibold text-[#111111] hover:text-[#FF581A] transition-colors mt-0.5">
                      {emailAddress}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-[#F7F3EC] border border-[#EBE6DD] hover:border-[#FF581A]/40 text-[#111111]/40 hover:text-[#FF581A] transition-all active:scale-95 cursor-pointer"
                  title="Copy to clipboard"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#FF581A]" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </motion.div>

              {/* Location Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#EBE6DD] shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F7F3EC] border border-[#EBE6DD] flex items-center justify-center text-[#FF581A]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-[#111111]/40 font-mono uppercase tracking-wider">Location</span>
                  <span className="block text-xs sm:text-sm font-semibold text-[#111111] mt-0.5">
                    Karachi, Pakistan — Available Remote
                  </span>
                </div>
              </motion.div>

              {/* Timezone Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#EBE6DD] shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F7F3EC] border border-[#EBE6DD] flex items-center justify-center text-[#FF581A]">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-[#111111]/40 font-mono uppercase tracking-wider">Local Time</span>
                  <span className="block text-xs sm:text-sm font-mono font-semibold text-[#111111] mt-0.5">
                    {localTime || "12:00:00 PM"} (GMT+5)
                  </span>
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
              <span className="text-[10px] text-[#111111]/40 font-mono uppercase tracking-wider">Follow My Work</span>
              <SocialLinks />
            </motion.div>
          </div>

          {/* RIGHT SIDE: Form Panel (7 Cols) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-6 sm:p-10 rounded-3xl bg-white border border-[#EBE6DD] shadow-[0_4px_30px_rgba(0,0,0,0.06)] overflow-hidden min-h-[500px] flex flex-col justify-center"
            >
              <AnimatePresence mode="wait">
                {formStatus === "success" ? (
                  /* Success Feedback */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-10 flex flex-col items-center justify-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#FF581A]/10 border border-[#FF581A]/20 flex items-center justify-center text-[#FF581A] mb-6">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="font-syne font-bold text-xl sm:text-2xl text-[#111111] uppercase mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-xs sm:text-sm text-[#111111]/50 max-w-sm mb-8 leading-relaxed">
                      Thank you for reaching out. I have received your message and will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={resetForm}
                      className="px-6 py-2.5 rounded-full border border-[#EBE6DD] text-xs font-semibold uppercase tracking-wider text-[#111111] hover:border-[#FF581A] hover:text-[#FF581A] transition-colors duration-300 cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  /* Standard Input Form */
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div className="relative group">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-[#F7F3EC] border border-[#EBE6DD] rounded-xl px-4 py-3.5 text-xs text-[#111111] placeholder-transparent focus:outline-none focus:border-[#FF581A] transition-all peer"
                          placeholder="Your Name"
                          required
                        />
                        <label
                          htmlFor="name"
                          className="absolute left-4 top-3.5 text-[#111111]/40 text-xs transition-all pointer-events-none duration-200
                                     peer-placeholder-shown:text-xs peer-placeholder-shown:top-3.5
                                     peer-focus:-top-2.5 peer-focus:text-[10px] peer-focus:text-[#FF581A] peer-focus:bg-white peer-focus:px-1.5
                                     peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-[#FF581A] peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1.5"
                        >
                          Full Name
                        </label>
                      </div>

                      {/* Email input */}
                      <div className="relative group">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-[#F7F3EC] border border-[#EBE6DD] rounded-xl px-4 py-3.5 text-xs text-[#111111] placeholder-transparent focus:outline-none focus:border-[#FF581A] transition-all peer"
                          placeholder="Email Address"
                          required
                        />
                        <label
                          htmlFor="email"
                          className="absolute left-4 top-3.5 text-[#111111]/40 text-xs transition-all pointer-events-none duration-200
                                     peer-placeholder-shown:text-xs peer-placeholder-shown:top-3.5
                                     peer-focus:-top-2.5 peer-focus:text-[10px] peer-focus:text-[#FF581A] peer-focus:bg-white peer-focus:px-1.5
                                     peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-[#FF581A] peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1.5"
                        >
                          Email Address
                        </label>
                      </div>
                    </div>

                    {/* Subject input */}
                    <div className="relative group">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full bg-[#F7F3EC] border border-[#EBE6DD] rounded-xl px-4 py-3.5 text-xs text-[#111111] placeholder-transparent focus:outline-none focus:border-[#FF581A] transition-all peer"
                        placeholder="Subject"
                      />
                      <label
                        htmlFor="subject"
                        className="absolute left-4 top-3.5 text-[#111111]/40 text-xs transition-all pointer-events-none duration-200
                                   peer-placeholder-shown:text-xs peer-placeholder-shown:top-3.5
                                   peer-focus:-top-2.5 peer-focus:text-[10px] peer-focus:text-[#FF581A] peer-focus:bg-white peer-focus:px-1.5
                                   peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-[#FF581A] peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1.5"
                      >
                        Subject (Optional)
                      </label>
                    </div>

                    {/* Message textarea */}
                    <div className="relative group">
                      <textarea
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full bg-[#F7F3EC] border border-[#EBE6DD] rounded-xl px-4 py-3.5 text-xs text-[#111111] placeholder-transparent focus:outline-none focus:border-[#FF581A] transition-all peer resize-none"
                        placeholder="Your Message"
                        required
                      />
                      <label
                        htmlFor="message"
                        className="absolute left-4 top-3.5 text-[#111111]/40 text-xs transition-all pointer-events-none duration-200
                                   peer-placeholder-shown:text-xs peer-placeholder-shown:top-3.5
                                   peer-focus:-top-2.5 peer-focus:text-[10px] peer-focus:text-[#FF581A] peer-focus:bg-white peer-focus:px-1.5
                                   peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-[#FF581A] peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1.5"
                      >
                        Tell me about your project...
                      </label>
                    </div>

                    {/* Error display */}
                    {formStatus === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 text-red-500 text-xs font-medium"
                      >
                        <AlertCircle className="w-4 h-4" />
                        <span>Please fill in all required fields.</span>
                      </motion.div>
                    )}

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        ref={submitBtnRef}
                        {...submitBtnProps}
                        type="submit"
                        disabled={formStatus === "submitting"}
                        className="w-full sm:w-auto relative group inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl bg-[#111111] text-[#F7F3EC] text-xs font-mono font-bold uppercase tracking-widest hover:bg-[#FF581A] hover:shadow-[0_10px_25px_rgba(255,88,26,0.25)] transition-all duration-300 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
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
