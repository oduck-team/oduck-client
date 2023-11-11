import { Button, Group, Modal, Table, Text, TextInput } from "@mantine/core";
import { modals } from "@mantine/modals";
import { useRef } from "react";

export interface SubCategry {
  id: number;
  name: string;
}

interface ManageSubCategoryModalProps {
  title: string;
  data: SubCategry[];
  onClose: () => void;
  onCreate: (name: string) => void;
  onUpdate: (id: number, name: string) => void;
  onDelete: (id: number) => void;
}

export default function ManageSubCategoryModal({
  title,
  data,
  onClose,
  onCreate,
  onUpdate,
  onDelete,
}: ManageSubCategoryModalProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleCreate = () => {
    modals.open({
      title: `${title} 등록`,
      children: (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!inputRef.current) return;
            onCreate(inputRef.current.value);
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

  const handleEdit = (target: SubCategry) => {
    modals.open({
      title: `${title} 수정`,
      children: (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!inputRef.current) return;
            onUpdate(target.id, inputRef.current.value);
            modals.closeAll();
          }}
        >
          <TextInput
            ref={inputRef}
            defaultValue={target.name}
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

  const handleDelete = (target: SubCategry) =>
    modals.openConfirmModal({
      title: "삭제 확인",
      children: (
        <Text size="sm">
          &apos;{target.name}&apos;을/를 정말로 삭제하시겠어요?
        </Text>
      ),
      labels: { confirm: "삭제", cancel: "취소" },
      confirmProps: { color: "red" },
      onConfirm: () => onDelete(target.id),
    });

  return (
    <Modal.Root size="auto" opened onClose={onClose}>
      <Modal.Overlay />
      <Modal.Content>
        <Modal.Header>
          <Modal.Title>{title} 관리</Modal.Title> <Modal.CloseButton />
        </Modal.Header>
        <Modal.Body>
          <Table.ScrollContainer minWidth={500} type="native">
            <Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>이름</Table.Th>
                  <Table.Th>관리</Table.Th>
                  <Table.Th>
                    <Button
                      variant="default"
                      size="xs"
                      fw={400}
                      onClick={handleCreate}
                    >
                      등록
                    </Button>
                  </Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {data.map((d) => (
                  <Table.Tr key={d.id}>
                    <Table.Td>{d.name}</Table.Td>
                    <Table.Td>
                      <Group gap="sm">
                        <Button
                          variant="default"
                          size="xs"
                          fw={400}
                          onClick={() => handleEdit(d)}
                        >
                          수정
                        </Button>
                        <Button
                          variant="default"
                          size="xs"
                          fw={400}
                          onClick={() => handleDelete(d)}
                        >
                          삭제
                        </Button>
                      </Group>
                    </Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Table.ScrollContainer>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
}
