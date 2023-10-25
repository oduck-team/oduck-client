import { get, post } from "@/libs/api";

export default class BookmarkApi {
  /** @description 북마크(입덕)를 토글하기 (생성 or 삭제) */
  async toggleBookmark(animeId: number): Promise<void> {
    return post("/bookmarks", {
      animeId,
    });
  }

  /** @description 북마크(입덕) 여부 조회 */
  async getBookmark(animeId: number): Promise<{ createdAt: string }> {
    return get(`/bookmarks/${animeId}`);
  }
}
