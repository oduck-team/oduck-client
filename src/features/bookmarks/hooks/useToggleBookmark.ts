import { useMutation, useQueryClient } from "@tanstack/react-query";

import useAuth from "@/features/auth/hooks/useAuth";
import { useApi } from "@/hooks/useApi";

/**
 * @description 북마크 상태를 토글(생성/삭제)합니다.
 * @return UseMutationResult
 */
export default function useToggleBookmark(animeId: number) {
  const queryClient = useQueryClient();
  const { bookmarkApi } = useApi();
  const { user } = useAuth();

  return useMutation({
    mutationFn: () => bookmarkApi.toggleBookmark(animeId),
    onSuccess: () => {
      queryClient.invalidateQueries(["profile", user?.name]);
      queryClient.invalidateQueries(["profile", user?.memberId, "bookmark"]);
      queryClient.invalidateQueries([
        "profile",
        user?.memberId,
        "count",
        "bookmark",
      ]);
      queryClient.invalidateQueries(["bookmark", user?.memberId, animeId]);
      queryClient.invalidateQueries(["anime", animeId, user?.memberId]);
    },
  });
}
