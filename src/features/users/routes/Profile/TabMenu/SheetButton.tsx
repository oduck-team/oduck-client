import { ArrowsDownIcon, ArrowsUpIcon } from "./Icons";
import { Button, ButtonText } from "./SheetButton.style";

export interface TextSortBy {
  asc: string;
  desc: string;
}

interface State {
  id: string;
  text: string;
  isDESC: boolean;
}

interface Select {
  id: string;
  text: string;
  state: State[];
}

interface SheetButtonProps {
  id: string;
  text: TextSortBy;
  selected: Select;
  onClick: (isDESC: boolean, id: string, text: TextSortBy) => void;
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
