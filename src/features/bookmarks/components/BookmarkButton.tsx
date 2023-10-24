import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@/components/Button";
import LoginAlertModal from "@/features/auth/components/LoginAlertModal";
import useAuth from "@/features/auth/hooks/useAuth";
import useDebounce from "@/hooks/useDebounce";
import { ApiError } from "@/libs/error";

import useBookmark from "../hooks/useBookmark";
import useToggleBookmark from "../hooks/useToggleBookmark";

const TOGGLE_DEBOUNCE = 200;

interface BookmarkButtonProps {
  animeId: number;
}

export default function BookmarkButton({ animeId }: BookmarkButtonProps) {
  const { isLoggedIn } = useAuth();
  const { bookmarkedAt, fetchBookmark } = useBookmark(1);
  const { error: toggleBookmarkError, toggleBookmark } = useToggleBookmark();
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  //const { error: removeError, removeBookmark } = useRemoveBookmark();
  const navigate = useNavigate();

  const handleToggleBookmark = useDebounce(async (animeId: number) => {
    if (!isLoggedIn) {
      setIsLoginModalVisible(true);
      return;
    }

    await toggleBookmark(animeId);
    await fetchBookmark(animeId); // TODO:  toast 알림 ('입덕 애니에 추가했어요' 입덕한 애니 보러가기 )
  }, TOGGLE_DEBOUNCE);

  // 북마크 요청 에러 핸들링
  useEffect(() => {
    if (toggleBookmarkError instanceof ApiError) {
      if (toggleBookmarkError.status === 404) {
        // TODO: toast 알림 '존재하지 않는 애니에요'
        navigate("/animes");
      }
    }
  }, [toggleBookmarkError, navigate]);

  return (
    <>
      <Button
        name="입덕 버튼"
        size="lg"
        isBlock
        color={bookmarkedAt ? "primary" : "neutral"}
        style={{ fontSize: "14px" }}
        onClick={() => handleToggleBookmark(animeId)}
      >
        {bookmarkedAt ? "입덕한 애니" : "입덕하기"}
      </Button>

      <AnimatePresence>
        {isLoginModalVisible && (
          <LoginAlertModal onClose={() => setIsLoginModalVisible(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
