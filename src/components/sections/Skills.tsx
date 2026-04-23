"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { skills } from "@/lib/data";

type Category = keyof typeof skills;

const categoryIcons: Record<Category, string> = {
  Languages: "⌨️",
  Frontend: "🎨",
  Backend: "⚙️",
  "DB & Cloud": "☁️",
  Tools: "🔧",
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState<Category>("Languages");
  const categories = Object.keys(skills) as Category[];

  return (
    <SectionWrapper id="skills">
      <div style={{ textAlign: "center", marginBottom: 60 }}>
        <div className="section-tag" style={{ justifyContent: "center" }}>
          <span className="neon-dot" /> Skills
        </div>
        <h2 style={{ fontFamily: "var(--font-space)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.2 }}>
          My <span className="gradient-text">Tech Arsenal</span>
        </h2>
        <p style={{ color: "#64748b", marginTop: 12, fontSize: "1rem" }}>
          Technologies I use to bring ideas to life
        </p>
      </div>

      {/* Category Tabs */}
      <div
        style={{
          display: "flex",
          gap: 8,
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: 48,
        }}
      >
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setActiveTab(cat)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: "10px 20px",
              borderRadius: 999,
              border: "1.5px solid",
              borderColor: activeTab === cat ? "#6366f1" : "rgba(99,102,241,0.2)",
              background: activeTab === cat ? "rgba(99,102,241,0.15)" : "transparent",
              color: activeTab === cat ? "#a78bfa" : "#64748b",
              cursor: "pointer",
              fontSize: "0.875rem",
              fontWeight: 600,
              transition: "all 0.2s ease",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span>{categoryIcons[cat]}</span>
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: 16,
        }}
      >
        {skills[activeTab].map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="glass-card glass-card-hover"
            style={{ padding: "20px 24px" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
              <span style={{ fontWeight: 700, color: "#e2e8f0", fontSize: "0.95rem" }}>{skill.name}</span>
              <span style={{ fontSize: "0.8rem", color: "#6366f1", fontWeight: 700 }}>{skill.level}%</span>
            </div>
            {/* Progress bar */}
            <div
              style={{
                height: 4,
                borderRadius: 999,
                background: "rgba(99,102,241,0.1)",
                overflow: "hidden",
              }}
            >
              <motion.div
                className="skill-bar-fill"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ delay: i * 0.06 + 0.2, duration: 1, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Skill cloud decoration */}
      <div
        style={{
          marginTop: 64,
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
          justifyContent: "center",
          opacity: 0.5,
        }}
      >
        {["React", "Next.js", "TypeScript", "Node.js", "Python", "MongoDB", "AWS", "Git", "OpenCV", "Linux", "SQL", "Flutter"].map((t) => (
          <span
            key={t}
            style={{
              padding: "6px 16px",
              borderRadius: 999,
              border: "1px solid rgba(99,102,241,0.15)",
              color: "#475569",
              fontSize: "0.8rem",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </SectionWrapper>
  );
}
