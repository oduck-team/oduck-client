import { ADMIN_BASE_URL } from "@/admins/constants/config";
import { get, post } from "@/libs/api";

interface CreateOriginalAuthorDto {
  name: string;
}

export default class AdminOriginalAuthorApi {
  getList() {
    return get<OriginalAuthor[]>(ADMIN_BASE_URL + "/original-authors");
  }

  create(dto: CreateOriginalAuthorDto) {
    return post(ADMIN_BASE_URL + "/original-authors", dto);
  }
}
