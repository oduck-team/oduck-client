import { useState } from "react";

import { useApi } from "@/hooks/useApi";

/**
 * @description 북마크 상태를 토글(생성/삭제)합니다.
 */
export default function useToggleBookmark() {
  const { bookmarkApi } = useApi();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const toggleBookmark = async (animeId: number) => {
    setIsLoading(true);
    setError(null);
    try {
      await bookmarkApi.toggleBookmark(animeId);
    } catch (e) {
      setError(e as Error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    toggleBookmark,
  };
}
