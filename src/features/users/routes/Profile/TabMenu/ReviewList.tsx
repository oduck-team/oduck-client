import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import { useRef } from "react";

import ReviewCard from "@/features/reviews/components/ReviewCard";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

import { Target } from "./ReviewList.style";

interface ReviewListProps {
  isMine: boolean;
  list: Review[];
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined,
  ) => Promise<InfiniteQueryObserverResult<Review, unknown>>;
  hasNextPage: boolean | undefined;
}

export default function ReviewList({
  isMine,
  list,
  fetchNextPage,
  hasNextPage,
}: ReviewListProps) {
  const targetRef = useRef(null);

  useIntersectionObserver({
    target: targetRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  });
  return (
    <>
      {list.map((review) => (
        <ReviewCard key={review.animeId} isBlock isBorderTop={false}>
          <ReviewCard.Anime anime={review.anime} />
          <ReviewCard.Comment text={review.comment} />
          <ReviewCard.ActionBar
            include="time"
            createdAt={review.createdAt}
            isMine={isMine}
          />
        </ReviewCard>
      ))}

      <Target ref={targetRef} />
    </>
  );
}
