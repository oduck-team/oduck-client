import BottomSheet from "@/components/BottomSheet";
import useSortBar from "@/features/users/hooks/useSortBar";

import { ArrowsDownIcon, ArrowsUpIcon } from "./Icons";
import SheetButton from "./SheetButton";
import {
  Button,
  ButtonText,
  Count,
  SheetTitle,
  SortBarContainer,
} from "./SortBar.style";

import { MENU } from ".";

interface SortBarProps {
  menu: MENU;
}

export default function SortBar({ menu }: SortBarProps) {
  const {
    selected,
    isBottomSheetVisible,
    SHEET_BUTTONS,
    handleSortClick,
    handleBottomSheetToggle,
  } = useSortBar(menu);

  return (
    <>
      <SortBarContainer>
        <Count>32개의 애니가 있어요</Count>
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
          {SHEET_BUTTONS.map((button) => (
            <SheetButton
              key={button.id}
              id={button.id}
              text={button.text}
              selected={selected}
              onClick={handleSortClick}
            />
          ))}
        </BottomSheet.Content>
      </BottomSheet>
    </>
  );
}
