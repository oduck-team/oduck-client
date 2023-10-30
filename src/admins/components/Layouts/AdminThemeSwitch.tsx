import {
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { Moon, Sun } from "@phosphor-icons/react";

import classes from "./AdminThemeSwitch.module.css";

/**
 * @description 라이트, 다크모드를 바꿔주는 컴포넌트
 */
export default function AdminThemeSwitch() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("dark", {
    getInitialValueInEffect: true,
  });

  return (
    <ActionIcon
      aria-label="테마모드 스위치 버튼"
      variant="default"
      size="lg"
      onClick={() =>
        setColorScheme(computedColorScheme === "light" ? "dark" : "light")
      }
    >
      <Sun className={classes.light} />
      <Moon className={classes.dark} />
    </ActionIcon>
  );
}
