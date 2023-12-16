import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

import useAuth from "@/features/auth/hooks/useAuth";
import { useApi } from "@/hooks/useApi";

export default function useGetIsLiked(reviewId: number) {
  const { reviewApi } = useApi();
  const { user } = useAuth();
  const { pathname } = useLocation();

  const { data } = useQuery({
    queryKey: ["reviewLike", reviewId, user?.memberId],
    queryFn: () => reviewApi.getReviewIsLiked(reviewId),
    enabled: Boolean(user?.memberId) && pathname.split("/")[1] === "animes",
  });

  return data;
}
