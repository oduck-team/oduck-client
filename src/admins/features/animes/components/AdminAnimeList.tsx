import {
  Badge,
  Button,
  Card,
  Center,
  Flex,
  Group,
  Pagination,
  Skeleton,
  Stack,
  Table,
  Title,
  Text,
  Menu,
  ActionIcon,
  Select,
} from "@mantine/core";
import { modals } from "@mantine/modals";
import { DotsThreeVertical, PencilSimple, Trash } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

import ADMIN_ROUTE from "@/admins/constants/path";

import useAnimes from "../hooks/useAnimes";
import useDeleteAnime from "../hooks/useDeleteAnime";

export default function AdminAnimeList() {
  // const [selectedReleaseFilter, setSelectedReleaseFilter] = useState<
  //   boolean | null
  // >(null);

  const {
    data: animesResponse,
    isLoading,
    setCurrentPage,
    setDisplaySize,
  } = useAnimes();
  const deleteAnime = useDeleteAnime();

  const handleDisplaySize = (value: string | null) => {
    if (!value) return;
    // value에서 숫자 부분만 추출
    const numberPattern = /\d+/g;
    const numberStr = value.match(numberPattern)?.at(-1);
    setDisplaySize(Number(numberStr));
  };

  if (isLoading) {
    return (
      <Card withBorder padding="xl">
        <Stack gap="sm">
          <Skeleton w="100%" height={45}></Skeleton>
          <Skeleton w="100%" height={45}></Skeleton>
          <Skeleton w="100%" height={45}></Skeleton>
          <Skeleton w="100%" height={45}></Skeleton>
          <Skeleton w="100%" height={45}></Skeleton>
          <Skeleton w="100%" height={45}></Skeleton>
          <Skeleton w="100%" height={45}></Skeleton>
          <Skeleton w="100%" height={45}></Skeleton>
          <Skeleton w="100%" height={45}></Skeleton>
          <Skeleton w="100%" height={45}></Skeleton>
          <Skeleton w="100%" height={45}></Skeleton>
        </Stack>
      </Card>
    );
  }

  const rows = animesResponse?.items.map((anime) => (
    <Table.Tr key={anime.id}>
      <Table.Td>
        <Group>
          <Title order={3} size="14px">
            {anime.title}
          </Title>
          <Text size="xs">
            {anime.year}년 {anime.quarter.at(-1)}분기
          </Text>
        </Group>
      </Table.Td>
      <Table.Td>
        <ReleasedBadge isReleased={anime.isReleased} />
      </Table.Td>
      <Table.Td>
        <StatusBadge status={anime.status} />
      </Table.Td>
      <Table.Td>
        <time dateTime={convertDateTime(anime.createdAt)}>
          {convertDateTime(anime.createdAt)}
        </time>
      </Table.Td>
      <Table.Td>
        <OptionMenu
          animeId={anime.id}
          onRemove={(animeId) => deleteAnime.mutate(animeId)}
        />
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Card withBorder padding="xl">
      <Flex justify="space-between" mb="sm">
        {/* <ReleaseFilters
          selectedValue={selectedReleaseFilter}
          onSelect={(value) => setSelectedReleaseFilter(value)}
        /> */}
        <Select
          data={["5개씩", "10개씩", "20개씩", "100개씩"]}
          defaultValue="10개씩"
          onChange={handleDisplaySize}
        />
        <Link to={ADMIN_ROUTE.CREATE_ANIME}>
          <Button>등록</Button>
        </Link>
      </Flex>

      {/* 애니 목록 */}
      <Table.ScrollContainer minWidth={500}>
        <Table highlightOnHover verticalSpacing="md">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>이름</Table.Th>
              <Table.Th>공개</Table.Th>
              <Table.Th>상태</Table.Th>
              <Table.Th>생성일시</Table.Th>
              <Table.Th>{/* 옵션 */}</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>

      {/* 페이지네이션 */}
      <Center py="md">
        <Pagination
          size="sm"
          total={animesResponse?.totalPages ?? 1}
          boundaries={1}
          onChange={(page) => setCurrentPage(page)}
        />
      </Center>
    </Card>
  );
}

// const releaseFilterItems = [
//   {
//     label: "전체",
//     value: null,
//   },
//   {
//     label: "공개",
//     value: true,
//   },
//   {
//     label: "비공개",
//     value: false,
//   },
// ];

// interface ReleaseFiltersProps {
//   selectedValue: boolean | null;
//   onSelect: (value: boolean | null) => void;
// }

// function ReleaseFilters({ selectedValue, onSelect }: ReleaseFiltersProps) {
//   return (
//     <Group gap="xs">
//       {releaseFilterItems.map((item) => (
//         <Button
//           key={String(item.value)}
//           variant={selectedValue === item.value ? "light" : "default"}
//           c={selectedValue === item.value ? "gray.c" : undefined}
//           onClick={() => onSelect(item.value)}
//         >
//           {item.label}
//         </Button>
//       ))}
//     </Group>
//   );
// }

/** 공개여부 뱃지 */
function ReleasedBadge({ isReleased }: { isReleased: boolean }) {
  return (
    <Badge variant="light" color={isReleased ? "green" : "gray"}>
      {isReleased ? "공개" : "비공개"}
    </Badge>
  );
}

/** 방영상태 뱃지 */
function StatusBadge({ status }: { status: AnimeStatus }) {
  let color;
  let text;

  switch (status) {
    case "ONGOING":
      color = "green";
      text = "방영중";
      break;
    case "FINISHED":
      color = "blue";
      text = "완결";
      break;
    case "UPCOMING":
      color = "orange";
      text = "방영예정";
      break;
    case "UNKNOWN":
      color = "gray";
      text = "알 수 없음";
      break;
    default:
      break;
  }

  return (
    <Badge variant="light" color={color}>
      {text}
    </Badge>
  );
}

interface OptionMenuProps {
  /** 옵션 대상 애니메이션 아이디 */
  animeId: number;
  onRemove: (animeId: number) => void;
}

function OptionMenu({ animeId, onRemove }: OptionMenuProps) {
  return (
    <Menu>
      <Menu.Target>
        <ActionIcon variant="subtle" color="default" aria-label="옵션">
          <DotsThreeVertical />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item leftSection={<PencilSimple size={16} />}>
          수정(미구현)
        </Menu.Item>
        <Menu.Item
          leftSection={<Trash size={16} />}
          color="red"
          onClick={() =>
            modals.openConfirmModal({
              title: <Title size="h5">삭제</Title>,
              centered: true,
              children: <Center>정말로 애니메이션을 삭제하시나요?</Center>,
              labels: { confirm: "삭제", cancel: "취소" },
              confirmProps: { color: "red" },
              onConfirm: () => onRemove(animeId),
            })
          }
        >
          삭제
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

/** "2023-11-01T12:10:06.834904" -> "2023-11-01" */
function convertDateTime(dateTime: string) {
  const date = new Date(dateTime);
  return date.toISOString().split("T")[0];
}
