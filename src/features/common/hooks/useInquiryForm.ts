import { useContext } from "react";

import useSnackBar from "@/components/SnackBar/useSnackBar";
import { HelpDeskContext } from "@/contexts/HelpDeskContext";

export default function useInquiryForm() {
  const {
    form,
    agree,
    error,
    validateForm,
    handleInputChange,
    handleAgreeChange,
    resetForm,
  } = useContext(HelpDeskContext);
  const snackbar = useSnackBar();

  const errorMessage = {
    email: ["", "이메일을 입력해 주세요.", "이메일 형식이 올바르지 않습니다."],
    title: ["", "문의 제목을 입력해 주세요."],
    content: ["", "문의 내용을 입력해 주세요."],
  };

  const send = (setSuccess: React.Dispatch<React.SetStateAction<boolean>>) => {
    const isValidate = validateForm();

    if (!agree)
      snackbar.open({ message: "문의를 남기시려면 약관에 동의해주세요." });

    const ok = isValidate && agree;

    if (ok) {
      // TODO: API 요청
      // POST 성공 시
      resetForm();
      setSuccess(true);
    }
  };

  return {
    form,
    agree,
    error,
    errorMessage,
    handleInputChange,
    handleAgreeChange,
    resetForm,
    send,
  };
}
