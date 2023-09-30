import { StrictPropsWithChildren } from "@/types";

import NavigationContent from "./NavigationContent";
import NavigationItem from "./NavigationItem";
import { NavigationContainer } from "./style";

Navigation.Content = NavigationContent;
Navigation.Item = NavigationItem;

export default function Navigation({ children }: StrictPropsWithChildren) {
  return <NavigationContainer>{children}</NavigationContainer>;
}
