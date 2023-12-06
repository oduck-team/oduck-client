import { get, patch } from "@/libs/api";

import { ProfileEditFormData } from "../hooks/useEditForm";
import { SelectedSort } from "../hooks/useSortBar";
import { MENU } from "../hooks/useTabMenu";

export interface TabListCountResponse {
  count: number;
}

export type ReviewListResponse = Omit<Review, "anime"> & {
  animeId: number;
  title: string;
  thumbnail: string;
  score: number | null;
};

export default class ProfileApi {
  async getProfile(name: string | undefined): Promise<Profile> {
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
  ): Promise<CursorPage<ReviewListResponse>> {
    const params = this.setParams(pageParam, selected);

    return await get(`/members/${memberId}/short-reviews`, {
      params: params,
    });
  }

  async getTabListCount(
    memberId: number | undefined,
    selectedMenu: MENU,
  ): Promise<TabListCountResponse> {
    const menu = selectedMenu === "입덕애니" ? "bookmarks" : "short-reviews";
    return await get(`/members/${memberId}/${menu}/count`);
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

    const baseParams = {
      size: 10,
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
