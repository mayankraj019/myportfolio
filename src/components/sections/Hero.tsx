"use client";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { personalInfo, socialLinks } from "@/lib/data";

const ParticleField = dynamic(() => import("@/components/canvas/ParticleField"), {
  ssr: false,
  loading: () => null,
});

const SocialIcon = ({ link }: { link: (typeof socialLinks)[0] }) => {
  const icons: Record<string, string> = {
    github: "⬡",
    linkedin: "in",
    leetcode: "lc",
    codechef: "cc",
  };
  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.15, y: -3 }}
      whileTap={{ scale: 0.95 }}
      title={link.label}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 44,
        height: 44,
        borderRadius: 10,
        background: "rgba(99,102,241,0.1)",
        border: "1px solid rgba(99,102,241,0.3)",
        color: "#94a3b8",
        textDecoration: "none",
        fontSize: "0.75rem",
        fontWeight: 700,
        transition: "all 0.2s",
      }}
    >
      {link.label.slice(0, 2).toUpperCase()}
    </motion.a>
  );
};

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const rotateX = useTransform(smoothY, [-300, 300], [8, -8]);
  const rotateY = useTransform(smoothX, [-500, 500], [-8, 8]);

  const [roleIdx, setRoleIdx] = useState(0);
  const roles = personalInfo.roles;

  useEffect(() => {
    const iv = setInterval(() => setRoleIdx((i) => (i + 1) % roles.length), 2500);
    return () => clearInterval(iv);
  }, [roles.length]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    mouseX.set(e.clientX - rect.width / 2);
    mouseY.set(e.clientY - rect.height / 2);
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(79,70,229,0.15) 0%, transparent 70%)",
      }}
    >
      {/* 3D Canvas Background */}
      <div className="canvas-container">
        <ParticleField />
      </div>

      {/* Grid pattern */}
      <div
        className="grid-bg"
        style={{ position: "absolute", inset: 0, opacity: 0.4, pointerEvents: "none" }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "0 24px",
          maxWidth: 900,
        }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}
        >
          <div className="section-tag">
            <span className="neon-dot" />
            Available for opportunities
          </div>
        </motion.div>

        {/* Name */}
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d", transformPerspective: 1000 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{
              fontFamily: "var(--font-space), sans-serif",
              fontSize: "clamp(3rem, 8vw, 7rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: 16,
            }}
          >
            <span style={{ color: "#f1f5f9", display: "inline-block" }}>
              {"Mayank".split("").map((char, i) => (
                <motion.span
                  key={`m-${i}`}
                  style={{ display: "inline-block" }}
                  whileHover={{ 
                    y: -12,
                    scale: 1.1,
                    color: "#38bdf8",
                    textShadow: "0px 4px 20px rgba(56, 189, 248, 0.8)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {char}
                </motion.span>
              ))}
            </span>{" "}
            <span className="gradient-text" style={{ display: "inline-block" }}>
              {"Raj".split("").map((char, i) => (
                <motion.span
                  key={`r-${i}`}
                  style={{ display: "inline-block" }}
                  whileHover={{ 
                    y: -12,
                    scale: 1.1,
                    textShadow: "0px 4px 20px rgba(167, 139, 250, 0.8)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </motion.h1>
        </motion.div>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
            fontWeight: 600,
            color: "#94a3b8",
            marginBottom: 12,
            height: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <span style={{ color: "#6366f1" }}>{"<"}</span>
          <motion.span
            key={roleIdx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="gradient-text-warm"
          >
            {roles[roleIdx]}
          </motion.span>
          <span style={{ color: "#6366f1" }}>{"/>"}</span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          style={{
            fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
            color: "#64748b",
            maxWidth: 560,
            margin: "0 auto 48px",
            lineHeight: 1.7,
          }}
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 }}
        >
          <a href="#projects" className="btn-glow" style={{ fontSize: "0.95rem" }}>
            <span>View Projects</span>
          </a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, borderColor: "rgba(99,102,241,0.6)" }}
            whileTap={{ scale: 0.97 }}
            style={{
              textDecoration: "none",
              padding: "12px 28px",
              borderRadius: 8,
              border: "1.5px solid rgba(99,102,241,0.35)",
              color: "#94a3b8",
              fontSize: "0.95rem",
              fontWeight: 600,
              transition: "all 0.3s ease",
              background: "rgba(99,102,241,0.05)",
            }}
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          style={{ display: "flex", gap: 12, justifyContent: "center" }}
        >
          {socialLinks.map((link) => (
            <SocialIcon key={link.label} link={link} />
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span style={{ fontSize: "0.7rem", color: "#475569", letterSpacing: "0.15em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <motion.div
          style={{
            width: 1.5,
            height: 40,
            background: "linear-gradient(to bottom, #6366f1, transparent)",
          }}
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>

      {/* Ambient glows */}
      <div style={{ position: "absolute", top: "20%", left: "10%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "20%", right: "10%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
    </section>
  );
}
