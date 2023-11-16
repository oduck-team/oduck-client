import { z } from "zod";

const stringToNumberSchema = z
  .union([z.string(), z.number()])
  .transform((input) => (typeof input === "string" ? parseInt(input) : input))
  .refine((value) => !isNaN(value) && value >= 1, {
    message: "1 이상의 정수를 입력해주세요",
  });

const voiceActorSchema = z.object({
  id: stringToNumberSchema,
  part: z.string(),
});

export const createAnimeSchema = z.object({
  seriesId: stringToNumberSchema,
  title: z.string(),
  summary: z.string().max(600, "600자 이내로 입력해주세요"),
  episodeCount: z.number().min(1, "1이상의 숫자를 입력해주세요"),
  thumbnail: z.string().min(1, "썸네일을 등록해주세요"),
  year: z.number().min(1900, "1900년도 이후로 입력해주세요"),
  originalAuthorIds: z.array(stringToNumberSchema).min(1),
  studioIds: z.array(stringToNumberSchema).min(1, "제작사를 등록해주세요"),
  voiceActors: z.array(voiceActorSchema),
  genreIds: z.array(stringToNumberSchema).min(1, "장르를 등록해주세요"),
});
