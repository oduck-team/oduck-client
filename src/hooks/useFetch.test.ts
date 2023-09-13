import { act, renderHook } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

import { ApiError } from "@/lib/error";

import useFetch from "./useFetch";

describe("hooks/useFetch", () => {
  const mockedFetch = vi.fn();

  beforeEach(() => {
    global.fetch = mockedFetch;
  });

  afterEach(() => {
    // mock.mockClear();
  });

  it("fetcher가 호출되면 isLoading이여야 한다", async () => {
    const { result } = renderHook(() => useFetch<string>());

    act(() => {
      result.current.fetcher("/test");
    });

    expect(result.current.isLoading).toBe(true);
  });

  it("응답이 성공적으로 오면 isFetched이여야 한다", async () => {
    mockedFetch.mockResolvedValueOnce({
      status: 200,
      json: () => Promise.resolve({ data: "test" }),
    });
    const { result } = renderHook(() => useFetch<string>());

    await act(async () => {
      await result.current.fetcher("/test");
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.isFetched).toBe(true);
  });

  it("api 에러 발생시 isError여야하며 error값에 message를 포함한다", async () => {
    mockedFetch.mockRejectedValueOnce(new ApiError("Bad Request"));
    const { result } = renderHook(() => useFetch<string>());

    await act(async () => {
      await result.current.fetcher("/test");
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(true);
    expect((result.current.error as ApiError).message).toEqual("Bad Request");
    expect(result.current.error).toBeInstanceOf(ApiError);
  });
});
