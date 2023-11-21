import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

import useAuth from "@/features/auth/hooks/useAuth";
import { useApi } from "@/hooks/useApi";
import { useCommonToastError } from "@/libs/error";

export default function useEvaluation(animeId: number) {
  const queryClient = useQueryClient();
  const { reviewApi } = useApi();
  const { user } = useAuth();

  const { toastAuthError, toastDefaultError } = useCommonToastError();

  const { data } = useQuery({
    queryKey: ["evaluation", animeId, user?.memberId],
    queryFn: async () => {
      try {
        return await reviewApi.getEvaluation(animeId);
      } catch (e) {
        return null;
      }
    },
  });

  const evaluationMutation = useMutation({
    mutationFn: (score: number) => {
      if (!data) return reviewApi.addEvaluation(animeId, score);
      return reviewApi.updateEvaluation(animeId, score);
    },
    onSuccess: () => {
      // 사용자의 평가 여부 및 score 조회 query 무효화
      queryClient.invalidateQueries(["evaluation", animeId, user?.memberId]);
      // 애니 평균 평점 조회 query 무효화
      queryClient.invalidateQueries(["averageRating", animeId, user?.memberId]);
      // 프로필 북마크 query 무효화
      queryClient.invalidateQueries(["profile", user?.memberId, "bookmark"]);
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

  return { data, evaluationMutation };
}
