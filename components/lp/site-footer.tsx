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
    <footer className="border-t border-[#1A1A1A]/8 bg-white px-4 py-12 text-sm text-[#6B7280] sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <Image
            src={SITE_INFO.assets.logoUrl}
            alt={SITE_INFO.name}
            width={168}
            height={36}
            unoptimized
            className="h-9 w-auto"
          />
          <p className="max-w-sm leading-6 text-[#6B7280]">{SITE_INFO.description}</p>
          <p className="text-xs text-[#9CA3AF]">CNPJ {SITE_INFO.cnpj}</p>

          {/* Social icons */}
          <div className="flex items-center gap-2 pt-1">
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

        <div>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#1A1A1A]">
            Central de vendas
          </h3>
          <ul className="space-y-3">
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

        <div>
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

        <div>
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

      <div className="mx-auto mt-10 flex w-full max-w-7xl flex-col gap-2 border-t border-[#1A1A1A]/8 pt-6 text-xs text-[#9CA3AF] sm:flex-row sm:items-center sm:justify-between">
        <span>© {year} {SITE_INFO.legalName} — Todos os direitos reservados.</span>
        <span>Operado por {SITE_INFO.parentCompany}.</span>
      </div>
    </footer>
  );
}
