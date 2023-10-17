import { createContext, useCallback, useState } from "react";
import { Outlet } from "react-router-dom";

export interface Form {
  email: string;
  title: string;
  content: string;
}

type FormError = {
  [K in keyof Form]: number;
};

interface State {
  inquiryType: number;
  form: Form;
  error: FormError;
  agree: boolean;
}

interface FormAction {
  updateInquiryType: (i: number) => void;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  handleAgreeChange: () => void;
  resetForm: () => void;
  validateForm: () => boolean;
}

const INIT_FORM: Form = {
  email: "",
  title: "",
  content: "",
};

const INIT_ERROR: FormError = {
  email: 0,
  title: 0,
  content: 0,
};

export const HelpDeskContext = createContext<State & FormAction>({
  inquiryType: 0,
  form: INIT_FORM,
  agree: false,
  error: INIT_ERROR,
  updateInquiryType: () => {},
  handleInputChange: () => {},
  handleAgreeChange: () => {},
  resetForm: () => {},
  validateForm: () => false,
});

export function HelpDeskProvider() {
  const [inquiryType, setInquiryType] = useState(0);
  const [form, setForm] = useState(INIT_FORM);
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState(INIT_ERROR);

  const updateInquiryType = (i: number) => {
    setInquiryType(i);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    if (name === "title" && value.length > 50) return;
    if (name === "content" && value.length > 1000) return;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAgreeChange = () => {
    setAgree((prev) => !prev);
  };

  const resetForm = useCallback(() => {
    setForm(INIT_FORM);
    setAgree(false);
    setError(INIT_ERROR);
  }, []);

  const validateForm = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let result = true;

    for (const key in form) {
      setError((prev) => ({ ...prev, [key]: 0 }));
      if (form[key as keyof Form].trim().length === 0) {
        setError((prev) => ({ ...prev, [key]: 1 }));
        result = false;
      } else if (key === "email" && !emailPattern.test(form[key])) {
        setError((prev) => ({ ...prev, [key]: 2 }));
        result = false;
      }
    }
    return result;
  };

  const value = {
    inquiryType,
    form,
    agree,
    error,
    updateInquiryType,
    handleInputChange,
    handleAgreeChange,
    validateForm,
    resetForm,
  };

  return (
    <HelpDeskContext.Provider value={value}>
      <Outlet />
    </HelpDeskContext.Provider>
  );
}
