import { cleanup, render, screen } from "@testing-library/react";
import { PropsWithChildren } from "react";
import { describe, it, expect, vi, afterEach } from "vitest";

import AnimatePortal from "./AnimatePortal";

vi.mock("framer-motion", async () => {
  const framerMotion = await vi.importActual("framer-motion");

  return {
    ...(framerMotion as object),
    AnimatePresence: ({ children }: PropsWithChildren) => <div>{children}</div>,
  };
});

describe("components/portal/AnimatePortal", () => {
  afterEach(cleanup);

  it("정의되어 있어야 한다", () => {
    expect(AnimatePortal).toBeDefined();
  });

  it("isVisible이 true라면 children을 렌더링한다", () => {
    render(<AnimatePortal isVisible={true}>children</AnimatePortal>);

    expect(screen.getByText("children")).toBeInTheDocument();
  });

  it("isVisible이 false라면 children을 렌더링하지않는다.", () => {
    render(<AnimatePortal isVisible={false}>children</AnimatePortal>);

    expect(screen.queryByText("children")).not.toBeInTheDocument();
  });
});
