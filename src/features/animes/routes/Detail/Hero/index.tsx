import BookmarkButton from "@/features/bookmarks/components/BookmarkButton";
import ReviewRating from "@/features/reviews/components/ReviewRating";

import {
  Container,
  Banner,
  Image,
  ImageGradient,
  Info,
  Actions,
  Stat,
  BookmarkContainer,
} from "./style";

interface HeroProps {
  anime: Anime;
}

export default function Hero({ anime }: HeroProps) {
  let rating: string;
  switch (anime.rating) {
    case "ADULT":
      rating = "성인";
      break;
    case "FIFTEEN":
      rating = "15세";
      break;
    case "TWELVE":
      rating = "12세";
      break;
    case "ALL":
    default:
      rating = "전체";
  }

  return (
    <Container>
      <Banner>
        <Image url={anime.thumbnail}></Image>
        <ImageGradient />
        <Info>
          <h1>{anime.title}</h1>
          <div style={{ width: "100%", paddingTop: "8px" }}>
            <span>
              판타지 | {anime.episodeCount}부작 | 완결 | {rating}
            </span>
          </div>
        </Info>
      </Banner>
      <Actions>
        <Stat
          variant="primary"
          items={[
            { title: "별점", data: `★ 4.8` },
            { title: "한줄리뷰", data: `${anime.reviewCount}` },
            { title: "덕후", data: `${anime.bookmarkCount}` },
            { title: "방영년도", data: `${anime.year}` },
          ]}
          style={{ margin: "0 auto" }}
        />
        <ReviewRating animeId={anime.id} />
        <BookmarkContainer
          style={{
            width: "100%",
            paddingTop: "16px",
            marginTop: "16px",
            borderTop: "solid 1px #F1F1F1",
          }}
        >
          <BookmarkButton animeId={anime.id} />
        </BookmarkContainer>
      </Actions>
    </Container>
  );
}
