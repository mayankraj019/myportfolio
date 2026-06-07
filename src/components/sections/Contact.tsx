"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { personalInfo, socialLinks } from "@/lib/data";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resData = await response.json();
      if (!response.ok) {
        throw new Error(resData.error || "Failed to send message");
      }

      setSent(true);
      reset();
      setTimeout(() => setSent(false), 5000);
    } catch (error: any) {
      console.error("Submission error:", error);
      alert(error.message || "Something went wrong. Please try again or contact me directly.");
    }
  };

  const contactDetails = [
    { icon: "✉️", label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: "📞", label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: "🌐", label: "GitHub", value: "github.com/mayankraj019", href: socialLinks[0].url },
    { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/mayank-raj", href: socialLinks[1].url },
  ];

  const inputStyle = (hasError: boolean): React.CSSProperties => ({
    width: "100%",
    padding: "14px 18px",
    borderRadius: 10,
    border: `1.5px solid ${hasError ? "#ef4444" : "rgba(99,102,241,0.25)"}`,
    background: "rgba(15,23,42,0.6)",
    color: "#f1f5f9",
    fontSize: "0.95rem",
    outline: "none",
    fontFamily: "var(--font-inter), sans-serif",
    transition: "border-color 0.2s ease",
    boxSizing: "border-box",
  });

  return (
    <SectionWrapper id="contact">
      <div style={{ textAlign: "center", marginBottom: 60 }}>
        <div className="section-tag" style={{ justifyContent: "center" }}>
          <span className="neon-dot" /> Contact
        </div>
        <h2 style={{ fontFamily: "var(--font-space)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700 }}>
          Let&apos;s <span className="gradient-text">Build Together</span>
        </h2>
        <p style={{ color: "#64748b", marginTop: 12, maxWidth: 480, margin: "12px auto 0" }}>
          Have a project in mind or want to collaborate? I&apos;d love to hear from you.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 48, alignItems: "start" }} className="contact-grid">
        {/* Contact info */}
        <div>
          <h3 style={{ fontFamily: "var(--font-space)", fontSize: "1.2rem", fontWeight: 700, color: "#f1f5f9", marginBottom: 24 }}>
            Reach out directly
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {contactDetails.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.label !== "Email" && c.label !== "Phone" ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ x: 6 }}
                style={{
                  display: "flex",
                  gap: 16,
                  alignItems: "center",
                  padding: "16px 20px",
                  borderRadius: 12,
                  background: "rgba(15,23,42,0.5)",
                  border: "1px solid rgba(99,102,241,0.15)",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
              >
                <span style={{ fontSize: "1.3rem" }}>{c.icon}</span>
                <div>
                  <div style={{ color: "#475569", fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 2 }}>
                    {c.label}
                  </div>
                  <div style={{ color: "#94a3b8", fontSize: "0.875rem", fontWeight: 500 }}>{c.value}</div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Social links */}
          <div style={{ marginTop: 32 }}>
            <p style={{ color: "#475569", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>
              Find me on
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {socialLinks.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08, y: -3 }}
                  style={{
                    padding: "8px 18px",
                    borderRadius: 999,
                    border: "1px solid rgba(99,102,241,0.3)",
                    color: "#6366f1",
                    textDecoration: "none",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    background: "rgba(99,102,241,0.06)",
                  }}
                >
                  {s.label}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card"
          style={{ padding: "36px 32px" }}
        >
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ textAlign: "center", padding: "40px 0" }}
            >
              <div style={{ fontSize: "3rem", marginBottom: 16 }}>🚀</div>
              <h3 style={{ fontFamily: "var(--font-space)", fontSize: "1.3rem", fontWeight: 700, color: "#f1f5f9", marginBottom: 8 }}>
                Message Sent!
              </h3>
              <p style={{ color: "#64748b" }}>Thanks for reaching out. I&apos;ll get back to you soon!</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <label style={{ display: "block", color: "#64748b", fontSize: "0.8rem", fontWeight: 600, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    Name *
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    placeholder="John Doe"
                    style={inputStyle(!!errors.name)}
                  />
                  {errors.name && <p style={{ color: "#ef4444", fontSize: "0.75rem", marginTop: 4 }}>{errors.name.message}</p>}
                </div>
                <div>
                  <label style={{ display: "block", color: "#64748b", fontSize: "0.8rem", fontWeight: 600, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    Email *
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                    })}
                    placeholder="john@example.com"
                    style={inputStyle(!!errors.email)}
                  />
                  {errors.email && <p style={{ color: "#ef4444", fontSize: "0.75rem", marginTop: 4 }}>{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <label style={{ display: "block", color: "#64748b", fontSize: "0.8rem", fontWeight: 600, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Subject *
                </label>
                <input
                  {...register("subject", { required: "Subject is required" })}
                  placeholder="Let's collaborate on..."
                  style={inputStyle(!!errors.subject)}
                />
                {errors.subject && <p style={{ color: "#ef4444", fontSize: "0.75rem", marginTop: 4 }}>{errors.subject.message}</p>}
              </div>

              <div>
                <label style={{ display: "block", color: "#64748b", fontSize: "0.8rem", fontWeight: 600, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Message *
                </label>
                <textarea
                  {...register("message", { required: "Message is required", minLength: { value: 20, message: "At least 20 characters" } })}
                  placeholder="Tell me about your project..."
                  rows={5}
                  style={{ ...inputStyle(!!errors.message), resize: "vertical" }}
                />
                {errors.message && <p style={{ color: "#ef4444", fontSize: "0.75rem", marginTop: 4 }}>{errors.message.message}</p>}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-glow"
                style={{ fontSize: "0.95rem", width: "100%", opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? "not-allowed" : "pointer" }}
              >
                <span>{isSubmitting ? "Sending..." : "Send Message →"}</span>
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>

      <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr !important;gap:32px !important;}}`}</style>
    </SectionWrapper>
  );
}
