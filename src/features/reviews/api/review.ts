import { post } from "@/libs/api";

export interface AddReviewDto {
  name: string;
  animeId: number;
  hasSpoiler: boolean;
  content: string;
}

export default class ReviewApi {
  /** @description 리뷰 작성 요청*/
  async addReview(review: AddReviewDto): Promise<void> {
    return post("/short-reviews", review);
  }
}
