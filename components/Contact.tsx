"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  CheckCircle2,
  User,
  MessageSquare,
} from "lucide-react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const containerVariants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 1,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Failed to send message.");
      }

      setSuccess(true);
      setForm(initialForm);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-zinc-950 px-6 py-16 text-white lg:py-20"
    >
      {/* Aurora Background */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute right-0 top-40 h-[350px] w-[350px] rounded-full bg-sky-500/10 blur-[140px]" />

        <div className="absolute bottom-0 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.08),transparent_55%)]" />

      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2"
      >
                {/* Left Side */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col justify-center"
        >
          {/* Premium Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-5 py-2 backdrop-blur-xl"
          >
            <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />

            <span className="text-sm font-semibold tracking-wide text-cyan-300">
              CONTACT WEBSecur
            </span>
          </motion.div>

          {/* Heading */}
          <h2 className="max-w-xl text-4xl font-black leading-tight lg:text-5xl">
            Let&apos;s Build Something

            <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Secure Together
            </span>
          </h2>

          {/* Description */}
          <p className="mt-5 max-w-lg text-base leading-7 text-zinc-400">
            Need a secure website, SSL certificate,
or cloud hosting?

Let&apos;s discuss your next project.
          </p>

          {/* Contact Cards */}
          <div className="mt-10 space-y-4">

            {/* Email */}
            <motion.div
              whileHover={{
                x: 8,
                borderColor: "rgba(34,211,238,.45)",
              }}
              className="group flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-2xl transition-all duration-300"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-300 transition-all duration-300 group-hover:scale-110">

                <Mail className="h-6 w-6" />

              </div>

              <div>
                <h4 className="font-semibold text-white">
                  Email Address
                </h4>

                <p className="mt-1 text-sm text-zinc-400">
                  contact@websecur.ma
                </p>
              </div>

            </motion.div>

            {/* Phone */}
            <motion.div
              whileHover={{
                x: 8,
                borderColor: "rgba(34,211,238,.45)",
              }}
              className="group flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-2xl transition-all duration-300"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-300 transition-all duration-300 group-hover:scale-110">

                <Phone className="h-6 w-6" />

              </div>

              <div>
                <h4 className="font-semibold text-white">
                  Phone Number
                </h4>

                <p className="mt-1 text-sm text-zinc-400">
                  +212 6 XX XX XX XX
                </p>
              </div>

            </motion.div>

            {/* Location */}
            <motion.div
              whileHover={{
                x: 8,
                borderColor: "rgba(34,211,238,.45)",
              }}
              className="group flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-2xl transition-all duration-300"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-300 transition-all duration-300 group-hover:scale-110">

                <MapPin className="h-6 w-6" />

              </div>

              <div>
                <h4 className="font-semibold text-white">
                  Location
                </h4>

                <p className="mt-1 text-sm text-zinc-400">
                  Casablanca, Morocco
                </p>
              </div>

            </motion.div>

          </div>
        </motion.div>
                {/* Right Side */}
        <motion.div variants={itemVariants}>
          <motion.form
            onSubmit={handleSubmit}
            whileHover={{ y: -4 }}
            className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-7 backdrop-blur-3xl shadow-[0_30px_80px_rgba(0,0,0,.45)]"
          >
            {/* Glow */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70" />

            <div className="mb-7">
              <h3 className="text-2xl font-bold text-white">
                Send a Message
              </h3>

              <p className="mt-2 text-sm text-zinc-400">
                Fill out the form below and we&apos;ll get back to you within 24
                hours.
              </p>
            </div>

            <div className="space-y-5">

              {/* Name */}
              <div className="relative">

                <User className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-cyan-400" />

                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full rounded-2xl border border-white/10 bg-zinc-900/60 py-3 pl-14 pr-5 text-white outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/10"
                />

                <label className="pointer-events-none absolute left-14 top-1/2 -translate-y-1/2 bg-transparent px-1 text-zinc-500 transition-all duration-300 peer-focus:top-0 peer-focus:text-xs peer-focus:text-cyan-300 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-cyan-300">
                  Full Name
                </label>

              </div>

              {/* Email */}
              <div className="relative">

                <Mail className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-cyan-400" />

                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full rounded-2xl border border-white/10 bg-zinc-900/60 py-3 pl-14 pr-5 text-white outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/10"
                />

                <label className="pointer-events-none absolute left-14 top-1/2 -translate-y-1/2 text-zinc-500 transition-all duration-300 peer-focus:top-0 peer-focus:text-xs peer-focus:text-cyan-300 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-cyan-300">
                  Email Address
                </label>

              </div>

              {/* Subject */}
              <div className="relative">

                <MessageSquare className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-cyan-400" />

                <input
                  type="text"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full rounded-2xl border border-white/10 bg-zinc-900/60 py-3 pl-14 pr-5 text-white outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/10"
                />

                <label className="pointer-events-none absolute left-14 top-1/2 -translate-y-1/2 text-zinc-500 transition-all duration-300 peer-focus:top-0 peer-focus:text-xs peer-focus:text-cyan-300 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-cyan-300">
                  Subject
                </label>

              </div>

              {/* Message */}
              <div className="relative">

                <textarea
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full resize-none rounded-2xl border border-white/10 bg-zinc-900/60 px-5 py-4 text-white outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/10"
                />

                <label className="pointer-events-none absolute left-5 top-5 text-zinc-500 transition-all duration-300 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-cyan-300 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-cyan-300">
                  Tell us about your project...
                </label>

              </div>
                            {/* Error */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300"
                >
                  {error}
                </motion.div>
              )}

              {/* Success */}
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300"
                >
                  <CheckCircle2 className="h-5 w-5" />

                  <span>
                    Your message has been sent successfully.
                  </span>
                </motion.div>
              )}

            </div>

            {/* Premium Button */}
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{
                scale: 1.02,
                y: -2,
              }}
              whileTap={{
  scale: 0.98,
}}
className="group relative mt-6 flex w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 px-6 py-3.5 font-semibold text-white shadow-[0_15px_40px_rgba(6,182,212,.35)] transition-all duration-300 hover:shadow-[0_25px_60px_rgba(6,182,212,.45)] disabled:cursor-not-allowed disabled:opacity-60"
>
              {/* Shine Animation */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

              <span className="relative flex items-center gap-3">
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </span>
            </motion.button>

            {/* Bottom Note */}
            <p className="mt-4 text-center text-xs leading-6 text-zinc-500">
              By submitting this form, you agree to our privacy policy.
              Your information is securely encrypted and never shared
              with third parties.
            </p>

          </motion.form>
        </motion.div>

      </motion.div>
    </section>
  );
}
