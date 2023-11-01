import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .email("올바른 이메일 형식을 입력하세요")
    .min(1, "이메일을 입력하세요")
    .max(50, "50자 이내로 입력하세요"),
  password: z
    .string()
    .min(1, "비밀번호를 입력하세요")
    .max(50, "50자 이내로 입력하세요"),
});
