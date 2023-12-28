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

  // 공통 쿼리 무효화 (리뷰 추가, 수정, 삭제에 사용)
  const invalidateCommonQuries = () => {
    queryClient.invalidateQueries(["profile", user?.memberId, "review"]); // 회원 리뷰 목록
    queryClient.invalidateQueries(["review", animeId, user?.memberId]); // 애니 리뷰 목록
    queryClient.invalidateQueries(["MostRecentReviewList"]); // 최신 리뷰
  };

  // 리뷰 개수와 관련된 쿼리 무효화 (리뷰 추가, 삭제에 사용)
  const invalidateCountQuries = () => {
    queryClient.invalidateQueries(["profile", user?.name]); // 프로필 (activity)
    queryClient.invalidateQueries([
      "profile",
      user?.memberId,
      "count",
      "review",
    ]); // 회원 리뷰 개수
    queryClient.invalidateQueries(["anime", animeId, user?.memberId]); // 애니의 리뷰 개수
  };

  // 리뷰 추가
  const addReview = useMutation({
    mutationFn: (review: AddReviewDto) => reviewApi.addReview(review),
    onSuccess: () => {
      invalidateCommonQuries();
      invalidateCountQuries();
      onReview(); // 리뷰 모달 닫기
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
      invalidateCommonQuries();
      onReview(); // 리뷰 모달 닫기
    },
    onError: (error) => handleError(error),
  });

  // 리뷰 삭제
  const deleteReview = useMutation({
    mutationFn: (reviewId: number) => reviewApi.deleteReview(reviewId),
    onSuccess: () => {
      invalidateCommonQuries();
      invalidateCountQuries();
      queryClient.invalidateQueries(["attraction", animeId]); // 입덕포인트 무효화
      onReview(); // 삭제 모달 닫기
    },
    onError: (error) => handleError(error),
  });

  return { addReview, updateReview, deleteReview };
}
