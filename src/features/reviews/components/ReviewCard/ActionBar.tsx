import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import LoginAlertModal from "@/features/auth/components/LoginAlertModal";
import useAuth from "@/features/auth/hooks/useAuth";
import useGetIsLike from "@/features/reviews/hook/useGetIsLike";
import useToggleLike from "@/features/reviews/hook/useToggleLike";
import useDebounce from "@/hooks/useDebounce";
import { compactNumber } from "@/utils/common";

import { ActionBarContainer, ButtonContainer } from "./ActionBar.style";
import ReviewLikeButton from "./ReviewLikeButton";
import ReviewMoreButton from "./ReviewMoreButton";

export interface ActionBarProps {
  isMine: boolean;
  memberId?: number;
  isLike?: boolean;
  likeCount: number;
  createdAt?: string;
  isTimeAgo?: boolean;
  reviewId: number;
  animeId: number;
  content: string;
  isSpoiler: boolean;
  score: number;
}

const DEBOUNCE_DELAY = 200;

export default function ActionBar({
  isMine,
  memberId,
  isLike,
  likeCount,
  createdAt,
  isTimeAgo,
  reviewId,
  animeId,
  content,
  isSpoiler,
  score,
}: ActionBarProps) {
  const date = isTimeAgo ? timeAgo(createdAt) : dateWithDots(createdAt);

  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const data = useGetIsLike(reviewId);
  const userLike = data ? data.isLike : isLike;
  const likeMutation = useToggleLike(
    reviewId,
    animeId,
    userLike ?? false,
    memberId,
  );
  const { user } = useAuth();

  const handleClickLike = useDebounce(() => {
    if (!user) {
      setIsLoginModalVisible(true);
      return;
    }
    likeMutation.mutate();
  }, DEBOUNCE_DELAY);

  return (
    <>
      <ActionBarContainer onClick={(e) => e.stopPropagation()}>
        {date && <time>{date}</time>}
        <ButtonContainer>
          <ReviewLikeButton
            isLike={userLike ?? false}
            count={compactNumber(likeCount, "ko-KR")}
            onClick={handleClickLike}
          />
          <ReviewMoreButton
            isMine={isMine}
            reviewId={reviewId}
            animeId={animeId}
            content={content}
            isSpoiler={isSpoiler}
            score={score}
          />
        </ButtonContainer>
      </ActionBarContainer>
      <AnimatePresence>
        {isLoginModalVisible && (
          <LoginAlertModal onClose={() => setIsLoginModalVisible(false)} />
        )}
      </AnimatePresence>
    </>
  );
}

function dateWithDots(date: string | undefined) {
  if (!date) return undefined;

  const originalDate = new Date(date);

  const year = originalDate.getFullYear();
  const month = (originalDate.getMonth() + 1).toString().padStart(2, "0"); // 월은 0부터 시작하므로 +1 해야 함
  const day = originalDate.getDate().toString().padStart(2, "0");

  return `${year}.${month}.${day}`;
}

function timeAgo(date: string | undefined) {
  if (!date) return undefined;

  const start = new Date(date);
  const end = new Date();

  const seconds = Math.floor((end.getTime() - start.getTime()) / 1000);
  if (seconds < 60) return "방금";

  const minutes = seconds / 60;
  if (minutes < 60) return `${Math.floor(minutes)}분 전`;

  const hours = minutes / 60;
  if (hours < 24) return `${Math.floor(hours)}시간 전`;

  const days = hours / 24;
  if (days < 365) return `${Math.floor(days)}일 전`;
  else return `${Math.floor(days / 365)}년 전`;
}
