import { ADMIN_BASE_URL } from "@/admins/constants/config";
import { del, get, patch, post } from "@/libs/api";

interface CreateSeriesDto {
  title: string;
}

interface UpdateSeriesDto {
  title: string;
}

export default class AdminSeriesApi {
  create(dto: CreateSeriesDto) {
    return post(ADMIN_BASE_URL + "/series", dto);
  }

  getList() {
    return get<Series[]>(ADMIN_BASE_URL + "/series");
  }

  update(id: number, dto: UpdateSeriesDto) {
    return patch(ADMIN_BASE_URL + `/series/${id}`, dto);
  }

  delete(id: number) {
    return del(ADMIN_BASE_URL + `/series/${id}`);
  }
}
