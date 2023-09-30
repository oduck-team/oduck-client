import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { TabTitle, TabTitles } from "./style";

export interface StyleProps {
  active?: boolean;
}

interface ItemProps {
  id: number;
  title?: string;
  children?: React.ReactNode;
  url?: string;
  onClick?: () => void;
}

interface TabsProps {
  defaultActiveId?: number;
  items: ItemProps[];
  style?: React.CSSProperties;
  className?: string;
}

export default function Tabs({
  defaultActiveId = 1,
  items,
  style,
  className = "",
}: TabsProps) {
  const [tabIndex, setTabIndex] = useState<number>(defaultActiveId - 1);
  const navigate = useNavigate();

  const handleClick = (v: ItemProps) => {
    if (v.url) navigate(v.url);
    if (v.onClick) v.onClick();
    setTabIndex(v.id - 1);
  };

  return (
    <div style={style} className={className}>
      <TabTitles>
        {items.map((v, idx) => (
          <TabTitle
            key={idx}
            onClick={() => handleClick(v)}
            active={idx === tabIndex}
          >
            {v.title}
          </TabTitle>
        ))}
      </TabTitles>
      <div>{items[tabIndex].children}</div>
    </div>
  );
}
