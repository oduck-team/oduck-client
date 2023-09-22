import { useState } from "react";

import Rating from "@/components/Rating";
import LoginAlertModal from "@/features/auth/components/LoginAlertModal";
import useAuth from "@/hooks/useAuth";

interface ReviewRatingProps {
  animationId: number;
}

export default function ReviewRating({ animationId }: ReviewRatingProps) {
  const { isLoggedIn } = useAuth();
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);

  // TODO: 사용자가 평가한 점수 가져오기
  console.log(animationId);

  const handleRate = (value: number) => {
    if (!isLoggedIn) {
      setIsLoginModalVisible(true);
      return;
    }
    // TODO: 점수 등록 요청하기
    console.log(value);
  };

  return (
    <>
      <Rating size="lg" onRate={handleRate} />
      <LoginAlertModal
        isVisible={isLoginModalVisible}
        onClose={() => setIsLoginModalVisible(false)}
      />
    </>
  );
}
