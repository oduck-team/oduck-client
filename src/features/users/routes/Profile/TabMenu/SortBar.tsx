import { useState } from "react";

import BottomSheet from "@/components/BottomSheet";
import { ButtonType, SelectedSort } from "@/features/users/hooks/useSortBar";

import { ArrowsDownIcon, ArrowsUpIcon } from "./Icons";
import SheetButton, { TextSortBy } from "./SheetButton";
import {
  Button,
  ButtonText,
  Count,
  SheetTitle,
  SortBarContainer,
} from "./SortBar.style";

interface SortBarProps {
  count: number;
  selected: SelectedSort;
  BUTTONS: ButtonType[];
  onClick: (isDESC: boolean, id: string, text: TextSortBy) => void;
}

export default function SortBar({
  count,
  selected,
  BUTTONS,
  onClick,
}: SortBarProps) {
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const handleBottomSheetToggle = () =>
    setIsBottomSheetVisible((prev) => !prev);

  return (
    <>
      <SortBarContainer>
        <Count>{count}개의 애니가 있어요</Count>
        <Button type="button" onClick={handleBottomSheetToggle}>
          <ButtonText>{selected.text}</ButtonText>
          {selected.isDESC ? <ArrowsDownIcon /> : <ArrowsUpIcon />}
        </Button>
      </SortBarContainer>

      <BottomSheet
        isVisible={isBottomSheetVisible}
        onClose={handleBottomSheetToggle}
      >
        <BottomSheet.Content>
          <SheetTitle>정렬기준</SheetTitle>
          {BUTTONS.map((button) => (
            <SheetButton
              key={button.id}
              id={button.id}
              text={button.text}
              selected={selected}
              onClick={onClick}
            />
          ))}
        </BottomSheet.Content>
      </BottomSheet>
    </>
  );
}
