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
  const {
    user: { memberId },
  } = useAuth();

  return useMutation({
    mutationFn: () => bookmarkApi.toggleBookmark(animeId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["profile", memberId],
        exact: true,
      });
      queryClient.invalidateQueries(["profile", memberId, "bookmark"]);
      queryClient.invalidateQueries(["bookmark", memberId, animeId]);
    },
  });
}
