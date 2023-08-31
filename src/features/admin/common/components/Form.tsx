import { Card } from "@mantine/core";

import { StrictPropsWithChildren } from "@/types";

interface FormProps {
  onSubmit?: () => void;
}

// https://github.com/mantinedev/mantine/issues/2853
// Typescript throws error when using styled with Card component
// styled로 Card 컴포넌트 감쌀시 에러 발생
export default function Form({
  onSubmit,
  children,
}: StrictPropsWithChildren<FormProps>) {
  return (
    <Card
      component="form"
      withBorder
      radius="md"
      padding="xl"
      style={{ margin: "20px 0" }}
      onSubmit={onSubmit}
    >
      {children}
    </Card>
  );
}
