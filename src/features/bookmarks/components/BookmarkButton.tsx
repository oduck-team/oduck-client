import { CheckCircle, WarningCircle } from "@phosphor-icons/react";
import { AxiosError } from "axios";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@/components/Button";
import useToast from "@/components/Toast/useToast";
import LoginAlertModal from "@/features/auth/components/LoginAlertModal";
import useAuth from "@/features/auth/hooks/useAuth";
import useDebounce from "@/hooks/useDebounce";

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
      onError: (error) => {
        if (error instanceof AxiosError && error.response?.status) {
          const status = error.response.status;
          switch (status) {
            case 401:
              toast.open({
                message: "로그인 시간이 만료되었어요.\n다시 로그인해 주세요.",
                icon: <CheckCircle weight="fill" />,
                iconColor: "warn",
                buttonText: "로그인",
                onClickButton: () => navigate("/login"),
                position: "top",
              });
              break;
            default:
              toast.open({
                message: "오류가 발생했어요. 잠시 후 다시 시도해 주세요.",
                icon: <WarningCircle weight="fill" />,
                iconColor: "warn",
                position: "top",
              });
              break;
          }
        }
      },
    });
  }, TOGGLE_DEBOUNCE);

  const { data: bookmarkedAt } = bookmarkQuery;

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
