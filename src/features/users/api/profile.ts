import { get } from "@/libs/api";

import { SelectedSort } from "../hooks/useSortBar";
import { MENU } from "../routes/Profile/TabMenu";

export interface BookmarkPage {
  items: Bookmark[];
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
    selectedMenu: MENU,
    selected: SelectedSort,
  ): Promise<BookmarkPage> {
    // FIXME: log 제거
    console.log(memberId);

    // FIXME: 회원 리뷰 api 구현 시, reviews 변경
    const request = selectedMenu === "입덕애니" ? "bookmarks" : "bookmarks";

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

    // FIXME: /members/${memberId} 변경
    const uri = `/members/${"26"}/${request}`;

    return await get(uri, {
      params: params,
    });
  }
}
