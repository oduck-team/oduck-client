import { StrictPropsWithChildren } from "@/types";

import { AttractionPointContainer } from "./style";

interface AttractionPointProps {
  name: string;
  isChecked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * 입덕 포인트 컴포넌트
 */
export default function AttractionPoint({
  name,
  isChecked,
  onChange,
  children,
}: StrictPropsWithChildren<AttractionPointProps>) {
  return (
    <AttractionPointContainer htmlFor={name} isChecked={isChecked}>
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={isChecked}
        onChange={onChange}
      />
      {children}
    </AttractionPointContainer>
  );
}
