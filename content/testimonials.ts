export interface VideoTestimonial {
  slug: string;
  business: string;
  segment: string;
  videoUrl: string;
}

const S3_BASE =
  "https://nbg1.your-objectstorage.com/s3-ads-software/georanking/videos-depoimentos";

export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  {
    slug: "senzala-casa-show",
    business: "Senzala Casa Show",
    segment: "Casa de shows & eventos",
    videoUrl: `${S3_BASE}/dep-senzala-casa-show-01.mp4`,
  },
  {
    slug: "rose-store",
    business: "Rose Store",
    segment: "Varejo & moda",
    videoUrl: `${S3_BASE}/dep-rose-store.mp4`,
  },
  {
    slug: "manipura",
    business: "Manipura",
    segment: "Bem-estar & terapias",
    videoUrl: `${S3_BASE}/dep-manipura.mp4`,
  },
  {
    slug: "dynamics-redes-de-protecao",
    business: "Dynamics Redes de Proteção",
    segment: "Serviços residenciais",
    videoUrl: `${S3_BASE}/dep-dynamics-redes-de-protecao.mp4`,
  },
  {
    slug: "atacadao-das-baterias",
    business: "Atacadão das Baterias",
    segment: "Automotivo",
    videoUrl: `${S3_BASE}/dep-atacadao-das-baterias.mp4`,
  },
  {
    slug: "amazon-loc",
    business: "Amazon Loc",
    segment: "Locação & serviços",
    videoUrl: `${S3_BASE}/dep-amazon-loc.mp4`,
  },
  {
    slug: "a-priori-cafe",
    business: "A'Priori Café",
    segment: "Alimentação & cafeteria",
    videoUrl: `${S3_BASE}/dep-a-priori-cafe.mp4`,
  },
];
