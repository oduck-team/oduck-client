import { get } from "@/libs/api";

export default class ProfileApi {
  async getProfile(name: string): Promise<Profile> {
    console.log(name);
    // FIXME: /members/${name}, log 제거
    return await get(`/members/${"faberjoo"}`);
  }
}
