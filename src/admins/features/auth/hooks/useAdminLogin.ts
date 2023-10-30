import { useForm, zodResolver } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { AxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ADMIN_ROUTE from "@/admins/constants/path";
import { EmailLoginDto } from "@/features/auth/api/AuthApi";
import useAuth from "@/features/auth/hooks/useAuth";
import { loginSchema } from "@/libs/validation/auth";

export default function useAdminLogin() {
  const { fetchUser, emailLogin } = useAuth();
  const form = useForm<EmailLoginDto>({
    initialValues: {
      email: "",
      password: "",
    },
    validate: zodResolver(loginSchema),
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const adminLogin = async (dto: EmailLoginDto) => {
    try {
      setIsLoading(true);

      form.validate();
      if (!form.isValid()) {
        return;
      }

      await emailLogin(dto);
      await fetchUser();
      navigate(ADMIN_ROUTE.HOME, { replace: true });
    } catch (e) {
      if (e instanceof AxiosError && e.response?.status) {
        if (e.response.status < 500) {
          notifications.show({
            message: e.response.data.message,
            color: "red",
          });
        }
        if (e.response.status >= 500) {
          notifications.show({
            message: "server error",
            color: "red",
          });
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { form, isLoading, adminLogin };
}
