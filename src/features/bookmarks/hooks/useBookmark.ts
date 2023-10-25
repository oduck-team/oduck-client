import { useQuery } from "@tanstack/react-query";

import { useApi } from "@/hooks/useApi";

/**
 * @description 특정 애니메이션에 대한 북마크 상태를 관리합니다.
 * @param {number} animeId - 북마크 상태를 조회할 애니 id
 * @return UseQueryResult
 */
export default function useBookmark(animeId: number) {
  const { bookmarkApi } = useApi();
  return useQuery({
    queryKey: ["bookmark", animeId],
    queryFn: async () => {
      try {
        const { createdAt } = await bookmarkApi.getBookmark(animeId);
        return createdAt;
      } catch (e) {
        return "";
      }
    },
  });
}
