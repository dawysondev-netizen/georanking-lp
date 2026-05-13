import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(2, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().min(10, "Telefone inválido"),
  company: z.string().min(2, "Empresa é obrigatória"),
  message: z.string().optional(),
});

export type LeadFormData = z.infer<typeof leadSchema>;
