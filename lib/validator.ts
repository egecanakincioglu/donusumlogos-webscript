import * as z from "zod"

export const eventFormSchema = z.object({
  title: z.string().min(3, 'Başlık en az 3 karakter olmalıdır'),
  description: z.string().min(3, 'Açıklama en az 3 karakter olmalıdır').max(400, 'Açıklama 400 karakterden az olmalıdır'),
  location: z.string().min(3, 'Konum en az 3 karakter olmalıdır').max(400, 'Konum 400 karakterden az olmalıdır'),
  imageUrl: z.string(),
  startDateTime: z.date(),
  endDateTime: z.date(),
  categoryId: z.string(),
  price: z.string(),
  isFree: z.boolean(),
  url: z.string().url()
})