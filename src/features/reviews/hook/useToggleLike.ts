import {
  InfiniteData,
  QueryClient,
  QueryKey,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { AxiosError } from "axios";

import useAuth from "@/features/auth/hooks/useAuth";
import { ReviewListResponse } from "@/features/users/api/profile";
import { useApi } from "@/hooks/useApi";
import { useCommonToastError } from "@/libs/error";

import { ReviewInfo } from "../api/review";

export default function useToggleLike(
  reviewId: number,
  animeId: number,
  isLike: boolean,
) {
  const queryClient = useQueryClient();
  const { reviewApi } = useApi();

  const { user } = useAuth();
  const { toastAuthError, toastDefaultError } = useCommonToastError();

  return useMutation({
    mutationFn: () => reviewApi.toggleReviewLike(reviewId),
    onMutate: async () => {
      // optimistic update를 overwrite하지 않도록 refetch를 cancel
      await queryClient.cancelQueries(["review", animeId, user?.memberId]);
      await queryClient.cancelQueries(["profile", user?.memberId, "review"]);
      await queryClient.cancelQueries(["reviewLike", reviewId, user?.memberId]);
      await queryClient.cancelQueries(["MostRecentReviewList"]);

      // optimistic update
      const prevAnimeReviewList = optimisticUpdateReviews(
        queryClient,
        reviewId,
        isLike,
        ["review", animeId, user?.memberId],
      );
      const prevUserReviewList = optimisticUpdateReviews(
        queryClient,
        reviewId,
        isLike,
        ["profile", user?.memberId, "review"],
      );
      const prevRecentReviewList = optimisticUpdateReviews(
        queryClient,
        reviewId,
        isLike,
        ["MostRecentReviewList", "list"],
      );
      const prevMostRecentReview = optimisticUpdateReviews(
        queryClient,
        reviewId,
        isLike,
        ["MostRecentReviewList", "first"],
      );

      const prevLike = { isLike };
      queryClient.setQueryData(["reviewLike", reviewId, user?.memberId], {
        isLike: !prevLike.isLike,
      });

      return {
        prevLike,
        prevAnimeReviewList,
        prevUserReviewList,
        prevRecentReviewList,
        prevMostRecentReview,
      };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["review", animeId, user?.memberId],
        refetchType: "none",
      });
      queryClient.invalidateQueries({
        queryKey: ["profile", user?.memberId, "review"],
        refetchType: "none",
      });
      queryClient.invalidateQueries({
        queryKey: ["MostRecentReviewList"],
        refetchType: "none",
      });
      queryClient.invalidateQueries({
        queryKey: ["reviewLike", reviewId, user?.memberId],
        refetchType: "none",
      });
    },
    onError: (error, variables, context) => {
      console.log(variables, context);
      if (!context) return;

      // roll back
      queryClient.setQueryData(
        ["reviewLike", reviewId, user?.memberId],
        context.prevLike,
      );

      rollBack(
        queryClient,
        ["review", animeId, user?.memberId],
        context.prevAnimeReviewList,
      );
      rollBack(
        queryClient,
        ["profile", user?.memberId, "review"],
        context.prevUserReviewList,
      );
      rollBack(
        queryClient,
        ["MostRecentReviewList", "list"],
        context.prevRecentReviewList,
      );
      rollBack(
        queryClient,
        ["MostRecentReviewList", "first"],
        context.prevMostRecentReview,
      );

      if (error instanceof AxiosError && error.response?.status) {
        const status = error.response.status;
        switch (status) {
          case 401:
            toastAuthError();
            break;
          default:
            toastDefaultError();
            break;
        }
      }
    },
  });
}

function optimisticUpdateReviews(
  queryClient: QueryClient,
  reviewId: number,
  isLike: boolean,
  queryKey: QueryKey,
) {
  let prevReviewList: CursorPage<
    ReviewInfo | ReviewListResponse | Omit<Review, "isLike">
  >[] = [];

  queryClient.setQueriesData<
    InfiniteData<
      CursorPage<ReviewInfo | ReviewListResponse | Omit<Review, "isLike">>
    >
  >(queryKey, (data) => {
    if (!data) return;
    prevReviewList = [...data.pages];

    return {
      ...data,
      pages: data.pages.map((page) => ({
        ...page,
        items: page.items.map((review) =>
          review.reviewId === reviewId
            ? {
                ...review,
                likeCount: isLike ? review.likeCount - 1 : review.likeCount + 1,
              }
            : review,
        ),
      })),
    };
  });

  return prevReviewList;
}

function rollBack(
  queryClient: QueryClient,
  queryKey: QueryKey,
  prevList: CursorPage<
    ReviewInfo | ReviewListResponse | Omit<Review, "isLike">
  >[],
) {
  queryClient.setQueriesData<
    InfiniteData<
      CursorPage<ReviewInfo | ReviewListResponse | Omit<Review, "isLike">>
    >
  >(queryKey, (data) => {
    if (!data) return;
    return {
      ...data,
      pages: [...prevList],
    };
  });
}
