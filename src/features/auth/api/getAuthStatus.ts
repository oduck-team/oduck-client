import { get } from "@/libs/api";

export function getAuthStatus() {
  return get<User>("/auth/status");
}
