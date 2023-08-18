import { ReactElement, useState } from "react";

import { TabTitles } from "./Tabs.style";
import TabTitle from "./TabTitle";

interface TabsProps {
  readonly children: ReactElement[];
}

export function Tabs({ children }: TabsProps) {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div>
      <TabTitles>
        {children.map((item, index) => (
          <TabTitle
            key={index}
            title={item.props.title}
            index={index}
            setSelectedTab={setSelectedTab}
            active={selectedTab === index ? true : false}
          />
        ))}
      </TabTitles>
      {children[selectedTab]}
    </div>
  );
}
