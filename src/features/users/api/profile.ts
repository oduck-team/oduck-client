import { get, patch } from "@/libs/api";

import { ProfileEditFormData } from "../hooks/useEditForm";
import { SelectedSort } from "../hooks/useSortBar";

import reveiwMock1 from "./mock/review1.json";
import reveiwMock2 from "./mock/review2.json";
import reveiwMock3 from "./mock/review3.json";

export default class ProfileApi {
  async getProfile(name: string): Promise<Profile> {
    return await get(`/members/${name}`);
  }

  async getBookmark(
    memberId: number,
    pageParam: string | undefined,
    selected: SelectedSort,
  ): Promise<CursorPage<Bookmark>> {
    const params = this.setParams(pageParam, selected);

    return await get(`/members/${memberId}/bookmarks`, {
      params: params,
    });
  }

  async getReview(
    memberId: number,
    pageParam: string | undefined,
    selected: SelectedSort,
  ): Promise<CursorPage<Review>> {
    const params = this.setParams(pageParam, selected);
    // FIXME: /members/${memberId} 변경, log 제거
    console.log(memberId);
    console.log(params);

    // FIXME: review api 완성 시, mock switch 삭제
    switch (pageParam) {
      case "2023-10-03T21:05:31.859":
        return reveiwMock2;
      case "2023-09-21T21:05:31.859":
        return reveiwMock1;
      default:
        return reveiwMock3;
    }

    // FIXME: review api 완성 시, 주석 제거
    // return await get(`/members/${"26"}/reviews`, {
    //   params: params,
    // });
  }

  async updateProfile(form: ProfileEditFormData) {
    return await patch("/members", form);
  }

  private setParams(pageParam: string | undefined, selected: SelectedSort) {
    let sort;
    if (selected.id === "제목 순") sort = "title";
    else if (selected.id === "별점 순") sort = "score";
    else sort = "created_at";

    const order = selected.isDESC ? "DESC" : "ASC";

    // FIXME: 사이즈 변경
    const baseParams = {
      size: 2,
      sort,
      order,
    };

    const params =
      pageParam === undefined
        ? baseParams
        : {
            ...baseParams,
            cursor: pageParam,
          };

    return params;
  }
}
