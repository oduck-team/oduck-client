import { ADMIN_BASE_URL } from "@/admins/constants/config";
import { get, post } from "@/libs/api";

interface CreateGenreDto {
  name: string;
}

export default class AdminGenreApi {
  getList() {
    return get<Genre[]>(ADMIN_BASE_URL + "/genres");
  }

  create(dto: CreateGenreDto) {
    return post(ADMIN_BASE_URL + "/genres", dto);
  }
}
