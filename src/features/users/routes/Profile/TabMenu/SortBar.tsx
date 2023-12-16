import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import BottomSheet from "@/components/BottomSheet";
import {
  ButtonType,
  SelectedSort,
  SortById,
} from "@/features/users/hooks/useSortBar";
import { MENU } from "@/features/users/hooks/useTabMenu";
import { useApi } from "@/hooks/useApi";

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
  memberId: number;
  selectedMenu: MENU;
  selected: SelectedSort;
  BUTTONS: ButtonType[];
  onClick: (isDESC: boolean, id: SortById, text: TextSortBy) => void;
}

export default function SortBar({
  memberId,
  selectedMenu,
  selected,
  BUTTONS,
  onClick,
}: SortBarProps) {
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const handleBottomSheetToggle = () =>
    setIsBottomSheetVisible((prev) => !prev);
  const { profile } = useApi();
  const { data } = useQuery({
    queryKey: [
      "profile",
      memberId,
      "count",
      selectedMenu === "입덕애니" ? "bookmark" : "review",
    ],
    queryFn: () => profile.getTabListCount(memberId, selectedMenu),
  });

  return (
    <>
      <SortBarContainer>
        <Count>{data?.count ?? 0}개의 애니가 있어요</Count>
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
