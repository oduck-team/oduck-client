import CheckBox from "@/components/CheckBox";

import { SpoilerCheckBoxContainer } from "./SpoilerCheckBox.style";

interface SpoilerCheckBoxProps {
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SpoilerCheckBox({
  name,
  checked,
  onChange,
}: SpoilerCheckBoxProps) {
  return (
    <SpoilerCheckBoxContainer>
      <CheckBox name={name} checked={checked} onChange={onChange} /> 스포일러
    </SpoilerCheckBoxContainer>
  );
}
