import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface LegalLayoutProps {
  title: string;
  intro?: string;
  updatedAt?: string;
  children: React.ReactNode;
}

export function LegalLayout({ title, intro, updatedAt, children }: LegalLayoutProps) {
  return (
    <article className="bg-[#F5F5F5] pb-20 pt-12 sm:pt-16">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#6B7280] transition hover:text-[#1A1A1A]"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Voltar para o site
        </Link>

        <header className="mt-8 border-b border-[#1A1A1A]/10 pb-8">
          <h1 className="text-4xl font-bold leading-tight text-[#1A1A1A] sm:text-5xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-4 text-base leading-7 text-[#6B7280]">{intro}</p>
          )}
          {updatedAt && (
            <p className="mt-4 text-xs uppercase tracking-wider text-[#9CA3AF]">
              Última atualização: {updatedAt}
            </p>
          )}
        </header>

        <div className="legal-content mt-10 space-y-8 text-[15px] leading-7 text-[#374151]">
          {children}
        </div>
      </div>
    </article>
  );
}
