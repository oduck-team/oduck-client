import {
  cleanup,
  fireEvent,
  render,
  renderHook,
  screen,
} from "@testing-library/react";
import { useState } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import useThrottle from "./useThrottle";

describe("hooks/useThrottle", () => {
  const TIME = 1000;

  const Counter = ({ ms }: { ms: number }) => {
    const [count, setCount] = useState(0);

    const handleThrottleClick = useThrottle(() => {
      setCount((prev) => prev + 1);
    }, ms);

    return (
      <div>
        <span data-testid="count">{count}</span>
        <button data-testid="button" onClick={handleThrottleClick}>
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
    expect(useThrottle).toBeDefined();
  });

  it("쓰로틀링 함수를 반환한다", () => {
    const callback = () => {};

    const { result } = renderHook(() => useThrottle(callback, TIME));

    expect(typeof result.current).toBe("function");
  });

  it("ms동안 함수가 한 번만 호출된다", () => {
    render(<Counter ms={TIME} />);
    const Button = screen.getByTestId("button");
    const Count = screen.getByTestId("count");

    expect(Count.innerHTML).toBe("0");

    for (let i = 0; i < 10; i++) {
      fireEvent.click(Button);
    }

    expect(Count.innerHTML).toBe("1");
  });

  it("ms가 지나면, 별개의 호출이 된다", async () => {
    render(<Counter ms={TIME} />);
    const Button = screen.getByTestId("button");
    const Count = screen.getByTestId("count");

    expect(Count.innerHTML).toBe("0");

    for (let i = 0; i < 10; i++) {
      fireEvent.click(Button);
    }

    expect(Count.innerHTML).toBe("1");

    await vi.advanceTimersByTimeAsync(TIME);

    for (let i = 0; i < 10; i++) {
      fireEvent.click(Button);
    }

    expect(Count.innerHTML).toBe("2");
  });
});
