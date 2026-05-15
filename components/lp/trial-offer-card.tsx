"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Calendar, Eye, Phone } from "lucide-react";

import { WhatsappIcon } from "@/components/lp/whatsapp-icon";
import { buildWhatsappUrl } from "@/lib/whatsapp";

const TRIAL_CTA_MESSAGE =
  "Olá! Vim do site GeoRanking e quero garantir meus 15 dias grátis. Pode me auxiliar?";

const BENEFITS = [
  { icon: Eye, title: "Mais", subtitle: "visibilidade" },
  { icon: Phone, title: "Mais", subtitle: "contatos" },
  { icon: BarChart3, title: "Raio X", subtitle: "inicial" },
] as const;

export function TrialOfferCard() {
  const whatsappUrl = buildWhatsappUrl(TRIAL_CTA_MESSAGE);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      className="w-full rounded-3xl border border-[#3B82F6]/12 bg-white p-4 shadow-2xl shadow-[#3B82F6]/10 sm:p-5"
    >
      {/* Top row — Offer + 3 mini benefits */}
      <div className="grid gap-3">
        {/* Hero offer block */}
        <div className="flex items-center gap-3 rounded-2xl bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] p-4">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
            <Calendar className="size-6 text-[#3B82F6]" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="text-4xl font-black leading-none text-[#3B82F6]">15</p>
            <p className="mt-0.5 text-sm font-bold leading-tight text-[#3B82F6]">
              dias grátis
            </p>
            <p className="mt-1 text-xs leading-tight text-[#6B7280]">
              Diagnóstico e plano inicial do seu Perfil de Empresa.
            </p>
          </div>
        </div>

        {/* 3 mini benefit cards */}
        <div className="grid grid-cols-3 gap-1.5">
          {BENEFITS.map((b, i) => (
            <motion.div
              key={b.subtitle}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.06 }}
              className="flex min-h-24 flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-[#F8FAFC] to-[#EFF6FF] px-2 py-3 text-center"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
                <b.icon
                  className="size-4 text-[#3B82F6]"
                  aria-hidden="true"
                />
              </span>
              <p className="mt-1.5 text-[10px] font-bold leading-tight text-[#1A1A1A]">
                {b.title}
                <br />
                <span className="font-semibold text-[#6B7280]">{b.subtitle}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Primary CTA */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="mt-4 flex h-[52px] items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#3B82F6] to-[#2563EB] px-5 text-base font-bold text-white shadow-lg shadow-[#3B82F6]/30 transition hover:from-[#2563EB] hover:to-[#1D4ED8] sm:h-14"
      >
        <span className="flex size-7 items-center justify-center rounded-full bg-white/15">
          <WhatsappIcon className="size-4 text-white" />
        </span>
        Quero meus 15 dias
        <ArrowRight className="size-4 opacity-80" aria-hidden="true" />
      </motion.a>

      {/* Secondary action */}
      <p className="mt-3 text-center text-xs text-[#6B7280] sm:text-sm">
        ou{" "}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-[#1A1A1A] underline-offset-4 transition hover:text-[#3B82F6] hover:underline"
        >
          fale com um consultor
        </a>
      </p>
    </motion.div>
  );
}
