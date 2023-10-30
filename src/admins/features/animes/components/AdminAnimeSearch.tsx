import {
  Button,
  Card,
  Center,
  Group,
  Select,
  Stack,
  TextInput,
} from "@mantine/core";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr/MagnifyingGlass";

export default function AdminAnimeSearch() {
  return (
    <form>
      <Card withBorder padding="xl">
        <Stack gap="xs">
          <Select
            label="검색 조건"
            data={["제목", "시리즈", "ID"]}
            defaultValue="제목"
            placeholder="Pick value"
            rightSectionWidth={28}
          />
          <TextInput type="text" placeholder="검색어를 입력해주세요" />
        </Stack>
      </Card>

      <Center mt="sm">
        <Group>
          <Button
            type="submit"
            variant="default"
            radius="md"
            leftSection={<MagnifyingGlass size={16} />}
          >
            검색
          </Button>
          <Button type="submit" variant="default" radius="md">
            초기화
          </Button>
        </Group>
      </Center>
    </form>
  );
}
