import { useEffect, useState } from "react";

import Rating from "@/components/Rating";
import LoginAlretModal from "@/features/auth/components/LoginAlretModal";

interface ReviewRatingProps {}

export default function ReviewRating({}: ReviewRatingProps) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const 로그인여부 = false;

  // 클릭시 평가하기
  const handleRate = (value: number) => {
    if (!로그인여부) {
      setIsLoginModalOpen(true);
      return;
    }
    console.log("서버에 요청 ", value);
  };

  useEffect(() => {
    // 사용자가 평가한 점수 가져오기
  }, []);

  return (
    <>
      <Rating size="lg" onRate={handleRate} />
      <LoginAlretModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  );
}
