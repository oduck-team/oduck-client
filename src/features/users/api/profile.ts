import { get } from "@/libs/api";

export interface BookmarkPage {
  items: Bookmark[];
  hasNext: boolean;
  lastId: string;
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
  ): Promise<BookmarkPage> {
    // FIXME: /members/${memberId}, size, log 제거
    console.log(memberId);

    const url =
      pageParam === undefined
        ? `/members/${"26"}/bookmarks?size=2`
        : `/members/${"26"}/bookmarks?size=2&cursor=${pageParam}`;

    return await get(url);
  }
}
