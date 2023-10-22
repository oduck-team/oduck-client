import bookmarkMock1 from "./mock/bookmark1.json";
import bookmarkMock2 from "./mock/bookmark2.json";
import bookmarkMock3 from "./mock/bookmark3.json";
import profileMock from "./mock/profile.json";
import { BookmarkPage } from "./profile";

export default class ProfileDevApi {
  async getProfile(): Promise<Profile> {
    return profileMock;
  }

  async getBookmark(_: number, pageParam: number): Promise<BookmarkPage> {
    switch (pageParam) {
      case 21:
        return bookmarkMock2;
      case 11:
        return bookmarkMock1;
      default:
        return bookmarkMock3;
    }
  }
}
