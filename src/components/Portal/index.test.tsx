import { render, screen, cleanup } from "@testing-library/react";
import { describe, afterEach, it, expect } from "vitest";

import Portal from ".";

describe("components/Portal", () => {
  function createElementWithId(id: string) {
    const element = document.createElement("div");
    element.id = id;
    document.body.appendChild(element);
  }

  afterEach(cleanup);

  it("정의되어 있어야 한다", () => {
    expect(Portal).toBeDefined();
  });

  it("element id가 존재한다면 children을 렌더링한다", () => {
    const ID = "portal";
    createElementWithId(ID);

    render(<Portal elementId={ID}>children</Portal>);

    expect(screen.getByText("children")).toBeInTheDocument();
  });

  it("element id가 존재하지 않는다면 children을 렌더링하지 않는다", () => {
    const ID = "portal";
    createElementWithId(ID);

    render(<Portal elementId="typo-id">children</Portal>);

    expect(screen.queryByText("children")).not.toBeInTheDocument();
  });
});
