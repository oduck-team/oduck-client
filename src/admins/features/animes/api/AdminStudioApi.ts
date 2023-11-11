import { ADMIN_BASE_URL } from "@/admins/constants/config";
import { del, get, patch, post } from "@/libs/api";

interface CreateStudioDto {
  name: string;
}

interface UpdateStudioDto {
  name: string;
}

export default class AdminStudioApi {
  create(dto: CreateStudioDto) {
    return post(ADMIN_BASE_URL + "/studios", dto);
  }

  getList() {
    return get<Studio[]>(ADMIN_BASE_URL + "/studios");
  }

  update(id: number, dto: UpdateStudioDto) {
    return patch(ADMIN_BASE_URL + `/studios/${id}`, dto);
  }

  delete(id: number) {
    return del(ADMIN_BASE_URL + `/studios/${id}`);
  }
}
