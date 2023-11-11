import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import useAuth from "@/features/auth/hooks/useAuth";
import { useApi } from "@/hooks/useApi";

export default function useEvaluation(animeId: number) {
  const queryClient = useQueryClient();
  const { reviewApi } = useApi();
  const {
    user: { memberId },
  } = useAuth();

  const { data } = useQuery({
    queryKey: ["evaluation", animeId, memberId],
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
      queryClient.invalidateQueries(["evaluation", animeId, memberId]);
      // TODO: 애니 평균 평점 조회 query 무효화
    },
  });

  return { data, evaluationMutation };
}
