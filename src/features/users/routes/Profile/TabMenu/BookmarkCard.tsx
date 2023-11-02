import { useNavigate } from "react-router-dom";

import {
  BookmarkCardContainer,
  BottomContainer,
  CreatedDate,
  Image,
  InfoContainer,
  MyScore,
  RatingContainer,
  Score,
  ScoreContainer,
  StarIcon,
  Title,
  TrashIcon,
  TrashIconContainer,
} from "./BookmarkCard.style";

interface BookmarkCardProps {
  bookmark: Bookmark;
  isMine: boolean;
}

export default function BookmarkCard({ bookmark, isMine }: BookmarkCardProps) {
  const navigate = useNavigate();
  const handleLinkToAnime = () => navigate(`/animes/${bookmark.animeId}`);

  return (
    <BookmarkCardContainer onClick={handleLinkToAnime}>
      <Image src={bookmark.thumbnail} alt={bookmark.title} />
      <InfoContainer>
        <Title>{bookmark.title}</Title>
        <div>
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
          <BottomContainer>
            <CreatedDate>{dateWithDots(bookmark.createdAt)}</CreatedDate>
            <TrashIconContainer onClick={(e) => e.stopPropagation()}>
              {<TrashIcon size={18} />}
            </TrashIconContainer>
          </BottomContainer>
        </div>
      </InfoContainer>
    </BookmarkCardContainer>
  );
}

function dateWithDots(date: string) {
  const originalDate = new Date(date);

  const year = originalDate.getFullYear();
  const month = (originalDate.getMonth() + 1).toString().padStart(2, "0"); // 월은 0부터 시작하므로 +1 해야 함
  const day = originalDate.getDate().toString().padStart(2, "0");

  return `${year}.${month}.${day}`;
}
