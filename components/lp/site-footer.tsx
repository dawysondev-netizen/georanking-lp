import Image from "next/image";
import Link from "next/link";
import { PhoneHighlight } from "@/components/lp/phone-highlight";
import { WhatsappIcon } from "@/components/lp/whatsapp-icon";
import { SITE_INFO } from "@/content/site";
import { buildWhatsappUrl } from "@/lib/whatsapp";

const productLinks = [
  { href: "/", label: "Início" },
  { href: "/#produto", label: "Produto" },
  { href: "/#depoimentos", label: "Depoimentos" },
  { href: "/#planos", label: "Planos" },
  { href: "/#faq", label: "FAQ" },
];

const supportLinks = [
  { href: SITE_INFO.legal.termsUrl, label: "Termos de Uso" },
  { href: SITE_INFO.legal.privacyUrl, label: "Política de Privacidade" },
];

/* Instagram brand SVG (lucide version here does not export Instagram) */
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function SiteFooter() {
  const whatsappUrl = buildWhatsappUrl();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1A1A1A]/8 bg-white px-4 py-10 text-sm text-[#6B7280] sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="space-y-3.5 text-center sm:col-span-2 sm:text-left lg:col-span-1">
          <Image
            src={SITE_INFO.assets.logoUrl}
            alt={SITE_INFO.name}
            width={168}
            height={36}
            unoptimized
            className="mx-auto h-9 w-auto sm:mx-0"
          />
          <p className="mx-auto max-w-sm leading-6 text-[#6B7280] sm:mx-0">{SITE_INFO.description}</p>
          <p className="text-xs text-[#9CA3AF]">CNPJ {SITE_INFO.cnpj}</p>

          {/* Social icons */}
          <div className="flex items-center justify-center gap-2 pt-1 sm:justify-start">
            <a
              href={SITE_INFO.socials.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram do GeoRanking"
              className="group inline-flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white shadow-sm transition hover:scale-105 hover:shadow-md"
            >
              <InstagramIcon className="size-5" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp do GeoRanking"
              className="group inline-flex size-10 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-sm transition hover:scale-105 hover:bg-[#1DA851] hover:shadow-md"
            >
              <WhatsappIcon className="size-5 text-white" />
            </a>
          </div>
        </div>

        <div className="text-center sm:text-left">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#1A1A1A]">
            Central de vendas
          </h3>
          <ul className="flex flex-col items-center gap-3 sm:items-start sm:space-y-0">
            <li>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition hover:opacity-80"
              >
                <PhoneHighlight withIcon className="text-sm" />
              </a>
            </li>
            <li>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-[#1A1A1A]"
              >
                <WhatsappIcon className="size-4" />
                Falar no WhatsApp
              </a>
            </li>
            <li>
              <a
                href={SITE_INFO.loginUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex h-9 items-center justify-center rounded-lg border border-[#1A1A1A]/12 bg-white px-3.5 text-sm font-medium text-[#1A1A1A] shadow-sm transition hover:bg-[#1A1A1A] hover:text-white"
              >
                Acessar painel
              </a>
            </li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#1A1A1A]">
            Produto
          </h3>
          <ul className="space-y-2">
            {productLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-[#1A1A1A]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#1A1A1A]">
            Suporte e legais
          </h3>
          <ul className="space-y-2">
            {supportLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-[#1A1A1A]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-8 flex w-full max-w-7xl flex-col items-center gap-1.5 border-t border-[#1A1A1A]/8 pt-5 text-center text-[11px] leading-relaxed text-[#9CA3AF] sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:gap-2 sm:pt-6 sm:text-left sm:text-xs">
        <span>© {year} {SITE_INFO.legalName} — Todos os direitos reservados.</span>
        <span>Operado por {SITE_INFO.parentCompany}.</span>
      </div>
    </footer>
  );
}
