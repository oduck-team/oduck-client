import { CheckCircle } from "@phosphor-icons/react";
import { AxiosError } from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import useToast from "@/components/Toast/useToast";
import useAuth from "@/features/auth/hooks/useAuth";
import { useCommonToastError } from "@/libs/error";

import { MOCK_USER_REVIEW_DATA } from "../components/ReviewRating/ShortReviewModal";

import useAddReview from "./useAddReview";

export default function useReviewForm(
  onReview: () => void,
  userReviewData?: MOCK_USER_REVIEW_DATA,
) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const {
    user: { name },
  } = useAuth();
  const reviewMutation = useAddReview(onReview);

  const toast = useToast();
  const { error401, defaultError } = useCommonToastError();

  const [form, setForm] = useState({
    content: userReviewData?.content ?? "",
    isSpoiler: userReviewData?.isSpoiler ?? false,
    character: userReviewData?.character ?? false,
    art: userReviewData?.art ?? false,
    story: userReviewData?.story ?? false,
    voiceActing: userReviewData?.voiceActing ?? false,
    sound: userReviewData?.sound ?? false,
  });

  const animeId = userReviewData?.animeId ?? Number(pathname.split("/")[2]);

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
      hasSpiler: form.isSpoiler,
      content: form.content,
    });
    // TODO: 새 리뷰 작성인지 수정인지 검사
    // 새 리뷰 작성 POST 요청
    reviewMutation.mutate(
      {
        name,
        animeId,
        hasSpoiler: form.isSpoiler,
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
            if ([401, 403].includes(status)) {
              error401();
            } else if (status >= 500) {
              defaultError();
            }
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
