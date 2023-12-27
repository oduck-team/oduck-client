import { useQuery } from "@tanstack/react-query";

import useAuth from "@/features/auth/hooks/useAuth";
import { useApi } from "@/hooks/useApi";

/**
 *
 * @description 사용자의 리뷰 좋아요 여부 조회
 */
export default function useGetIsLike(reviewId: number) {
  const { reviewApi } = useApi();
  const { user } = useAuth();

  const { data } = useQuery({
    queryKey: ["reviewLike", reviewId, user?.memberId],
    queryFn: () => reviewApi.getReviewIsLike(reviewId),
    enabled: Boolean(user?.memberId),
  });

  return data;
}
