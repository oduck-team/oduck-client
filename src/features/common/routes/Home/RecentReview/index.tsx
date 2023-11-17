import { useInfiniteQuery } from "@tanstack/react-query";

import Button from "@/components/Button";
import useAuth from "@/features/auth/hooks/useAuth";
import ReviewCard from "@/features/reviews/components/ReviewCard";
import { useApi } from "@/hooks/useApi";

import RecentReviewLoading from "./RecentReviewLoading";
import { Header, RecentReviewContainer, Title, ReviewConainer } from "./style";

export default function RecentReview() {
  const { user } = useAuth();
  const { reviewApi } = useApi();
  const { data, isLoading } = useInfiniteQuery({
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
            {isLoading && <RecentReviewLoading />}
            {!isLoading && (
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
                  isMine={user?.name === data.pages[0].name ? true : false}
                  isLike={data.pages[0].isLike}
                  likeCount={data.pages[0].likeCount}
                  isTimeAgo={true}
                />
              </ReviewCard>
            )}
          </ReviewConainer>
        </RecentReviewContainer>
      )}
    </>
  );
}
