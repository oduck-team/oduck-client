import { useQuery } from "@tanstack/react-query";

import useAuth from "@/features/auth/hooks/useAuth";
import { useApi } from "@/hooks/useApi";

export default function useGetEvaluation(animeId: number) {
  const { reviewApi } = useApi();
  const { user } = useAuth();

  return useQuery({
    queryKey: ["evaluation", animeId, user?.memberId],
    queryFn: async () => {
      try {
        return await reviewApi.getEvaluation(animeId);
      } catch (e) {
        return null;
      }
    },
  });
}
