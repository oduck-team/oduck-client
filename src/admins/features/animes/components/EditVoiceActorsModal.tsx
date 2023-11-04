import {
  Button,
  Center,
  Checkbox,
  Flex,
  Loader,
  Modal,
  Table,
  TextInput,
} from "@mantine/core";
import { useEffect, useState } from "react";

import useCreateVoiceActor from "../hooks/useCreateVoiceActor";
import useVoiceActors from "../hooks/useVoiceActors";

import CreateSubCategoryButton from "./CreateSubCategoryButton";
import { HeaderBottom, HeaderTop } from "./EditVoiceActorsModal.style";

interface SelectedActor {
  id: number;
  name: string;
  part: string;
}

interface EditVoiceActorsModalProps {
  selectedActorsInitial?: SelectedActor[];
  onAdd: (actors: SelectedActor[]) => void;
  onClose: () => void;
}

export default function EditVoiceActorsModal({
  selectedActorsInitial = [],
  onAdd,
  onClose,
}: EditVoiceActorsModalProps) {
  const { data: voiceActors, isLoading: isLoadingActors } = useVoiceActors();
  const createVoiceActorMutation = useCreateVoiceActor();
  const [selectedActors, setSelectedActors] = useState<SelectedActor[]>(
    selectedActorsInitial,
  );
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    setSelectedActors(selectedActorsInitial);
  }, [selectedActorsInitial]);

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

  const filteredVoiceActors = searchKeyword
    ? voiceActors?.filter((actor) =>
        actor.name.toLowerCase().includes(searchKeyword.toLowerCase()),
      )
    : voiceActors;

  if (isLoadingActors)
    return (
      <Modal title="성우 관리" size="xl" opened onClose={onClose}>
        <Center>
          <Loader />
        </Center>
      </Modal>
    );

  const rows = filteredVoiceActors?.map((actor) => {
    const selectedActor = selectedActors.find((item) => item.id === actor.id);

    return (
      <Table.Tr key={actor.id}>
        <Table.Td>{actor.id}</Table.Td>
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
              <CreateSubCategoryButton
                label="+ 새 성우"
                modalTitle="새 성우 등록"
                onCreate={(name) => createVoiceActorMutation.mutate(name)}
              />
              <Button onClick={handleSubmit}>확인</Button>
            </Flex>
          </HeaderBottom>
        </Modal.Header>
        <Modal.Body>
          <Table.ScrollContainer minWidth={500} type="native">
            <Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>ID</Table.Th>
                  <Table.Th>이름</Table.Th>
                  <Table.Th>선택</Table.Th>
                  <Table.Th>배역</Table.Th>
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
