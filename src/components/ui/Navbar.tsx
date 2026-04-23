"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { socialLinks } from "@/lib/data";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navItems.map((n) => n.href.slice(1));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: "16px 24px",
        transition: "background 0.3s ease, box-shadow 0.3s ease",
        background: scrolled
          ? "rgba(3, 7, 18, 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(99,102,241,0.15)"
          : "none",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <a href="#hero" style={{ textDecoration: "none" }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              fontFamily: "var(--font-space), sans-serif",
              fontSize: "1.3rem",
              fontWeight: 700,
            }}
          >
            <span className="gradient-text">MR</span>
            <span style={{ color: "rgba(99,102,241,0.6)", fontSize: "0.9rem" }}>{"</>"}</span>
          </motion.div>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: "flex", gap: "4px", alignItems: "center" }} className="hidden-mobile">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                textDecoration: "none",
                padding: "8px 14px",
                borderRadius: "8px",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: active === item.href.slice(1) ? "#6366f1" : "#94a3b8",
                background: active === item.href.slice(1) ? "rgba(99,102,241,0.1)" : "transparent",
                transition: "all 0.2s ease",
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-glow"
            style={{ marginLeft: 12, fontSize: "0.85rem", padding: "8px 20px" }}
          >
            <span>Hire Me</span>
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="show-mobile"
          style={{
            background: "rgba(99,102,241,0.1)",
            border: "1px solid rgba(99,102,241,0.3)",
            borderRadius: 8,
            padding: "8px 12px",
            color: "#6366f1",
            cursor: "pointer",
            fontSize: "1.2rem",
          }}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            background: "rgba(3,7,18,0.95)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(99,102,241,0.2)",
            borderRadius: 12,
            margin: "12px 24px 0",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              style={{
                textDecoration: "none",
                padding: "10px 16px",
                borderRadius: 8,
                color: "#94a3b8",
                fontSize: "0.9rem",
              }}
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </motion.header>
  );
}
