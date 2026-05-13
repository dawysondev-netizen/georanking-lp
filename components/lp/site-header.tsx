"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SITE_INFO } from "@/content/site";
import { buildWhatsappUrl } from "@/lib/whatsapp";

const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/#produto", label: "Produto" },
  { href: "/#depoimentos", label: "Depoimentos" },
  { href: "/#planos", label: "Planos" },
  { href: "/#faq", label: "FAQ" },
];

export function SiteHeader() {
  const whatsappUrl = buildWhatsappUrl();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#1A1A1A]/8 bg-white/90 backdrop-blur-2xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label={SITE_INFO.name}
          className="flex items-center"
          onClick={closeMenu}
        >
          <Image
            src={SITE_INFO.assets.logoUrl}
            alt={SITE_INFO.name}
            width={184}
            height={40}
            priority
            unoptimized
            className="h-8 w-auto sm:h-9"
          />
        </Link>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-7 text-sm font-medium text-[#6B7280] md:flex"
        >
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-[#1A1A1A]">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 md:ml-4 lg:ml-10">
          <Link
            href={SITE_INFO.loginUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden h-9 items-center justify-center rounded-lg border border-[#1A1A1A]/12 bg-white px-3.5 text-sm font-medium text-[#1A1A1A] shadow-sm transition hover:bg-[#1A1A1A] hover:text-white sm:inline-flex"
          >
            Login
          </Link>

          <Button
            render={
              <a href={whatsappUrl} target="_blank" rel="noreferrer" />
            }
            nativeButton={false}
            className="hidden h-10 rounded-lg bg-[#4B5563] px-3 text-sm text-white hover:bg-[#374151] sm:inline-flex sm:px-4"
          >
            <span className="hidden lg:inline">Falar com especialista</span>
            <span className="lg:hidden">Falar</span>
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
            className="inline-flex size-10 items-center justify-center rounded-lg border border-[#1A1A1A]/10 bg-white text-[#1A1A1A] transition hover:bg-[#F5F5F5] md:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="inline-flex"
                >
                  <X className="size-5" aria-hidden="true" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="inline-flex"
                >
                  <Menu className="size-5" aria-hidden="true" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
              className="fixed inset-x-0 top-16 bottom-0 -z-10 bg-[#1A1A1A]/40 backdrop-blur-sm md:hidden"
              aria-hidden="true"
            />
            <motion.div
              key="drawer"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              id="mobile-menu"
              className="absolute inset-x-0 top-16 border-b border-[#1A1A1A]/10 bg-white shadow-2xl shadow-black/10 md:hidden"
            >
              <nav
                aria-label="Navegação mobile"
                className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6"
              >
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-[#1A1A1A] transition hover:bg-[#F5F5F5]"
                  >
                    {link.label}
                    <ArrowRight className="size-4 text-[#9CA3AF]" aria-hidden="true" />
                  </Link>
                ))}

                <div className="mt-2 grid gap-2 border-t border-[#1A1A1A]/8 pt-3 sm:hidden">
                  <Link
                    href={SITE_INFO.loginUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={closeMenu}
                    className="inline-flex h-11 items-center justify-center rounded-lg border border-[#1A1A1A]/12 bg-white px-4 text-sm font-medium text-[#1A1A1A] transition hover:bg-[#F5F5F5]"
                  >
                    Login
                  </Link>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={closeMenu}
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#4B5563] px-4 text-sm font-medium text-white transition hover:bg-[#374151]"
                  >
                    Falar com especialista
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </a>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
