import { screen, fireEvent, cleanup } from "@testing-library/react";
import { describe, it, expect, vi, afterEach } from "vitest";

import customRender from "@/__test__/customRender";
import { theme } from "@/styles/theme";

import BottomNavigation, { INavigationItem } from ".";

describe("components/BottomNavigation", () => {
  const TITLE = "test-title";

  afterEach(cleanup);

  it("정의되어 있어야 한다", () => {
    expect(BottomNavigation).toBeDefined();
  });

  it("제목을 렌더링 한다", () => {
    customRender(
      <BottomNavigation title={TITLE} items={[]} onClickItem={() => {}} />,
    );

    expect(screen.getByText(TITLE)).toBeInTheDocument();
  });

  it("네비게이션 아이템들을 렌더링한다", () => {
    const items: INavigationItem[] = [
      { id: "1", to: "/test", icon: "icon", label: "test" },
    ];

    customRender(
      <BottomNavigation title={TITLE} items={items} onClickItem={() => {}} />,
    );

    expect(screen.getByText("test")).toBeInTheDocument();
  });

  it("active된 아이템은 primary로 강조 되어야한다", () => {
    const activeColor = theme.colors.primary["60"];
    const items: INavigationItem[] = [
      { id: "1", to: "/test", icon: "icon", label: "test" },
      { id: "2", to: "/home", icon: "icon", label: "home" },
    ];

    customRender(
      <BottomNavigation
        activeId={"2"}
        title={TITLE}
        items={items}
        onClickItem={() => {}}
      />,
    );

    const homeItem = screen.getByText("home");

    expect(homeItem).toHaveStyle(`color : ${activeColor}`);
  });

  it("item이 클릭되면 onClikItem이 호출되어야한다", () => {
    const items: INavigationItem[] = [
      { id: "1", to: "/test", icon: "icon", label: "test" },
    ];
    const mockOnClickItem = vi.fn();

    customRender(
      <BottomNavigation
        title={TITLE}
        items={items}
        onClickItem={mockOnClickItem}
      />,
    );

    fireEvent.click(screen.getByText("test"));

    expect(mockOnClickItem).toBeCalledTimes(1);
  });
});
