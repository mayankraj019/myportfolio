"use client";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { achievements, education } from "@/lib/data";

const icons: Record<string, string> = {
  trophy: "🏆",
  star: "⭐",
  certificate: "🎓",
};

export default function Achievements() {
  return (
    <div style={{ background: "linear-gradient(180deg, transparent, rgba(79,70,229,0.04) 50%, transparent)" }}>
      <SectionWrapper id="achievements">
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="section-tag" style={{ justifyContent: "center" }}>
            <span className="neon-dot" /> Achievements
          </div>
          <h2 style={{ fontFamily: "var(--font-space)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700 }}>
            Milestones & <span className="gradient-text">Recognition</span>
          </h2>
        </div>

        {/* Achievements */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24, marginBottom: 80 }}>
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card"
              style={{ padding: "32px 28px", textAlign: "center", border: `1px solid ${a.color}25` }}
            >
              <motion.div
                style={{
                  fontSize: "2.5rem",
                  marginBottom: 16,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  background: `${a.color}15`,
                  border: `2px solid ${a.color}35`,
                  boxShadow: `0 0 24px ${a.color}20`,
                }}
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
              >
                {icons[a.icon]}
              </motion.div>
              <h3 style={{ fontFamily: "var(--font-space)", fontSize: "1.05rem", fontWeight: 700, color: "#f1f5f9", marginBottom: 10 }}>
                {a.title}
              </h3>
              <p style={{ color: "#64748b", fontSize: "0.875rem", lineHeight: 1.65 }}>{a.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <div>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div className="section-tag" style={{ justifyContent: "center" }}>
              <span className="neon-dot" /> Education
            </div>
            <h2 style={{ fontFamily: "var(--font-space)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700 }}>
              Academic <span className="gradient-text">Background</span>
            </h2>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {education.map((edu, i) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="glass-card"
                style={{ maxWidth: 560, width: "100%", padding: "36px 40px", border: "1px solid rgba(99,102,241,0.25)" }}
              >
                <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                  <div style={{
                    width: 60, height: 60, borderRadius: 14, flexShrink: 0,
                    background: "linear-gradient(135deg, #4f46e5, #8b5cf6)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.5rem",
                    boxShadow: "0 0 20px rgba(99,102,241,0.3)",
                  }}>
                    🎓
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-space)", fontSize: "1.2rem", fontWeight: 700, color: "#f1f5f9", marginBottom: 6 }}>
                      {edu.institution}
                    </h3>
                    <p className="gradient-text" style={{ fontSize: "0.95rem", fontWeight: 600, marginBottom: 8 }}>
                      {edu.degree}
                    </p>
                    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                      <span style={{ color: "#64748b", fontSize: "0.85rem" }}>📅 {edu.period}</span>
                      <span style={{ color: "#64748b", fontSize: "0.85rem" }}>📍 {edu.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
