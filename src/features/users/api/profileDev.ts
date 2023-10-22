import bookmarkMock1 from "./mock/bookmark1.json";
import bookmarkMock2 from "./mock/bookmark2.json";
import bookmarkMock3 from "./mock/bookmark3.json";
import profileMock from "./mock/profile.json";
import { BookmarkPage } from "./profile";

export default class ProfileDevApi {
  async getProfile(): Promise<Profile> {
    return profileMock;
  }

  async getBookmark(_: number, pageParam: string): Promise<BookmarkPage> {
    // 입덕 최신 순 정렬
    switch (pageParam) {
      case "2023-10-03T21:05:31.859":
        return bookmarkMock2;
      case "2023-09-21T21:05:31.859":
        return bookmarkMock1;
      default:
        return bookmarkMock3;
    }
  }
}
