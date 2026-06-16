"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // mailto fallback
    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`);
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`);
    window.location.href = `mailto:contact@khizer.dev?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 relative"
      style={{ background: "var(--color-bg-primary)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 80%, rgba(0,229,255,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="section-container relative z-10 max-w-2xl mx-auto">
        <SectionHeading
          title="GET IN TOUCH"
          subtitle="Contact"
          accentColor="#00e5ff"
          align="center"
        />

        <motion.form
          className="glass-panel p-8 flex flex-col gap-5"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="contact-name"
                className="block text-xs font-mono tracking-wider mb-2"
                style={{ color: "var(--color-text-muted)" }}
              >
                NAME
              </label>
              <input
                id="contact-name"
                type="text"
                value={formState.name}
                onChange={(e) =>
                  setFormState((s) => ({ ...s, name: e.target.value }))
                }
                className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-300 focus:ring-1"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid var(--color-border-subtle)",
                  color: "var(--color-text-primary)",
                }}
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="block text-xs font-mono tracking-wider mb-2"
                style={{ color: "var(--color-text-muted)" }}
              >
                EMAIL
              </label>
              <input
                id="contact-email"
                type="email"
                value={formState.email}
                onChange={(e) =>
                  setFormState((s) => ({ ...s, email: e.target.value }))
                }
                className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-300 focus:ring-1"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid var(--color-border-subtle)",
                  color: "var(--color-text-primary)",
                }}
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="block text-xs font-mono tracking-wider mb-2"
              style={{ color: "var(--color-text-muted)" }}
            >
              MESSAGE
            </label>
            <textarea
              id="contact-message"
              value={formState.message}
              onChange={(e) =>
                setFormState((s) => ({ ...s, message: e.target.value }))
              }
              rows={5}
              className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-300 resize-none focus:ring-1"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid var(--color-border-subtle)",
                color: "var(--color-text-primary)",
              }}
              placeholder="Tell me about your project or opportunity..."
              required
            />
          </div>

          <motion.button
            type="submit"
            id="contact-submit"
            className="w-full py-3.5 rounded-lg text-sm font-medium font-mono tracking-wider transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, rgba(0,229,255,0.15), rgba(0,255,136,0.15))",
              border: "1px solid rgba(0,229,255,0.3)",
              color: "#00e5ff",
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            SEND MESSAGE
          </motion.button>
        </motion.form>

        {/* Social links */}
        <motion.div
          className="flex justify-center gap-6 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {[
            {
              label: "GitHub",
              href: "https://github.com/aimansabir",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              ),
            },
            {
              label: "LinkedIn",
              href: "https://linkedin.com/in/muhammadkhizer",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              ),
            },
            {
              label: "Email",
              href: "mailto:contact@khizer.dev",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              ),
            },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              id={`social-${social.label.toLowerCase()}`}
              className="p-3 rounded-lg transition-all duration-300 hover:scale-110"
              style={{
                color: "var(--color-text-muted)",
                border: "1px solid var(--color-border-subtle)",
              }}
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
