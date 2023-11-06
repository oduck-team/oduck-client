import { useMutation, useQueryClient } from "@tanstack/react-query";

import useAuth from "@/features/auth/hooks/useAuth";
import { useApi } from "@/hooks/useApi";

import { AddReviewDto } from "../api/review";

export default function useAddReview(onReview: () => void) {
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
      // TODO: 최신 리뷰 목록, 해당 애니의 리뷰 목록 query 무효화
      onReview();
    },
  });
}
