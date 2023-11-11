import {
  Button,
  Center,
  Checkbox,
  Flex,
  Group,
  Loader,
  Modal,
  Table,
  TextInput,
  Text,
} from "@mantine/core";
import { modals } from "@mantine/modals";
import { useRef, useState } from "react";

import useVoiceActorManager from "../../hooks/useVoiceActorManager";

import { HeaderBottom, HeaderTop } from "./ManageVoiceActorsModal.style";

function sortBykey<T>(array: T[], key: keyof T) {
  return [...array].sort((a, b) => {
    const aValue = a[key] as string;
    const bValue = b[key] as string;
    return aValue.localeCompare(bValue, "ko-KR");
  });
}

interface SelectedActor {
  id: number;
  name: string;
  part: string;
}

/**
 * @description 성우 관리 모달입니다
 */
interface EditVoiceActorsModalProps {
  selectedActorsInitial?: SelectedActor[];

  /** 성우를 애니에 추가 */
  onAdd: (actors: SelectedActor[]) => void;

  onClose: () => void;
}

export default function EditVoiceActorsModal({
  selectedActorsInitial = [],
  onAdd,
  onClose,
}: EditVoiceActorsModalProps) {
  const {
    voiceActors,
    isLoading: isLoadingActors,
    createVoiceActor,
    updateVoiceActor,
    deleteVoiceActor,
  } = useVoiceActorManager();
  const [selectedActors, setSelectedActors] = useState<SelectedActor[]>( // 선택한 성우
    selectedActorsInitial,
  );
  const [searchKeyword, setSearchKeyword] = useState(""); // 성우 검색

  const handleCheckboxChange = (
    actorId: number,
    actorName: string,
    isChecked: boolean,
  ) => {
    if (isChecked) {
      // 체크된 경우, 목록에 추가 (part는 빈 문자열로 초기화)
      setSelectedActors((prev) => [
        ...prev,
        { id: actorId, name: actorName, part: "" },
      ]);
    } else {
      // 체크 해제된 경우, 목록에서 제거
      setSelectedActors((prev) => prev.filter((actor) => actor.id !== actorId));
    }
  };

  /** 해당 성우의 'part' 업데이트  */
  const handlePartChange = (id: number, part: string) => {
    setSelectedActors((prev) =>
      prev.map((actor) => (actor.id === id ? { ...actor, part } : actor)),
    );
  };

  const handleSubmit = () => {
    // part가 비어있는 항목 제거
    const actorsToAdd = selectedActors.filter(
      (actor) => actor.part.trim() !== "",
    );
    onAdd(actorsToAdd);
  };

  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleCreate = () => {
    modals.open({
      title: `성우 등록`,
      children: (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!inputRef.current) return;
            createVoiceActor.mutate(inputRef.current.value);
            modals.closeAll();
          }}
        >
          <TextInput
            ref={inputRef}
            label="이름"
            placeholder="이름을 입력하세요"
            data-autofocus
            withAsterisk
          />
          <Button fullWidth type="submit" mt="md">
            등록
          </Button>
        </form>
      ),
    });
  };

  const handleEdit = (actor: VoiceActor) => {
    modals.open({
      title: `성우 수정`,
      children: (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!inputRef.current) return;
            updateVoiceActor.mutate({
              id: actor.id,
              name: inputRef.current.value,
            });
            modals.closeAll();
          }}
        >
          <TextInput
            ref={inputRef}
            defaultValue={actor.name}
            label="이름"
            placeholder="이름을 입력하세요"
            data-autofocus
            withAsterisk
          />
          <Button fullWidth type="submit" mt="md">
            수정
          </Button>
        </form>
      ),
    });
  };

  const handleDelete = (actor: VoiceActor) =>
    modals.openConfirmModal({
      title: "삭제 확인",
      children: (
        <Text size="sm">
          &apos;{actor.name}&apos;을/를 정말로 삭제하시겠어요?
        </Text>
      ),
      labels: { confirm: "삭제", cancel: "취소" },
      confirmProps: { color: "red" },
      onConfirm: () => deleteVoiceActor.mutate(actor.id),
    });

  const filteredVoiceActors = searchKeyword
    ? voiceActors?.filter((actor) =>
        actor.name.toLowerCase().includes(searchKeyword.toLowerCase()),
      )
    : voiceActors;

  if (isLoadingActors) {
    return (
      <Modal title="성우 관리" size="xl" opened onClose={onClose}>
        <Center>
          <Loader />
        </Center>
      </Modal>
    );
  }
  const rows = sortBykey(filteredVoiceActors || [], "name")?.map((actor) => {
    const selectedActor = selectedActors.find((item) => item.id === actor.id);

    return (
      <Table.Tr key={actor.id}>
        <Table.Td>{actor.name}</Table.Td>
        <Table.Td>
          <Checkbox
            checked={selectedActor !== undefined}
            onChange={(event) =>
              handleCheckboxChange(
                actor.id,
                actor.name,
                event.currentTarget.checked,
              )
            }
          />
        </Table.Td>
        <Table.Td>
          <TextInput
            disabled={!selectedActor}
            value={selectedActor?.part || ""}
            onChange={(event) =>
              handlePartChange(actor.id, event.currentTarget.value)
            }
            placeholder="배역 입력"
          />
        </Table.Td>
        <Table.Td>
          <Group gap="sm">
            <Button
              variant="default"
              size="xs"
              fw={400}
              onClick={() => handleEdit(actor)}
            >
              수정
            </Button>
            <Button
              variant="default"
              size="xs"
              fw={400}
              onClick={() => handleDelete(actor)}
            >
              삭제
            </Button>
          </Group>
        </Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Modal.Root size="xl" opened onClose={onClose}>
      <Modal.Overlay />
      <Modal.Content>
        <Modal.Header style={{ flexDirection: "column" }}>
          <HeaderTop>
            <Modal.Title>성우 관리</Modal.Title>
            <Modal.CloseButton />
          </HeaderTop>
          <HeaderBottom>
            <div>
              <TextInput
                placeholder="성우 이름 검색"
                onChange={(event) =>
                  setSearchKeyword(event.currentTarget.value)
                }
                mb="md"
              />
            </div>
            <Flex justify="flex-end" gap="sm">
              <Button
                variant="default"
                size="xs"
                fw={400}
                onClick={handleCreate}
              >
                새 성우
              </Button>
              <Button size="xs" onClick={handleSubmit}>
                확인
              </Button>
            </Flex>
          </HeaderBottom>
        </Modal.Header>
        <Modal.Body>
          <Table.ScrollContainer minWidth={500} type="native">
            <Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>이름</Table.Th>
                  <Table.Th>선택</Table.Th>
                  <Table.Th>배역</Table.Th>
                  <Table.Th></Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>{rows}</Table.Tbody>
            </Table>
          </Table.ScrollContainer>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
}
