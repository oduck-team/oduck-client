import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useApi } from "@/hooks/useApi";

/**
 * @description 북마크 상태를 토글(생성/삭제)합니다.
 * @return UseMutationResult
 */
export default function useToggleBookmark(animeId: number) {
  const queryClient = useQueryClient();
  const { bookmarkApi } = useApi();

  return useMutation({
    mutationFn: () => bookmarkApi.toggleBookmark(animeId),
    onSuccess: () => {
      queryClient.invalidateQueries(["bookmark"]);
    },
  });
}
