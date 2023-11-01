import { Button, Group, Tooltip } from "@mantine/core";

interface AnimeFormActionsProps {
  /** form이 애니메이션 `등록`인지 `수정`인지 정합니다 */
  mode: "create" | "edit";
  onAction: (e: React.FormEvent) => void;
}

export default function AnimeFormActions({
  mode,
  onAction,
}: AnimeFormActionsProps) {
  return (
    <Group>
      {mode === "create" && (
        <Tooltip label="애니메이션을 등록합니다.">
          <Button name="등록" type="submit" onClick={onAction}>
            등록
          </Button>
        </Tooltip>
      )}
      {mode === "edit" && (
        <Tooltip label="애니메이션을 수정합니다.">
          <Button name="수정" type="submit">
            수정
          </Button>
        </Tooltip>
      )}
    </Group>
  );
}
