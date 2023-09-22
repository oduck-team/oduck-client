import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import DeferredComponent from ".";

describe("components/DeferredComponent", () => {
  it("정의되어 있어야 한다", () => {
    expect(DeferredComponent).toBeDefined();
  });

  it("딜레이되지 않았다면 children을 렌더링하지 않는다", () => {
    render(<DeferredComponent>children</DeferredComponent>);

    expect(screen.queryByText("children")).not.toBeInTheDocument();
  });

  it("딜레이 되었다면 children을 렌더링 한다", async () => {
    render(<DeferredComponent>children</DeferredComponent>);

    await waitFor(
      () => {
        expect(screen.getByText("children")).toBeInTheDocument();
      },
      { timeout: 300 },
    );
  });
});
