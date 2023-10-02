import { useState } from "react";

export default function useForm() {
  const [form, setForm] = useState({ email: "", title: "", content: "" });
  const [error, setError] = useState({ email: 0, title: 0, content: 0 });

  const errorMessage = {
    email: ["", "이메일을 입력해 주세요.", "이메일 형식이 올바르지 않습니다."],
    title: ["", "문의 제목을 입력해 주세요."],
    content: ["", "문의 내용을 입력해 주세요."],
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    if (name === "title" && value.length > 50) return;
    if (name === "content" && value.length > 1000) return;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setForm({ email: "", title: "", content: "" });
    setError({ email: 0, title: 0, content: 0 });
  };

  const send = (setSuccess: React.Dispatch<React.SetStateAction<boolean>>) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    for (const key in form) {
      setError((prev) => ({ ...prev, [key]: 0 }));
      if ((form as Record<string, string>)[key].trim().length === 0) {
        setError((prev) => ({ ...prev, [key]: 1 }));
      } else if (key === "email" && !emailPattern.test(form[key]))
        setError((prev) => ({ ...prev, [key]: 2 }));
    }

    const ok =
      emailPattern.test(form.email) &&
      form.title.trim().length !== 0 &&
      form.content.trim().length !== 0;

    if (ok) {
      // TODO: API 요청
      // POST 성공 시
      resetForm();
      setSuccess(true);
    }
  };

  return {
    form,
    error,
    errorMessage,
    handleInputChange,
    resetForm,
    send,
  };
}
