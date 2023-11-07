import { useMutation, useQueryClient } from "@tanstack/react-query";

import useAuth from "@/features/auth/hooks/useAuth";
import { useApi } from "@/hooks/useApi";

import { AddReviewDto } from "../api/review";

export default function useAddReview(animeId: number, onReview: () => void) {
  const queryClient = useQueryClient();
  const { reviewApi } = useApi();
  const {
    user: { memberId, name },
  } = useAuth();

  return useMutation({
    mutationFn: (review: AddReviewDto) => reviewApi.addReview(review),
    onSuccess: () => {
      queryClient.invalidateQueries(["profile", name]);
      queryClient.invalidateQueries(["profile", memberId, "review"]);
      queryClient.invalidateQueries(["review", animeId, memberId]);
      queryClient.invalidateQueries(["anime", animeId, memberId]);
      // TODO: 최신 리뷰 목록 query 무효화
      onReview();
    },
  });
}
