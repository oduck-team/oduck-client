import { useState } from "react";

export function useFilterAnimations() {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  const [filtered, setFiltered] = useState<string[]>([]); // 선택한 필터 옵션
  // const [animations, setAnimations] = useState([]); // 애니메이션

  const genres = [
    "판타지",
    "로맨스",
    "액션",
    "가족",
    "이세계",
    "개그",
    "학원",
    "감동",
    "범죄",
    "SF",
    "드라마",
  ];

  const seasons = [
    "2023년 1분기",
    "2023년 2분기",
    "2023년 3분기",
    "2023년 4분기",
    "2022년",
    "2021년",
    "2020년",
    "2019년",
    "2018년",
    "2017년",
    "2010년대",
    "2000년대",
    "2000년대 이전",
  ];

  const broadcastTypes = ["TVA", "OVA", "극장판"];

  const statuses = ["방영중", "완결"];

  const episodeNumber = [
    "12화 이하",
    "24화 이하",
    "48화 이하",
    "100화 이하",
    "100화 이상",
  ];

  const filterOptions = {
    genres,
    seasons,
    broadcastTypes,
    statuses,
    episodeNumber,
  };

  const handleOptionClick = (item: string) => {
    if (filtered.includes(item))
      setFiltered([...filtered].filter((a) => a !== item));
    else setFiltered([...filtered, item]);
  };

  const resetFilter = () => {
    setFiltered([]);
  };

  const bottomSheetOpen = () => {
    setBottomSheetVisible(true);
  };

  const bottomSheetClose = () => {
    setBottomSheetVisible(false);
  };

  const handleOkClick = () => {
    // TODO 필터링된 애니 요청
    setBottomSheetVisible(false);
  };

  return {
    bottomSheetVisible,
    bottomSheetOpen,
    bottomSheetClose,
    filterOptions,
    filtered,
    handleOptionClick,
    resetFilter,
    handleOkClick,
  };
}
