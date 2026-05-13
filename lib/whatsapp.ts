const DEFAULT_PHONE = "558008001700";
const DEFAULT_MESSAGE =
  "Olá! Vim do seu site e gostaria de começar grátis com a GeoRanking. Pode me auxiliar?";

export function buildWhatsappUrl(message: string = DEFAULT_MESSAGE, phone: string = DEFAULT_PHONE) {
  const params = new URLSearchParams({
    phone,
    text: message,
    type: "phone_number",
    app_absent: "0",
  });
  return `https://api.whatsapp.com/send/?${params.toString()}`;
}

export const WHATSAPP_PHONE_DISPLAY = "0800 800 1700";
export const WHATSAPP_PHONE_E164 = DEFAULT_PHONE;
