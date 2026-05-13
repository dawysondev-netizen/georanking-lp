"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  Maximize2,
  Pause,
  Play,
  Quote,
  Star,
  Volume2,
  VolumeX,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VIDEO_TESTIMONIALS } from "@/content/testimonials";

const ACCENTS = [
  { from: "#3B82F6", to: "#1D4ED8", glow: "shadow-[#3B82F6]/40" },
  { from: "#22C55E", to: "#15803D", glow: "shadow-[#22C55E]/40" },
  { from: "#EAB308", to: "#A16207", glow: "shadow-[#EAB308]/40" },
  { from: "#EF4444", to: "#B91C1C", glow: "shadow-[#EF4444]/40" },
  { from: "#8B5CF6", to: "#6D28D9", glow: "shadow-[#8B5CF6]/40" },
  { from: "#EC4899", to: "#BE185D", glow: "shadow-[#EC4899]/40" },
  { from: "#06B6D4", to: "#0E7490", glow: "shadow-[#06B6D4]/40" },
] as const;

function accentFor(index: number) {
  return ACCENTS[index % ACCENTS.length];
}

export function VideoTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [videoRef, setVideoRef] = useState<HTMLVideoElement | null>(null);

  const active = VIDEO_TESTIMONIALS[activeIndex];
  const activeAccent = accentFor(activeIndex);

  const togglePlay = () => {
    if (!videoRef) return;
    if (videoRef.paused) {
      void videoRef.play();
    } else {
      videoRef.pause();
    }
  };

  const toggleMute = () => {
    setIsMuted((m) => !m);
  };

  const openModal = () => {
    if (videoRef) videoRef.pause();
    setModalOpen(true);
  };

  return (
    <section
      id="depoimentos"
      className="relative overflow-hidden bg-[#1A1A1A] py-20 text-white sm:py-24"
    >
      {/* Background decorativo */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/4 size-[420px] rounded-full bg-[#22C55E]/8 blur-3xl" />
        <div className="absolute -right-32 bottom-1/4 size-[480px] rounded-full bg-[#3B82F6]/8 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <Badge className="mb-5 inline-flex h-8 items-center gap-1.5 rounded-full border border-white/10 bg-white/8 px-3 text-xs text-white/85">
            <Quote className="size-3.5 text-[#22C55E]" aria-hidden="true" />
            Depoimentos em vídeo
          </Badge>
          <h2 className="text-balance text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Quem aparece, vende.
          </h2>
          <p className="mt-5 text-base leading-7 text-white/60 sm:text-lg">
            Histórias reais de empreendedores que pararam de depender da sorte e começaram a
            usar dados do Perfil de Empresa no Google para vender mais.
          </p>
        </div>

        {/* ── Main layout: featured + thumbs grid ── */}
        <div className="grid gap-5 lg:grid-cols-[1.55fr_1fr] lg:gap-6">
          {/* ─── FEATURED VIDEO ─── */}
          <motion.article
            key={active.slug}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl ${activeAccent.glow}`}
          >
            <div className="relative aspect-video w-full sm:aspect-[16/10] lg:aspect-[16/11]">
              {/* Video element — only the featured one is loaded */}
              <video
                key={active.slug}
                ref={setVideoRef}
                src={active.videoUrl}
                muted={isMuted}
                playsInline
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                className="absolute inset-0 size-full object-cover"
              />

              {/* Gradient overlay (always present, fades during play) */}
              <motion.div
                aria-hidden="true"
                animate={{ opacity: isPlaying ? 0.35 : 0.85 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/55 to-[#0A0A0A]/0"
              />

              {/* Accent corner */}
              <div
                aria-hidden="true"
                className="absolute right-0 top-0 size-32 rounded-bl-[120px] opacity-50 blur-2xl"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${activeAccent.from}, transparent)`,
                }}
              />

              {/* Top-left: verified badge */}
              <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-semibold text-white/90 backdrop-blur-md">
                <CheckCircle2 className="size-3.5 text-[#22C55E]" aria-hidden="true" />
                Cliente verificado
              </div>

              {/* Top-right: rating */}
              <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-semibold text-white/90 backdrop-blur-md">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="size-3 fill-[#EAB308] text-[#EAB308]"
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Center play button (only when not playing) */}
              <AnimatePresence>
                {!isPlaying && (
                  <motion.button
                    type="button"
                    onClick={togglePlay}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.25 }}
                    aria-label="Reproduzir depoimento"
                    className="absolute left-1/2 top-1/2 z-10 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#1A1A1A] shadow-2xl ring-[6px] ring-white/15 transition hover:scale-110 hover:bg-[#22C55E] hover:text-white hover:ring-[#22C55E]/25 sm:size-20"
                  >
                    {/* Pulse */}
                    <motion.span
                      animate={{ scale: [1, 1.45], opacity: [0.5, 0] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                      className="absolute inset-0 rounded-full bg-white"
                    />
                    <Play
                      className="relative ml-1 size-7 fill-current sm:size-9"
                      aria-hidden="true"
                    />
                  </motion.button>
                )}
              </AnimatePresence>

              {/* Bottom info bar */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <span
                  className="mb-2 inline-flex h-6 items-center rounded-full px-2.5 text-[11px] font-semibold uppercase tracking-wider text-white shadow-sm"
                  style={{ backgroundColor: activeAccent.from }}
                >
                  {active.segment}
                </span>
                <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                  {active.business}
                </h3>
              </div>

              {/* Bottom controls (only visible when playing) */}
              <AnimatePresence>
                {isPlaying && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-4 right-4 flex items-center gap-1.5"
                  >
                    <button
                      type="button"
                      onClick={togglePlay}
                      aria-label="Pausar"
                      className="flex size-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition hover:bg-black/80"
                    >
                      <Pause className="size-4" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      onClick={toggleMute}
                      aria-label={isMuted ? "Ativar som" : "Mutar"}
                      className="flex size-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition hover:bg-black/80"
                    >
                      {isMuted ? (
                        <VolumeX className="size-4" aria-hidden="true" />
                      ) : (
                        <Volume2 className="size-4" aria-hidden="true" />
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={openModal}
                      aria-label="Tela cheia"
                      className="flex size-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition hover:bg-black/80"
                    >
                      <Maximize2 className="size-4" aria-hidden="true" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.article>

          {/* ─── THUMB GRID (lg+) — 2x3 — vídeo de fundo ─── */}
          <div className="hidden grid-cols-2 gap-3 lg:grid lg:grid-rows-3">
            {VIDEO_TESTIMONIALS.filter((_, i) => i !== activeIndex)
              .slice(0, 6)
              .map((item) => {
                const realIndex = VIDEO_TESTIMONIALS.findIndex((v) => v.slug === item.slug);
                const accent = accentFor(realIndex);
                return (
                  <motion.button
                    key={item.slug}
                    type="button"
                    onClick={() => setActiveIndex(realIndex)}
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    className="group relative overflow-hidden rounded-2xl border border-white/8 bg-black text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E]"
                    aria-label={`Trocar para depoimento de ${item.business}`}
                  >
                    {/* Video as background — preload metadata for the first frame */}
                    <video
                      src={item.videoUrl}
                      muted
                      playsInline
                      preload="metadata"
                      aria-hidden="true"
                      className="absolute inset-0 size-full object-cover opacity-85 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                    />

                    {/* Dark gradient for legibility */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/15"
                    />

                    {/* Accent corner gradient */}
                    <div
                      aria-hidden="true"
                      className="absolute right-0 top-0 size-20 rounded-bl-[80px] opacity-40 blur-2xl"
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${accent.from}, transparent)`,
                      }}
                    />

                    <div className="relative flex h-full min-h-[140px] flex-col justify-between p-3 sm:p-4">
                      <div className="flex items-center justify-between">
                        <span
                          className="inline-flex h-5 items-center rounded-md px-1.5 text-[9px] font-bold uppercase tracking-wider text-white shadow-md"
                          style={{ backgroundColor: accent.from }}
                        >
                          {item.segment.split(" ")[0]}
                        </span>
                        <span className="flex size-7 items-center justify-center rounded-full bg-white/95 text-[#1A1A1A] shadow-md transition group-hover:scale-110 group-hover:bg-[#22C55E] group-hover:text-white">
                          <Play className="ml-px size-3.5 fill-current" aria-hidden="true" />
                        </span>
                      </div>
                      <h4 className="text-sm font-bold leading-tight text-white drop-shadow-md sm:text-base">
                        {item.business}
                      </h4>
                    </div>
                  </motion.button>
                );
              })}
          </div>
        </div>

        {/* ─── Mobile thumb scroll (below featured) ─── */}
        <div className="mt-5 lg:hidden">
          <p className="mb-3 px-1 text-xs font-semibold uppercase tracking-wider text-white/50">
            Mais depoimentos · {VIDEO_TESTIMONIALS.length - 1}
          </p>
          <div
            className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-3 sm:-mx-6 sm:px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {VIDEO_TESTIMONIALS.map((item, idx) => {
              const accent = accentFor(idx);
              const isActive = idx === activeIndex;
              return (
                <button
                  key={item.slug}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={[
                    "group relative w-[180px] shrink-0 snap-start overflow-hidden rounded-2xl border bg-black text-left transition sm:w-[220px]",
                    isActive
                      ? "border-[#22C55E] ring-2 ring-[#22C55E]/40"
                      : "border-white/8 opacity-90",
                  ].join(" ")}
                  aria-label={`Trocar para depoimento de ${item.business}`}
                  aria-pressed={isActive}
                >
                  {/* Video as background */}
                  <video
                    src={item.videoUrl}
                    muted
                    playsInline
                    preload="metadata"
                    aria-hidden="true"
                    className="absolute inset-0 size-full object-cover opacity-85"
                  />

                  {/* Dark gradient overlay */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/15"
                  />

                  <div className="relative flex aspect-[4/5] flex-col justify-between p-3">
                    <div className="flex items-center justify-between">
                      <span
                        className="inline-flex h-5 items-center rounded-md px-1.5 text-[9px] font-bold uppercase tracking-wider text-white shadow-md"
                        style={{ backgroundColor: accent.from }}
                      >
                        {item.segment.split(" ")[0]}
                      </span>
                      <span className="flex size-7 items-center justify-center rounded-full bg-white/95 text-[#1A1A1A] shadow-md">
                        {isActive ? (
                          <span className="size-2 rounded-full bg-[#22C55E]" />
                        ) : (
                          <Play className="ml-px size-3.5 fill-current" aria-hidden="true" />
                        )}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold leading-tight text-white drop-shadow-md">
                        {item.business}
                      </h4>
                      {isActive && (
                        <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-[#22C55E]">
                          Em destaque
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ─── Strip de marcas / counter ─── */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/8 bg-white/4 px-5 py-5 sm:mt-14 sm:flex-row sm:px-7">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {ACCENTS.slice(0, 4).map((a, i) => (
                <span
                  key={i}
                  className="flex size-9 items-center justify-center rounded-full text-xs font-bold text-white ring-2 ring-[#1A1A1A]"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${a.from}, ${a.to})`,
                  }}
                >
                  {VIDEO_TESTIMONIALS[i]?.business.charAt(0)}
                </span>
              ))}
              <span className="flex size-9 items-center justify-center rounded-full bg-white/10 text-[10px] font-bold text-white ring-2 ring-[#1A1A1A]">
                +7k
              </span>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                Mais de 7.000 negócios no topo
              </p>
              <p className="text-xs text-white/55">
                Avaliação média 5,0 ★ — depoimentos públicos verificados
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={openModal}
            className="inline-flex h-11 items-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-[#1A1A1A] transition hover:bg-[#22C55E] hover:text-white"
          >
            <Play className="size-4 fill-current" aria-hidden="true" />
            Assistir em tela cheia
          </button>
        </div>
      </div>

      {/* ─── Modal fullscreen ─── */}
      <Dialog
        open={modalOpen}
        onOpenChange={(open) => {
          setModalOpen(open);
          if (!open && videoRef) videoRef.pause();
        }}
      >
        <DialogContent className="max-w-4xl gap-3 bg-[#0A0A0A] p-3 text-white ring-white/10 sm:max-w-4xl">
          <DialogTitle className="px-2 pt-1 text-sm font-semibold text-white">
            <span className="inline-flex items-center gap-2">
              <span
                className="inline-flex h-5 items-center rounded-md px-2 text-[10px] font-bold uppercase tracking-wider text-white"
                style={{ backgroundColor: activeAccent.from }}
              >
                {active.segment}
              </span>
              <span>{active.business}</span>
            </span>
          </DialogTitle>
          <video
            key={`modal-${active.slug}`}
            src={active.videoUrl}
            controls
            autoPlay
            playsInline
            preload="auto"
            className="aspect-video w-full rounded-lg bg-black"
          />
        </DialogContent>
      </Dialog>
    </section>
  );
}
