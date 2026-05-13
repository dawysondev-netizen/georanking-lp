"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUp,
  Eye,
  MapPin,
  MousePointer2,
  Navigation as RouteIcon,
  Phone,
  Sparkles,
  Star,
} from "lucide-react";

/* ─────────── 0 · PAINEL DE CONTROLE ─────────── */
export function PanelMock() {
  const metrics = [
    { label: "Visualizações", value: "4.275", delta: "+18%", icon: Eye, color: "#3B82F6" },
    { label: "Cliques", value: "1.847", delta: "+24%", icon: MousePointer2, color: "#22C55E" },
    { label: "Ligações", value: "312", delta: "+312%", icon: Phone, color: "#EAB308" },
    { label: "Rotas", value: "186", delta: "+11%", icon: RouteIcon, color: "#EF4444" },
  ];

  return (
    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
      {metrics.map((m, i) => (
        <motion.div
          key={m.label}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.06 }}
          className="rounded-xl border border-white/10 bg-white/[0.04] p-3"
        >
          <div className="mb-2 flex items-center justify-between">
            <span
              className="flex size-7 items-center justify-center rounded-lg"
              style={{ backgroundColor: `${m.color}1F` }}
            >
              <m.icon className="size-3.5" style={{ color: m.color }} aria-hidden="true" />
            </span>
            <span className="inline-flex items-center gap-0.5 text-[9px] font-bold text-[#22C55E]">
              <ArrowUp className="size-2.5" aria-hidden="true" />
              {m.delta}
            </span>
          </div>
          <p className="text-base font-bold text-white sm:text-lg">{m.value}</p>
          <p className="mt-0.5 text-[9px] uppercase tracking-wider text-white/50">{m.label}</p>
        </motion.div>
      ))}
      {/* Mini sparkline strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="col-span-2 rounded-xl border border-white/10 bg-white/[0.04] p-3 sm:col-span-4"
      >
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-white/60">
            Últimos 30 dias
          </p>
          <span className="text-[10px] text-white/50">7.744 visualizações</span>
        </div>
        <svg viewBox="0 0 240 40" className="h-8 w-full" aria-hidden="true">
          <defs>
            <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22C55E" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,32 L20,28 L40,30 L60,22 L80,24 L100,18 L120,20 L140,12 L160,14 L180,8 L200,10 L220,4 L240,2 L240,40 L0,40 Z"
            fill="url(#sparkGrad)"
          />
          <motion.path
            d="M0,32 L20,28 L40,30 L60,22 L80,24 L100,18 L120,20 L140,12 L160,14 L180,8 L200,10 L220,4 L240,2"
            stroke="#22C55E"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
        </svg>
      </motion.div>
    </div>
  );
}

/* ─────────── 1 · PALAVRAS-CHAVE ─────────── */
export function KeywordsMock() {
  const keywords = [
    { term: "pizzaria perto de mim", position: 1, change: 4, score: 92, color: "#22C55E" },
    { term: "rodízio de pizza", position: 2, change: 3, score: 84, color: "#22C55E" },
    { term: "pizzaria 24h", position: 3, change: 2, score: 72, color: "#3B82F6" },
    { term: "delivery pizza centro", position: 5, change: -1, score: 58, color: "#EAB308" },
    { term: "melhor pizzaria", position: 8, change: 0, score: 40, color: "#EAB308" },
  ];

  return (
    <div className="space-y-1.5">
      {keywords.map((k, i) => {
        const positive = k.change > 0;
        const negative = k.change < 0;
        return (
          <motion.div
            key={k.term}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2"
          >
            <span
              className="flex size-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold text-white"
              style={{ backgroundColor: k.color }}
            >
              #{k.position}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-medium text-white sm:text-sm">{k.term}</p>
              <div className="mt-1 h-1 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${k.score}%` }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.05 + 0.2 }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: k.color }}
                />
              </div>
            </div>
            <span
              className={[
                "inline-flex shrink-0 items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[10px] font-bold",
                positive
                  ? "bg-[#22C55E]/15 text-[#22C55E]"
                  : negative
                  ? "bg-[#EF4444]/15 text-[#EF4444]"
                  : "bg-white/10 text-white/60",
              ].join(" ")}
            >
              {positive ? (
                <ArrowUp className="size-2.5" aria-hidden="true" />
              ) : negative ? (
                <ArrowDown className="size-2.5" aria-hidden="true" />
              ) : null}
              {k.change === 0 ? "—" : Math.abs(k.change)}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ─────────── 2 · GESTÃO DE REVIEWS ─────────── */
export function ReviewsMock() {
  const reviews = [
    {
      name: "Maria S.",
      initial: "M",
      color: "#3B82F6",
      stars: 5,
      text: "Atendimento impecável e a pizza chegou quentinha.",
      reply: "Obrigado, Maria! Aguardamos sua próxima visita 🍕",
      time: "há 2 min",
    },
    {
      name: "João P.",
      initial: "J",
      color: "#EAB308",
      stars: 4,
      text: "Massa fresca e ambiente agradável. Recomendo!",
      reply: "Que ótimo, João! Sua avaliação nos motiva muito.",
      time: "há 18 min",
    },
  ];

  return (
    <div className="space-y-2.5">
      {reviews.map((r, i) => (
        <motion.div
          key={r.name}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="rounded-xl border border-white/10 bg-white/[0.04] p-3"
        >
          <div className="flex items-start gap-2.5">
            <span
              className="flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
              style={{ backgroundColor: r.color }}
            >
              {r.initial}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs font-semibold text-white sm:text-sm">{r.name}</p>
                <span className="shrink-0 text-[10px] text-white/45">{r.time}</span>
              </div>
              <div className="mt-0.5 flex items-center gap-0.5">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    className={
                      idx < r.stars
                        ? "size-3 fill-[#EAB308] text-[#EAB308]"
                        : "size-3 fill-white/15 text-white/15"
                    }
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="mt-1.5 text-xs leading-5 text-white/75">{r.text}</p>
            </div>
          </div>

          {/* AI reply badge */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.08 + 0.3 }}
            className="ml-10 mt-2 rounded-lg border border-[#22C55E]/20 bg-[#22C55E]/8 p-2"
          >
            <div className="mb-1 flex items-center gap-1.5">
              <span className="inline-flex size-4 items-center justify-center rounded-full bg-[#22C55E]">
                <Sparkles className="size-2.5 text-white" aria-hidden="true" />
              </span>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#22C55E]">
                IA respondeu
              </p>
            </div>
            <p className="text-[11px] leading-4 text-white/70">{r.reply}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

/* ─────────── 3 · ANÁLISE DE RANQUEAMENTO ─────────── */
export function AnalyticsMock() {
  const neighborhoods = [
    { name: "Centro", position: 1, score: 92, change: 5, color: "#22C55E" },
    { name: "Jd. Goiás", position: 2, score: 84, change: 3, color: "#22C55E" },
    { name: "Setor Sul", position: 4, score: 68, change: 2, color: "#3B82F6" },
    { name: "Bueno", position: 7, score: 48, change: -1, color: "#EAB308" },
  ];

  return (
    <div className="grid gap-3 sm:grid-cols-[1fr_1fr]">
      {/* Mini map with pins by neighborhood */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-xl border border-white/10 bg-[#1B2520] p-3"
      >
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-white/60">
            Sua cobertura
          </p>
          <span className="inline-flex items-center gap-1 text-[10px] text-white/50">
            <MapPin className="size-3" aria-hidden="true" />
            4 bairros
          </span>
        </div>

        {/* Map */}
        <div className="relative h-[140px] overflow-hidden rounded-lg bg-[#E8EEF4]">
          <svg
            className="absolute inset-0 size-full"
            viewBox="0 0 240 140"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="aMapGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#EEF2F7" />
                <stop offset="100%" stopColor="#DBE3EC" />
              </linearGradient>
            </defs>
            <rect width="240" height="140" fill="url(#aMapGrad)" />
            {/* Streets */}
            <path d="M 0 38 L 240 30" stroke="#fff" strokeWidth="3.5" />
            <path d="M 0 78 L 240 84" stroke="#fff" strokeWidth="3.5" />
            <path d="M 0 116 L 240 118" stroke="#fff" strokeWidth="3" />
            <path d="M 70 0 L 64 140" stroke="#fff" strokeWidth="3" />
            <path d="M 160 0 L 164 140" stroke="#fff" strokeWidth="3" />
            {/* Parks */}
            <ellipse cx="40" cy="110" rx="22" ry="11" fill="#C8E6C9" />
            <ellipse cx="200" cy="22" rx="18" ry="8" fill="#C8E6C9" />
            <ellipse cx="120" cy="64" rx="15" ry="7" fill="#C8E6C9" />
            {/* Street labels */}
            <text x="92" y="24" fontSize="6.5" fill="#9AA5B1" fontFamily="system-ui">
              Av. Goiás
            </text>
            <text x="148" y="100" fontSize="6.5" fill="#9AA5B1" fontFamily="system-ui">
              R. 24
            </text>
          </svg>

          {/* Neighborhood pins with position numbers */}
          {[
            { pos: 1, left: "20%", top: "32%", color: "#22C55E" },
            { pos: 2, left: "72%", top: "28%", color: "#22C55E" },
            { pos: 4, left: "44%", top: "62%", color: "#3B82F6" },
            { pos: 7, left: "82%", top: "72%", color: "#EAB308" },
          ].map((p, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, y: -8 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08, type: "spring", damping: 14 }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: p.left, top: p.top }}
            >
              <span
                className="relative flex size-7 items-center justify-center rounded-full border-2 border-white text-[10px] font-bold text-white shadow-md"
                style={{ backgroundColor: p.color }}
              >
                #{p.pos}
                {p.pos === 1 && (
                  <motion.span
                    animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: p.color }}
                  />
                )}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Map legend */}
        <div className="mt-2 flex items-center justify-between text-[9px] text-white/55">
          <span className="inline-flex items-center gap-1">
            <span className="size-1.5 rounded-full bg-[#22C55E]" />
            Top 3
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="size-1.5 rounded-full bg-[#3B82F6]" />
            Top 5
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="size-1.5 rounded-full bg-[#EAB308]" />
            Top 10
          </span>
        </div>
      </motion.div>

      {/* Neighborhood ranking list */}
      <motion.div
        initial={{ opacity: 0, x: 8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.25 }}
        className="rounded-xl border border-white/10 bg-white/[0.04] p-3"
      >
        <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-wider text-white/60">
          Ranking por bairro
        </p>
        <div className="space-y-2.5">
          {neighborhoods.map((n, i) => {
            const positive = n.change > 0;
            return (
              <motion.div
                key={n.name}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.06 }}
                className="flex items-center gap-2"
              >
                <span
                  className="flex size-6 shrink-0 items-center justify-center rounded-md text-[10px] font-bold text-white"
                  style={{ backgroundColor: n.color }}
                >
                  #{n.position}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[11px] font-semibold text-white">{n.name}</p>
                  <div className="mt-1 h-1 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${n.score}%` }}
                      transition={{ duration: 0.7, delay: 0.35 + i * 0.06 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: n.color }}
                    />
                  </div>
                </div>
                <span
                  className={[
                    "inline-flex shrink-0 items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[9px] font-bold",
                    positive
                      ? "bg-[#22C55E]/15 text-[#22C55E]"
                      : "bg-[#EF4444]/15 text-[#EF4444]",
                  ].join(" ")}
                >
                  {positive ? (
                    <ArrowUp className="size-2.5" aria-hidden="true" />
                  ) : (
                    <ArrowDown className="size-2.5" aria-hidden="true" />
                  )}
                  {Math.abs(n.change)}
                </span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

/* ─────────── Selector ─────────── */
export function FeatureVisual({ tabIndex }: { tabIndex: number }) {
  switch (tabIndex) {
    case 0:
      return <PanelMock />;
    case 1:
      return <KeywordsMock />;
    case 2:
      return <ReviewsMock />;
    case 3:
      return <AnalyticsMock />;
    default:
      return null;
  }
}
