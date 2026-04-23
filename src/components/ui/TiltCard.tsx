"use client";
import { useRef, useCallback } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  intensity?: number;
}

export default function TiltCard({ children, className = "", style = {}, intensity = 10 }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(0, { stiffness: 300, damping: 30 });
  const rotateY = useSpring(0, { stiffness: 300, damping: 30 });
  const glowX = useSpring(50, { stiffness: 200, damping: 30 });
  const glowY = useSpring(50, { stiffness: 200, damping: 30 });

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      rotateY.set((x - 0.5) * intensity * 2);
      rotateX.set(-(y - 0.5) * intensity * 2);
      glowX.set(x * 100);
      glowY.set(y * 100);
    },
    [intensity, rotateX, rotateY, glowX, glowY]
  );

  const onMouseLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
    glowX.set(50);
    glowY.set(50);
  }, [rotateX, rotateY, glowX, glowY]);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 800,
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
      className={`glass-card glass-card-hover ${className}`}
    >
      {/* Moving glow */}
      <motion.div
        style={{
          position: "absolute",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
          left: useTransform(glowX, (v) => `calc(${v}% - 100px)`),
          top: useTransform(glowY, (v) => `calc(${v}% - 100px)`),
          zIndex: 0,
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </motion.div>
  );
}
