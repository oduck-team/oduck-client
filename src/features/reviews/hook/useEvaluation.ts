import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

import useAuth from "@/features/auth/hooks/useAuth";
import { useApi } from "@/hooks/useApi";
import { useCommonToastError } from "@/libs/error";

export default function useEvaluation({
  animeId,
  hasReview = true,
}: {
  animeId: number;
  hasReview?: boolean;
}) {
  const queryClient = useQueryClient();
  const { reviewApi } = useApi();
  const { user } = useAuth();

  const { toastAuthError, toastDefaultError } = useCommonToastError();

  return useMutation({
    mutationFn: ({
      score,
      hasPrevData = true,
    }: {
      score: number;
      hasPrevData?: boolean;
    }) => {
      if (!hasPrevData) return reviewApi.addEvaluation(animeId, score);
      return reviewApi.updateEvaluation(animeId, score);
    },
    onSuccess: () => {
      // 사용자의 평가 여부 및 score 조회 query 무효화
      queryClient.invalidateQueries(["evaluation", animeId, user?.memberId]);
      // 애니 평균 평점 조회 query 무효화
      queryClient.invalidateQueries(["averageRating", animeId, user?.memberId]);

      // 별점 수정 대상 애니에 대한 사용자의 리뷰가 존재하는 경우에만 리뷰 목록 조회 무효화
      if (hasReview) {
        queryClient.invalidateQueries(["profile", user?.memberId, "review"]);
        queryClient.invalidateQueries(["review", animeId, user?.memberId]);
        queryClient.invalidateQueries(["anime", animeId, user?.memberId]);
        // TODO: 최신 리뷰 목록 조회 무효화
      }
    },
    onError: (error) => {
      if (error instanceof AxiosError && error.response?.status) {
        const status = error.response.status;
        switch (status) {
          case 401:
            toastAuthError();
            break;
          default:
            toastDefaultError();
            break;
        }
      }
    },
  });
}
