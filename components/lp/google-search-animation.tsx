"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  Search,
  Sparkles,
  Star,
  Store,
  TrendingUp,
} from "lucide-react";

import { WhatsappIcon } from "@/components/lp/whatsapp-icon";

/* ─── Configuração ─── */
const SEARCH_QUERY = "sua empresa";
const TOTAL_RESULTS = 128;
const USER_BUSINESS = {
  name: "Sua Empresa",
  category: "Sua categoria",
  distance: "0,3 km",
  rating: 4.9,
  reviews: 128,
  open: true,
  closesAt: "23h",
};

interface Competitor {
  name: string;
  category: string;
  distance: string;
  rating: number;
  reviews: number;
  open: boolean;
  initial: string;
  color: string;
  sponsored?: boolean;
}

const competitors: Competitor[] = [
  { name: "Pizzaria Bella Napoli", category: "Pizzaria", distance: "1,8 km", rating: 4.6, reviews: 312, open: true, initial: "B", color: "bg-[#EF4444]", sponsored: true },
  { name: "Forneria do Centro", category: "Pizzaria", distance: "2,1 km", rating: 4.2, reviews: 184, open: true, initial: "F", color: "bg-[#3B82F6]" },
  { name: "Pizza Express", category: "Pizzaria", distance: "2,4 km", rating: 3.9, reviews: 96, open: false, initial: "P", color: "bg-[#EAB308]" },
  { name: "Pizzaria do Chef", category: "Pizzaria", distance: "3,0 km", rating: 4.1, reviews: 142, open: true, initial: "C", color: "bg-[#8B5CF6]" },
  { name: "Quintal da Pizza", category: "Pizzaria", distance: "3,2 km", rating: 3.7, reviews: 71, open: true, initial: "Q", color: "bg-[#22C55E]" },
  { name: "Sabor Italiano", category: "Italiana", distance: "3,5 km", rating: 4.0, reviews: 108, open: true, initial: "S", color: "bg-[#EC4899]" },
  { name: "La Trattoria", category: "Italiana", distance: "3,8 km", rating: 4.3, reviews: 220, open: true, initial: "L", color: "bg-[#F97316]" },
  { name: "Don Vitto Pizzaria", category: "Pizzaria", distance: "4,1 km", rating: 3.8, reviews: 88, open: false, initial: "D", color: "bg-[#06B6D4]" },
  { name: "Nonna Pizza", category: "Pizzaria", distance: "4,5 km", rating: 4.0, reviews: 134, open: true, initial: "N", color: "bg-[#A855F7]" },
  { name: "Pizzaria Roma", category: "Pizzaria", distance: "4,8 km", rating: 3.6, reviews: 62, open: true, initial: "R", color: "bg-[#14B8A6]" },
  { name: "Mamma Mia", category: "Italiana", distance: "5,1 km", rating: 4.1, reviews: 156, open: true, initial: "M", color: "bg-[#F43F5E]" },
];

const PHASE_TYPING = 0;
const PHASE_SEARCHING = 1;
const PHASE_RESULTS_LOW = 2;
const PHASE_CLIMBING = 3;
const PHASE_TOP = 4;

/* ─── Star rating ─── */
function Stars({ rating, size = 11 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-[1px]">
      {[1, 2, 3, 4, 5].map((i) => {
        const filled = i <= Math.floor(rating);
        const half = !filled && i - 0.5 <= rating;
        return (
          <Star
            key={i}
            style={{ width: size, height: size }}
            className={
              filled
                ? "fill-[#EAB308] text-[#EAB308]"
                : half
                ? "fill-[#EAB308]/60 text-[#EAB308]"
                : "fill-gray-200 text-gray-200"
            }
          />
        );
      })}
    </div>
  );
}

/* ─── Mini Maps preview ─── */
function MiniMap({ isTop }: { isTop: boolean }) {
  return (
    <div className="relative h-[128px] overflow-hidden rounded-xl border border-[#CFDCEA] bg-[#EDF2F7] shadow-inner shadow-[#3B82F6]/5 sm:h-[136px]">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #EAF1F8 0%, #E1EBF4 45%, #DBE6F0 100%)",
        }}
      />
      <svg
        className="absolute inset-0 size-full"
        viewBox="0 0 240 128"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="mapBgGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F0F5FA" />
            <stop offset="55%" stopColor="#E5EDF5" />
            <stop offset="100%" stopColor="#D9E4EE" />
          </linearGradient>
          <linearGradient id="riverGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#A5C7E8" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#7FAED9" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#A5C7E8" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="parkGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#B7E0BD" />
            <stop offset="100%" stopColor="#8FCB99" />
          </linearGradient>
          <linearGradient id="buildingGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E4ECF4" />
            <stop offset="100%" stopColor="#C8D4E2" />
          </linearGradient>
          <filter id="mapShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="1" stdDeviation="0.6" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* Base */}
        <rect width="240" height="128" fill="url(#mapBgGradient)" />

        {/* River winding through */}
        <path
          d="M -10 102 Q 30 90, 65 96 T 130 80 T 195 70 T 250 65"
          stroke="url(#riverGradient)"
          strokeWidth="11"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M -10 102 Q 30 90, 65 96 T 130 80 T 195 70 T 250 65"
          stroke="#FFFFFF"
          strokeWidth="0.8"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* Highways (wider, beige) */}
        <path d="M -10 22 L 250 18" stroke="#F4D9A8" strokeWidth="10" opacity="0.75" />
        <path d="M -10 22 L 250 18" stroke="#FFF6E3" strokeWidth="2" strokeDasharray="5 4" />

        {/* Main streets (white) */}
        <path d="M -10 42 L 250 38" stroke="#FFFFFF" strokeWidth="6" />
        <path d="M -10 78 L 250 82" stroke="#FFFFFF" strokeWidth="6" />
        <path d="M 56 -8 L 52 138" stroke="#FFFFFF" strokeWidth="5" />
        <path d="M 142 -8 L 148 138" stroke="#FFFFFF" strokeWidth="5" />
        <path d="M 202 -8 L 207 138" stroke="#FFFFFF" strokeWidth="4" />

        {/* Secondary streets (lighter) */}
        <path d="M 26 -8 L 22 138" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.85" />
        <path d="M 98 -8 L 100 138" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.85" />
        <path d="M 175 -8 L 177 138" stroke="#FFFFFF" strokeWidth="2.2" opacity="0.8" />
        <path d="M -10 58 L 250 56" stroke="#FFFFFF" strokeWidth="2.2" opacity="0.75" />
        <path d="M -10 108 L 250 110" stroke="#FFFFFF" strokeWidth="2.2" opacity="0.7" />

        {/* Animated route (suggested path) */}
        <motion.path
          d="M 30 118 L 30 80 L 80 80 L 80 50 L 130 50 L 130 32 L 200 32"
          stroke="#3B82F6"
          strokeWidth="2.5"
          strokeDasharray="6 5"
          strokeLinecap="round"
          fill="none"
          opacity="0.8"
          animate={{ strokeDashoffset: [0, -22] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
        />

        {/* Parks (green, irregular shapes) */}
        <path
          d="M 18 95 Q 28 86, 40 88 Q 56 90, 60 102 Q 58 116, 44 118 Q 28 118, 20 110 Z"
          fill="url(#parkGradient)"
          filter="url(#mapShadow)"
        />
        <path
          d="M 165 16 Q 175 8, 195 12 Q 210 18, 208 30 Q 200 38, 180 36 Q 168 30, 165 22 Z"
          fill="url(#parkGradient)"
          filter="url(#mapShadow)"
        />
        <circle cx="113" cy="64" r="9" fill="url(#parkGradient)" opacity="0.85" />
        {/* Trees inside parks */}
        <circle cx="38" cy="100" r="2" fill="#7FB888" opacity="0.85" />
        <circle cx="45" cy="106" r="1.8" fill="#7FB888" opacity="0.85" />
        <circle cx="186" cy="22" r="2" fill="#7FB888" opacity="0.85" />
        <circle cx="180" cy="28" r="1.6" fill="#7FB888" opacity="0.85" />

        {/* Buildings (with shadow + gradient) */}
        <g filter="url(#mapShadow)">
          <rect x="11" y="46" width="13" height="11" rx="1.5" fill="url(#buildingGradient)" />
          <rect x="29" y="44" width="11" height="13" rx="1.5" fill="url(#buildingGradient)" />
          <rect x="62" y="13" width="14" height="10" rx="1.5" fill="url(#buildingGradient)" />
          <rect x="79" y="11" width="10" height="14" rx="1.5" fill="url(#buildingGradient)" />
          <rect x="62" y="62" width="18" height="12" rx="1.5" fill="url(#buildingGradient)" />
          <rect x="105" y="68" width="14" height="10" rx="1.5" fill="url(#buildingGradient)" />
          <rect x="124" y="64" width="10" height="14" rx="1.5" fill="url(#buildingGradient)" />
          <rect x="152" y="44" width="14" height="11" rx="1.5" fill="url(#buildingGradient)" />
          <rect x="180" y="46" width="11" height="9" rx="1.5" fill="url(#buildingGradient)" />
          <rect x="151" y="84" width="20" height="12" rx="1.5" fill="url(#buildingGradient)" />
          <rect x="174" y="86" width="13" height="10" rx="1.5" fill="url(#buildingGradient)" />
          <rect x="213" y="44" width="14" height="11" rx="1.5" fill="url(#buildingGradient)" />
          <rect x="213" y="60" width="10" height="14" rx="1.5" fill="url(#buildingGradient)" />
          <rect x="106" y="14" width="14" height="9" rx="1.5" fill="url(#buildingGradient)" />
          <rect x="125" y="13" width="10" height="11" rx="1.5" fill="url(#buildingGradient)" />
        </g>

        {/* Street labels (with subtle outline) */}
        <text
          x="91"
          y="30"
          fontSize="6"
          fill="#5C6873"
          fontFamily="system-ui"
          fontWeight="600"
          stroke="white"
          strokeWidth="2.2"
          paintOrder="stroke"
          strokeLinejoin="round"
        >
          Av. Brasil
        </text>
        <text
          x="155"
          y="74"
          fontSize="6"
          fill="#5C6873"
          fontFamily="system-ui"
          fontWeight="600"
          stroke="white"
          strokeWidth="2.2"
          paintOrder="stroke"
          strokeLinejoin="round"
        >
          R. das Flores
        </text>
        <text
          x="14"
          y="124"
          fontSize="5.5"
          fill="#7E8A95"
          fontFamily="system-ui"
          fontWeight="500"
          opacity="0.85"
        >
          Centro
        </text>
      </svg>

      <motion.div
        aria-hidden="true"
        animate={{ x: ["-140%", "260%"], opacity: [0, 0.55, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
        className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-transparent via-white/55 to-transparent blur-sm"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.18) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Competitor pins */}
      <motion.div
        animate={{ opacity: isTop ? 0.35 : 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0"
      >
        {[
          ["left-[17%] top-[31%] bg-[#EF4444]", 0],
          ["left-[79%] top-[31%] bg-[#EAB308]", 0.2],
          ["left-[23%] top-[77%] bg-[#F97316]", 0.4],
          ["left-[83%] top-[74%] bg-[#8B5CF6]", 0.6],
        ].map(([className, delay]) => (
          <motion.span
            key={className}
            animate={{ y: [0, -2, 0], scale: [1, 1.08, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: Number(delay) }}
            className={`absolute flex size-3 items-center justify-center rounded-full border-2 border-white shadow-md ${className}`}
          />
        ))}
      </motion.div>

      {/* User pin — central, com halo azul claro destacando */}
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: isTop ? [1.08, 1.16, 1.08] : [0.98, 1.03, 0.98] }}
        transition={{ duration: isTop ? 2.2 : 2.6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        {/* Soft blue halo (always visible) */}
        <motion.span
          animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.15, 0.4] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute -inset-2 rounded-full ${
            isTop ? "bg-[#22C55E]/40" : "bg-[#3B82F6]/35"
          }`}
        />
        {isTop && (
          <motion.span
            animate={{ scale: [1, 2.2], opacity: [0.55, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
            className="absolute inset-0 rounded-full bg-[#22C55E]"
          />
        )}
        {/* Pin */}
        <span
          className={[
            "relative flex size-9 items-center justify-center rounded-full border-[3px] border-white shadow-xl transition-colors",
            isTop ? "bg-[#22C55E]" : "bg-[#3B82F6]",
          ].join(" ")}
        >
          <MapPin className="size-4 text-white" aria-hidden="true" />
        </span>
        <AnimatePresence>
          {isTop && (
            <motion.span
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute left-1/2 top-full mt-1.5 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#22C55E] px-2 py-[2px] text-[9px] font-bold text-white shadow-md"
            >
              VOCÊ · #1
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Compass + Maps watermark */}
      <span className="absolute right-2 top-2 flex size-6 items-center justify-center rounded-full bg-white shadow-sm">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="size-3.5 text-[#3B82F6]"
          aria-hidden="true"
        >
          <path
            d="M12 2 L15 10 L22 12 L15 14 L12 22 L9 14 L2 12 L9 10 Z"
            fill="currentColor"
            opacity="0.85"
          />
        </svg>
      </span>
      <span className="absolute bottom-1.5 right-2 text-[8px] font-semibold uppercase tracking-wider text-gray-500/80">
        Maps
      </span>
      {/* Zoom controls */}
      <div className="absolute bottom-1.5 left-1.5 flex flex-col gap-0.5">
        <span className="flex size-4 items-center justify-center rounded-sm bg-white text-[10px] font-bold text-gray-600 shadow-sm">
          +
        </span>
        <span className="flex size-4 items-center justify-center rounded-sm bg-white text-[10px] font-bold text-gray-600 shadow-sm">
          −
        </span>
      </div>
    </div>
  );
}

/* ─── Result card ─── */
interface ResultCardProps {
  position: number;
  name: string;
  category: string;
  distance: string;
  rating: number;
  reviews: number;
  open: boolean;
  initial: string;
  color: string;
  sponsored?: boolean;
  closesAt?: string;
  isUser?: boolean;
  isTop?: boolean;
}

function ResultCard({
  position,
  name,
  category,
  distance,
  rating,
  reviews,
  open,
  initial,
  color,
  sponsored = false,
  closesAt,
  isUser = false,
  isTop = false,
}: ResultCardProps) {
  const userHighlight = isUser && isTop;

  return (
    <motion.div
      layout
      animate={{
        y: userHighlight ? [0, -1.5, 0] : 0,
        boxShadow: userHighlight
          ? [
              "0 10px 28px rgba(34,197,94,0.12)",
              "0 16px 38px rgba(34,197,94,0.22)",
              "0 10px 28px rgba(34,197,94,0.12)",
            ]
          : "0 0 0 rgba(0,0,0,0)",
      }}
      transition={{
        layout: { duration: 0.35, ease: "easeOut" },
        y: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
        boxShadow: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
      }}
      className={[
        "relative flex items-center gap-2.5 overflow-hidden rounded-xl px-2.5 py-2 transition-all duration-500",
        userHighlight
          ? "bg-[#22C55E]/8 ring-2 ring-[#22C55E]/35 shadow-sm"
          : isUser
          ? "bg-[#3B82F6]/8 ring-1 ring-[#3B82F6]/25"
          : isTop
          ? "opacity-50"
          : "opacity-95",
      ].join(" ")}
    >
      {isUser && (
        <motion.span
          aria-hidden="true"
          animate={{ x: ["-120%", "240%"], opacity: [0, 0.35, 0] }}
          transition={{ duration: 2.7, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
          className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-transparent via-white to-transparent"
        />
      )}
      {/* Position badge */}
      <div
        className={[
          "flex size-7 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold transition-colors duration-500",
          userHighlight
            ? "bg-[#22C55E] text-white shadow-md shadow-[#22C55E]/30"
            : isUser
            ? "bg-[#3B82F6] text-white"
            : "bg-gray-100 text-gray-500",
        ].join(" ")}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={position}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            {position}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Avatar / thumbnail */}
      <div
        className={[
          "flex size-9 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-white shadow-sm",
          userHighlight
            ? "bg-gradient-to-br from-[#22C55E] to-[#16A34A]"
            : isUser
            ? "bg-gradient-to-br from-[#3B82F6] to-[#2563EB]"
            : color,
        ].join(" ")}
      >
        {isUser ? <Store className="size-4" aria-hidden="true" /> : initial}
      </div>

      {/* Info */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <p
            className={[
              "truncate text-[13px] font-semibold leading-tight",
              isUser ? "text-gray-900" : "text-gray-800",
            ].join(" ")}
          >
            {name}
          </p>
          {sponsored && !isUser && (
            <span className="inline-flex shrink-0 items-center rounded-sm bg-gray-100 px-1 text-[8px] font-bold uppercase tracking-wider text-gray-500">
              Anúncio
            </span>
          )}
        </div>
        <div className="mt-0.5 flex items-center gap-1">
          <Stars rating={rating} size={10} />
          <span className="text-[10px] font-semibold text-gray-700">{rating.toFixed(1)}</span>
          <span className="text-[10px] text-gray-400">({reviews})</span>
        </div>
        <p className="mt-0.5 truncate text-[10px] text-gray-500">
          {category} <span className="text-gray-300">·</span> {distance}{" "}
          <span className="text-gray-300">·</span>{" "}
          <span className={open ? "font-medium text-[#22C55E]" : "font-medium text-[#EF4444]"}>
            {open ? "Aberto" : "Fechado"}
          </span>
          {open && closesAt && (
            <span className="hidden text-gray-500 sm:inline">
              {" "}
              <span className="text-gray-300">·</span> fecha {closesAt}
            </span>
          )}
        </p>
      </div>

      {/* Action buttons — sempre visíveis no card do user (Phone azul + WhatsApp verde) */}
      {isUser && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex shrink-0 items-center gap-1.5"
        >
          <span
            className="flex size-7 items-center justify-center rounded-full bg-[#3B82F6]/10 text-[#3B82F6] ring-1 ring-[#3B82F6]/30 sm:size-8"
            aria-label="Ligar"
          >
            <Phone className="size-3.5 sm:size-4" aria-hidden="true" />
          </span>
          <span
            className="flex size-7 items-center justify-center rounded-full bg-[#25D366]/12 text-[#25D366] ring-1 ring-[#25D366]/30 sm:size-8"
            aria-label="WhatsApp"
          >
            <WhatsappIcon className="size-3.5 text-[#25D366] sm:size-4" />
          </span>
        </motion.div>
      )}

      {/* Checkmark when user reaches top */}
      {userHighlight && (
        <motion.div
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 220, damping: 16, delay: 0.1 }}
          className="absolute -right-1 -top-1"
        >
          <span className="relative flex size-5">
            <motion.span
              animate={{ scale: [1, 1.7], opacity: [0.55, 0] }}
              transition={{ duration: 1.4, repeat: Infinity }}
              className="absolute inline-flex size-full rounded-full bg-[#22C55E]"
            />
            <CheckCircle2 className="relative size-5 fill-[#22C55E] text-white" />
          </span>
        </motion.div>
      )}
    </motion.div>
  );
}

/* ─── Floating notification card ─── */
interface NotificationCardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  accent: string;
  visible: boolean;
  position: string;
  delay: number;
}

function NotificationCard({
  title,
  subtitle,
  icon,
  accent,
  visible,
  position,
  delay,
}: NotificationCardProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: -16, scale: 0.92 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -10, scale: 0.95 }}
          transition={{ duration: 0.45, delay, ease: "easeOut" }}
          className={`pointer-events-none absolute z-30 hidden w-[200px] items-center gap-2.5 rounded-2xl border border-gray-200/80 bg-white p-2.5 shadow-2xl shadow-black/12 xl:flex ${position}`}
        >
          <span
            className={`flex size-9 shrink-0 items-center justify-center rounded-lg ${accent}`}
          >
            {icon}
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[11px] font-bold text-gray-900">{title}</p>
            <p className="truncate text-[10px] text-gray-500">{subtitle}</p>
          </div>
          {/* Live dot */}
          <span className="relative flex size-2 shrink-0">
            <motion.span
              animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="absolute inline-flex size-full rounded-full bg-[#22C55E]"
            />
            <span className="relative inline-flex size-2 rounded-full bg-[#22C55E]" />
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─── Main component ─── */
export function GoogleSearchAnimation() {
  const [phase, setPhase] = useState(PHASE_TOP);
  const [typedText, setTypedText] = useState(SEARCH_QUERY);
  const [currentPosition, setCurrentPosition] = useState(1);

  /* ── Typing ── */
  useEffect(() => {
    if (phase !== PHASE_TYPING) return;
    if (typedText.length >= SEARCH_QUERY.length) {
      const t = setTimeout(() => setPhase(PHASE_SEARCHING), 380);
      return () => clearTimeout(t);
    }
    const t = setTimeout(
      () => setTypedText(SEARCH_QUERY.slice(0, typedText.length + 1)),
      55 + Math.random() * 45
    );
    return () => clearTimeout(t);
  }, [typedText, phase]);

  /* ── Phase transitions ── */
  useEffect(() => {
    if (phase === PHASE_SEARCHING) {
      const t = setTimeout(() => setPhase(PHASE_RESULTS_LOW), 1100);
      return () => clearTimeout(t);
    }
    if (phase === PHASE_RESULTS_LOW) {
      const t = setTimeout(() => setPhase(PHASE_CLIMBING), 1600);
      return () => clearTimeout(t);
    }
  }, [phase]);

  /* ── Climb up ── */
  useEffect(() => {
    if (phase !== PHASE_CLIMBING) return;
    const speed =
      currentPosition > 7 ? 200 : currentPosition > 4 ? 320 : currentPosition > 2 ? 450 : 600;
    const t = setTimeout(() => {
      setCurrentPosition((p) => {
        if (p <= 1) return 1;
        if (p === 2) {
          setPhase(PHASE_TOP);
          return 1;
        }
        return p - 1;
      });
    }, speed);
    return () => clearTimeout(t);
  }, [phase, currentPosition]);

  /* ── Restart loop ── */
  useEffect(() => {
    if (phase !== PHASE_TOP) return;
    setTypedText(SEARCH_QUERY);
    setCurrentPosition(1);
    const t = setTimeout(() => {
      setCurrentPosition(5);
      setPhase(PHASE_CLIMBING);
    }, 4200);
    return () => clearTimeout(t);
  }, [phase]);

  const isTop = phase === PHASE_TOP;
  const showResults = phase >= PHASE_RESULTS_LOW;

  /* ── Always render exactly 3 result cards around the user position ── */
  const visibleResults = useMemo(() => {
    const items: Array<
      Omit<ResultCardProps, "isTop"> & { key: string }
    > = [];
    if (!showResults) return items;

    const pos = currentPosition;
    let triplet: number[];
    if (pos <= 1) {
      triplet = [1, 2, 3];
    } else if (pos >= 12) {
      triplet = [pos - 2, pos - 1, pos];
    } else {
      triplet = [pos - 1, pos, pos + 1];
    }

    let compIdx = 0;
    for (const p of triplet) {
      if (p === pos) {
        items.push({
          key: "user",
          position: p,
          name: USER_BUSINESS.name,
          category: USER_BUSINESS.category,
          distance: USER_BUSINESS.distance,
          rating: USER_BUSINESS.rating,
          reviews: USER_BUSINESS.reviews,
          open: USER_BUSINESS.open,
          closesAt: USER_BUSINESS.closesAt,
          initial: "",
          color: "",
          isUser: true,
        });
      } else {
        const c = competitors[compIdx % competitors.length];
        compIdx++;
        items.push({
          key: `c-${p}`,
          position: p,
          name: c.name,
          category: c.category,
          distance: c.distance,
          rating: c.rating,
          reviews: c.reviews,
          open: c.open,
          initial: c.initial,
          color: c.color,
          sponsored: c.sponsored,
          isUser: false,
        });
      }
    }
    return items;
  }, [showResults, currentPosition]);

  return (
    <div className="relative w-full max-w-[430px] lg:max-w-[380px] xl:max-w-[400px]">
      {/* Floating notification cards (lg+) */}
      <NotificationCard
        title={
          isTop ? "Sua Empresa chegou ao #1" : `Sua Empresa agora #${currentPosition}`
        }
        subtitle={isTop ? "Há 2 segundos · sua empresa" : "Subindo no Maps · sua empresa"}
        icon={<TrendingUp className="size-4 text-white" aria-hidden="true" />}
        accent="bg-gradient-to-br from-[#22C55E] to-[#16A34A]"
        visible={isTop || phase === PHASE_CLIMBING}
        position="-left-20 top-8"
        delay={0.2}
      />
      <NotificationCard
        title="Nova avaliação 5★"
        subtitle="Maria S. · há 5 minutos"
        icon={<Star className="size-4 fill-white text-white" aria-hidden="true" />}
        accent="bg-gradient-to-br from-[#EAB308] to-[#CA8A04]"
        visible={isTop}
        position="-left-16 bottom-20"
        delay={0.5}
      />
      <NotificationCard
        title="+12 visualizações"
        subtitle="Últimos 10 minutos"
        icon={<MapPin className="size-4 text-white" aria-hidden="true" />}
        accent="bg-gradient-to-br from-[#3B82F6] to-[#2563EB]"
        visible={phase >= PHASE_RESULTS_LOW}
        position="-right-16 top-48"
        delay={0.35}
      />

      {/* Small floating icons (decorative, sm+) */}
      <motion.div
        animate={{ y: [-8, 8, -8], rotate: [-2, 2, -2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-2 top-10 z-20 hidden size-12 items-center justify-center rounded-2xl bg-white shadow-xl shadow-black/8 sm:flex sm:-left-6 sm:size-14 lg:hidden"
      >
        <Store className="size-5 text-[#4285F4] sm:size-6" />
      </motion.div>
      <motion.div
        animate={{ y: [8, -8, 8], rotate: [2, -2, 2] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-1 bottom-40 z-20 hidden size-12 items-center justify-center rounded-2xl bg-white shadow-xl shadow-black/8 sm:flex sm:-right-8 sm:size-14 lg:hidden"
      >
        <TrendingUp className="size-5 text-[#22C55E] sm:size-6" />
      </motion.div>

      {/* Google search panel — adaptive height: auto in mobile, fixed in sm+ */}
      <motion.div
        initial={false}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative z-10 flex min-h-[600px] w-full flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-[0_26px_70px_rgba(15,23,42,0.14)] sm:h-[640px] sm:min-h-0 lg:h-[620px] xl:h-[640px]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.38]"
          style={{
            background:
              "radial-gradient(circle at 20% 12%, rgba(59,130,246,0.12), transparent 28%), radial-gradient(circle at 82% 24%, rgba(34,197,94,0.1), transparent 24%), linear-gradient(180deg, rgba(255,255,255,0.95), rgba(248,250,252,0.82))",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
        {/* ── Browser-style top bar ── */}
        <div className="relative z-10 flex shrink-0 items-center gap-1.5 border-b border-gray-100 bg-gray-50/88 px-3 py-2 backdrop-blur">
          <span className="size-2.5 rounded-full bg-[#EF4444]/70" />
          <span className="size-2.5 rounded-full bg-[#EAB308]/70" />
          <span className="size-2.5 rounded-full bg-[#22C55E]/70" />
          <div className="ml-2 inline-flex h-5 flex-1 items-center gap-1.5 rounded-md bg-white px-2 text-[10px] text-gray-400 ring-1 ring-gray-200">
            <span className="size-2 rounded-full bg-[#22C55E]" />
            google.com/maps
          </div>
          {/* Live badge */}
          <span className="inline-flex h-5 items-center gap-1 rounded-full bg-[#EF4444]/10 px-1.5 text-[9px] font-bold uppercase tracking-wider text-[#EF4444]">
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.4, repeat: Infinity }}
              className="size-1.5 rounded-full bg-[#EF4444]"
            />
            Ao vivo
          </span>
        </div>

        {/* ── Google logo + Maps + user avatar ── */}
        <div className="relative z-10 flex shrink-0 items-center justify-between px-3 pb-2 pt-3 sm:px-4 sm:pt-4">
          <div className="flex items-center gap-1">
            <svg width="74" height="24" viewBox="0 0 74 24" fill="none" aria-label="Google">
              <path d="M9.24 19.2C4.14 19.2 0 15.06 0 9.96C0 4.86 4.14 0.72 9.24 0.72C12.06 0.72 14.16 1.8 15.72 3.3L13.74 5.28C12.6 4.2 11.1 3.36 9.24 3.36C5.58 3.36 2.7 6.3 2.7 9.96C2.7 13.62 5.58 16.56 9.24 16.56C11.52 16.56 12.84 15.6 13.68 14.76C14.34 14.1 14.76 13.14 14.88 11.82H9.24V9.18H17.4C17.46 9.54 17.52 9.96 17.52 10.44C17.52 12.48 16.92 14.94 15.12 16.74C13.38 18.54 11.16 19.2 9.24 19.2Z" fill="#4285F4" />
              <path d="M27.18 13.2C27.18 16.68 24.36 19.2 20.88 19.2C17.4 19.2 14.58 16.68 14.58 13.2C14.58 9.66 17.4 7.2 20.88 7.2C24.36 7.2 27.18 9.66 27.18 13.2ZM24.54 13.2C24.54 11.1 23.04 9.66 20.88 9.66C18.72 9.66 17.22 11.1 17.22 13.2C17.22 15.24 18.72 16.74 20.88 16.74C23.04 16.74 24.54 15.24 24.54 13.2Z" fill="#EA4335" />
              <path d="M38.76 13.2C38.76 16.68 35.94 19.2 32.46 19.2C28.98 19.2 26.16 16.68 26.16 13.2C26.16 9.66 28.98 7.2 32.46 7.2C35.94 7.2 38.76 9.66 38.76 13.2ZM36.12 13.2C36.12 11.1 34.62 9.66 32.46 9.66C30.3 9.66 28.8 11.1 28.8 13.2C28.8 15.24 30.3 16.74 32.46 16.74C34.62 16.74 36.12 15.24 36.12 13.2Z" fill="#FBBC05" />
              <path d="M49.68 7.5V18.42C49.68 22.74 47.1 24.48 43.98 24.48C41.04 24.48 39.24 22.62 38.52 21.06L40.86 20.1C41.28 21.06 42.3 22.08 43.98 22.08C46.02 22.08 47.28 20.88 47.28 18.72V17.82H47.16C46.5 18.6 45.18 19.2 43.56 19.2C40.14 19.2 37.02 16.56 37.02 13.2C37.02 9.78 40.14 7.2 43.56 7.2C45.18 7.2 46.5 7.8 47.16 8.52H47.28V7.5H49.68ZM47.46 13.2C47.46 11.16 45.96 9.66 43.8 9.66C41.58 9.66 39.96 11.16 39.96 13.2C39.96 15.18 41.58 16.74 43.8 16.74C45.96 16.74 47.46 15.18 47.46 13.2Z" fill="#4285F4" />
              <path d="M53.46 1.08V18.9H50.88V1.08H53.46Z" fill="#34A853" />
              <path d="M63.48 15.48L65.4 16.74C64.68 17.82 62.94 19.2 60.48 19.2C57.42 19.2 55.08 16.8 55.08 13.2C55.08 9.42 57.42 7.2 60.18 7.2C63 7.2 64.68 9.48 65.22 10.74L65.52 11.46L57.96 14.58C58.56 15.78 59.46 16.38 60.78 16.38C62.1 16.38 63 15.72 63.48 15.48ZM57.66 13.02L62.64 10.92C62.34 10.14 61.38 9.6 60.24 9.6C58.74 9.6 57.6 10.98 57.66 13.02Z" fill="#EA4335" />
            </svg>
            <span className="ml-1 inline-flex items-center gap-1 rounded-full bg-[#34A853]/10 px-2 py-0.5 text-[10px] font-semibold text-[#34A853]">
              <MapPin className="size-3" aria-hidden="true" />
              Maps
            </span>
          </div>
          {/* User avatar */}
          <span className="flex size-7 items-center justify-center rounded-full bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] text-[11px] font-bold text-white ring-2 ring-white">
            M
          </span>
        </div>

        {/* ── Search bar ── */}
        <div className="relative z-10 mx-3 mb-3 shrink-0 sm:mx-4">
          <div className="flex h-10 items-center gap-2 rounded-full border border-gray-200 bg-white px-3 shadow-sm sm:h-11 sm:px-4">
            <Search className="size-4 shrink-0 text-gray-400" />
            <span className="flex-1 truncate text-sm text-gray-800">
              {typedText}
              {phase === PHASE_TYPING && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.55, repeat: Infinity }}
                  className="ml-px inline-block h-4 w-0.5 translate-y-0.5 bg-gray-800"
                />
              )}
            </span>
            {phase === PHASE_SEARCHING && (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="size-4 rounded-full border-2 border-gray-200 border-t-[#4285F4]"
              />
            )}
            {phase >= PHASE_RESULTS_LOW && (
              <span className="inline-flex size-5 items-center justify-center rounded-full bg-[#4285F4]/10 text-[#4285F4]">
                <MapPin className="size-3" aria-hidden="true" />
              </span>
            )}
          </div>
        </div>

        {/* ── Filter chips ── */}
        <div className="relative z-10 mb-2 flex shrink-0 items-center gap-1.5 overflow-x-auto px-3 pb-1 sm:px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {[
            { label: "Avaliados ↑", active: true },
            { label: "Aberto agora", active: false },
            { label: "Distância", active: false },
            { label: "Preço", active: false },
          ].map((chip) => (
            <span
              key={chip.label}
              className={[
                "inline-flex h-6 shrink-0 items-center gap-1 rounded-full border px-2.5 text-[10px] font-medium transition",
                chip.active
                  ? "border-[#4285F4]/30 bg-[#4285F4]/10 text-[#1A56DB]"
                  : "border-gray-200 bg-white text-gray-500",
              ].join(" ")}
            >
              {chip.label}
            </span>
          ))}
        </div>

        {/* ── Mini Map ── */}
        <div className="relative z-10 mx-3 mb-3 shrink-0 sm:mx-4">
          <MiniMap isTop={isTop} />
        </div>

        {/* ── Results area (flex-1 so it takes the rest of the fixed height) ── */}
        <div className="relative z-10 flex flex-1 flex-col px-3 pb-3">
          <AnimatePresence mode="wait">
            {showResults ? (
              <motion.div
                key="results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="flex h-full flex-col"
              >
                {/* Results header */}
                <div className="mb-2 flex shrink-0 items-center justify-between px-1">
                  <span className="text-[10px] font-medium text-gray-500">
                    <strong className="text-gray-700">
                      {TOTAL_RESULTS.toLocaleString("pt-BR")}
                    </strong>{" "}
                    resultados no mapa
                  </span>
                  <AnimatePresence>
                    {phase >= PHASE_CLIMBING && !isTop && (
                      <motion.span
                        initial={{ opacity: 0, x: 8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        className="inline-flex items-center gap-1 rounded-full bg-[#22C55E]/10 px-2 py-0.5 text-[10px] font-bold text-[#22C55E]"
                      >
                        <TrendingUp className="size-2.5" aria-hidden="true" />
                        subindo
                      </motion.span>
                    )}
                    {isTop && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-1 rounded-full bg-[#22C55E] px-2 py-0.5 text-[10px] font-bold text-white shadow-sm"
                      >
                        <Sparkles className="size-2.5" aria-hidden="true" />
                        #1 no Maps
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>

                {/* Result triplet */}
                <div className="space-y-1">
                  {visibleResults.map((r) => (
                    <ResultCard
                      key={r.key}
                      position={r.position}
                      name={r.name}
                      category={r.category}
                      distance={r.distance}
                      rating={r.rating}
                      reviews={r.reviews}
                      open={r.open}
                      initial={r.initial}
                      color={r.color}
                      sponsored={r.sponsored}
                      closesAt={r.closesAt}
                      isUser={r.isUser}
                      isTop={isTop}
                    />
                  ))}
                </div>

                {/* Live stats — sempre visíveis a partir de RESULTS_LOW, crescem com o ranking */}
                {(() => {
                  // Progresso: 0 quando pos=12, 1 quando pos=1 (TOP)
                  const progress = Math.min(
                    Math.max((12 - currentPosition) / 11, 0),
                    1
                  );
                  // Ease-out cubic para o final ficar mais "exponencial"
                  const eased = 1 - Math.pow(1 - progress, 2.2);
                  const ligacoes = Math.round(eased * 312);
                  const visitas = Math.round(eased * 1847);
                  const rotas = Math.round(eased * 186);

                  const stats = [
                    {
                      key: "lig",
                      label: "Ligações",
                      value: `+${ligacoes}%`,
                      icon: Phone,
                      color: "#22C55E",
                      bg: "bg-[#22C55E]/8",
                      ring: "ring-[#22C55E]/30",
                    },
                    {
                      key: "vis",
                      label: "Visitas",
                      value: `+${visitas.toLocaleString("pt-BR")}`,
                      icon: TrendingUp,
                      color: "#3B82F6",
                      bg: "bg-[#3B82F6]/8",
                      ring: "ring-[#3B82F6]/30",
                    },
                    {
                      key: "rot",
                      label: "Rotas",
                      value: `+${rotas}`,
                      icon: MapPin,
                      color: "#EAB308",
                      bg: "bg-[#EAB308]/8",
                      ring: "ring-[#EAB308]/30",
                    },
                  ];

                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="mt-2.5 grid grid-cols-3 gap-1.5 px-0.5"
                    >
                      {stats.map((stat) => {
                        const Icon = stat.icon;
                        return (
                          <motion.div
                            key={stat.key}
                            animate={
                              isTop
                                ? {
                                    boxShadow: [
                                      `0 0 0 0 ${stat.color}00`,
                                      `0 0 0 4px ${stat.color}1a`,
                                      `0 0 0 0 ${stat.color}00`,
                                    ],
                                  }
                                : { boxShadow: "0 0 0 0 transparent" }
                            }
                            transition={{
                              duration: 1.6,
                              repeat: isTop ? Infinity : 0,
                              ease: "easeInOut",
                            }}
                            className={[
                              "relative overflow-hidden rounded-lg p-1.5 ring-1 transition-all duration-300",
                              isTop
                                ? `${stat.bg} ${stat.ring}`
                                : "bg-gray-50/60 ring-gray-100",
                            ].join(" ")}
                          >
                            <div className="flex items-center justify-between gap-1">
                              <Icon
                                className="size-2.5 shrink-0"
                                style={{ color: stat.color }}
                                aria-hidden="true"
                              />
                              <p className="truncate text-[8px] font-semibold uppercase tracking-wide text-gray-500">
                                {stat.label}
                              </p>
                            </div>
                            <div className="mt-0.5 flex items-baseline gap-0.5">
                              <AnimatePresence mode="popLayout" initial={false}>
                                <motion.p
                                  key={stat.value}
                                  initial={{ y: -8, opacity: 0, scale: 0.85 }}
                                  animate={{ y: 0, opacity: 1, scale: 1 }}
                                  exit={{ y: 8, opacity: 0, scale: 0.85 }}
                                  transition={{
                                    duration: 0.28,
                                    ease: "easeOut",
                                  }}
                                  className="text-[13px] font-extrabold leading-none tracking-tight"
                                  style={{ color: stat.color }}
                                >
                                  {stat.value}
                                </motion.p>
                              </AnimatePresence>
                            </div>
                            {/* progress bar */}
                            <div className="mt-1 h-0.5 overflow-hidden rounded-full bg-gray-100">
                              <motion.div
                                animate={{ width: `${Math.round(eased * 100)}%` }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="h-full rounded-full"
                                style={{ backgroundColor: stat.color }}
                              />
                            </div>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  );
                })()}

                {/* TOP sparkles */}
                <AnimatePresence>
                  {isTop &&
                    [
                      { left: "12%", delay: 0.2, color: "text-[#22C55E]" },
                      { left: "38%", delay: 0.35, color: "text-[#EAB308]" },
                      { left: "62%", delay: 0.5, color: "text-[#3B82F6]" },
                      { left: "82%", delay: 0.65, color: "text-[#EC4899]" },
                    ].map((s, i) => (
                      <motion.div
                        key={`spark-${i}`}
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: [0, 1, 0], y: -32 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.4, delay: s.delay, repeat: Infinity, repeatDelay: 2 }}
                        className="pointer-events-none absolute bottom-20"
                        style={{ left: s.left }}
                      >
                        <Sparkles className={`size-3 ${s.color}`} aria-hidden="true" />
                      </motion.div>
                    ))}
                </AnimatePresence>

                {/* Footer — só sm+ (libera espaço mobile) */}
                <div className="mt-auto hidden items-center justify-between border-t border-gray-100 pt-2 text-[10px] text-gray-400 sm:flex">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="size-3" aria-hidden="true" />
                    Atualizado agora
                  </span>
                  <span className="font-medium text-gray-500">Página 1 de 13</span>
                </div>
              </motion.div>
            ) : (
              /* Skeleton while searching */
              <motion.div
                key="skeleton"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="flex h-full flex-col"
              >
                <div className="mb-2 flex shrink-0 items-center justify-between px-1">
                  <div className="h-2.5 w-24 rounded-full bg-gray-100" />
                  <div className="h-2.5 w-12 rounded-full bg-gray-100" />
                </div>
                <div className="space-y-2.5">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }}
                      className="flex items-center gap-2.5 rounded-xl px-2.5 py-2"
                    >
                      <div className="size-7 shrink-0 rounded-lg bg-gray-100" />
                      <div className="size-9 shrink-0 rounded-lg bg-gray-100" />
                      <div className="flex-1 space-y-1.5">
                        <div className="h-2.5 w-32 rounded-full bg-gray-100" />
                        <div className="h-2 w-20 rounded-full bg-gray-100" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Glow behind card */}
      <div
        aria-hidden="true"
        className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-[#22C55E]/12 via-transparent to-[#3B82F6]/12 blur-2xl"
      />
    </div>
  );
}
