import { ADMIN_BASE_URL } from "@/admins/constants/config";
import GenreApi from "@/features/animes/api/GenreApi";
import { post } from "@/libs/api";

interface CreateGenreDto {
  name: string;
}

export default class AdminGenreApi extends GenreApi {
  create(dto: CreateGenreDto) {
    return post(ADMIN_BASE_URL + "/genres", dto);
  }
}
