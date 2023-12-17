import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

import useAuth from "@/features/auth/hooks/useAuth";
import { useApi } from "@/hooks/useApi";

/**
 *
 * @description 사용자의 리뷰 좋아요 여부 조회
 * 리뷰 목록 조회에서 사용됩니다.
 */
export default function useGetIsLike(reviewId: number) {
  const { reviewApi } = useApi();
  const { user } = useAuth();
  const { pathname } = useLocation();

  const { data } = useQuery({
    queryKey: ["reviewLike", reviewId, user?.memberId],
    queryFn: () => reviewApi.getReviewIsLike(reviewId),
    enabled:
      Boolean(user?.memberId) &&
      ["profile", "animes", "reviews"].includes(pathname.split("/")[1]),
  });

  return data;
}
