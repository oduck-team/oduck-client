import styled from "@emotion/styled";

import { StrictPropsWithChildren } from "@/types";

import NavigationContent from "./NavigationContent";
import NavigationItem from "./NavigationItem";

Navigation.Content = NavigationContent;
Navigation.Item = NavigationItem;

export default function Navigation({ children }: StrictPropsWithChildren) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0;

  & > a {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;
