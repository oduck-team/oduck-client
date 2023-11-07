import { get } from "@/libs/api";

export default class GenreApi {
  getList() {
    return get<Genre[]>("/genres");
  }
}
