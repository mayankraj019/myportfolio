"use client";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { experience, leadership } from "@/lib/data";

function TimelineItem({
  title,
  subtitle,
  period,
  points,
  color = "#6366f1",
  i,
}: {
  title: string;
  subtitle: string;
  period: string;
  points: string[];
  color?: string;
  i: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: i * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      style={{ display: "flex", gap: 24, paddingBottom: 40, position: "relative" }}
    >
      {/* Left column — dot + line */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: 44 }}>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: i * 0.1 + 0.2, type: "spring" }}
          viewport={{ once: true }}
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            background: "rgba(99,102,241,0.1)",
            border: `2px solid ${color}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: `0 0 16px ${color}40`,
            flexShrink: 0,
          }}
        >
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: color }} />
        </motion.div>
        <div style={{ flex: 1, width: 2, background: "linear-gradient(to bottom, rgba(99,102,241,0.4), transparent)", minHeight: 40 }} />
      </div>

      {/* Right — card */}
      <motion.div
        whileHover={{ y: -4 }}
        className="glass-card glass-card-hover"
        style={{ flex: 1, padding: "20px 24px" }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
          <div>
            <h3 style={{ fontFamily: "var(--font-space)", fontSize: "1.1rem", fontWeight: 700, color: "#f1f5f9" }}>{title}</h3>
            <p style={{ color: color, fontSize: "0.85rem", fontWeight: 600, marginTop: 2 }}>{subtitle}</p>
          </div>
          <span style={{ padding: "4px 12px", borderRadius: 999, background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)", color: "#6366f1", fontSize: "0.75rem", fontWeight: 600 }}>
            {period}
          </span>
        </div>
        <ul style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {points.map((p) => (
            <li key={p} style={{ display: "flex", gap: 10, color: "#64748b", fontSize: "0.875rem", lineHeight: 1.6 }}>
              <span style={{ color: color, marginTop: 3, flexShrink: 0 }}>▸</span>
              {p}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }} className="exp-grid">
        {/* Experience */}
        <div>
          <div className="section-tag"><span className="neon-dot" /> Experience</div>
          <h2 style={{ fontFamily: "var(--font-space)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: 40 }}>
            Work <span className="gradient-text">Experience</span>
          </h2>
          {experience.map((exp, i) => (
            <TimelineItem
              key={exp.company}
              title={exp.company}
              subtitle={exp.role}
              period={exp.period}
              points={exp.points}
              i={i}
            />
          ))}
        </div>

        {/* Leadership */}
        <div>
          <div className="section-tag"><span className="neon-dot" style={{ background: "#8b5cf6", boxShadow: "0 0 8px #8b5cf6" }} /> Leadership</div>
          <h2 style={{ fontFamily: "var(--font-space)", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: 40 }}>
            <span className="gradient-text">Leadership</span> Roles
          </h2>
          {leadership.map((l, i) => (
            <TimelineItem
              key={l.org}
              title={l.org}
              subtitle={l.role}
              period={l.period}
              points={l.points}
              color="#8b5cf6"
              i={i}
            />
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){.exp-grid{grid-template-columns:1fr !important;gap:40px !important;}}`}</style>
    </SectionWrapper>
  );
}
