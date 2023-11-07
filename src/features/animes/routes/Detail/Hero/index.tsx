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
  /** 애니 id */
  id: number;

  /** 애니 썸네일 */
  thumbnail: string;

  /** 애니 방영 등급 */
  rating: AnimeRating;

  /** 애니 제목 */
  title: string;

  /** 장르 목록 */
  genres: string[];

  /** 에피소드 수 */
  episodeCount: number;

  /** 방영 상태 */
  status: AnimeStatus;

  /** 평균 평점 */
  starScoreAvg: number;

  /** 리뷰 수 */
  reviewCount: number;

  /** 북마크 입덕수 */
  bookmarkCount: number;

  /** 방영 년도 */
  year: number;
}

export default function Hero({
  id,
  thumbnail,
  rating,
  title,
  genres,
  episodeCount,
  status,
  // starScoreAvg,
  reviewCount,
  bookmarkCount,
  year,
}: HeroProps) {
  // FIXME: 부모에서 처리후 프롭으로 넘기기
  let displayRating: string;
  switch (rating) {
    case "ADULT":
      displayRating = "성인";
      break;
    case "FIFTEEN":
      displayRating = "15세";
      break;
    case "TWELVE":
      displayRating = "12세";
      break;
    case "ALL":
    default:
      displayRating = "전체";
  }

  // FIXME: 부모에서 처리후 프롭으로 넘기기
  let displayStatus: string;
  switch (status) {
    case "FINISHED":
      displayStatus = "완결";
      break;
    case "ONGOING":
      displayStatus = "방영 중";
      break;
    case "UPCOMING":
      displayStatus = "방영예정";
      break;
    default:
      displayStatus = "알 수 없음";
  }

  return (
    <Container>
      <Banner>
        <Image url={thumbnail}></Image>
        <ImageGradient />
        <Info>
          <h1>{title}</h1>
          <div style={{ width: "100%", paddingTop: "8px" }}>
            <span>
              {genres.join(", ")} | {episodeCount}부작 | {displayStatus} |{" "}
              {displayRating}
            </span>
          </div>
        </Info>
      </Banner>
      <Actions>
        <Stat
          variant="primary"
          items={[
            { title: "별점", data: `★ 4.8` },
            { title: "한줄리뷰", data: `${reviewCount}` },
            { title: "덕후", data: `${bookmarkCount}` },
            { title: "방영년도", data: `${year}` },
          ]}
          style={{ margin: "0 auto" }}
        />
        <ReviewRating animeId={id} />
        <BookmarkContainer
          style={{
            width: "100%",
            paddingTop: "16px",
            marginTop: "16px",
            borderTop: "solid 1px #F1F1F1",
          }}
        >
          <BookmarkButton animeId={id} />
        </BookmarkContainer>
      </Actions>
    </Container>
  );
}
