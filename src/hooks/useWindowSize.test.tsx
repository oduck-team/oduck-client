import { act, cleanup, renderHook } from "@testing-library/react";
import { afterEach, beforeAll, describe, expect, it, vi } from "vitest";

import useWindowSize from "./useWindowSize";

describe("hooks/useWindowSize", () => {
  const DEFAULT_SIZE = 500;
  beforeAll(() => {
    vi.stubGlobal("innerWidth", DEFAULT_SIZE);
    vi.stubGlobal("innerHeight", DEFAULT_SIZE);
    vi.useFakeTimers();
  });

  afterEach(cleanup);

  it("정의되어 있어야 한다", () => {
    expect(useWindowSize).toBeDefined();
  });

  it("초기 window 사이즈를 반환한다", () => {
    const { result } = renderHook(() => useWindowSize());
    expect(result.current.width).toBe(DEFAULT_SIZE);
    expect(result.current.height).toBe(DEFAULT_SIZE);
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

  it("throttle ms동안 한 번 업데이트 된다", () => {
    const { result } = renderHook(() => useWindowSize(1000));

    act(() => {
      window.innerWidth = 800;
      window.innerHeight = 800;
      window.dispatchEvent(new Event("resize"));

      window.innerWidth = 500;
      window.innerHeight = 500;
      window.dispatchEvent(new Event("resize"));
    });

    expect(result.current.width).toBe(800);
    expect(result.current.height).toBe(800);
  });

  it("throttle ms가 지나면 별개의 업데이트가 된다", async () => {
    const THROTTLE_TIME = 1000;
    const { result } = renderHook(() => useWindowSize(THROTTLE_TIME));

    act(() => {
      window.innerWidth = 800;
      window.innerHeight = 800;
      window.dispatchEvent(new Event("resize"));
    });

    expect(result.current.width).toBe(800);
    expect(result.current.height).toBe(800);

    await vi.advanceTimersByTimeAsync(THROTTLE_TIME);

    act(() => {
      window.innerWidth = DEFAULT_SIZE;
      window.innerHeight = DEFAULT_SIZE;
      window.dispatchEvent(new Event("resize"));
    });

    expect(result.current.width).toBe(DEFAULT_SIZE);
    expect(result.current.height).toBe(DEFAULT_SIZE);
  });
});
