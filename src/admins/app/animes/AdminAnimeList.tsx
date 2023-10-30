import { Stack, Title } from "@mantine/core";

import AdminAnimeList from "@/admins/features/animes/components/AdminAnimeList";
import AdminAnimeSearch from "@/admins/features/animes/components/AdminAnimeSearch";

export default function AdminAnimeListPage() {
  return (
    <Stack gap="xl">
      <Title order={2}>애니메이션 목록</Title>
      <AdminAnimeSearch />
      <AdminAnimeList />
    </Stack>
  );
}
