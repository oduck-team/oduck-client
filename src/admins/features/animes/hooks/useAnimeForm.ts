import { useForm, zodResolver } from "@mantine/form";

import { createAnimeSchema } from "@/admins/libs/validation/animation";

import { CreateAnimeDto } from "../api/AdminAnimeApi";

export default function useAnimeForm(initialForm: CreateAnimeDto) {
  return useForm<CreateAnimeDto>({
    initialValues: { ...initialForm },
    validate: zodResolver(createAnimeSchema),
  });
}
