"use client";

import { useId } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface GpsBeaconProps {
  className?: string;
  /** Visual size of the pin */
  size?: "sm" | "md" | "lg";
}

const SIZE_MAP = {
  sm: { container: "h-40 w-40", pin: 80 },
  md: { container: "h-56 w-56 sm:h-64 sm:w-64", pin: 120 },
  lg: { container: "h-72 w-72 sm:h-80 sm:w-80", pin: 150 },
} as const;

/**
 * Persuasive 3D-style location pin with pulsing radar waves and a soft floor reflection.
 * Pure SVG + framer-motion — no images.
 */
export function GpsBeacon({ className, size = "md" }: GpsBeaconProps) {
  const cfg = SIZE_MAP[size];
  const rawId = useId();
  const id = rawId.replace(/:/g, "");
  const bodyId = `gps-pin-body-${id}`;
  const highlightId = `gps-pin-highlight-${id}`;
  const bottomId = `gps-pin-bottom-${id}`;

  return (
    <div
      className={cn(
        "relative mx-auto flex items-end justify-center",
        cfg.container,
        className
      )}
      aria-hidden="true"
    >
      {/* ─── Background radial glow ─── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 65%, rgba(59,130,246,0.22), rgba(59,130,246,0.06) 45%, transparent 70%)",
        }}
      />

      {/* ─── Decorative bar chart silhouette behind pin ─── */}
      <div className="absolute inset-x-0 bottom-6 mx-auto flex h-16 w-3/4 items-end justify-center gap-1.5 opacity-30 sm:h-20">
        {[18, 32, 22, 46, 30, 52, 38, 64, 44, 28].map((h, i) => (
          <motion.span
            key={i}
            initial={{ scaleY: 0.4 }}
            animate={{ scaleY: [0.4, 1, 0.6, 0.9, 0.5] }}
            transition={{
              duration: 4 + i * 0.2,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: i * 0.08,
            }}
            style={{ height: `${h}%` }}
            className="w-2 origin-bottom rounded-t-sm bg-gradient-to-t from-[#3B82F6]/35 to-[#60A5FA]/15"
          />
        ))}
      </div>

      {/* ─── Echo waves expanding from base ─── */}
      <div className="absolute inset-x-0 bottom-2 flex justify-center">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            initial={{ scale: 0.45, opacity: 0.55 }}
            animate={{ scale: 1.7, opacity: 0 }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              delay: i * 0.93,
              ease: "easeOut",
            }}
            className="absolute size-28 rounded-full border-[1.5px] border-[#3B82F6]/45 sm:size-32"
          />
        ))}
        {/* Floor light reflection */}
        <span className="absolute bottom-0 h-2 w-24 rounded-full bg-[#3B82F6]/40 blur-md sm:w-28" />
      </div>

      {/* ─── Floating pin ─── */}
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 mb-4"
      >
        {/* Pin shadow */}
        <span
          className="absolute left-1/2 top-full mt-2 h-3 w-14 -translate-x-1/2 rounded-full bg-[#1E40AF]/30 blur-lg"
        />

        <svg
          width={cfg.pin}
          height={cfg.pin * 1.3}
          viewBox="0 0 100 130"
          className="drop-shadow-[0_18px_30px_rgba(29,78,216,0.45)]"
        >
          <defs>
            <linearGradient id={bodyId} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7CC0FF" />
              <stop offset="48%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1E40AF" />
            </linearGradient>
            <radialGradient id={highlightId} cx="0.3" cy="0.22" r="0.55">
              <stop offset="0%" stopColor="white" stopOpacity="0.55" />
              <stop offset="55%" stopColor="white" stopOpacity="0.06" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <radialGradient id={bottomId} cx="0.5" cy="0.95" r="0.4">
              <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Pin body */}
          <path
            d="M50 0 C22.4 0 0 22.4 0 50 C0 87.5 50 130 50 130 S100 87.5 100 50 C100 22.4 77.6 0 50 0 Z"
            fill={`url(#${bodyId})`}
          />
          {/* Bottom shading for 3D feel */}
          <path
            d="M50 0 C22.4 0 0 22.4 0 50 C0 87.5 50 130 50 130 S100 87.5 100 50 C100 22.4 77.6 0 50 0 Z"
            fill={`url(#${bottomId})`}
          />
          {/* Top highlight */}
          <path
            d="M50 0 C22.4 0 0 22.4 0 50 C0 87.5 50 130 50 130 S100 87.5 100 50 C100 22.4 77.6 0 50 0 Z"
            fill={`url(#${highlightId})`}
          />
          {/* Inner ring (soft halo) */}
          <circle cx="50" cy="48" r="22" fill="white" opacity="0.25" />
          {/* Inner white core */}
          <circle cx="50" cy="48" r="15" fill="white" />
          {/* Tiny center dot */}
          <circle cx="50" cy="48" r="5" fill="#3B82F6" opacity="0.9" />
        </svg>
      </motion.div>
    </div>
  );
}
