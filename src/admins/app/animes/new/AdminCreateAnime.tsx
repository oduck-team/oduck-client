import { Title } from "@mantine/core";

import AdminCreateAnimeForm from "@/admins/features/animes/components/AdminCreateAnimeForm";

export default function AdminCreateAnimePage() {
  return (
    <>
      <Title order={2}>애니메이션 등록</Title>
      <AdminCreateAnimeForm />
    </>
  );
}
