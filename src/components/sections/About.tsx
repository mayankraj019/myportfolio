"use client";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const stats = [
  { value: "2+", label: "Years Coding" },
  { value: "10+", label: "Projects Built" },
  { value: "150+", label: "Students Mentored" },
  { value: "99.95%", label: "MHT CET Percentile" },
];

export default function About() {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, transparent, rgba(79,70,229,0.04) 50%, transparent)",
      }}
    >
      <SectionWrapper id="about">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}
          className="about-grid"
        >
          {/* Left: text */}
          <div>
            <div className="section-tag">
              <span className="neon-dot" /> About Me
            </div>
            <h2 style={{ fontFamily: "var(--font-space)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.2, marginBottom: 24 }}>
              A Developer Who{" "}
              <span className="gradient-text">Thinks Differently</span>
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, color: "#94a3b8", fontSize: "1rem", lineHeight: 1.8 }}>
              <p>
                I&apos;m <strong style={{ color: "#f1f5f9" }}>Mayank Raj</strong>, a Computer Science undergraduate at
                MIT World Peace University. I build full-stack, AI-powered applications that bridge the gap between
                cutting-edge research and practical engineering.
              </p>
              <p>
                With hands-on internship exposure as a Campus Ambassador at{" "}
                <strong style={{ color: "#6366f1" }}>Pregrad</strong>, I understand both the technical and
                human sides of software. I&apos;ve participated in the{" "}
                <strong style={{ color: "#6366f1" }}>Smart India Hackathon</strong> and led AI workshops, mentoring
                150+ students on Python and machine learning.
              </p>
              <p>
                Passionate about <strong style={{ color: "#f1f5f9" }}>scalable systems</strong>, computer vision,
                and making AI accessible — I believe the best code is the code that solves real problems.
              </p>
            </div>

            {/* CTA */}
            <div style={{ marginTop: 32, display: "flex", gap: 12 }}>
              <a
                href="mailto:mayankrafiganj19@gmail.com"
                className="btn-glow"
                style={{ fontSize: "0.875rem" }}
              >
                <span>Get In Touch</span>
              </a>
              <a
                href="https://github.com/mayankraj019"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  padding: "12px 24px",
                  borderRadius: 8,
                  border: "1.5px solid rgba(99,102,241,0.3)",
                  color: "#94a3b8",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                }}
              >
                GitHub Profile
              </a>
            </div>
          </div>

          {/* Right: visual */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Stats grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="glass-card"
                  style={{ padding: "24px 20px", textAlign: "center" }}
                >
                  <div className="gradient-text" style={{ fontSize: "2rem", fontWeight: 800, fontFamily: "var(--font-space)" }}>
                    {stat.value}
                  </div>
                  <div style={{ color: "#64748b", fontSize: "0.8rem", marginTop: 6, fontWeight: 500 }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tech highlight */}
            <div className="glass-card" style={{ padding: 24 }}>
              <p style={{ color: "#475569", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16, fontWeight: 700 }}>
                Current Stack
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["Next.js", "React", "Python", "Node.js", "TypeScript", "MongoDB", "AWS"].map((t) => (
                  <span
                    key={t}
                    style={{
                      padding: "5px 12px",
                      borderRadius: 999,
                      background: "rgba(99,102,241,0.1)",
                      border: "1px solid rgba(99,102,241,0.25)",
                      color: "#a78bfa",
                      fontSize: "0.8rem",
                      fontWeight: 500,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          }
        `}</style>
      </SectionWrapper>
    </div>
  );
}
