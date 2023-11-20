import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { calcStarRatingAvg } from "@/utils/common";

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
import BookmarkDeleteModal from "./BookmarkDeleteModal";

interface BookmarkCardProps {
  bookmark: Bookmark;
  isMine: boolean;
}

export default function BookmarkCard({ bookmark, isMine }: BookmarkCardProps) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const toggleDeleteModal = () => setIsDeleteModalOpen((prev) => !prev);
  const handleDeleteModalToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleDeleteModal();
  };
  const navigate = useNavigate();
  const handleLinkToAnime = () => navigate(`/animes/${bookmark.animeId}`);

  return (
    <>
      <BookmarkCardContainer onClick={handleLinkToAnime}>
        <Image src={bookmark.thumbnail} alt={bookmark.title} />
        <InfoContainer>
          <Title>{bookmark.title}</Title>
          <div>
            <RatingContainer>
              <ScoreContainer>
                <StarIcon size={13} weight="fill" color="yellow" />
                <Score>
                  {bookmark.avgScore < 0 ? (
                    <Score>평가전</Score>
                  ) : (
                    `별점 ${calcStarRatingAvg(bookmark.avgScore)}`
                  )}
                </Score>
              </ScoreContainer>
              <ScoreContainer>
                {bookmark.myScore >= 0 && (
                  <>
                    <StarIcon size={13} weight="fill" color="blue" />
                    <MyScore>내 별점 {bookmark.myScore / 2}</MyScore>
                  </>
                )}
                {bookmark.myScore < 0 && <Score>평가전</Score>}
              </ScoreContainer>
            </RatingContainer>
            <BottomContainer>
              <CreatedDate>{dateWithDots(bookmark.createdAt)}</CreatedDate>
              {isMine && (
                <TrashIconContainer onClick={(e) => handleDeleteModalToggle(e)}>
                  {<TrashIcon size={18} />}
                </TrashIconContainer>
              )}
            </BottomContainer>
          </div>
        </InfoContainer>
      </BookmarkCardContainer>
      {isMine && (
        <AnimatePresence>
          {isDeleteModalOpen && (
            <BookmarkDeleteModal
              animeId={bookmark.animeId}
              title={bookmark.title}
              onClose={toggleDeleteModal}
            />
          )}
        </AnimatePresence>
      )}
    </>
  );
}

function dateWithDots(date: string) {
  const originalDate = new Date(date);

  const year = originalDate.getFullYear();
  const month = (originalDate.getMonth() + 1).toString().padStart(2, "0"); // 월은 0부터 시작하므로 +1 해야 함
  const day = originalDate.getDate().toString().padStart(2, "0");

  return `${year}.${month}.${day}`;
}
