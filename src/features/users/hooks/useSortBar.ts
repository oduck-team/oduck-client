import { useState, useEffect } from "react";

import { TextSortBy } from "../routes/Profile/TabMenu/SheetButton";

import { MENU } from "./useTabMenu";

export type SortById = typeof CREATE_BY | typeof RATING_BY | typeof TITLE_BY;

const CREATE_BY = "등록 순";
const RATING_BY = "별점 순";
const TITLE_BY = "제목 순";

const RATING_DESC = "별점 높은 순";
const CREATE_DESC = "등록 최신 순";
const TITLE_DESC = "제목 내림차순";

const RATING_ASC = "별점 낮은 순";
const CREATE_ASC = "등록 오래된 순";
const TITLE_ASC = "제목 오름차순";

const BOOKMARK_DESC = "입덕 최신 순"; // <-> CREATE_DESC
const BOOKMARK_ASC = "입덕 오래된 순"; // <-> CREATE_ASC

export interface SelectedSort {
  id: SortById;
  isDESC: boolean;
  text: string;
  state: {
    id: SortById;
    text: string;
    isDESC: boolean;
  }[];
}

export interface ButtonType {
  id: SortById;
  text: {
    asc: string;
    desc: string;
  };
}

export default function useSortBar(menu: MENU) {
  const [selected, setSelected] = useState<SelectedSort>({
    id: CREATE_BY,
    isDESC: true,
    text: CREATE_DESC,
    state: [
      {
        id: RATING_BY,
        text: RATING_DESC,
        isDESC: true,
      },
      {
        id: CREATE_BY,
        text: CREATE_DESC,
        isDESC: true,
      },
      {
        id: TITLE_BY,
        text: TITLE_DESC,
        isDESC: true,
      },
    ],
  });

  const SHEET_BUTTONS: ButtonType[] = [
    {
      id: RATING_BY,
      text: {
        asc: RATING_ASC,
        desc: RATING_DESC,
      },
    },
    {
      id: CREATE_BY,
      text: {
        asc: menu === "입덕애니" ? BOOKMARK_ASC : CREATE_ASC,
        desc: menu === "입덕애니" ? BOOKMARK_DESC : CREATE_DESC,
      },
    },
    {
      id: TITLE_BY,
      text: {
        asc: TITLE_ASC,
        desc: TITLE_DESC,
      },
    },
  ];

  const handleSortClick = (isDESC: boolean, id: SortById, text: TextSortBy) => {
    setSelected((prev) => ({
      ...prev,
      id,
      isDESC,
      text: isDESC ? text.desc : text.asc,
      state: prev.state.map((button) => {
        if (button.id === id) {
          return {
            ...button,
            text: isDESC ? text.desc : text.asc,
            isDESC,
          };
        }

        return button;
      }),
    }));
  };

  useEffect(() => {
    if (selected.id === CREATE_BY) {
      if (menu === "입덕애니") {
        selected.isDESC
          ? setSelected((prev) => ({ ...prev, text: BOOKMARK_DESC }))
          : setSelected((prev) => ({ ...prev, text: BOOKMARK_ASC }));
        return;
      }

      selected.isDESC
        ? setSelected((prev) => ({ ...prev, text: CREATE_DESC }))
        : setSelected((prev) => ({ ...prev, text: CREATE_ASC }));
    }
  }, [menu, selected.id, selected.isDESC]);

  return {
    selected,
    SHEET_BUTTONS,
    handleSortClick,
  };
}
