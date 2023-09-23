import { useTheme } from "@emotion/react";
import { IconoirProvider, MoreHoriz } from "iconoir-react";

import Button from "@/components/Button";

export default function ReviewMoreButton() {
  const theme = useTheme();
  return (
    <IconoirProvider
      iconProps={{
        strokeWidth: 2,
      }}
    >
      <Button
        name="더보기"
        icon={
          <MoreHoriz
            width={16}
            height={16}
            color={theme.colors.neutral["50"]}
          />
        }
        styleType="text"
        size="sm"
        color="neutral"
      ></Button>
    </IconoirProvider>
  );
}
