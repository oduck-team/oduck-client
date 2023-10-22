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
  bookmark: Bookmark;
}

export default function BookmarkCard({ bookmark }: BookmarkCardProps) {
  return (
    <BookmarkCardContainer>
      <Image src={bookmark.thumbnail} alt={bookmark.title} />
      <div>
        <Title>{bookmark.title}</Title>
        <RatingContainer>
          <ScoreContainer>
            <StarIcon size={13} weight="fill" color="yellow" />
            <Score>평균 {bookmark.avgScore / 2}</Score>
          </ScoreContainer>
          <ScoreContainer>
            {bookmark.myScore >= 0 && (
              <>
                <StarIcon size={13} weight="fill" color="blue" />
                <MyScore>내 평점 {bookmark.myScore / 2}</MyScore>
              </>
            )}
            {bookmark.myScore < 0 && <Score>평가전</Score>}
          </ScoreContainer>
        </RatingContainer>
        <Date>{bookmark.createdAt}</Date>
      </div>
    </BookmarkCardContainer>
  );
}
