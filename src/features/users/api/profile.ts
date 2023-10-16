import { get } from "@/libs/api";

export default class Profile {
  async getProfile(name: string) {
    console.log(name);
    // FIXME: /members/${name}, log 제거
    return await get(`/members/${"faberjoo"}`);
  }
}
