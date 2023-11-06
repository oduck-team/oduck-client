import { post } from "@/libs/api";

import { ReviewSortOption } from "../hook/useGetAnimeReviews";

import reviewsMock from "./mock/anime_review_list1.json";
import reviewsMock2 from "./mock/anime_review_list2.json";
import reviewsMock3 from "./mock/anime_review_list3.json";
import reviewsMock4 from "./mock/anime_review_list4.json";
import { AddReviewDto, ReviewPage } from "./review";

export default class ReviewDevApi {
  /** @description 리뷰 작성 요청*/
  async addReview(review: AddReviewDto): Promise<void> {
    return post("/short-reviews", review);
  }

  /** @description 한 애니의 리뷰 목록 요청*/
  async getAnimeReviews(
    animeId: number,
    pageParam: string,
    selectedOption: ReviewSortOption,
  ): Promise<ReviewPage> {
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
}
