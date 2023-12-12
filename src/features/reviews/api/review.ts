import { get, patch, post } from "@/libs/api";

import { ReviewSortOption } from "../hook/useGetAnimeReviews";

import recentReviewMock1 from "./mock/recentReview1.json";
import recentReviewMock2 from "./mock/recentReview2.json";
import recentReviewMock3 from "./mock/recentReview3.json";
import recentReveiwCardMock from "./mock/recentReviewCard.json";
import recentReviewOnlyOneMock from "./mock/recentReviewOnlyOne.json";

export type ReviewInfo = Omit<Review, "anime"> & {
  animeId: number;
  thumbnail: string;
};

export type AddReviewDto = Pick<Review, "name" | "content"> & {
  animeId: number;
  hasSpoiler: boolean;
};

export interface UserEvaluation {
  createdAt: string;
  score: number;
}

export type AttractionType =
  | "STORY"
  | "CHARACTER"
  | "DRAWING"
  | "VOICE_ACTOR"
  | "MUSIC";

export type RecentReviewCardResponse = Pick<Review, "score" | "content"> & {
  animeId: number;
  title: string;
  thumbnail: string;
  score: number | null;
  genres: string[];
};

export default class ReviewApi {
  /** @description 리뷰 작성 요청 */
  async addReview(review: AddReviewDto): Promise<void> {
    return post("/short-reviews", review);
  }

  /** @description 리뷰 수정 요청 */
  async updateReview(reviewId: number, review: AddReviewDto) {
    return patch(`/short-reviews/${reviewId}`, review);
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
    return get<CursorPage<ReviewInfo>>(`/short-reviews/animes/${animeId}`, {
      params,
    });
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

  /** @desciption 메인 페이지 최상단 최근 리뷰 이미지 카드*/
  async getRecentReviewCard(): Promise<RecentReviewCardResponse> {
    return recentReveiwCardMock;

    // FIXME: URI 변경
    // return get('/someuri')
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

  // 입덕 포인트

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
