import { act, renderHook } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

import { ApiError } from "@/libs/error";

import useFetch from "./useFetch";

describe("hooks/useFetch", () => {
  const mockedFetch = vi.fn();

  beforeEach(() => {
    global.fetch = mockedFetch;
  });

  afterEach(() => {
    mockedFetch.mockClear();
  });

  it("fetcher가 호출되면 isLoading이여야 한다", async () => {
    const { result } = renderHook(() => useFetch<string>());

    act(() => {
      result.current.fetcher("/test");
    });

    expect(result.current.isLoading).toBe(true);
    expect(result.current.isError).toBe(false);
    expect(result.current.isFetched).toBe(false);
  });

  it("응답이 성공적으로 오면 isFetched이여야 하며, data를 갖고있어야한다.", async () => {
    const mockData = { data: "test" };
    mockedFetch.mockResolvedValueOnce({
      status: 200,
      text: () => Promise.resolve(JSON.stringify(mockData)),
    });
    const { result } = renderHook(() => useFetch<string>());

    await act(async () => {
      await result.current.fetcher("/test");
    });

    expect(result.current.data).toEqual(mockData);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(false);
    expect(result.current.isFetched).toBe(true);
  });

  it("응답이 성공적으로 오면 isFetched이여야 하며, body가 비어있다면 data는 빈 객체를 갖고있어야 한다.", async () => {
    const mockData = undefined;
    mockedFetch.mockResolvedValueOnce({
      status: 200,
      text: () => Promise.resolve(JSON.stringify(mockData)),
    });
    const { result } = renderHook(() => useFetch<string>());

    await act(async () => {
      await result.current.fetcher("/test");
    });

    expect(result.current.data).toEqual({});
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(false);
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
    expect(result.current.isFetched).toBe(false);
    expect((result.current.error as ApiError).message).toEqual("Bad Request");
    expect(result.current.error).toBeInstanceOf(ApiError);
  });
});
