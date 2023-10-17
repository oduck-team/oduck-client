import { BASE_URL } from "@/config";
import { get, del } from "@/libs/api";

export default class AuthApi {
  socialLogin(provider: Provider): void {
    window.location.href = `${BASE_URL}/oauth2/authorization/${provider}`;
  }

  async getStatus(): Promise<User> {
    return get<User>("/auth/status");
  }

  async logout(): Promise<void> {
    return del("/auth/logout");
  }
}
