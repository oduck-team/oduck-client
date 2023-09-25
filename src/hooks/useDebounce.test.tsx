import {
  renderHook,
  act,
  cleanup,
  render,
  screen,
  fireEvent,
} from "@testing-library/react";
import { useState } from "react";
import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";

import useDebounce from "./useDebounce";

describe("hooks/useDebounce", () => {
  const TIME = 1000;

  const Counter = ({ ms }: { ms: number }) => {
    const [count, setCount] = useState(0);

    const handleDebounceClick = useDebounce(() => {
      setCount((prev) => prev + 1);
    }, ms);

    return (
      <div>
        <span data-testid="count">{count}</span>
        <button data-testid="button" onClick={handleDebounceClick}>
          increase
        </button>
      </div>
    );
  };

  const AsyncCounter = ({ ms }: { ms: number }) => {
    const [count, setCount] = useState(0);

    const handleDebounceClick = useDebounce(async () => {
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve(undefined);
        }, 100),
      );
      setCount((prev) => prev + 1);
    }, ms);

    return (
      <div>
        <span data-testid="async-count">{count}</span>
        <button data-testid="async-button" onClick={handleDebounceClick}>
          increase
        </button>
      </div>
    );
  };

  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(cleanup);

  it("정의되어 있어야 한다", () => {
    expect(useDebounce).toBeDefined();
  });

  it("디바운스 함수를 반환한다", () => {
    const callback = () => {};

    const { result } = renderHook(() => useDebounce(callback, 1000));

    expect(typeof result.current).toBe("function");
  });

  it("디바운스 함수를 호출하면 ms 이전 실행되지 않는다", async () => {
    const callback = vi.fn();

    const { result } = renderHook(() => useDebounce(callback, TIME));

    act(() => {
      result.current();
    });

    await vi.advanceTimersByTimeAsync(TIME - 1);
    expect(callback).not.toHaveBeenCalled();
  });

  it("디바운스 함수를 호출하면 ms 이후 실행된다", async () => {
    const callback = vi.fn();

    const { result } = renderHook(() => useDebounce(callback, TIME));

    act(() => {
      result.current();
    });

    await vi.advanceTimersByTimeAsync(TIME + 1);
    expect(callback).toHaveBeenCalled();
  });

  it("버튼을 여러번 눌러도 디바운스 시간 내에는 카운터가 1만 증가한다", async () => {
    render(<Counter ms={TIME} />);
    const Button = screen.getByTestId("button");
    const Count = screen.getByTestId("count");

    for (let i = 0; i < 10; i++) {
      fireEvent.click(Button);
    }

    expect(Count.innerHTML).toBe("0");
    await vi.advanceTimersByTimeAsync(TIME);
    expect(Count.innerHTML).toBe("1");
  });

  it("디바운스 시간이 지나면 별도의 호출이 된다", async () => {
    render(<Counter ms={TIME} />);
    const Button = screen.getByTestId("button");
    const Count = screen.getByTestId("count");

    for (let i = 0; i < 10; i++) {
      fireEvent.click(Button);
    }

    expect(Count.innerHTML).toBe("0");
    await vi.advanceTimersByTimeAsync(TIME);
    expect(Count.innerHTML).toBe("1");

    for (let i = 0; i < 10; i++) {
      fireEvent.click(Button);
    }

    expect(Count.innerHTML).toBe("1");
    await vi.advanceTimersByTimeAsync(TIME);
    expect(Count.innerHTML).toBe("2");
  });

  it("[비동기] 버튼을 여러번 눌러도 디바운스 시간 내에는 카운터가 1만 증가한다", async () => {
    render(<AsyncCounter ms={TIME} />);
    const Button = screen.getByTestId("async-button");
    const Count = screen.getByTestId("async-count");

    for (let i = 0; i < 10; i++) {
      fireEvent.click(Button);
    }

    expect(Count.innerHTML).toBe("0");
    await vi.advanceTimersByTimeAsync(TIME);
    await vi.advanceTimersToNextTimerAsync();
    await vi.advanceTimersToNextTimerAsync();
    expect(Count.innerHTML).toBe("1");
  });

  it("[비동기] 디바운스 시간이 지나면 별도의 호출이 된다", async () => {
    render(<AsyncCounter ms={TIME} />);
    const Button = screen.getByTestId("async-button");
    const Count = screen.getByTestId("async-count");

    for (let i = 0; i < 10; i++) {
      fireEvent.click(Button);
    }

    expect(Count.innerHTML).toBe("0");
    await vi.advanceTimersByTimeAsync(TIME + 100);
    await vi.advanceTimersToNextTimerAsync();
    await vi.advanceTimersToNextTimerAsync();
    expect(Count.innerHTML).toBe("1");

    for (let i = 0; i < 10; i++) {
      fireEvent.click(Button);
    }

    expect(Count.innerHTML).toBe("1");
    await vi.advanceTimersByTimeAsync(TIME + 100);
    await vi.advanceTimersToNextTimerAsync();
    await vi.advanceTimersToNextTimerAsync();
    expect(Count.innerHTML).toBe("2");
  });
});
