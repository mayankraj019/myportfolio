"use client";
import Loader from "@/components/ui/Loader";
import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";

function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(99,102,241,0.12)",
        padding: "32px 24px",
        textAlign: "center",
        background: "rgba(3,7,18,0.8)",
      }}
    >
      <p style={{ color: "#334155", fontSize: "0.85rem" }}>
        Designed &amp; Built by{" "}
        <span
          style={{
            background: "linear-gradient(135deg, #6366f1, #a78bfa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontWeight: 700,
          }}
        >
          Mayank Raj
        </span>{" "}
        · {new Date().getFullYear()} · All rights reserved
      </p>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Loader />
      <CustomCursor />
      <div
        style={{
          background: "var(--bg-primary)",
          minHeight: "100vh",
          position: "relative",
        }}
        className="noise"
      >
        {/* Global ambient background glow */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            maxWidth: 900,
            height: 600,
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(79,70,229,0.08) 0%, transparent 100%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <Navbar />

        <main style={{ position: "relative", zIndex: 1 }}>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Achievements />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}
