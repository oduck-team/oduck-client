import { Button, TextInput } from "@mantine/core";
import { modals } from "@mantine/modals";
import { useRef } from "react";

interface CreateSubCategoryButtonProps {
  label: React.ReactNode;
  modalTitle: React.ReactNode;
  onCreate: (name: string) => void;
}

export default function CreateSubCategoryButton({
  label,
  modalTitle,
  onCreate,
}: CreateSubCategoryButtonProps) {
  const ref = useRef<HTMLInputElement | null>(null);

  const handleCreate = () => {
    if (!ref.current) return;
    onCreate(ref.current.value);
    modals.closeAll();
  };

  return (
    <Button
      variant="default"
      onClick={() => {
        modals.open({
          title: modalTitle,
          children: (
            <>
              <TextInput
                ref={ref}
                label="이름"
                placeholder="이름을 입력하세요"
                data-autofocus
              />
              <Button fullWidth onClick={() => handleCreate()} mt="md">
                등록
              </Button>
            </>
          ),
        });
      }}
    >
      {label}
    </Button>
  );
}
