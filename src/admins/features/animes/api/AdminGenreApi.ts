import { ADMIN_BASE_URL } from "@/admins/constants/config";
import GenreApi from "@/features/animes/api/GenreApi";
import { del, patch, post } from "@/libs/api";

interface CreateGenreDto {
  name: string;
}

interface UpdateGenreDto {
  name: string;
}

export default class AdminGenreApi extends GenreApi {
  create(dto: CreateGenreDto) {
    return post(ADMIN_BASE_URL + "/genres", dto);
  }

  update(id: number, dto: UpdateGenreDto) {
    return patch(ADMIN_BASE_URL + `/genres/${id}`, dto);
  }

  delete(id: number) {
    return del(ADMIN_BASE_URL + `/genres/${id}`);
  }
}
