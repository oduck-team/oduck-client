import { useState } from "react";

export default function useForm() {
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [inquiryContent, setInquiryContent] = useState("");

  const [emailError, setEmailError] = useState<number>(0);
  const [titleError, setTitleError] = useState<number>(0);
  const [contentError, setContentError] = useState<number>(0);

  const emailErrorMessage = [
    "",
    "이메일을 입력해 주세요.",
    "이메일 형식이 올바르지 않습니다.",
  ];

  const titleErrorMessage = [
    "",
    "문의 제목을 입력해 주세요.",
    "문의 제목을 50자 내로 입력해 주세요.",
  ];

  const contentErrorMessage = [
    "",
    "문의 내용을 입력해 주세요.",
    "문의 내용을 1000자 내로 입력해 주세요.",
  ];

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInquiryContent(e.target.value);
  };

  const resetForm = () => {
    setEmail("");
    setTitle("");
    setInquiryContent("");
    setEmailError(0);
    setTitleError(0);
    setContentError(0);
  };

  const send = (setSuccess: React.Dispatch<React.SetStateAction<boolean>>) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setEmailError(() => {
      if (email === "") return 1;
      else if (!emailPattern.test(email)) return 2;
      else return 0;
    });
    setTitleError(() => {
      if (title === "") return 1;
      else if (title.length > 50) return 2;
      else return 0;
    });
    setContentError(() => {
      if (inquiryContent === "") return 1;
      else if (inquiryContent.length > 1000) return 2;
      else return 0;
    });

    const ok =
      emailPattern.test(email) &&
      title !== "" &&
      title.length <= 50 &&
      inquiryContent !== "" &&
      inquiryContent.length <= 1000;

    if (ok) {
      // TODO: API 요청
      // POST 성공 시
      resetForm();
      setSuccess(true);
    }
  };

  return {
    email,
    title,
    inquiryContent,
    emailError,
    titleError,
    contentError,
    emailErrorMessage,
    titleErrorMessage,
    contentErrorMessage,
    handleEmailChange,
    handleTitleChange,
    handleContentChange,
    resetForm,
    send,
  };
}
