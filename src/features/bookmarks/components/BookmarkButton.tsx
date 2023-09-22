import { useEffect, useState } from "react";

import Button from "@/components/Button";
import LoginAlertModal from "@/features/auth/components/LoginAlertModal";
import useAuth from "@/hooks/useAuth";
import useDebounce from "@/hooks/useDebounce";

import useAddBookmark from "../hooks/useAddBookmark";
// import useRemoveBookmark from "../hooks/useRemoveBookmark";

interface BookmarkButtonProps {
  animationId: number;
}

export default function BookmarkButton({ animationId }: BookmarkButtonProps) {
  const { error: addError, addBookmark } = useAddBookmark();
  //const { error: removeError, removeBookmark } = useRemoveBookmark();
  const { isLoggedIn } = useAuth();
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const isBookmarked = true; // TODO: API

  const handleDebounceAddBookmark = useDebounce(async (animationId: number) => {
    if (!isLoggedIn) {
      setIsLoginModalVisible(true);
      return;
    }
    try {
      await addBookmark(animationId);
      console.log("addBookmark");
    } catch (e) {
      console.log("try catch");
      console.log(e);
    }
  }, 200);

  useEffect(() => {
    if (addError) {
      switch (addError.message) {
        case "Not Authenticate": {
          setIsLoginModalVisible(true);
          break;
        }
        case "Already bookmarked": {
          console.log("Already bookmarked !!!");
        }
      }
    }
  }, [addError]);

  return (
    <>
      <Button
        name="입덕 버튼"
        size="lg"
        isBlock
        color={isBookmarked ? "primary" : "neutral"}
        style={{ fontSize: "14px" }}
        onClick={() => handleDebounceAddBookmark(animationId)}
      >
        {isBookmarked ? "입덕한 애니" : "입덕하기"}
      </Button>
      <LoginAlertModal
        isVisible={isLoginModalVisible}
        onClose={() => setIsLoginModalVisible(false)}
      />
    </>
  );
}
