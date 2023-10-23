import { get } from "@/libs/api";

import { SelectedSort } from "../hooks/useSortBar";

export interface BookmarkPage {
  items: Bookmark[];
  hasNext: boolean;
  cursor: string;
  size: number;
}

export interface ReviewPage {
  items: Review[];
  hasNext: boolean;
  cursor: string;
  size: number;
}

export default class ProfileApi {
  async getProfile(name: string): Promise<Profile> {
    console.log(name);
    // FIXME: /members/${name}, log 제거
    return await get(`/members/${"faberjoo"}`);
  }

  async getBookmark(
    memberId: number,
    pageParam: string,
    selected: SelectedSort,
  ): Promise<BookmarkPage> {
    const params = this.setParams(pageParam, selected);
    // FIXME: /members/${memberId} 변경, log제거
    console.log(memberId);
    return await get(`/members/${"26"}/bookmarks`, {
      params: params,
    });
  }

  async getReview(
    memberId: number,
    pageParam: string,
    selected: SelectedSort,
  ): Promise<ReviewPage> {
    const params = this.setParams(pageParam, selected);
    // FIXME: /members/${memberId} 변경, log 제거
    console.log(memberId);
    return await get(`/members/${"26"}/reviews`, {
      params: params,
    });
  }

  private setParams(pageParam: string, selected: SelectedSort) {
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
