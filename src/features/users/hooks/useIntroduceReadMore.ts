import { useState, useMemo } from "react";

export default function useIntroduceReadMore(text: string) {
  const [isShowReadMoreButton, setIsShowReadMoreButton] = useState(false);
  const [isReadMore, setIsReadMore] = useState(true);

  const handleSeeMoreButtonToggle = () => {
    if (isReadMore) setLimit(Number.MAX_SAFE_INTEGER);
    else setLimit(setTextLimitByBrowserWidth);

    setIsReadMore((prev) => !prev);
  };
  const [limit, setLimit] = useState(setTextLimitByBrowserWidth);

  const getIntroduceText = useMemo(() => {
    if (text.length > limit) {
      setIsShowReadMoreButton(true);
      return `${text.slice(0, limit)}...`;
    }

    return text;
  }, [limit, text]);

  return {
    isReadMore,
    isShowReadMoreButton,
    getIntroduceText,
    handleSeeMoreButtonToggle,
  };
}

function setTextLimitByBrowserWidth() {
  return window.innerWidth >= 500 ? 80 : 50;
}
