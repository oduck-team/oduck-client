import { ADMIN_BASE_URL } from "@/admins/constants/config";
import { del, get, patch, post } from "@/libs/api";

interface CreateVoiceActorDto {
  name: string;
}

interface UpdateVoiceActorDto {
  name: string;
}

export default class AdminVoiceActorApi {
  create(dto: CreateVoiceActorDto) {
    return post(ADMIN_BASE_URL + "/voice-actors", dto);
  }

  getList() {
    return get<VoiceActor[]>(ADMIN_BASE_URL + "/voice-actors");
  }

  update(id: number, dto: UpdateVoiceActorDto) {
    return patch(ADMIN_BASE_URL + `/voice-actors/${id}`, dto);
  }

  delete(id: number) {
    return del(ADMIN_BASE_URL + `/voice-actors/${id}`);
  }
}
