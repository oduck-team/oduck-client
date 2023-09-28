import { StrictPropsWithChildren } from "@/types";

import { Container } from "./AttractionPoint.style";

interface AttractionPointProps {
  name: string;
  isChecked: boolean;
  onChagne: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * 입덕 포인트 컴포넌트
 */
export default function AttractionPoint({
  name,
  isChecked,
  onChagne,
  children,
}: StrictPropsWithChildren<AttractionPointProps>) {
  return (
    <Container htmlFor={name} isChecked={isChecked}>
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={isChecked}
        onChange={onChagne}
      />
      {children}
    </Container>
  );
}
