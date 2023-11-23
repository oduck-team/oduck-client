import { get, patch, post } from "@/libs/api";

import { ReviewSortOption } from "../hook/useGetAnimeReviews";

import reviewsMock from "./mock/anime_review_list1.json";
import reviewsMock2 from "./mock/anime_review_list2.json";
import reviewsMock3 from "./mock/anime_review_list3.json";
import reviewsMock4 from "./mock/anime_review_list4.json";
import recentReviewMock1 from "./mock/recentReview1.json";
import recentReviewMock2 from "./mock/recentReview2.json";
import recentReviewMock3 from "./mock/recentReview3.json";
import recentReviewOnlyOneMock from "./mock/recentReviewOnlyOne.json";
import {
  AddReviewDto,
  AttractionType,
  ReviewInfo,
  UserEvaluation,
} from "./review";

export default class ReviewDevApi {
  /** @description 리뷰 작성 요청*/
  async addReview(review: AddReviewDto): Promise<void> {
    return post("/short-reviews", review);
  }

  /** @description 리뷰 수정 요청 */
  async updateReview(reviewId: number, review: AddReviewDto) {
    return patch(`/short-reviews/${reviewId}`, review);
  }

  /** @description 한 애니의 리뷰 목록 요청*/
  async getAnimeReviews(
    animeId: number,
    pageParam: string,
    selectedOption: ReviewSortOption,
  ): Promise<CursorPage<ReviewInfo>> {
    console.log(animeId, pageParam, selectedOption);
    // 좋아요순 조회
    if (selectedOption.sort === "created_at") return reviewsMock3;
    // 평점순 조회 (정렬 고려 X)
    else if (selectedOption.sort === "score") return reviewsMock4;
    // 최신순 조회
    else {
      if (pageParam === "7") return reviewsMock2;
      else return reviewsMock;
    }
  }

  async getRecentReviewList(
    pageParam: string | undefined,
    size: number = 10,
  ): Promise<CursorPage<Review>> {
    if (size === 1) return recentReviewOnlyOneMock;

    switch (pageParam) {
      case "2023-10-03T21:05:31.859":
        return recentReviewMock2;
      case "2023-09-21T21:05:31.859":
        return recentReviewMock1;
      default:
        return recentReviewMock3;
    }
  }

  /** @description 애니 별점 평가 추가 */
  async addEvaluation(animeId: number, score: number) {
    return post(`/ratings/${animeId}`, { score });
  }

  /** @description 애니 별점 평가 수정 */
  async updateEvaluation(animeId: number, score: number) {
    return patch(`/ratings/${animeId}`, { score });
  }

  /** @description 애니 별점 평가 여부 조회 */
  async getEvaluation(animeId: number) {
    return get<UserEvaluation>(`/ratings/${animeId}`);
  }

  /** @description 입덕 포인트 남기기 */
  async addAttractionPoint(
    animeId: number,
    attractionElements: AttractionType[],
  ) {
    return post(`/attraction-points`, {
      animeId,
      attractionElements,
    });
  }

  /** @description 입덕 포인트 존재 여부 조회 */
  async getUserAttractionPointStatus(animeId: number) {
    return get<{ isAttractionPoint: boolean }>(`/attraction-points/${animeId}`);
  }

  /** @description 리뷰 수정 시 입덕 포인트 조회 */
  async getUserAttractionPoint(animeId: number, name: string) {
    return get<AttractionPoint>(`/short-reviews/attraction-points`, {
      params: { animeId, name },
    });
  }
}
