import { get, post } from "@/libs/api";

import { ReviewSortOption } from "../hook/useGetAnimeReviews";

export interface ReviewInfo {
  reviewId: number;
  animeId: number;
  name: string;
  thumbnail: string;
  score: number;
  content: string;
  hasSpoiler: boolean;
  hasLike: boolean;
  likeCount: number;
  isMine: boolean;
  createdAt: string;
}

export interface AddReviewDto {
  name: string;
  animeId: number;
  hasSpoiler: boolean;
  content: string;
}

export interface ReviewPage {
  items: ReviewInfo[];
  hasNext: boolean;
  cursor: string;
  size: number;
}

export default class ReviewApi {
  /** @description 리뷰 작성 요청*/
  async addReview(review: AddReviewDto): Promise<void> {
    return post("/short-reviews", review);
  }

  /** @description 한 애니의 리뷰 목록 요청*/
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
    return get<ReviewPage>(`/short-reviews/${animeId}`, { params });
  }
}
