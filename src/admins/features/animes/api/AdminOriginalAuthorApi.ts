import { ADMIN_BASE_URL } from "@/admins/constants/config";
import { del, get, patch, post } from "@/libs/api";

interface CreateOriginalAuthorDto {
  name: string;
}

interface UpdateOriginalAuthorDto {
  name: string;
}

export default class AdminOriginalAuthorApi {
  create(dto: CreateOriginalAuthorDto) {
    return post(ADMIN_BASE_URL + "/original-authors", dto);
  }

  getList() {
    return get<OriginalAuthor[]>(ADMIN_BASE_URL + "/original-authors");
  }

  update(id: number, dto: UpdateOriginalAuthorDto) {
    return patch(ADMIN_BASE_URL + `/original-authors/${id}`, dto);
  }

  delete(id: number) {
    return del(ADMIN_BASE_URL + `/original-authors/${id}`);
  }
}
