import { del } from "@/libs/api";

export function logout() {
  return del("/auth/logout");
}
