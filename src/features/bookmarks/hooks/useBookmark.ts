import { useCallback, useEffect, useState } from "react";

import { useApi } from "@/hooks/useApi";
import { ApiError } from "@/libs/error";

/**
 * @description 특정 애니메이션에 대한 북마크 상태를 관리합니다.
 * 북마크 생성 시간을 가져오거나 북마크 상태를 fetch하는 함수를 반환합니다.
 * @param {number} animeId - 북마크 상태를 조회할 애니 id
 */
export default function useBookmark(animeId: number) {
  const { bookmarkApi } = useApi();
  const [bookmarkedAt, setBookmarkedAt] = useState<string | null>(null);

  const fetchBookmark = useCallback(
    async (animeId: number) => {
      try {
        const { createdAt } = await bookmarkApi.getBookmark(animeId);
        setBookmarkedAt(createdAt);
      } catch (e) {
        if (e instanceof ApiError) {
          if (e.status === 404) {
            setBookmarkedAt(null);
          }
        }
      }
    },
    [bookmarkApi],
  );

  useEffect(() => {
    fetchBookmark(animeId);
  }, [animeId, fetchBookmark]);

  return { bookmarkedAt, fetchBookmark };
}
