import { ADMIN_BASE_URL } from "@/admins/constants/config";
import { get, post } from "@/libs/api";

interface CreateVoiceActorDto {
  name: string;
}

export default class AdminVoiceActorApi {
  getList() {
    return get<VoiceActor[]>(ADMIN_BASE_URL + "/voice-actors");
  }

  create(dto: CreateVoiceActorDto) {
    return post(ADMIN_BASE_URL + "/voice-actors", dto);
  }
}
