"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function SectionWrapper({ children, id, className = "", style = {} }: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`section-wrapper-main ${className}`}
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        ...style,
      }}
    >
      {children}
      <style>{`
        .section-wrapper-main#${id} { padding: 100px 24px; }
        @media (max-width: 768px) {
          .section-wrapper-main#${id} { padding: 60px 16px; }
        }
      `}</style>
    </motion.section>
  );
}
