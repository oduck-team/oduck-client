import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

import useAuth from "@/features/auth/hooks/useAuth";
import { useApi } from "@/hooks/useApi";
import { useCommonToastError } from "@/libs/error";

import { AddReviewDto } from "../api/review";

export default function useReview(animeId: number, onReview: () => void) {
  const queryClient = useQueryClient();
  const { reviewApi } = useApi();
  const { user } = useAuth();

  const { toastAuthError, toastDefaultError } = useCommonToastError();

  const handleError = (error: unknown) => {
    if (error instanceof AxiosError && error.response?.status) {
      const status = error.response.status;
      if ([401, 403].includes(status)) {
        toastAuthError();
      } else if (status >= 500) {
        toastDefaultError();
      }
    }
  };

  // 리뷰 추가
  const addReview = useMutation({
    mutationFn: (review: AddReviewDto) => reviewApi.addReview(review),
    onSuccess: () => {
      queryClient.invalidateQueries(["profile", user?.name]);
      queryClient.invalidateQueries(["profile", user?.memberId, "review"]);
      queryClient.invalidateQueries([
        "profile",
        user?.memberId,
        "count",
        "review",
      ]);
      queryClient.invalidateQueries(["review", animeId, user?.memberId]);
      queryClient.invalidateQueries(["anime", animeId, user?.memberId]);
      // TODO: 최신 리뷰 목록 query 무효화
      onReview();
    },
    onError: (error) => handleError(error),
  });

  // 리뷰 수정
  const updateReview = useMutation({
    mutationFn: ({
      reviewId,
      review,
    }: {
      reviewId: number;
      review: AddReviewDto;
    }) => reviewApi.updateReview(reviewId, review),
    onSuccess: () => {
      queryClient.invalidateQueries(["profile", user?.memberId, "review"]);
      queryClient.invalidateQueries(["review", animeId, user?.memberId]);
      // TODO: 최신 리뷰 목록 query 무효화
      onReview();
    },
    onError: (error) => handleError(error),
  });

  return { addReview, updateReview };
}
