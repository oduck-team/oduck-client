import {
  InfiniteData,
  QueryClient,
  QueryKey,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { AxiosError } from "axios";

import useAuth from "@/features/auth/hooks/useAuth";
import { ReviewInfo } from "@/features/reviews/api/review";
import { ReviewListResponse } from "@/features/users/api/profile";
import { useApi } from "@/hooks/useApi";
import { useCommonToastError } from "@/libs/error";

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
        ["review", animeId, user?.memberId], // 애니 리뷰 목록
      );
      const prevUserReviewList = optimisticUpdateReviews(
        queryClient,
        reviewId,
        isLike,
        ["profile", user?.memberId, "review"], // 회원 리뷰 목록
      );
      const prevRecentReviewList = optimisticUpdateReviews(
        queryClient,
        reviewId,
        isLike,
        ["MostRecentReviewList", "list"], // 최신 리뷰 목록
      );
      const prevMostRecentReview = optimisticUpdateReviews(
        queryClient,
        reviewId,
        isLike,
        ["MostRecentReviewList", "first"], // 가장 최신 리뷰 (1개)
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
      // 좋아요 요청 성공 시 리뷰 목록 query 무효화
      queryClient.invalidateQueries({
        queryKey: ["review", animeId, user?.memberId],
        refetchType: "none", // 사용자의 요청 전까지는 refetch가 일어나지 않도록 합니다.
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
      // 바꾸었던 query data를 이전으로 되돌립니다.
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

/**
 * @description 리뷰 목록을 낙관적으로 업데이트하기 위한 함수
 * @param queryKey 업데이트 할 리뷰 목록 query의 key
 * @returns 기존 query 데이터를 반환합니다. 이는 좋아요 요청 실패 시 roll back에서 사용됩니다.
 */
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

/**
 * @description 리뷰 목록 낙관적 업데이트 roll back 함수 : prevList 값으로 query 데이터를 되돌립니다.
 * @param queryKey 되돌릴 리뷰 목록 query의 key
 * @param prevList 기존 리뷰 목록 query 데이터
 */
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
