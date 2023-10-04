import { useState } from "react";

import { TabsContainer, Tab } from "./style";

export interface TabItem {
  /**
   * tab item unique ID
   */
  id: string;
  /**
   * tab item 제목
   */
  title?: string;
}

interface TabsProps {
  /**
   * 기본 활성화될 tab item ID
   */
  defaultActiveId?: string;
  items: TabItem[];
  style?: React.CSSProperties;
  className?: string;
  /**
   * tab 변경시 실행될 콜백
   */
  onChagne?: (value: string) => void;
}

export default function Tabs({
  defaultActiveId,
  items,
  style,
  className = "",
  onChagne,
}: TabsProps) {
  const [currentId, setCurrentId] = useState(defaultActiveId ?? items[0].id);

  const handleClick = (value: string) => {
    setCurrentId(value);

    if (onChagne) {
      onChagne(value);
    }
  };

  return (
    <>
      <TabsContainer style={style} className={className}>
        {items.map((item) => (
          <Tab
            key={item.id}
            onClick={() => handleClick(item.id)}
            active={item.id === currentId}
          >
            {item.title}
          </Tab>
        ))}
      </TabsContainer>
    </>
  );
}
