import { Button, Center, PasswordInput, TextInput } from "@mantine/core";

import useAdminLogin from "@/admins/features/auth/hooks/useAdminLogin";

export default function AdminLoginPage() {
  const { form, isLoading, adminLogin } = useAdminLogin();

  return (
    <Center mx="auto" mih="100vh">
      <form
        onSubmit={form.onSubmit(async (dto) => {
          adminLogin(dto);
        })}
      >
        <TextInput placeholder="email" {...form.getInputProps("email")} />
        <PasswordInput
          placeholder="password"
          mt="md"
          {...form.getInputProps("password")}
        />
        <Button type="submit" mt="md" loading={isLoading} fullWidth>
          Login
        </Button>
      </form>
    </Center>
  );
}
