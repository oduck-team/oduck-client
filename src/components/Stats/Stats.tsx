import { Children } from "react";

import { StatsContainer, Divider } from "./style";

export interface StatsProps {
  readonly children: React.ReactNode;
  readonly primary?: boolean;
}

export function Stats({ children, primary = false }: StatsProps) {
  const getChildren = ({ children }: StatsProps) => {
    if (Children.count(children) > 1) {
      return Children.map(children, (child, idx) => {
        return (
          <>
            {child}
            {idx !== Children.count(children) - 1 && <Divider />}
          </>
        );
      });
    }
    return <>{children}</>;
  };

  return (
    <StatsContainer primary={primary}>
      {getChildren({ children })}
    </StatsContainer>
  );
}
