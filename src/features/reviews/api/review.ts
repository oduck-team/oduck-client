import { get, patch, post } from "@/libs/api";

import { ReviewSortOption } from "../hook/useGetAnimeReviews";

import recentReviewMock1 from "./mock/recentReview1.json";
import recentReviewMock2 from "./mock/recentReview2.json";
import recentReviewMock3 from "./mock/recentReview3.json";
import recentReviewOnlyOneMock from "./mock/recentReviewOnlyOne.json";

export type ReviewInfo = Omit<Review, "anime"> & {
  reviewId: number;
  animeId: number;
  thumbnail: string;
  score: number;
  isMine: boolean;
};

export type AddReviewDto = Pick<Review, "name" | "content"> & {
  animeId: number;
  hasSpoiler: boolean;
};

export interface UserEvaluation {
  createdAt: string;
  score: number;
}

export default class ReviewApi {
  /** @description 리뷰 작성 요청 */
  async addReview(review: AddReviewDto): Promise<void> {
    return post("/short-reviews", review);
  }

  /** @description 한 애니의 리뷰 목록 요청 */
  async getAnimeReviews(
    animeId: number,
    pageParam: string,
    selectedOption: ReviewSortOption,
  ) {
    const baseParams = {
      size: 10,
      sort: selectedOption.sort,
      order: selectedOption.order,
    };
    const params =
      pageParam === undefined
        ? baseParams
        : {
            cursor: pageParam,
            ...baseParams,
          };
    return get<CursorPage<ReviewInfo>>(`/short-reviews/${animeId}`, { params });
  }

  /**
   * 메인 페이지의 최근 한 줄 리뷰 size = 1
   * 최근 한줄리뷰 페이지 size = 10,
   * */
  async getRecentReviewList(
    pageParam: string | undefined,
    size: number = 10,
  ): Promise<CursorPage<Review>> {
    const baseParams = { size };
    const params =
      pageParam === undefined
        ? baseParams
        : {
            cursor: pageParam,
            ...baseParams,
          };

    console.log(params);

    if (size === 1) return recentReviewOnlyOneMock;

    switch (pageParam) {
      case "2023-10-03T21:05:31.859":
        return recentReviewMock2;
      case "2023-09-21T21:05:31.859":
        return recentReviewMock1;
      default:
        return recentReviewMock3;
    }

    // FIXME: URI 변경
    // return await get(`/someURI`, {
    //   params: params,
    // });
  }

  /** @description 애니 별점 평가 추가 */
  async addEvaluation(animeId: number, score: number) {
    return post(`/ratings/${animeId}`, { score });
  }

  /** @description 애니 별점 평가 수정 */
  async updateEvaluation(animeId: number, score: number) {
    return patch(`/ratings/${animeId}`, { score });
  }

  /** @description 애니 별점 평가 여부 및 score 조회 */
  async getEvaluation(animeId: number) {
    return get<UserEvaluation>(`/ratings/${animeId}`);
  }
}
