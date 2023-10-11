import {
  BookmarkCardContainer,
  Date,
  Image,
  MyScore,
  RatingContainer,
  Score,
  ScoreContainer,
  StarIcon,
  Title,
} from "./BookmarkCard.style";

interface BookmarkCardProps {
  bookmark: {
    title: string;
    image: string;
    rating: number;
    myRating?: number;
    createdAt: string;
  };
}

export default function BookmarkCard({ bookmark }: BookmarkCardProps) {
  return (
    <BookmarkCardContainer>
      <Image src={bookmark.image} alt={bookmark.title} />
      <div>
        <Title>{bookmark.title}</Title>
        <RatingContainer>
          <ScoreContainer>
            <StarIcon size={13} weight="fill" color="yellow" />
            <Score>평균 {bookmark.rating / 2}</Score>
          </ScoreContainer>
          <ScoreContainer>
            {bookmark.myRating && (
              <>
                <StarIcon size={13} weight="fill" color="blue" />
                <MyScore>내 평점 {bookmark.myRating / 2}</MyScore>
              </>
            )}
            {!bookmark.myRating && <Score>평가전</Score>}
          </ScoreContainer>
        </RatingContainer>
        <Date>{bookmark.createdAt}</Date>
      </div>
    </BookmarkCardContainer>
  );
}
