export type PlanTier = "bronze" | "prata" | "ouro" | "diamante";

export interface PlanFeature {
  label: string;
  detail: string;
}

export interface Plan {
  tier: PlanTier;
  name: string;
  tagline: string;
  highlight?: string;
  ctaLabel: string;
  whatsappMessage: string;
  features: PlanFeature[];
}

const baseMessage = (plan: string) =>
  `Olá! Vim do site GeoRanking e tenho interesse no plano ${plan}. Pode me auxiliar?`;

export const PLANS: Plan[] = [
  {
    tier: "bronze",
    name: "Bronze",
    tagline: "Entrada inicial para pequenos negócios.",
    ctaLabel: "Escolher Bronze",
    whatsappMessage: baseMessage("Bronze"),
    features: [
      { label: "Painel do Cliente", detail: "Acesso básico" },
      { label: "2 Palavras-chave", detail: "Termos principais" },
      { label: "2 Impulsionamentos", detail: "Quinzenais" },
      { label: "IA Responde", detail: "Avaliações 3 estrelas" },
      { label: "Suporte 0800", detail: "Central de atendimento" },
    ],
  },
  {
    tier: "prata",
    name: "Prata",
    tagline: "Expansão para bairros vizinhos.",
    ctaLabel: "Escolher Prata",
    whatsappMessage: baseMessage("Prata"),
    features: [
      { label: "Painel do Cliente", detail: "Acesso completo" },
      { label: "4 Palavras-chave", detail: "Mais chances" },
      { label: "4 Impulsionamentos", detail: "Semanais" },
      { label: "IA Responde", detail: "Todas avaliações" },
      { label: "Suporte 0800", detail: "Central de atendimento" },
    ],
  },
  {
    tier: "ouro",
    name: "Ouro",
    tagline: "Alto desempenho e inteligência.",
    highlight: "Melhor custo-benefício",
    ctaLabel: "Escolher Ouro",
    whatsappMessage: baseMessage("Ouro"),
    features: [
      { label: "Painel Inteligente", detail: "Relatórios e insights" },
      { label: "6 Palavras-chave", detail: "Captura múltipla" },
      { label: "12 Impulsionamentos", detail: "3x por semana" },
      { label: "IA Responde", detail: "Todas avaliações" },
      { label: "Suporte Prioritário", detail: "Fila VIP" },
      { label: "Consultor Dedicado", detail: "Gestão VIP" },
    ],
  },
  {
    tier: "diamante",
    name: "Diamante",
    tagline: "Solução completa: tráfego + site.",
    ctaLabel: "Quero o Diamante",
    whatsappMessage: baseMessage("Diamante"),
    features: [
      { label: "Painel VIP Completo", detail: "Prioridade total" },
      { label: "8 Palavras-chave", detail: "Domínio total" },
      { label: "20 Impulsionamentos", detail: "Segunda a sexta" },
      { label: "IA Responde", detail: "Prioridade máxima" },
      { label: "Consultor Sênior", detail: "Reuniões mensais" },
      { label: "Site Landing Page", detail: "Inclusa no plano" },
    ],
  },
];
