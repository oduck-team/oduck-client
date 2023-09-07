import { useState } from "react";

interface Props {
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function useForm({ setSuccess }: Props) {
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [inquiryContent, setInquiryContent] = useState("");

  const [emailError, setEmailError] = useState<number>(0);
  const [titleError, setTitleError] = useState<number>(0);
  const [contentError, setContentError] = useState<number>(0);

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

  const send = () => {
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
      console.log("전송");
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
    handleEmailChange,
    handleTitleChange,
    handleContentChange,
    resetForm,
    send,
  };
}
