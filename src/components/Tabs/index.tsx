import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { TabTitle, TabTitles } from "./style";

export interface StyleProps {
  readonly active?: boolean;
}

interface ItemProps {
  readonly key: number;
  readonly title?: string;
  readonly children?: string;
  readonly url?: string;
}

interface TabsProps {
  readonly defaultActiveKey?: number;
  readonly items: ItemProps[];
}

export default function Tabs({ defaultActiveKey = 1, items }: TabsProps) {
  const [tabIndex, setTabIndex] = useState<number>(defaultActiveKey - 1);
  const navigate = useNavigate();

  const handleChange = (v: ItemProps) => {
    if (v.url) navigate(v.url);
    setTabIndex(v.key - 1);
  };

  return (
    <div>
      <TabTitles>
        {items
          .sort((x, y) => x["key"] - y["key"])
          .map((v, idx) => (
            <TabTitle
              key={idx}
              onClick={() => handleChange(v)}
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
