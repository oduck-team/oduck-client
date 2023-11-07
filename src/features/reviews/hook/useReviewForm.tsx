import { CheckCircle, WarningCircle } from "@phosphor-icons/react";
import { AxiosError } from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import useToast from "@/components/Toast/useToast";
import useAuth from "@/features/auth/hooks/useAuth";

import { MOCK_USER_REVIEW_DATA } from "../components/ReviewRating/ShortReviewModal";

import useAddReview from "./useAddReview";

export default function useReviewForm(
  onReview: () => void,
  userReviewData?: MOCK_USER_REVIEW_DATA,
) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const animeId = userReviewData?.animeId ?? Number(pathname.split("/")[2]);

  const {
    user: { name },
  } = useAuth();
  const reviewMutation = useAddReview(animeId, onReview);

  const toast = useToast();

  const [form, setForm] = useState({
    content: userReviewData?.content ?? "",
    isSpoiler: userReviewData?.isSpoiler ?? false,
    character: userReviewData?.character ?? false,
    art: userReviewData?.art ?? false,
    story: userReviewData?.story ?? false,
    voiceActing: userReviewData?.voiceActing ?? false,
    sound: userReviewData?.sound ?? false,
  });

  const [error, setError] = useState(false);

  const handleTextInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "content" && value.length > 100) return;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleReviewSubmit = () => {
    // 유효성 검사
    setError(false);
    if (form.content.trim().length < 10) {
      setError(true);
      return;
    }
    // console.log(form);
    console.log({
      name,
      animeId,
      isSpoiler: form.isSpoiler,
      content: form.content,
    });
    // TODO: 새 리뷰 작성인지 수정인지 검사
    // 새 리뷰 작성 POST 요청
    reviewMutation.mutate(
      {
        name,
        animeId,
        isSpoiler: form.isSpoiler,
        content: form.content,
      },
      {
        onSuccess: () => {
          toast.open({
            message: "리뷰가 등록되었어요.",
            icon: <CheckCircle weight="fill" />,
            iconColor: "green",
            buttonText: "내 모든 리뷰 보러 가기",
            onClickButton: () => navigate("/profile"),
            position: "top",
          });
        },
        onError: (error) => {
          if (error instanceof AxiosError && error.response?.status) {
            const status = error.response.status;
            if ([401, 403].includes(status))
              toast.open({
                message: "로그인 시간이 만료되었어요.\n다시 로그인해 주세요.",
                icon: <CheckCircle weight="fill" />,
                iconColor: "warn",
                buttonText: "로그인",
                onClickButton: () => navigate("/login"),
                position: "top",
              });
            else if (status >= 500)
              toast.open({
                message: "오류가 발생했어요. 잠시 후 다시 시도해 주세요.",
                icon: <WarningCircle weight="fill" />,
                iconColor: "warn",
                position: "top",
              });
          }
        },
      },
    );
  };

  return {
    form,
    error,
    handleTextInputChange,
    handleCheckboxChange,
    handleReviewSubmit,
  };
}
