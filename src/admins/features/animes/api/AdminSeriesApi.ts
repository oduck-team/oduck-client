import { ADMIN_BASE_URL } from "@/admins/constants/config";
import { get, post } from "@/libs/api";

interface CreateSeriesDto {
  title: string;
}

export default class AdminSeriesApi {
  getList() {
    return get<Series[]>(ADMIN_BASE_URL + "/series");
  }

  create(dto: CreateSeriesDto) {
    return post(ADMIN_BASE_URL + "/series", dto);
  }
}
