import { SortById } from "@/features/users/hooks/useSortBar";

import { ArrowsDownIcon, ArrowsUpIcon } from "./Icons";
import { Button, ButtonText } from "./SheetButton.style";

export interface TextSortBy {
  asc: string;
  desc: string;
}

interface State {
  id: SortById;
  text: string;
  isDESC: boolean;
}

interface Select {
  id: SortById;
  text: string;
  state: State[];
}

interface SheetButtonProps {
  id: SortById;
  text: TextSortBy;
  selected: Select;
  onClick: (isDESC: boolean, id: SortById, text: TextSortBy) => void;
}

export default function SheetButton({
  id,
  text,
  selected,
  onClick,
}: SheetButtonProps) {
  const buttonState = selected.state.find((button) => button.id === id);
  if (!buttonState) throw new Error("button id를 찾을 수 없습니다");

  const handleClick = () => {
    if (id !== selected.id) {
      onClick(buttonState.isDESC, id, text);
      return;
    }

    onClick(!buttonState.isDESC, id, text);
  };

  return (
    <Button id={id} selectedID={selected.id} onClick={handleClick}>
      <ButtonText>{buttonState.isDESC ? text.desc : text.asc}</ButtonText>
      {id === selected.id &&
        (buttonState.isDESC ? <ArrowsDownIcon /> : <ArrowsUpIcon />)}
    </Button>
  );
}
