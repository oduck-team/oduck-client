import { useDisclosure } from "@mantine/hooks";

import ManageSubCategoryButton from "./ManageSubCategoryButton";
import ManageSubCategoryModal, { SubCategry } from "./ManageSubCategoryModal";

interface ManageSubCategoryProps {
  title: string;
  data: SubCategry[];
  onCreate: (name: string) => void;
  onUpdate: (id: number, name: string) => void;
  onDelete: (id: number) => void;
}

export default function ManageSubCategory({
  title,
  data,
  onCreate,
  onUpdate,
  onDelete,
}: ManageSubCategoryProps) {
  const [isOpened, handlers] = useDisclosure(false);

  return (
    <>
      <ManageSubCategoryButton label={title} onClick={handlers.open} />
      {isOpened && (
        <ManageSubCategoryModal
          title={title}
          data={[...data].sort((a, b) => a.name.localeCompare(b.name, "ko-KR"))}
          onClose={handlers.close}
          onCreate={onCreate}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      )}
    </>
  );
}
