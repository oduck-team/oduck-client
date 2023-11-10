import {
  Flex,
  Input,
  Stack,
  Select,
  TextInput,
  Text,
  Box,
  InputLabel,
  NumberInput,
  MultiSelect,
  Button,
  Table,
  Switch,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import DateSelect from "@/admins/components/Form/DateSelect";
import Form from "@/admins/components/Form/Form";
import ImageDropzone from "@/admins/components/Form/ImageDropzone";
import ADMIN_ROUTE from "@/admins/constants/path";

import useCreateAnime from "../hooks/useCreateAnime";
import useCreateGenre from "../hooks/useCreateGenre";
import useCreateOriginalAuthor from "../hooks/useCreateOriginalAuthor";
import useCreateSeries from "../hooks/useCreateSeries";
import useCreateStudio from "../hooks/useCreateStudio";
import useGenres from "../hooks/useGenres";
import useOriginalAuthors from "../hooks/useOriginalAuthors";
import useSeries from "../hooks/useSeries";
import useStudios from "../hooks/useStudios";

import AnimeFormActions from "./AdminFormActions";
import AnimePreviewCard from "./AnimePreviewCard";
import CreateSubCategoryButton from "./CreateSubCategoryButton";
import EditVoiceActorsModal from "./EditVoiceActorsModal";

/** input내 요소 배치 순서 */
const INPUT_WRAPPER_ORDER: ("label" | "input" | "description" | "error")[] = [
  "label",
  "description",
  "input",
  "error",
];

const BRODCAST_TYPES = [
  { value: "TVA", label: "TVA" },
  { value: "OVA", label: "OVA" },
  { value: "ONA", label: "ONA" },
  { value: "MOV", label: "극장판" },
];

const RATINGS = [
  { value: "ALL", label: "전체" },
  { value: "TWELVE", label: "12세" },
  { value: "FIFTEEN", label: "15세" },
  { value: "ADULT", label: "성인" },
];

const STATUSES = [
  { value: "ONGOING", label: "방영중" },
  { value: "FINISHED", label: "완결" },
  { value: "COMING", label: "방영 예정" },
  { value: "UNKNOWN", label: "알 수 없음" },
];

function sortBykey<T>(array: T[], key: keyof T) {
  return [...array].sort((a, b) => {
    const aValue = a[key] as string;
    const bValue = b[key] as string;
    return aValue.localeCompare(bValue, "ko-KR");
  });
}

export default function AdminCreateAnimeForm() {
  const { form, createAnimeMutation } = useCreateAnime();
  const { data: series, isLoading: isLoadingSeries } = useSeries();
  const createSeriesMutation = useCreateSeries();
  const { data: originalAuthors, isLoading: isLoadingAuthors } =
    useOriginalAuthors();
  const createOriginalAuthorMutation = useCreateOriginalAuthor();
  const { data: genres, isLoading: isLoadingGenres } = useGenres();
  const createGnereMutation = useCreateGenre();
  const { data: studios, isLoading: isLoadingStudios } = useStudios();
  const createStudioMutation = useCreateStudio();
  const [
    isEditActorsModalVisible,
    { open: openActorsModal, close: closeActorsModal },
  ] = useDisclosure(false);
  const navigate = useNavigate();

  const { error: createError } = createAnimeMutation;

  useEffect(() => {
    if (!createError) return;
    notifications.show({
      message: createError.response?.statusText,
      color: "red",
    });
  }, [createError]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form.values);
    form.validate();
    if (!form.isValid()) {
      return;
    }
    createAnimeMutation.mutate(form.values, {
      onSuccess: () => {
        notifications.show({
          message: "애니가 등록되었어요.",
          color: "green",
        });
        navigate(ADMIN_ROUTE.ANIME_LIST);
      },
      onError: () => {
        notifications.show({
          message: "애니를 등록하는데 실패했어요. 다시 시도해보세요.",
          color: "red",
        });
      },
    });
  };

  const seriesOptions =
    !isLoadingSeries && series
      ? sortBykey(series, "title").map((s) => ({
          value: s.id.toString(),
          label: s.title,
        }))
      : [];

  const authorsOptions =
    !isLoadingAuthors && originalAuthors
      ? sortBykey(originalAuthors, "name").map((author) => ({
          value: author.id.toString(),
          label: author.name,
        }))
      : [];

  const genresOptions =
    !isLoadingGenres && genres
      ? sortBykey(genres, "name").map((genre) => ({
          value: genre.id.toString(),
          label: genre.name,
        }))
      : [];

  const studiosOptions =
    !isLoadingStudios && studios
      ? sortBykey(studios, "name").map((studio) => ({
          value: studio.id.toString(),
          label: studio.name,
        }))
      : [];

  return (
    <Form>
      <Flex justify="end" mb="sm">
        <AnimeFormActions mode="create" onAction={handleSubmit} />
      </Flex>

      <Stack p="md" mb="md" bg="gray.0" style={{ borderRadius: 12 }}>
        <Title size="h5">미리보기</Title>
        <AnimePreviewCard
          title={form.values.title}
          thumbnail={form.values.thumbnail}
        />
      </Stack>

      <Stack gap="xl">
        <Input.Wrapper
          label="공개여부"
          withAsterisk
          inputWrapperOrder={INPUT_WRAPPER_ORDER}
        >
          <Switch
            label="사용자들에게 공개합니다"
            onChange={(e) =>
              form.setFieldValue("isReleased", e.currentTarget.checked)
            }
          />
        </Input.Wrapper>
        <Input.Wrapper
          label="썸네일"
          withAsterisk
          inputWrapperOrder={INPUT_WRAPPER_ORDER}
        >
          <ImageDropzone
            uploadPath="thumbnail"
            minHeight={200}
            onUpload={(path) => {
              form.setFieldValue("thumbnail", path);
            }}
          />
        </Input.Wrapper>

        <Flex align="end" gap="sm">
          <Select
            label="시리즈"
            placeholder="시리즈를 선택하세요"
            checkIconPosition="right"
            withAsterisk
            searchable
            data={seriesOptions}
            style={{ flex: 1 }}
            {...form.getInputProps("seriesId")}
          />
          <CreateSubCategoryButton
            label="+"
            modalTitle="시리즈 등록"
            onCreate={(title) => createSeriesMutation.mutate(title)}
          />
        </Flex>

        <TextInput
          label="제목"
          placeholder="제목을 입력하세요"
          inputWrapperOrder={INPUT_WRAPPER_ORDER}
          withAsterisk
          {...form.getInputProps("title")}
        />

        <TextInput
          label="줄거리"
          placeholder="줄거리를 입력하세요"
          inputWrapperOrder={INPUT_WRAPPER_ORDER}
          withAsterisk
          {...form.getInputProps("summary")}
        />

        <Flex direction="column">
          <Text fz="sm" fw={500} component="p">
            년도분기
          </Text>
          <Flex gap="sm">
            <DateSelect
              min={1990}
              max={2050}
              defaultValue={2023}
              onChange={(value) => {
                form.setFieldValue("year", Number(value));
              }}
            />
            <Select data={["1", "2", "3", "4"]} defaultValue={"1"} />
          </Flex>
        </Flex>

        <Select
          label="방영 종류"
          placeholder="방영 종류를 선택하세요"
          data={BRODCAST_TYPES}
          defaultValue={"TVA"}
          withAsterisk
          {...form.getInputProps("broadcastType")}
        />

        <Box style={{ lineHeight: 1.55, maxWidth: 140 }}>
          <InputLabel required>에피소드 수</InputLabel>
          <NumberInput
            min={0}
            max={999}
            defaultValue={13}
            {...form.getInputProps("episodeCount")}
          />
        </Box>

        <Select
          label="시청 등급"
          placeholder="시청 등급을 선택하세요"
          data={RATINGS}
          defaultValue={"ALL"}
          withAsterisk
          {...form.getInputProps("rating")}
        />

        <Select
          label="방영 상태"
          placeholder="방영 상태를 선택하세요"
          data={STATUSES}
          defaultValue={"ONGOING"}
          withAsterisk
          {...form.getInputProps("status")}
        />

        <Flex align="end" gap="sm">
          <MultiSelect
            label="원작자"
            placeholder="원작자를 등록하세요"
            checkIconPosition="right"
            withAsterisk
            searchable
            data={authorsOptions}
            style={{ flex: 1 }}
            {...form.getInputProps("originalAuthorIds")}
          />
          <CreateSubCategoryButton
            label="+"
            modalTitle="원작자 등록"
            onCreate={(name) => createOriginalAuthorMutation.mutate(name)}
          />
        </Flex>

        <Flex align="end" gap="sm">
          <MultiSelect
            label="제작사"
            placeholder="제작사를 등록하세요"
            checkIconPosition="right"
            withAsterisk
            searchable
            data={studiosOptions}
            style={{ flex: 1 }}
            {...form.getInputProps("studioIds")}
          />
          <CreateSubCategoryButton
            label="+"
            modalTitle="제작사 등록"
            onCreate={(name) => createStudioMutation.mutate(name)}
          />
        </Flex>

        <Flex align="end" gap="sm">
          <MultiSelect
            label="장르"
            placeholder="장르를 등록하세요"
            checkIconPosition="right"
            withAsterisk
            searchable
            data={genresOptions}
            style={{ flex: 1 }}
            {...form.getInputProps("genreIds")}
          />
          <CreateSubCategoryButton
            label="+"
            modalTitle="장르 등록"
            onCreate={(name) => createGnereMutation.mutate(name)}
          />
        </Flex>

        <div>
          <Input.Wrapper
            label="성우진"
            withAsterisk
            inputWrapperOrder={INPUT_WRAPPER_ORDER}
            error={form.errors.voiceActors}
          >
            <Stack>
              <Button variant="default" onClick={() => openActorsModal()}>
                관리
              </Button>
              {form.values.voiceActors.length > 0 && (
                <Table.ScrollContainer minWidth={500} type="native">
                  <Table>
                    <Table.Thead>
                      <Table.Tr>
                        <Table.Th>이름</Table.Th>
                        <Table.Th>배역</Table.Th>
                      </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                      {form.values.voiceActors.map((actor) => (
                        <Table.Tr key={actor.id}>
                          <Table.Td>{actor.name}</Table.Td>
                          <Table.Td>{actor.part}</Table.Td>
                        </Table.Tr>
                      ))}
                    </Table.Tbody>
                  </Table>
                </Table.ScrollContainer>
              )}
            </Stack>
          </Input.Wrapper>
          {isEditActorsModalVisible && (
            <EditVoiceActorsModal
              selectedActorsInitial={form.values.voiceActors}
              onAdd={(actors) => {
                closeActorsModal();
                form.setFieldValue("voiceActors", actors);
              }}
              onClose={closeActorsModal}
            />
          )}
        </div>
      </Stack>
    </Form>
  );
}
