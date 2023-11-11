import { Button, Tooltip } from "@mantine/core";
import { GearSix } from "@phosphor-icons/react";

interface ManageSubCategoryButtonProps {
  label: string;
  onClick: () => void;
}

export default function ManageSubCategoryButton({
  label,
  onClick,
}: ManageSubCategoryButtonProps) {
  return (
    <Tooltip label={`${label} 관리`}>
      <Button variant="default" onClick={onClick}>
        <GearSix weight="fill" color="gray" size={20} />
      </Button>
    </Tooltip>
  );
}
