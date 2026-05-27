import z from 'zod';

export const singInSchema = z.object({
  email: z.email('Неверная почта'),
  password: z.string().min(8, 'Минимум 8 символов'),
});

export type SingInForm = z.infer<typeof singInSchema>;
