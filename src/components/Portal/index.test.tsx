import { render, screen, cleanup } from "@testing-library/react";
import { describe, afterEach, it, expect } from "vitest";

import Portal from ".";

describe("components/Portal", () => {
  afterEach(cleanup);

  it("정의되어 있어야 한다", () => {
    expect(Portal).toBeDefined();
  });

  it("children을 렌더링한다", () => {
    render(<Portal>children</Portal>);

    expect(screen.getByText("children")).toBeInTheDocument();
  });
});
