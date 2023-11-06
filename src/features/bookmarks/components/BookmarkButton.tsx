import { CheckCircle } from "@phosphor-icons/react";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@/components/Button";
import useToast from "@/components/Toast/useToast";
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
  const bookmarkQuery = useBookmark(animeId);
  const bookmarkMutation = useToggleBookmark(animeId);
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const handleToggleBookmark = useDebounce(async () => {
    if (!isLoggedIn) {
      setIsLoginModalVisible(true);
      return;
    }

    bookmarkMutation.mutate(undefined, {
      onSuccess: () => {
        if (bookmarkQuery.data) {
          toast.open({
            message: "탈덕했어요",
            icon: <CheckCircle weight="fill" />,
            iconColor: "green",
            position: "top",
          });
        } else {
          toast.open({
            message: "입덕 애니에 추가했어요",
            icon: <CheckCircle weight="fill" />,
            iconColor: "green",
            buttonText: "입덕한 애니 보러가기",
            onClickButton: () => navigate("/profile?tab=bookmark"),
            position: "top",
          });
        }
      },
    });
  }, TOGGLE_DEBOUNCE);

  // 북마크 요청 에러 핸들링
  useEffect(() => {
    const { error } = bookmarkMutation;
    if (error instanceof ApiError) {
      if (error.status === 404) {
        // TODO: toast 알림 '존재하지 않는 애니에요'
        navigate("/animes");
      }
    }
  }, [bookmarkMutation, navigate]);

  const { data: bookmarkedAt } = bookmarkQuery;
  // console.log("bookmarkedAt");
  // console.log(bookmarkedAt);

  return (
    <>
      <Button
        name="입덕 버튼"
        size="lg"
        isBlock
        color={bookmarkedAt ? "primary" : "neutral"}
        style={{ fontSize: "14px" }}
        onClick={() => handleToggleBookmark()}
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
