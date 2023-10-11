import { BASE_URL } from "@/config";

export function socialLogin(provider: Provider) {
  window.location.href = `${BASE_URL}/oauth2/authorization/${provider}`;
}
