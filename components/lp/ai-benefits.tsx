"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Cpu,
  RefreshCw,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

interface Benefit {
  key: string;
  label: string;
  title: string;
  description: string;
  fromColor: string;
  toColor: string;
  icon: typeof RefreshCw;
}

const BENEFITS: Benefit[] = [
  {
    key: "atualizacoes",
    label: "Atualizações",
    title: "Atualizações constantes, ranqueamento garantido",
    description:
      "Nossa IA monitora seu Perfil de Empresa 24h por dia e ajusta automaticamente a estratégia. Você fica no topo do Google sem precisar acompanhar manualmente.",
    fromColor: "#22C55E",
    toColor: "#3B82F6",
    icon: RefreshCw,
  },
  {
    key: "resultados",
    label: "Resultados",
    title: "Resultados rápidos e consistentes",
    description:
      "A inteligência artificial identifica as melhores oportunidades para sua empresa — transformando dados brutos em decisões que aceleram o crescimento real.",
    fromColor: "#EF4444",
    toColor: "#F97316",
    icon: TrendingUp,
  },
  {
    key: "foco",
    label: "Foco",
    title: "90% dos clientes prontos para comprar",
    description:
      "Quem pesquisa no Google está no momento de decisão. Nossa IA conecta seu negócio exatamente com esses clientes — não com curiosos.",
    fromColor: "#3B82F6",
    toColor: "#EF4444",
    icon: Target,
  },
  {
    key: "tecnologia",
    label: "Tecnologia",
    title: "API oficial do Google",
    description:
      "Operamos diretamente sobre a API oficial do Google, garantindo máxima eficiência, segurança e legitimidade para o seu Perfil de Empresa.",
    fromColor: "#F97316",
    toColor: "#22C55E",
    icon: Cpu,
  },
];

const CYCLE_MS = 5800;

/* ───── Central animated visual ───── */
function AiVisual({ benefit, index }: { benefit: Benefit; index: number }) {
  const orbitalDots = [
    { left: "10%", top: "28%", size: 14, delay: 0 },
    { left: "86%", top: "22%", size: 10, delay: 0.4 },
    { left: "82%", top: "72%", size: 16, delay: 0.8 },
    { left: "14%", top: "78%", size: 11, delay: 1.2 },
    { left: "50%", top: "8%", size: 8, delay: 1.6 },
    { left: "48%", top: "92%", size: 9, delay: 2.0 },
  ];

  return (
    <div className="relative mx-auto aspect-[5/4] w-full max-w-[320px] sm:aspect-square sm:max-w-[400px] lg:max-w-[460px]">
      {/* Background radial glow */}
      <motion.div
        key={`glow-${index}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-6 rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, ${benefit.fromColor}55, ${benefit.toColor}30, transparent 70%)`,
        }}
      />

      {/* Outer rotating dashed ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute inset-2 rounded-full border-2 border-dashed"
        style={{ borderColor: `${benefit.fromColor}55` }}
      />

      {/* Inner reverse-rotating ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
        className="absolute inset-12 rounded-full border border-dashed"
        style={{ borderColor: `${benefit.toColor}55` }}
      />

      {/* Gradient progress arc (cycle indicator) */}
      <svg
        className="absolute inset-0 size-full -rotate-90"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`arc-${benefit.key}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={benefit.fromColor} />
            <stop offset="100%" stopColor={benefit.toColor} />
          </linearGradient>
        </defs>
        <motion.circle
          key={`arc-${index}`}
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke={`url(#arc-${benefit.key})`}
          strokeWidth="1.5"
          strokeLinecap="round"
          pathLength="1"
          initial={{ strokeDasharray: "0 1" }}
          animate={{ strokeDasharray: "1 1" }}
          transition={{ duration: CYCLE_MS / 1000, ease: "linear" }}
        />
      </svg>

      {/* Central card */}
      <div
        className="absolute inset-[22%] flex flex-col items-center justify-center rounded-3xl bg-white shadow-2xl"
        style={{
          boxShadow: `0 30px 60px -20px ${benefit.fromColor}40, 0 10px 25px -10px ${benefit.toColor}20`,
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.6, rotate: -12 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.6, rotate: 12 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center text-center"
          >
            <span
              className="flex size-16 items-center justify-center rounded-2xl shadow-md sm:size-20"
              style={{
                background: `linear-gradient(135deg, ${benefit.fromColor}, ${benefit.toColor})`,
              }}
            >
              <benefit.icon className="size-8 text-white sm:size-10" aria-hidden="true" />
            </span>
            <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#9CA3AF]">
              GeoRanking AI
            </p>
            <p
              className="text-lg font-bold sm:text-xl"
              style={{ color: benefit.fromColor }}
            >
              {benefit.label}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating orbital dots */}
      {orbitalDots.map((d, i) => (
        <motion.span
          key={i}
          animate={{
            scale: [1, 1.25, 1],
            y: [0, -10, 0],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 3 + i * 0.4,
            repeat: Infinity,
            delay: d.delay,
            ease: "easeInOut",
          }}
          className="absolute rounded-full shadow-md"
          style={{
            left: d.left,
            top: d.top,
            width: d.size,
            height: d.size,
            backgroundColor: i % 2 === 0 ? benefit.fromColor : benefit.toColor,
          }}
        />
      ))}

      {/* Static brand chips at corners — sempre visíveis (mobile inset, desktop fora) */}
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1 top-4 z-10 flex h-7 items-center gap-1 rounded-full border border-[#1A1A1A]/10 bg-white px-2 text-[10px] font-semibold text-[#1A1A1A] shadow-md sm:-left-2 sm:top-12 sm:h-9 sm:gap-1.5 sm:px-3 sm:text-[11px] sm:shadow-lg"
      >
        <span className="size-1.5 rounded-full bg-[#22C55E] sm:size-2" />
        24/7 online
      </motion.div>
      <motion.div
        animate={{ y: [6, -6, 6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-1 bottom-4 z-10 flex h-7 items-center gap-1 rounded-full border border-[#1A1A1A]/10 bg-white px-2 text-[10px] font-semibold text-[#1A1A1A] shadow-md sm:-right-2 sm:bottom-16 sm:h-9 sm:gap-1.5 sm:px-3 sm:text-[11px] sm:shadow-lg"
      >
        <Sparkles className="size-2.5 text-[#EAB308] sm:size-3" aria-hidden="true" />
        IA dedicada
      </motion.div>
    </div>
  );
}

/* ───── Main section ───── */
export function AiBenefits() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => {
      setActive((i) => (i + 1) % BENEFITS.length);
    }, CYCLE_MS);
    return () => clearTimeout(t);
  }, [active, paused]);

  const current = BENEFITS[active];

  return (
    <section
      id="ia"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      {/* Background decorativo */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-1/4 size-[440px] rounded-full bg-[#3B82F6]/8 blur-3xl" />
        <div className="absolute -right-40 bottom-1/4 size-[480px] rounded-full bg-[#22C55E]/8 blur-3xl" />
        <svg
          className="absolute inset-0 size-full opacity-[0.025]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="ai-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1A1A1A" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ai-grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mb-5 inline-flex h-8 items-center gap-1.5 rounded-full border border-[#22C55E]/20 bg-[#22C55E]/8 px-3 text-xs text-[#16A34A]">
            <Sparkles className="size-3.5 text-[#22C55E]" aria-hidden="true" />
            GeoRanking AI
          </Badge>
          <h2 className="text-balance text-3xl font-bold leading-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl">
            Por que escolher nossa{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#3B82F6]">IA</span>
              <span className="absolute -inset-1 -z-0 rounded-md bg-[#3B82F6]/10" />
            </span>{" "}
            para sua empresa?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#6B7280] sm:text-lg">
            Inteligência artificial trabalhando 24 horas por dia para colocar seu negócio
            na frente da concorrência.
          </p>
        </div>

        {/* Main grid */}
        <div
          className="mt-10 grid gap-6 sm:mt-12 sm:gap-8 lg:mt-16 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Visual — sempre primeiro (topo em mobile, esquerda em desktop) */}
          <div className="order-1 lg:order-1">
            <AiVisual benefit={current} index={active} />
          </div>

          {/* Lista de benefícios — min-h fixo para conter a animação e não empurrar próximas seções */}
          <div className="order-2 flex min-h-[420px] flex-col gap-2.5 sm:min-h-[460px] sm:gap-3 lg:order-2 lg:min-h-[440px]">
            {BENEFITS.map((b, i) => {
              const isActive = i === active;
              const Icon = b.icon;
              return (
                <motion.button
                  key={b.key}
                  type="button"
                  onClick={() => {
                    setActive(i);
                    setPaused(true);
                  }}
                  whileHover={{ x: isActive ? 0 : 4 }}
                  transition={{ duration: 0.2 }}
                  className={[
                    "group relative w-full overflow-hidden rounded-2xl border text-left transition-all duration-300",
                    isActive
                      ? "border-[#1A1A1A]/15 bg-white shadow-xl shadow-black/5"
                      : "border-[#1A1A1A]/8 bg-white hover:border-[#1A1A1A]/12 hover:shadow-md",
                  ].join(" ")}
                  aria-expanded={isActive}
                  aria-controls={`benefit-${b.key}-panel`}
                >
                  <div className="flex items-start gap-4 p-4 sm:p-5">
                    {/* Icon */}
                    <span
                      className={[
                        "flex size-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300",
                        isActive ? "shadow-md" : "",
                      ].join(" ")}
                      style={
                        isActive
                          ? {
                              background: `linear-gradient(135deg, ${b.fromColor}, ${b.toColor})`,
                            }
                          : { backgroundColor: "#F5F5F5" }
                      }
                    >
                      <Icon
                        className="size-5 transition-colors"
                        style={{ color: isActive ? "#FFFFFF" : "#6B7280" }}
                        aria-hidden="true"
                      />
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <h3
                          className="text-base font-bold transition-colors sm:text-lg"
                          style={{ color: isActive ? b.fromColor : "#1A1A1A" }}
                        >
                          {b.label}
                        </h3>
                        <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider text-[#9CA3AF]">
                          {String(i + 1).padStart(2, "0")} / {BENEFITS.length}
                        </span>
                      </div>

                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            id={`benefit-${b.key}-panel`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="mt-2 min-h-[68px] text-sm leading-6 text-[#6B7280] sm:min-h-[56px]">
                              {b.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Gradient line — progress when active, static thin line when idle */}
                  <div className="relative h-1.5 bg-[#F5F5F5] sm:h-1">
                    <motion.div
                      key={`bar-${b.key}-${isActive ? "active" : "idle"}-${active}`}
                      initial={{ width: isActive ? "0%" : "0%" }}
                      animate={{ width: isActive ? "100%" : "0%" }}
                      transition={{
                        duration: isActive ? CYCLE_MS / 1000 : 0.3,
                        ease: "linear",
                      }}
                      className="absolute inset-y-0 left-0 rounded-r-full"
                      style={{
                        background: `linear-gradient(to right, ${b.fromColor}, ${b.toColor})`,
                      }}
                    />
                  </div>
                </motion.button>
              );
            })}

            {/* Auto-cycle hint */}
            <p className="pt-2 text-center text-[10px] uppercase tracking-wider text-[#9CA3AF] lg:text-left">
              {paused ? "Pausado · passe o mouse para ver outros" : "Avançando automaticamente"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
