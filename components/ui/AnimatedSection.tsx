"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function AnimatedSection({
  children,
  className,
  style,
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const initial = {
    opacity: 0,
    ...(direction === "up" && { y: 40 }),
    ...(direction === "down" && { y: -40 }),
    ...(direction === "left" && { x: 40 }),
    ...(direction === "right" && { x: -40 }),
  };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : initial}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className,
  style,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: { staggerChildren: 0.07, delayChildren: delay },
        },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          },
        },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
