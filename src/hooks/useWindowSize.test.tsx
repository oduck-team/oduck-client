import { act, renderHook } from "@testing-library/react";
import { beforeAll, describe, expect, it, vi } from "vitest";

import useWindowSize from "./useWindowSize";

describe("hooks/useWindowSize", () => {
  beforeAll(() => {
    vi.stubGlobal("innerWidth", 500);
    vi.stubGlobal("innerHeight", 500);
  });

  it("정의되어 있어야 한다", () => {
    expect(useWindowSize).toBeDefined();
  });

  it("초기 window 사이즈를 반환한다", () => {
    const { result } = renderHook(() => useWindowSize());
    expect(result.current.width).toBe(500);
    expect(result.current.height).toBe(500);
  });

  it("업데이트 된 window 사이즈를 반환한다", () => {
    const { result } = renderHook(() => useWindowSize());

    act(() => {
      window.innerWidth = 800;
      window.innerHeight = 800;
      window.dispatchEvent(new Event("resize"));
    });

    expect(result.current.width).toBe(800);
    expect(result.current.height).toBe(800);
  });
});
