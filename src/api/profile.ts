import { get } from "@/libs/api";

export default class Profile {
  async getProfile(name: string) {
    // FIXME: /members/${name}
    return await get(`/members/${"faberjoo"}`);
  }
}
