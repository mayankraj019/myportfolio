"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            position: "fixed",
            inset: 0,
            background: "#030712",
            zIndex: 99999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          {/* Orb rings */}
          <div style={{ position: "relative", width: 100, height: 100 }}>
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                style={{
                  position: "absolute",
                  inset: i * 12,
                  borderRadius: "50%",
                  border: `2px solid`,
                  borderColor:
                    i === 0
                      ? "rgba(99,102,241,0.8)"
                      : i === 1
                      ? "rgba(139,92,246,0.5)"
                      : "rgba(56,189,248,0.3)",
                }}
                animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                transition={{ duration: 2 + i, repeat: Infinity, ease: "linear" }}
              />
            ))}
            {/* Center dot */}
            <motion.div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "#6366f1",
                boxShadow: "0 0 20px #6366f1",
              }}
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            />
          </div>

          <motion.p
            style={{
              fontFamily: "var(--font-space), sans-serif",
              fontSize: "0.85rem",
              letterSpacing: "0.3em",
              color: "rgba(99,102,241,0.8)",
              textTransform: "uppercase",
            }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Loading Portfolio
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
