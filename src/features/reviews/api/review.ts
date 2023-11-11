import { get, post } from "@/libs/api";

import { ReviewSortOption } from "../hook/useGetAnimeReviews";

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
}
