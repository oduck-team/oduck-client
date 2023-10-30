import { Button, Card, Flex, Group } from "@mantine/core";
import { useState } from "react";
import { Link } from "react-router-dom";

import ADMIN_ROUTE from "@/admins/constants/path";

export default function AdminAnimeList() {
  const [selectedReleaseFilter, setSelectedReleaseFilter] = useState<
    boolean | null
  >(null);

  // TODO: 애니 목록 API

  return (
    <Card withBorder padding="xl">
      <Flex justify="space-between" mb="sm">
        <ReleaseFilters
          selectedValue={selectedReleaseFilter}
          onSelect={(value) => setSelectedReleaseFilter(value)}
        />

        <Link to={ADMIN_ROUTE.CREATE_ANIME}>
          <Button>등록</Button>
        </Link>
      </Flex>
    </Card>
  );
}

const releaseFilterItems = [
  {
    label: "전체",
    value: null,
  },
  {
    label: "공개",
    value: true,
  },
  {
    label: "비공개",
    value: false,
  },
];

interface ReleaseFiltersProps {
  selectedValue: boolean | null;
  onSelect: (value: boolean | null) => void;
}

function ReleaseFilters({ selectedValue, onSelect }: ReleaseFiltersProps) {
  return (
    <Group gap="xs">
      {releaseFilterItems.map((item) => (
        <Button
          key={String(item.value)}
          variant={selectedValue === item.value ? "light" : "default"}
          c={selectedValue === item.value ? "gray.c" : undefined}
          onClick={() => onSelect(item.value)}
        >
          {item.label}
        </Button>
      ))}
    </Group>
  );
}
