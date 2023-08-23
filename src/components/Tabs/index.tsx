import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { TabTitle, TabTitles } from "./style";

export interface StyleProps {
  readonly active?: boolean;
}

interface ItemProps {
  readonly id: number;
  readonly title?: string;
  readonly children?: string;
  readonly url?: string;
}

interface TabsProps {
  readonly defaultActiveId?: number;
  readonly items: ItemProps[];
}

export default function Tabs({ defaultActiveId = 1, items }: TabsProps) {
  const [tabIndex, setTabIndex] = useState<number>(defaultActiveId - 1);
  const navigate = useNavigate();

  const handleClick = (v: ItemProps) => {
    if (v.url) navigate(v.url);
    setTabIndex(v.id - 1);
  };

  return (
    <div>
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