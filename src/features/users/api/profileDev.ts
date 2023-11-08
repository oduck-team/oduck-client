import bookmarkMock1 from "./mock/bookmark1.json";
import bookmarkMock2 from "./mock/bookmark2.json";
import bookmarkMock3 from "./mock/bookmark3.json";
import profileMock from "./mock/profile.json";
import reveiwMock1 from "./mock/review1.json";
import reveiwMock2 from "./mock/review2.json";
import reveiwMock3 from "./mock/review3.json";

export default class ProfileDevApi {
  async getProfile(): Promise<Profile> {
    return profileMock;
  }

  async getBookmark(
    _: number,
    pageParam: string,
  ): Promise<CursorPage<Bookmark>> {
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

  async getReview(_: number, pageParam: string): Promise<CursorPage<Review>> {
    // 등록 최신 순 정렬
    switch (pageParam) {
      case "2023-10-03T21:05:31.859":
        return reveiwMock2;
      case "2023-09-21T21:05:31.859":
        return reveiwMock1;
      default:
        return reveiwMock3;
    }
  }

  async updateProfile() {
    console.log("닉네임, 자기소개 수정");
  }
}
