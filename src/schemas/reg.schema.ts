import z from 'zod';

export const singUpSchema = z.object({
  login: z.string().min(5, 'Минимум 5 символов'),
  email: z.email('Почта введена не верно'),
  password: z.string().min(8, 'Минимум 8 символов'),
});

export type SingUpForm = z.infer<typeof singUpSchema>;

// .register
