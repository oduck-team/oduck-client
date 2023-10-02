import { useTheme } from "@emotion/react";
import { DotsThree } from "@phosphor-icons/react";

import Button from "@/components/Button";

export default function ReviewMoreButton() {
  const theme = useTheme();
  return (
    <Button
      name="더보기"
      icon={<DotsThree color={theme.colors.neutral["50"]} />}
      variant="text"
      size="sm"
      color="neutral"
    ></Button>
  );
}
