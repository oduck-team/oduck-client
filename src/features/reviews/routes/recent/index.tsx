import { CaretLeft } from "@phosphor-icons/react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Loader from "@/components/Loader";
import useAuth from "@/features/auth/hooks/useAuth";
import { useApi } from "@/hooks/useApi";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

import ReviewCard from "../../components/ReviewCard";

import {
  Header,
  IconButton,
  ListContainer,
  ReviewsRecentContainer,
  Target,
  Title,
} from "./style";

export default function ReviewsRecent() {
  const targetRef = useRef(null);
  const { user } = useAuth();
  const navigate = useNavigate();
  const { reviewApi } = useApi();
  const {
    data: reviewList,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["MostRecentReviewCard"],
    queryFn: ({ pageParam }) => reviewApi.getRecentReviewList(pageParam),
    getNextPageParam: (lastPage) => lastPage.cursor || undefined,
    select: (data) => ({
      pages: data.pages.flatMap((page) => page.items),
      pageParams: data.pageParams,
    }),
  });

  useIntersectionObserver({
    target: targetRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  });

  return (
    <>
      <ReviewsRecentContainer>
        <Header>
          <IconButton type="button" onClick={() => navigate(-1)}>
            <CaretLeft size={24} />
          </IconButton>
          <Title> 최근 한줄리뷰</Title>
        </Header>
        {!isLoading && (
          <ListContainer>
            {reviewList?.pages.map((review) => (
              <ReviewCard
                isBlock
                border="top"
                linkTo={`/animes/${review.anime.animeId}`}
                key={uuidv4()}
              >
                <ReviewCard.Anime anime={review.anime} />
                <ReviewCard.Comment
                  text={review.content}
                  isSpoiler={review.isSpoiler}
                />
                <ReviewCard.ActionBar
                  createdAt={review.createdAt}
                  isMine={user?.name === review.name ? true : false}
                  isLike={review.isLike}
                  likeCount={review.likeCount}
                  isTimeAgo={true}
                  reviewId={review.reviewId}
                  animeId={review.anime.animeId}
                  isSpoiler={review.isSpoiler}
                  content={review.content}
                  score={review.score}
                />
              </ReviewCard>
            ))}
          </ListContainer>
        )}

        <Target ref={targetRef} />
        {isLoading && <Loader display="oduck" />}
      </ReviewsRecentContainer>
    </>
  );
}
