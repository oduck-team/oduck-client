import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";

import useLocalStorage from "./useLocalStorage";

describe("hooks/useLocalStorage", () => {
  const KEY = "key";
  const TEST_VALUE = "value";

  beforeEach(() => {
    localStorage.clear();
  });

  it("정의되어 있어야 한다", () => {
    expect(useLocalStorage).toBeDefined();
  });

  it("초기 값을 가지고 있어야 한다", async () => {
    const { result } = renderHook(() => useLocalStorage(KEY, TEST_VALUE));

    expect(result.current.value).toEqual(TEST_VALUE);
    expect(localStorage.getItem(KEY)).toEqual(JSON.stringify(TEST_VALUE));
  });

  it("값이 갱신돼야 한다", () => {
    const NEW_VALUE = "new";
    const { result } = renderHook(() => useLocalStorage(KEY, TEST_VALUE));

    act(() => {
      result.current.setStorageValue(NEW_VALUE);
    });

    expect(result.current.value).toBe(NEW_VALUE);
    expect(localStorage.getItem(KEY)).toBe(JSON.stringify(NEW_VALUE));
  });

  it("값이 제거돼야 한다.", () => {
    const { result } = renderHook(() => useLocalStorage(KEY, TEST_VALUE));

    act(() => {
      result.current.removeStorageValue();
    });

    expect(result.current.value).toBe(null);
    expect(localStorage.getItem(KEY)).toBe(null);
  });
});
