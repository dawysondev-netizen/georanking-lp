"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  ArrowRight,
  BarChart3,
  Check,
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
import { TrialOfferCard } from "@/components/lp/trial-offer-card";
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
      {/* ═══════════ HERO ═══════════ */}
      <section
        id="topo"
        className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden bg-white"
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

        <div className="relative mx-auto grid w-full max-w-[1400px] items-center gap-5 px-4 py-5 sm:px-6 sm:py-8 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[minmax(420px,0.78fr)_minmax(0,1.22fr)] lg:gap-8 lg:px-8 lg:py-10 xl:gap-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="min-w-0"
          >
            <div className="grid grid-cols-[minmax(0,1fr)_7.25rem] items-center gap-2 sm:block">
              <div className="min-w-0 text-left sm:text-center lg:text-left">
                <Badge className="mb-3 inline-flex h-7 items-center gap-1.5 rounded-full border border-[#22C55E]/20 bg-[#22C55E]/8 px-2.5 text-[10px] text-[#16A34A] sm:mb-5 sm:h-8 sm:px-3 sm:text-xs">
                  <span className="relative flex size-2">
                    <motion.span
                      animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                      transition={{ duration: 1.6, repeat: Infinity }}
                      className="absolute inline-flex size-full rounded-full bg-[#22C55E]"
                    />
                    <span className="relative inline-flex size-2 rounded-full bg-[#22C55E]" />
                  </span>
                  <span className="hidden sm:inline">Alta procura na sua região</span>
                  <span className="sm:hidden">Alta procura</span>
                </Badge>

                <h1 className="text-balance text-[2.1rem] font-extrabold leading-[1.03] tracking-tight text-[#1A1A1A] min-[390px]:text-[2.28rem] sm:text-5xl md:text-[3.35rem] lg:text-[3.65rem] xl:text-6xl">
                  Quando seu cliente pesquisa no Google,{" "}
                  <span className="text-[#3B82F6]">sua empresa aparece?</span>
                </h1>
                <p className="mt-3 max-w-lg text-sm leading-6 text-[#6B7280] sm:mx-auto sm:mt-5 sm:text-base sm:leading-7 lg:mx-0 lg:text-lg lg:leading-8">
                  Mais presença local com o{" "}
                  <span className="font-semibold text-[#3B82F6]">GeoRanking</span>.
                </p>
              </div>

              <div className="-mr-2 flex justify-end sm:hidden" aria-hidden="true">
                <GpsBeacon size="sm" />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4 flex flex-wrap items-center justify-start gap-x-3 gap-y-2 sm:mt-7 sm:justify-center sm:gap-x-6 lg:justify-start"
            >
              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="flex -space-x-1.5">
                  {[
                    { c: "from-[#3B82F6] to-[#1D4ED8]", l: "J" },
                    { c: "from-[#22C55E] to-[#15803D]", l: "M" },
                    { c: "from-[#EAB308] to-[#A16207]", l: "A" },
                    { c: "from-[#EF4444] to-[#B91C1C]", l: "L" },
                  ].map((a, i) => (
                    <span
                      key={i}
                      className={`flex size-6 items-center justify-center rounded-full bg-gradient-to-br ${a.c} text-[9px] font-bold text-white ring-2 ring-white sm:size-7 sm:text-[10px]`}
                    >
                      {a.l}
                    </span>
                  ))}
                  <span className="flex size-6 items-center justify-center rounded-full bg-[#F5F5F5] text-[9px] font-bold text-[#1A1A1A] ring-2 ring-white sm:size-7 sm:text-[10px]">
                    +7k
                  </span>
                </div>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="size-3 fill-[#EAB308] text-[#EAB308]"
                      aria-hidden="true"
                    />
                  ))}
                  <span className="ml-1 text-[11px] font-semibold text-[#1A1A1A]">5,0</span>
                </div>
              </div>

              <ul className="flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-[#6B7280] sm:text-xs">
                <li className="inline-flex items-center gap-1">
                  <Check className="size-3 text-[#22C55E]" aria-hidden="true" />
                  Sem fidelidade
                </li>
                <li className="inline-flex items-center gap-1">
                  <Check className="size-3 text-[#22C55E]" aria-hidden="true" />
                  Teste 7 dias
                </li>
                <li className="inline-flex items-center gap-1">
                  <Check className="size-3 text-[#22C55E]" aria-hidden="true" />
                  API Google
                </li>
              </ul>
            </motion.div>

            <div className="mt-4 -ml-2 grid grid-cols-[minmax(0,1fr)_8rem] gap-2 min-[390px]:grid-cols-[minmax(0,1fr)_8.5rem] min-[390px]:gap-3 sm:mx-auto sm:max-w-xl sm:grid-cols-[1fr_0.78fr] lg:hidden">
              <motion.div
                initial={{ opacity: 0, y: 14, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
                className="relative min-w-0 overflow-hidden rounded-2xl border border-[#1A1A1A]/8 bg-white p-3 shadow-xl shadow-[#3B82F6]/10"
              >
                <motion.div
                  animate={{ y: [-3, 3, -3] }}
                  transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute right-3 top-12 z-10 hidden rounded-full bg-white/95 px-2 py-1 text-[9px] font-bold text-[#22C55E] shadow-lg shadow-black/10 min-[390px]:block"
                >
                  subindo
                </motion.div>
                <div className="mb-3 flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-[#EF4444]/70" />
                  <span className="size-2 rounded-full bg-[#EAB308]/70" />
                  <span className="size-2 rounded-full bg-[#22C55E]/70" />
                  <span className="ml-1 h-5 min-w-0 flex-1 rounded-full bg-[#F3F4F6] px-3 text-[9px] leading-5 text-[#6B7280]">
                    google.com/maps
                  </span>
                </div>
                <div className="flex h-9 items-center rounded-full border border-[#1A1A1A]/10 px-3 text-xs text-[#6B7280]">
                  sua empresa
                </div>
                <div className="mt-3 grid grid-cols-4 gap-1.5 text-[8px] text-[#6B7280]">
                  {["Avaliação", "Aberto", "Distância", "Preço"].map((item) => (
                    <span key={item} className="truncate rounded-full bg-[#F8FAFC] px-2 py-1 text-center ring-1 ring-[#1A1A1A]/8">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="relative mt-3 h-24 overflow-hidden rounded-xl bg-[#E8EEF4]">
                  <div className="absolute left-0 top-7 h-2 w-full bg-white" />
                  <div className="absolute left-1/2 top-0 h-full w-2 -translate-x-1/2 bg-white" />
                  <div className="absolute left-3 top-16 h-2 w-full rotate-[-8deg] bg-white" />
                  <motion.span
                    animate={{ scale: [1, 1.12, 1] }}
                    transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-[48%] top-[44%] flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#22C55E] text-[9px] font-bold text-white ring-4 ring-[#22C55E]/20"
                  >
                    <motion.span
                      animate={{ scale: [1, 2.2], opacity: [0.45, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                      className="absolute inset-0 rounded-full bg-[#22C55E]"
                    />
                    <span className="relative">
                      #1
                    </span>
                  </motion.span>
                  <span className="absolute bottom-2 right-2 text-[8px] uppercase text-[#6B7280]">Maps</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.32, ease: "easeOut" }}
                className="rounded-2xl border border-[#3B82F6]/12 bg-white p-3 text-center shadow-xl shadow-[#3B82F6]/10"
              >
                <p className="text-[2rem] font-black leading-none text-[#3B82F6]">15</p>
                <p className="mt-1 text-xs font-bold leading-tight text-[#3B82F6]">dias grátis</p>
                <p className="mt-2 text-[10px] leading-tight text-[#6B7280]">
                  Diagnóstico inicial do seu perfil.
                </p>
                <a
                  href={whatsappPrimary}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex h-10 w-full items-center justify-center rounded-xl bg-[#3B82F6] px-3 text-[11px] font-bold text-white shadow-lg shadow-[#3B82F6]/25"
                >
                  Começar
                </a>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative hidden min-h-[540px] min-w-0 items-center justify-end lg:flex"
          >
            <div className="relative z-10 grid w-full max-w-[680px] items-end justify-items-end gap-4 xl:max-w-none xl:grid-cols-[minmax(0,400px)_minmax(330px,350px)] xl:gap-5">
              <div className="min-w-0">
                <GoogleSearchAnimation />
              </div>
              <div className="grid w-full max-w-[350px] min-w-0 gap-4 pb-6 xl:max-w-none xl:pb-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.92, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.28, ease: "easeOut" }}
                  className="relative flex h-56 items-center justify-center overflow-hidden rounded-3xl border border-[#3B82F6]/12 bg-white/88 shadow-2xl shadow-[#3B82F6]/10 backdrop-blur"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_34%,rgba(59,130,246,0.18),rgba(59,130,246,0.04)_42%,transparent_70%)]" />
                  <motion.div
                    animate={{ opacity: [0.18, 0.34, 0.18] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-x-8 bottom-10 h-24 rounded-full bg-[#3B82F6]/20 blur-3xl"
                  />
                  <div className="absolute bottom-2 left-1/2 h-32 w-[86%] -translate-x-1/2 overflow-hidden rounded-[1.4rem] border border-[#3B82F6]/10 bg-[#E8EEF4] shadow-[0_22px_48px_rgba(59,130,246,0.14),inset_0_1px_0_rgba(255,255,255,0.9)] [transform:perspective(620px)_rotateX(58deg)]">
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(219,234,254,0.95),rgba(236,253,245,0.7))]" />
                    <div
                      className="absolute inset-0 opacity-[0.22]"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(59,130,246,0.26) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.26) 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                      }}
                    />
                    <div className="absolute left-0 top-8 h-2.5 w-full bg-white/95 shadow-sm" />
                    <div className="absolute left-0 top-20 h-2.5 w-full rotate-[-8deg] bg-white/95 shadow-sm" />
                    <div className="absolute left-[22%] top-0 h-full w-2.5 bg-white/95 shadow-sm" />
                    <div className="absolute left-[62%] top-0 h-full w-2.5 rotate-[5deg] bg-white/95 shadow-sm" />
                    <div className="absolute left-[10%] top-[58%] h-7 w-16 rounded-full bg-[#BFE3C6]/90 shadow-sm" />
                    <div className="absolute right-[10%] top-[20%] h-7 w-20 rounded-full bg-[#BFE3C6]/90 shadow-sm" />
                    <div className="absolute left-[7%] top-[20%] h-5 w-10 rounded-md bg-[#DDE7F2]/90" />
                    <div className="absolute right-[22%] top-[62%] h-7 w-12 rounded-md bg-[#DDE7F2]/90" />
                    <div className="absolute left-[42%] top-[8%] h-5 w-14 rounded-md bg-[#DDE7F2]/80" />
                    <motion.div
                      animate={{ x: ["-35%", "145%"], opacity: [0, 0.65, 0] }}
                      transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-transparent via-white/70 to-transparent blur-sm"
                    />
                    <motion.div
                      animate={{ opacity: [0.45, 0.9, 0.45] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#3B82F6]/45 bg-[#3B82F6]/10"
                    />
                    <motion.div
                      animate={{ backgroundPosition: ["0px 0px", "40px 0px"] }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
                      className="absolute left-1/2 top-1/2 h-2 w-32 -translate-x-1/2 -translate-y-1/2 rotate-[-18deg] rounded-full bg-[repeating-linear-gradient(90deg,rgba(59,130,246,0.2)_0_8px,rgba(59,130,246,0.55)_8px_16px)]"
                    />
                    <motion.span
                      animate={{ x: [18, 78, 122, 178], y: [104, 72, 84, 38], opacity: [0, 1, 1, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute left-0 top-0 size-2.5 rounded-full bg-[#22C55E] shadow-[0_0_16px_rgba(34,197,94,0.75)]"
                    />
                  </div>
                  <div className="absolute bottom-8 left-1/2 h-7 w-28 -translate-x-1/2 rounded-full bg-[#1E40AF]/20 blur-xl" />
                  <GpsBeacon size="sm" className="relative z-10 -mt-14 drop-shadow-[0_24px_34px_rgba(37,99,235,0.28)]" />
                  <div className="absolute bottom-5 left-5 rounded-full bg-[#22C55E]/10 px-3 py-1 text-[11px] font-bold text-[#16A34A] shadow-sm shadow-[#22C55E]/10">
                    GPS ativo
                  </div>
                  <div className="absolute right-5 top-5 rounded-full bg-[#3B82F6]/10 px-3 py-1 text-[11px] font-bold text-[#3B82F6]">
                    raio local
                  </div>
                  <div className="absolute bottom-5 right-5 rounded-full bg-white/80 px-3 py-1 text-[10px] font-semibold text-[#6B7280] shadow-sm">
                    Maps 3km
                  </div>
                </motion.div>
                <TrialOfferCard />
              </div>
            </div>
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

            {/* Content card — altura fixa para evitar layout shift, spacing harmonioso */}
            <div className="relative flex min-h-[540px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 p-5 shadow-xl shadow-black/20 sm:min-h-[580px] sm:p-7 lg:h-[600px] lg:min-h-0">
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
                <div className="mb-4 flex flex-wrap gap-2">
                  {currentFeature.badges.map((badge) => (
                    <Badge
                      key={badge}
                      className="h-7 rounded-full border-white/10 bg-white/10 px-3 text-xs text-white/85"
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-balance text-xl font-bold leading-tight sm:text-2xl lg:text-[1.625rem]">
                  {currentFeature.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-white/65 sm:text-[15px] sm:leading-6">
                  {currentFeature.text}
                </p>

                {/* Feature visual mockup */}
                <div className="mt-4 sm:mt-5">
                  <FeatureVisual tabIndex={activeTab} />
                </div>

                {/* Mini stats row — empurrado para o fim do card */}
                <div className="mt-auto grid grid-cols-3 gap-2 pt-4 sm:gap-3 sm:pt-5">
                  {currentFeature.stats.map((stat, idx) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: 0.15 + idx * 0.06 }}
                      className="rounded-xl border border-white/8 bg-white/[0.04] p-2.5 sm:p-3"
                    >
                      <p
                        className={`text-base font-bold leading-none sm:text-lg ${featureTabs[activeTab].color}`}
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

          <div className="-mx-4 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-6 sm:mx-0 sm:mt-14 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
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
                    "group relative flex w-[82%] shrink-0 snap-center flex-col rounded-2xl p-6 transition-all duration-300 sm:w-auto sm:shrink sm:snap-align-none sm:p-7",
                    isOuro
                      ? "border-2 border-[#22C55E] bg-white text-[#1A1A1A] shadow-xl shadow-[#22C55E]/15 hover:shadow-2xl hover:shadow-[#22C55E]/25"
                      : isDiamante
                      ? "border border-[#1A1A1A] bg-[#1A1A1A] text-white shadow-xl hover:shadow-2xl"
                      : "border border-[#1A1A1A]/10 bg-white text-[#1A1A1A] hover:border-[#1A1A1A]/20 hover:shadow-xl",
                  ].join(" ")}
                >
                  {/* Highlight badge — sempre visível em mobile, anima do topo no hover desktop */}
                  {plan.highlight && (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 top-0 z-20 flex h-9 -translate-y-7 items-center justify-center gap-1.5 rounded-t-2xl bg-gradient-to-r from-[#16A34A] via-[#22C55E] to-[#16A34A] px-4 text-[11px] font-bold uppercase tracking-wider text-white opacity-100 shadow-lg shadow-[#22C55E]/30 transition-all duration-300 ease-out lg:translate-y-0 lg:opacity-0 lg:group-hover:-translate-y-7 lg:group-hover:opacity-100"
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
