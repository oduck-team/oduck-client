import { ADMIN_BASE_URL } from "@/admins/constants/config";
import { get, post } from "@/libs/api";

interface CreateStudioDto {
  name: string;
}

export default class AdminStudioApi {
  getList() {
    return get<Studio[]>(ADMIN_BASE_URL + "/studios");
  }

  create(dto: CreateStudioDto) {
    return post(ADMIN_BASE_URL + "/studios", dto);
  }
}
