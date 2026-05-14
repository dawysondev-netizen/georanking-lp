"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  CircleDot,
  Cpu,
  Crown,
  Eye,
  Gauge,
  Gem,
  Globe,
  LayoutDashboard,
  KeyRound,
  Medal,
  MessageSquareText,
  Navigation,
  Phone,
  Repeat,
  Shield,
  Star,
  TrendingUp,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AiBenefits } from "@/components/lp/ai-benefits";
import { FeatureVisual } from "@/components/lp/feature-visuals";
import { GoogleSearchAnimation } from "@/components/lp/google-search-animation";
import { GpsBeacon } from "@/components/lp/gps-beacon";
import { PhoneHighlight } from "@/components/lp/phone-highlight";
import { VideoTestimonials } from "@/components/lp/video-testimonials";
import { WhatsappIcon } from "@/components/lp/whatsapp-icon";
import { FAQS } from "@/content/faq";
import { PLANS } from "@/content/plans";
import { SITE_INFO } from "@/content/site";
import { buildWhatsappUrl } from "@/lib/whatsapp";

/* ─── Sidebar navigation for Features section ─── */
const featureTabs = [
  { label: "Painel de Controle", icon: LayoutDashboard, color: "text-[#22C55E]", bg: "bg-[#22C55E]/10" },
  { label: "Palavras-Chave", icon: KeyRound, color: "text-[#3B82F6]", bg: "bg-[#3B82F6]/10" },
  { label: "Gestão de Reviews", icon: MessageSquareText, color: "text-[#EAB308]", bg: "bg-[#EAB308]/10" },
  { label: "Análise de Ranqueamento", icon: BarChart3, color: "text-[#EF4444]", bg: "bg-[#EF4444]/10" },
];

const featureContent = [
  {
    badges: ["Agenda Inteligente", "Atendimento 24/7", "Integração com WhatsApp"],
    title: "Monitore métricas vitais do seu Perfil de Empresa em tempo real.",
    text: "Visualizações no mapa, cliques no site, ligações e rotas — tudo em um painel intuitivo.",
    stats: [
      { label: "Ligações", value: "+312%" },
      { label: "Visitas", value: "+1.847" },
      { label: "Rotas", value: "+186" },
    ],
  },
  {
    badges: ["Descoberta de Termos", "Ranking Local", "Oportunidades"],
    title: "Descubra os termos pelos quais sua empresa é encontrada.",
    text: "Monitore e priorize as palavras-chave certas para vencer a concorrência local.",
    stats: [
      { label: "Termos monitorados", value: "8" },
      { label: "No top 3", value: "82%" },
      { label: "Oportunidades", value: "12" },
    ],
  },
  {
    badges: ["IA Responde", "Reputação Online", "Automático"],
    title: "IA responde avaliações automaticamente.",
    text: "Mantenha sua reputação online afiada sem você ter que parar o dia.",
    stats: [
      { label: "Respondidas", value: "100%" },
      { label: "Tempo médio", value: "< 2min" },
      { label: "Avaliação média", value: "4,9 ★" },
    ],
  },
  {
    badges: ["Mapa de Calor", "Raio de Busca", "Concorrentes"],
    title: "Acompanhe sua posição no ranking do Google.",
    text: "Mapeamos sua presença por bairro, raio e termo para garantir que você esteja sempre no topo.",
    stats: [
      { label: "Bairros mapeados", value: "42" },
      { label: "Top 3 local", value: "76%" },
      { label: "Concorrentes", value: "18" },
    ],
  },
];

/* ─── Value proposition cards ─── */
const valueCards = [
  {
    icon: Repeat,
    color: "text-[#22C55E]",
    bg: "bg-[#22C55E]/10",
    title: "Automação",
    text: "Atualizações constantes e automáticas por IA, mantendo seu negócio sempre à frente da concorrência.",
  },
  {
    icon: Shield,
    color: "text-[#3B82F6]",
    bg: "bg-[#3B82F6]/10",
    title: "Constância",
    text: "Garantimos segurança e eficácia. São mais de 7.000 perfis otimizados com resultados comprovados.",
  },
  {
    icon: Gauge,
    color: "text-[#EAB308]",
    bg: "bg-[#EAB308]/10",
    title: "Eficiência",
    text: "Nossa IA conecta seu negócio com os compradores no Google, aumentando vendas e visibilidade.",
  },
  {
    icon: Cpu,
    color: "text-[#EF4444]",
    bg: "bg-[#EF4444]/10",
    title: "Tecnologia",
    text: "A única inteligência artificial da América Latina integrada à API oficial do Google.",
  },
];

/* ─── Growth metrics ─── */
const growthMetrics = [
  { label: "Ligações", value: "312", color: "text-[#22C55E]", icon: Phone },
  { label: "Acessos", value: "1.847", color: "text-[#3B82F6]", icon: Globe },
  { label: "Visualizações", value: "4.275", color: "text-[#EF4444]", icon: Eye },
  { label: "Rotas", value: "186", color: "text-[#EAB308]", icon: Navigation },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  const [activeTab, setActiveTab] = useState(3);

  const whatsappPrimary = useMemo(() => buildWhatsappUrl(), []);
  const whatsappFinal = useMemo(
    () =>
      buildWhatsappUrl(
        "Olá! Vim do site GeoRanking e quero criar minha conta gratuita. Pode me auxiliar?"
      ),
    []
  );

  const currentFeature = featureContent[activeTab];

  return (
    <div className="overflow-hidden bg-[#F5F5F5] text-[#1A1A1A]">
      {/* ═══════════ HERO — primeira dobra, altura fixa ═══════════ */}
      <section
        id="topo"
        className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden bg-white"
      >
        {/* Background decorativo: mesh gradient + grid */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          {/* Mesh gradient blobs */}
          <div className="absolute -left-32 -top-32 size-[480px] rounded-full bg-[#3B82F6]/8 blur-3xl" />
          <div className="absolute -right-40 top-40 size-[520px] rounded-full bg-[#22C55E]/8 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 size-[360px] rounded-full bg-[#EAB308]/6 blur-3xl" />
          {/* Grid pattern */}
          <svg
            className="absolute inset-0 size-full opacity-[0.04]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="hero-grid"
                width="48"
                height="48"
                patternUnits="userSpaceOnUse"
              >
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#1A1A1A" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_1fr] lg:gap-10 lg:px-8 lg:py-16">
          {/* Left — Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="max-w-xl"
          >
            {/* Status badge */}
            <Badge className="mb-5 inline-flex h-7 items-center gap-1.5 rounded-full border border-[#22C55E]/20 bg-[#22C55E]/8 px-2.5 text-[11px] text-[#16A34A] sm:mb-6 sm:h-8 sm:px-3 sm:text-xs">
              <span className="relative flex size-2">
                <motion.span
                  animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                  className="absolute inline-flex size-full rounded-full bg-[#22C55E]"
                />
                <span className="relative inline-flex size-2 rounded-full bg-[#22C55E]" />
              </span>
              Alta procura na sua região
            </Badge>

            <h1 className="text-balance text-[2rem] font-bold leading-[1.08] text-[#1A1A1A] sm:text-4xl md:text-5xl lg:text-6xl">
              Seu projeto no{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#3B82F6]">topo das pesquisas</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                  className="absolute bottom-1 left-0 -z-0 h-3 w-full origin-left rounded-sm bg-[#3B82F6]/15"
                />
              </span>
            </h1>
            <p className="mt-4 max-w-lg text-[15px] leading-6 text-[#6B7280] sm:mt-6 sm:text-lg sm:leading-8">
              Com Geo Ranking coloque sua empresa onde seus clientes estão: no topo do Google e na palma da mão de quem quer comprar.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
              <Button
                render={<a href={whatsappPrimary} target="_blank" rel="noreferrer" />}
                nativeButton={false}
                className="h-12 w-full rounded-xl bg-[#1A1A1A] px-6 text-base text-white shadow-lg shadow-[#1A1A1A]/20 hover:bg-[#374151] sm:w-auto"
              >
                Falar com especialista
                <ArrowRight className="size-5" aria-hidden="true" />
              </Button>
              <a
                href="#produto"
                className="inline-flex h-11 items-center justify-center gap-1.5 rounded-xl px-2 text-sm font-semibold text-[#1A1A1A] transition hover:text-[#3B82F6] sm:h-12"
              >
                Ver como funciona
                <ChevronRight className="size-4" aria-hidden="true" />
              </a>
            </div>

            {/* Social proof row — compact mobile */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.5 }}
              className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 sm:mt-10 sm:gap-x-6 sm:gap-y-4"
            >
              {/* Avatar stack */}
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="flex -space-x-2">
                  {[
                    { c: "from-[#3B82F6] to-[#1D4ED8]", l: "J" },
                    { c: "from-[#22C55E] to-[#15803D]", l: "M" },
                    { c: "from-[#EAB308] to-[#A16207]", l: "A" },
                    { c: "from-[#EF4444] to-[#B91C1C]", l: "L" },
                  ].map((a, i) => (
                    <span
                      key={i}
                      className={`flex size-7 items-center justify-center rounded-full bg-gradient-to-br ${a.c} text-[10px] font-bold text-white ring-2 ring-white sm:size-8 sm:text-xs`}
                    >
                      {a.l}
                    </span>
                  ))}
                  <span className="flex size-7 items-center justify-center rounded-full bg-[#F5F5F5] text-[10px] font-bold text-[#1A1A1A] ring-2 ring-white sm:size-8">
                    +7k
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-0.5 sm:gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="size-3 fill-[#EAB308] text-[#EAB308] sm:size-3.5"
                        aria-hidden="true"
                      />
                    ))}
                    <span className="ml-1 text-[11px] font-semibold text-[#1A1A1A] sm:text-xs">5,0</span>
                  </div>
                  <p className="text-[11px] leading-tight text-[#6B7280] sm:text-xs">+7.000 empresas no topo</p>
                </div>
              </div>

              {/* Compact bullets */}
              <ul className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-[#6B7280] sm:gap-x-4 sm:text-xs">
                <li className="inline-flex items-center gap-1">
                  <Check className="size-3 text-[#22C55E] sm:size-3.5" aria-hidden="true" />
                  Sem fidelidade
                </li>
                <li className="inline-flex items-center gap-1">
                  <Check className="size-3 text-[#22C55E] sm:size-3.5" aria-hidden="true" />
                  Teste grátis 7 dias
                </li>
                <li className="inline-flex items-center gap-1">
                  <Check className="size-3 text-[#22C55E] sm:size-3.5" aria-hidden="true" />
                  API oficial Google
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* GPS Beacon — visual focal só em mobile (entre texto e simulador) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="-my-2 flex justify-center lg:hidden"
            aria-hidden="true"
          >
            <GpsBeacon size="md" />
          </motion.div>

          {/* Right — Google Search Animation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <GoogleSearchAnimation />
          </motion.div>
        </div>
      </section>

      {/* ═══════════ FUNCIONALIDADES — fundo escuro ═══════════ */}
      <section id="produto" className="bg-[#1A1A1A] py-16 text-white sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.55 }}
            className="mb-12 max-w-2xl"
          >
            <h2 className="text-balance text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Nunca mais perca um cliente.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/60 sm:mt-5">
              Nossa IA agenda atendimentos, responde perguntas e gerencia sua disponibilidade automaticamente — 24 horas por dia, 7 dias por semana.
            </p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
            {/* Sidebar tabs */}
            <div
              className="-mx-4 flex flex-row gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:px-0 lg:flex-col lg:gap-1 lg:pb-0 [&::-webkit-scrollbar]:hidden"
              role="tablist"
              aria-label="Funcionalidades"
            >
              {featureTabs.map((tab, index) => {
                const isActive = activeTab === index;
                return (
                  <button
                    key={tab.label}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveTab(index)}
                    className={[
                      "flex shrink-0 items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition lg:gap-3 lg:px-4 lg:py-3",
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-white/55 hover:bg-white/5 hover:text-white/85",
                    ].join(" ")}
                  >
                    <span className={`flex size-8 shrink-0 items-center justify-center rounded-lg lg:size-9 ${tab.bg}`}>
                      <tab.icon className={`size-4 lg:size-5 ${tab.color}`} aria-hidden="true" />
                    </span>
                    <span className="whitespace-nowrap text-xs sm:text-sm">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Content card — altura fixa garante zero layout shift entre tabs */}
            <div className="relative flex min-h-[680px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 p-6 shadow-xl shadow-black/20 sm:p-8 lg:h-[680px] lg:min-h-0">
              {/* Glow corner that matches active tab color */}
              <motion.span
                key={`glow-${activeTab}`}
                aria-hidden="true"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.35 }}
                transition={{ duration: 0.5 }}
                className={`absolute -right-12 -top-12 size-48 rounded-full blur-3xl ${featureTabs[activeTab].bg}`}
              />

              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="relative flex flex-1 flex-col"
              >
                <div className="mb-5 flex flex-wrap gap-2">
                  {currentFeature.badges.map((badge) => (
                    <Badge
                      key={badge}
                      className="h-7 rounded-full border-white/10 bg-white/10 px-3 text-xs text-white/85"
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-balance text-2xl font-bold leading-tight sm:text-3xl">
                  {currentFeature.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
                  {currentFeature.text}
                </p>

                {/* Feature visual mockup */}
                <div className="mt-6 flex-1">
                  <FeatureVisual tabIndex={activeTab} />
                </div>

                {/* Mini stats row */}
                <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3">
                  {currentFeature.stats.map((stat, idx) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: 0.15 + idx * 0.06 }}
                      className="rounded-xl border border-white/8 bg-white/[0.04] p-2.5 sm:p-3"
                    >
                      <p
                        className={`text-base font-bold leading-none sm:text-xl ${featureTabs[activeTab].color}`}
                      >
                        {stat.value}
                      </p>
                      <p className="mt-1 text-[9px] uppercase tracking-wider text-white/45 sm:text-[10px]">
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ CARDS DE VALOR ═══════════ */}
      <section className="bg-[#F5F5F5] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {valueCards.map((card, index) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-[#1A1A1A]/8 bg-white p-6 transition hover:border-[#1A1A1A]/15 hover:shadow-xl hover:shadow-black/5"
              >
                {/* Top accent line */}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ${card.bg.replace("/10", "")}`}
                />
                {/* Background number */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-1 -top-2 select-none text-7xl font-black leading-none text-[#1A1A1A]/[0.04] sm:text-8xl"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span
                  className={`relative mb-6 flex size-12 items-center justify-center rounded-xl ${card.bg}`}
                >
                  <card.icon className={`size-6 ${card.color}`} aria-hidden="true" />
                </span>
                <h3 className="relative text-lg font-bold text-[#1A1A1A]">{card.title}</h3>
                <p className="relative mt-3 text-sm leading-6 text-[#6B7280]">{card.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ POR QUE NOSSA IA ═══════════ */}
      <AiBenefits />

      {/* ═══════════ CRESCIMENTO ═══════════ */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="flex flex-col justify-center">
            <Badge className="mb-5 inline-flex h-8 w-fit rounded-lg bg-[#F5F5F5] px-3 text-[#1A1A1A]">
              Resultados reais
            </Badge>
            <h2 className="text-balance text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Seu crescimento é a nossa prioridade.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-[#6B7280]">
              O Google é a vitrine mais poderosa do mundo. Nosso objetivo é que seu negócio tenha a máxima visibilidade e resultados reais.
            </p>
            <div className="mt-8">
              <Button
                render={<a href={whatsappPrimary} target="_blank" rel="noreferrer" />}
                nativeButton={false}
                className="h-12 rounded-xl bg-[#1A1A1A] px-6 text-base text-white hover:bg-[#374151]"
              >
                Falar com especialista
                <ArrowRight className="size-5" aria-hidden="true" />
              </Button>
            </div>
          </div>

          {/* Metrics card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55 }}
            className="rounded-2xl border border-[#1A1A1A]/8 bg-[#F5F5F5] p-6"
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-[#6B7280]">Crescimento mensal</p>
                <div className="mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <p className="text-4xl font-bold text-[#1A1A1A] sm:text-5xl">50</p>
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#22C55E]/10 px-2 py-0.5 text-xs font-semibold text-[#22C55E] sm:text-sm">
                    <TrendingUp className="size-3.5 sm:size-4" aria-hidden="true" />
                    157%
                  </span>
                </div>
              </div>
              <BarChart3 className="size-10 text-[#22C55E]" aria-hidden="true" />
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {growthMetrics.map((metric) => (
                <div key={metric.label} className="rounded-xl bg-white p-4 text-center">
                  <metric.icon className={`mx-auto mb-2 size-5 ${metric.color}`} aria-hidden="true" />
                  <p className="text-xl font-bold text-[#1A1A1A]">{metric.value}</p>
                  <p className="mt-1 text-xs text-[#6B7280]">{metric.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ DEPOIMENTOS (mantido do projeto) ═══════════ */}
      <VideoTestimonials />

      {/* ═══════════ CARD 7.000+ CLIENTES ═══════════ */}
      <section className="bg-[#F5F5F5] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55 }}
            className="grid overflow-hidden rounded-2xl border border-[#1A1A1A]/8 bg-white shadow-lg lg:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <Badge className="mb-5 inline-flex h-8 w-fit items-center gap-1.5 rounded-full bg-[#22C55E]/10 px-3 text-xs text-[#16A34A]">
                <Star className="size-3.5 fill-[#22C55E] text-[#22C55E]" aria-hidden="true" />
                +7.000 clientes ativos
              </Badge>
              <h2 className="text-balance text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
                Aprovado por mais de 7.000 negócios locais.
              </h2>
              <p className="mt-4 text-base leading-7 text-[#6B7280]">
                A confiança de milhares de empresas comprova a eficácia da nossa plataforma em gerar resultados reais — em todos os portes e segmentos.
              </p>
              <div className="mt-6">
                <Button
                  render={<a href={whatsappPrimary} target="_blank" rel="noreferrer" />}
                  nativeButton={false}
                  className="h-11 rounded-xl bg-[#1A1A1A] px-5 text-sm text-white hover:bg-[#374151]"
                >
                  Quero fazer parte
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
              </div>
            </div>

            <div className="relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#F9FAFB] to-[#F1F3F5] p-8 sm:p-10">
              {/* Decorative dots */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-50"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(26,26,26,0.06) 1px, transparent 1px)",
                  backgroundSize: "18px 18px",
                }}
              />

              {/* Rating block */}
              <div className="relative flex flex-col items-center">
                <div className="flex items-end gap-2">
                  <p className="text-6xl font-black leading-none text-[#1A1A1A] sm:text-7xl lg:text-8xl">
                    5,0
                  </p>
                  <span className="mb-2 inline-flex items-center gap-1 rounded-full bg-[#22C55E]/10 px-2 py-0.5 text-xs font-semibold text-[#22C55E]">
                    <TrendingUp className="size-3" aria-hidden="true" />
                    +18%
                  </span>
                </div>
                <div className="mt-3 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="size-5 fill-[#EAB308] text-[#EAB308] sm:size-6"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="mt-2 text-xs font-medium text-[#6B7280] sm:text-sm">
                  Avaliação média baseada em 2.184 reviews
                </p>
              </div>

              {/* Avatar stack */}
              <div className="relative mt-7 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[
                    { c: "from-[#3B82F6] to-[#1D4ED8]", l: "J" },
                    { c: "from-[#22C55E] to-[#15803D]", l: "M" },
                    { c: "from-[#EAB308] to-[#A16207]", l: "A" },
                    { c: "from-[#EF4444] to-[#B91C1C]", l: "L" },
                    { c: "from-[#8B5CF6] to-[#6D28D9]", l: "P" },
                  ].map((a, i) => (
                    <span
                      key={i}
                      className={`flex size-9 items-center justify-center rounded-full bg-gradient-to-br ${a.c} text-xs font-bold text-white ring-2 ring-white`}
                    >
                      {a.l}
                    </span>
                  ))}
                </div>
                <p className="text-xs font-medium text-[#6B7280]">
                  Aprovado por <strong className="text-[#1A1A1A]">7.482</strong> empresas
                </p>
              </div>

              {/* Mini stats */}
              <div className="relative mt-6 grid w-full max-w-xs grid-cols-2 gap-3 sm:gap-4">
                <div className="rounded-xl bg-white px-3 py-2.5 text-center shadow-sm ring-1 ring-[#1A1A1A]/5">
                  <p className="text-lg font-bold text-[#1A1A1A] sm:text-xl">47</p>
                  <p className="text-[10px] uppercase tracking-wider text-[#9CA3AF]">cidades</p>
                </div>
                <div className="rounded-xl bg-white px-3 py-2.5 text-center shadow-sm ring-1 ring-[#1A1A1A]/5">
                  <p className="text-lg font-bold text-[#1A1A1A] sm:text-xl">23</p>
                  <p className="text-[10px] uppercase tracking-wider text-[#9CA3AF]">segmentos</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ PLANOS ═══════════ */}
      <section id="planos" className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge className="mb-5 h-8 rounded-lg bg-[#F5F5F5] px-3 text-[#1A1A1A]">
              Planos & preços
            </Badge>
            <h2 className="text-balance text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Planos que se encaixam ao perfil da sua empresa.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#6B7280]">
              Escolha a velocidade do seu crescimento. Sem contratos de fidelidade — você fica pelos resultados.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PLANS.map((plan, index) => {
              const isBronze = plan.tier === "bronze";
              const isPrata = plan.tier === "prata";
              const isOuro = plan.tier === "ouro";
              const isDiamante = plan.tier === "diamante";

              const TierIcon = isBronze
                ? Medal
                : isPrata
                ? Award
                : isOuro
                ? Crown
                : Gem;
              const tierIconColor = isDiamante
                ? "text-white/80"
                : isOuro
                ? "text-[#EAB308]"
                : "text-[#9CA3AF]";

              return (
                <motion.article
                  key={plan.tier}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  whileHover={{ y: -6 }}
                  className={[
                    "group relative flex flex-col rounded-2xl p-7 transition-all duration-300",
                    isOuro
                      ? "border-2 border-[#22C55E] bg-white text-[#1A1A1A] shadow-xl shadow-[#22C55E]/15 hover:shadow-2xl hover:shadow-[#22C55E]/25"
                      : isDiamante
                      ? "border border-[#1A1A1A] bg-[#1A1A1A] text-white shadow-xl hover:shadow-2xl"
                      : "border border-[#1A1A1A]/10 bg-white text-[#1A1A1A] hover:border-[#1A1A1A]/20 hover:shadow-xl",
                  ].join(" ")}
                >
                  {/* Highlight badge — barra full-width saindo do topo no hover */}
                  {plan.highlight && (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 top-0 z-20 flex h-9 translate-y-0 items-center justify-center gap-1.5 rounded-t-2xl bg-gradient-to-r from-[#16A34A] via-[#22C55E] to-[#16A34A] px-4 text-[11px] font-bold uppercase tracking-wider text-white opacity-0 shadow-lg shadow-[#22C55E]/30 transition-all duration-300 ease-out group-hover:-translate-y-7 group-hover:opacity-100"
                    >
                      <Star className="size-3 fill-white" aria-hidden="true" />
                      {plan.highlight}
                    </span>
                  )}

                  {/* Tier icon */}
                  <span
                    className={[
                      "mb-5 inline-flex size-10 items-center justify-center rounded-lg",
                      isDiamante ? "bg-white/10" : "bg-[#F5F5F5]",
                    ].join(" ")}
                  >
                    <TierIcon className={`size-5 ${tierIconColor}`} aria-hidden="true" />
                  </span>

                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p
                    className={[
                      "mt-1.5 min-h-[44px] text-sm leading-6",
                      isDiamante ? "text-white/60" : "text-[#6B7280]",
                    ].join(" ")}
                  >
                    {plan.tagline}
                  </p>

                  <div
                    className={[
                      "my-6 h-px",
                      isDiamante ? "bg-white/10" : "bg-[#1A1A1A]/8",
                    ].join(" ")}
                  />

                  <ul className="flex-1 space-y-4 text-sm">
                    {plan.features.map((feature) => (
                      <li key={feature.label} className="flex items-start gap-2.5">
                        <Check
                          className="mt-0.5 size-4 shrink-0 text-[#22C55E]"
                          aria-hidden="true"
                        />
                        <span>
                          <strong className="block font-bold text-[#22C55E]">
                            {feature.label}
                          </strong>
                          <span
                            className={[
                              "block text-xs leading-5",
                              isDiamante ? "text-white/55" : "text-[#6B7280]",
                            ].join(" ")}
                          >
                            {feature.detail}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    render={
                      <a
                        href={buildWhatsappUrl(plan.whatsappMessage)}
                        target="_blank"
                        rel="noreferrer"
                      />
                    }
                    nativeButton={false}
                    className={[
                      "mt-8 h-11 w-full rounded-lg text-sm font-semibold",
                      isOuro
                        ? "bg-[#22C55E] text-white shadow-md shadow-[#22C55E]/25 hover:bg-[#16a34a]"
                        : isDiamante
                        ? "border border-white/20 bg-white/5 text-white hover:bg-white hover:text-[#1A1A1A]"
                        : "bg-[#1A1A1A] text-white hover:bg-[#374151]",
                    ].join(" ")}
                  >
                    {plan.ctaLabel}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Button>
                </motion.article>
              );
            })}
          </div>

          {/* Reassurance row below plans */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#6B7280]">
            <span className="inline-flex items-center gap-1.5">
              <Check className="size-3.5 text-[#22C55E]" aria-hidden="true" />
              Sem fidelidade
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="size-3.5 text-[#22C55E]" aria-hidden="true" />
              Teste grátis 7 dias
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="size-3.5 text-[#22C55E]" aria-hidden="true" />
              Pagamento via cartão
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="size-3.5 text-[#22C55E]" aria-hidden="true" />
              Suporte 0800
            </span>
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section id="faq" className="bg-[#F5F5F5] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 lg:px-8">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Badge className="mb-5 inline-flex h-8 items-center gap-1.5 rounded-full bg-white px-3 text-xs text-[#1A1A1A]">
              <MessageSquareText className="size-3.5 text-[#3B82F6]" aria-hidden="true" />
              FAQ · {FAQS.length} respostas
            </Badge>
            <h2 className="text-balance text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Perguntas frequentes.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#6B7280]">
              Reunimos as dúvidas que aparecem mais nos atendimentos. Não achou a sua?
              Fale com a gente.
            </p>

            <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center">
              <a
                href={whatsappPrimary}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1DA851]"
              >
                <WhatsappIcon className="size-4 text-white" />
                Falar no WhatsApp
              </a>
              <a
                href={`tel:+${SITE_INFO.phoneE164}`}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-[#1A1A1A]/12 bg-white px-5 text-sm font-semibold transition hover:bg-[#F5F5F5]"
              >
                <PhoneHighlight withIcon className="text-sm" />
              </a>
            </div>
          </div>

          <Accordion className="rounded-2xl border border-[#1A1A1A]/8 bg-white px-5 sm:px-6">
            {FAQS.map((item, index) => (
              <AccordionItem key={item.question} value={`faq-${index}`}>
                <AccordionTrigger className="text-base font-semibold text-[#1A1A1A]">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-6 text-[#6B7280]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ═══════════ CTA FINAL ═══════════ */}
      <section
        id="contato"
        className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
      >
        {/* Background decoration */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-0 size-[440px] rounded-full bg-[#3B82F6]/8 blur-3xl" />
          <div className="absolute -right-32 bottom-0 size-[440px] rounded-full bg-[#22C55E]/8 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Badge className="mb-5 inline-flex h-8 items-center gap-1.5 rounded-full border border-[#22C55E]/20 bg-[#22C55E]/8 px-3 text-xs text-[#16A34A]">
            <span className="relative flex size-2">
              <motion.span
                animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                transition={{ duration: 1.6, repeat: Infinity }}
                className="absolute inline-flex size-full rounded-full bg-[#22C55E]"
              />
              <span className="relative inline-flex size-2 rounded-full bg-[#22C55E]" />
            </span>
            Atendimento de seg a sex · 9h às 18h
          </Badge>

          <h2 className="text-balance text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Comece a conquistar os novos clientes que estão no Google.
          </h2>
          <p className="mt-5 text-base leading-7 text-[#6B7280] sm:text-lg">
            Desbloqueie o potencial do seu negócio com impulsionamento e o olhar clínico da ADS.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              render={<a href={whatsappFinal} target="_blank" rel="noreferrer" />}
              nativeButton={false}
              className="h-12 w-full rounded-xl bg-[#1A1A1A] px-6 text-base text-white shadow-lg shadow-[#1A1A1A]/20 hover:bg-[#374151] sm:w-auto"
            >
              <MessageSquareText className="size-5" aria-hidden="true" />
              Falar com especialista
              <ArrowRight className="size-5" aria-hidden="true" />
            </Button>
            <a
              href={`tel:+${SITE_INFO.phoneE164}`}
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-[#1A1A1A]/12 bg-white px-6 text-base font-semibold transition hover:bg-[#F5F5F5] sm:w-auto"
            >
              <PhoneHighlight withIcon className="text-base" />
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#6B7280] sm:text-sm">
            <li className="inline-flex items-center gap-1.5">
              <CircleDot className="size-3 text-[#22C55E]" aria-hidden="true" />
              Sem fidelidade
            </li>
            <li className="inline-flex items-center gap-1.5">
              <CircleDot className="size-3 text-[#3B82F6]" aria-hidden="true" />
              Teste grátis de 7 dias
            </li>
            <li className="inline-flex items-center gap-1.5">
              <CircleDot className="size-3 text-[#EAB308]" aria-hidden="true" />
              Suporte 0800
            </li>
            <li className="inline-flex items-center gap-1.5">
              <CircleDot className="size-3 text-[#EF4444]" aria-hidden="true" />
              API oficial Google
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
