"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import TiltCard from "@/components/ui/TiltCard";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <div style={{ background: "linear-gradient(180deg, transparent, rgba(79,70,229,0.04) 50%, transparent)" }}>
      <SectionWrapper id="projects">
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="section-tag" style={{ justifyContent: "center" }}>
            <span className="neon-dot" /> Projects
          </div>
          <h2 style={{ fontFamily: "var(--font-space)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700 }}>
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p style={{ color: "#64748b", marginTop: 12 }}>
            Projects that demonstrate real-world impact
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 32 }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <TiltCard style={{ height: "100%" }}>
                <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                  {/* Preview image */}
                  <div style={{ position: "relative", height: 200, overflow: "hidden", borderRadius: "12px 12px 0 0", marginBottom: 0 }}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    <div style={{
                      position: "absolute", inset: 0,
                      background: `linear-gradient(to bottom, transparent 40%, ${project.color}33 100%)`,
                    }} />
                    {/* Accent bar */}
                    <div style={{
                      position: "absolute", bottom: 0, left: 0, right: 0, height: 3,
                      background: `linear-gradient(90deg, ${project.color}, #8b5cf6)`,
                    }} />
                  </div>

                  {/* Content */}
                  <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <h3 style={{ fontFamily: "var(--font-space)", fontSize: "1.35rem", fontWeight: 700, color: "#f1f5f9", marginBottom: 4 }}>
                      {project.title}
                    </h3>
                    <p style={{ color: project.color, fontSize: "0.8rem", fontWeight: 600, marginBottom: 12, letterSpacing: "0.05em" }}>
                      {project.subtitle}
                    </p>
                    <p style={{ color: "#64748b", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: 20, flex: 1 }}>
                      {project.description}
                    </p>

                    {/* Stats */}
                    <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
                      {project.stats.map((s) => (
                        <div key={s.label} style={{ flex: 1, textAlign: "center", padding: "10px 8px", background: "rgba(99,102,241,0.06)", borderRadius: 8, border: "1px solid rgba(99,102,241,0.15)" }}>
                          <div style={{ fontSize: "1rem", fontWeight: 800, color: "#a78bfa", fontFamily: "var(--font-space)" }}>{s.value}</div>
                          <div style={{ fontSize: "0.65rem", color: "#475569", marginTop: 2 }}>{s.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tech stack */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                      {project.tech.map((t) => (
                        <span key={t} style={{ padding: "3px 10px", borderRadius: 999, background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.2)", color: "#94a3b8", fontSize: "0.75rem" }}>
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div style={{ display: "flex", gap: 10 }}>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.04 }}
                        className="btn-glow"
                        style={{ flex: 1, textAlign: "center", fontSize: "0.8rem", padding: "10px 16px", textDecoration: "none" }}
                      >
                        <span>GitHub</span>
                      </motion.a>
                      <motion.button
                        whileHover={{ scale: 1.04 }}
                        disabled={!project.demo}
                        style={{
                          flex: 1,
                          padding: "10px 16px",
                          borderRadius: 8,
                          border: "1px solid rgba(99,102,241,0.3)",
                          background: "transparent",
                          color: project.demo ? "#94a3b8" : "#334155",
                          cursor: project.demo ? "pointer" : "not-allowed",
                          fontSize: "0.8rem",
                          fontWeight: 600,
                        }}
                      >
                        {project.demo ? "Live Demo" : "Coming Soon"}
                      </motion.button>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
