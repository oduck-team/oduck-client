import { useInfiniteQuery } from "@tanstack/react-query";

import Button from "@/components/Button";
import ReviewCard from "@/features/reviews/components/ReviewCard";
import { useApi } from "@/hooks/useApi";

import { Header, RecentReviewContainer, Title, ReviewConainer } from "./style";

export default function RecentReview() {
  const { reviewApi } = useApi();
  const { data } = useInfiniteQuery({
    queryKey: ["MostRecentReviewCard", "first"],
    queryFn: ({ pageParam }) => reviewApi.getRecentReviewList(pageParam, 1),
    select: (data) => ({
      pages: data.pages.flatMap((page) => page.items),
      pageParams: data.pageParams,
    }),
  });

  return (
    <>
      {data && (
        <RecentReviewContainer>
          <Header>
            <Title>최근 한줄리뷰</Title>
            <Button name="더보기" variant="text" size="sm" color="neutral">
              더보기
            </Button>
          </Header>
          <ReviewConainer>
            <ReviewCard
              isBlock
              border="none"
              linkTo={`/animes/${data.pages[0].anime.animeId}`}
            >
              <ReviewCard.Anime anime={data.pages[0].anime} />
              <ReviewCard.Comment
                text={data.pages[0].content}
                isSpoiler={data.pages[0].isSpoiler}
              />
              <ReviewCard.ActionBar
                createdAt={data.pages[0].createdAt}
                isMine={false} // TODO: isMine 판별
                isLiked={data.pages[0].isLiked}
                likeCount={data.pages[0].likeCount}
                isTimeAgo={true}
              />
            </ReviewCard>
          </ReviewConainer>
        </RecentReviewContainer>
      )}
    </>
  );
}
