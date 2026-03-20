import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { useSlider } from "../useSlider";

describe("useSlider", () => {
  it("starts at slide 0", () => {
    const { result } = renderHook(() => useSlider({ total: 3 }));
    expect(result.current.current).toBe(0);
  });

  it("advances to the next slide", () => {
    const { result } = renderHook(() => useSlider({ total: 3 }));
    act(() => result.current.next());
    expect(result.current.current).toBe(1);
  });

  it("goes back to the previous slide", () => {
    const { result } = renderHook(() => useSlider({ total: 3 }));
    act(() => result.current.next());
    act(() => result.current.prev());
    expect(result.current.current).toBe(0);
  });

  it("jumps to a specific slide with goTo", () => {
    const { result } = renderHook(() => useSlider({ total: 5 }));
    act(() => result.current.goTo(3));
    expect(result.current.current).toBe(3);
  });

  it("ignores goTo calls outside bounds", () => {
    const { result } = renderHook(() => useSlider({ total: 3 }));
    act(() => result.current.goTo(10));
    expect(result.current.current).toBe(0);
    act(() => result.current.goTo(-1));
    expect(result.current.current).toBe(0);
  });

  describe("loop = true (default)", () => {
    it("wraps back to the first slide after the last", () => {
      const { result } = renderHook(() => useSlider({ total: 3 }));
      act(() => result.current.goTo(2));
      act(() => result.current.next());
      expect(result.current.current).toBe(0);
    });

    it("wraps to the last slide when going back from the first", () => {
      const { result } = renderHook(() => useSlider({ total: 3 }));
      act(() => result.current.prev());
      expect(result.current.current).toBe(2);
    });
  });

  describe("loop = false", () => {
    it("does not advance past the last slide", () => {
      const { result } = renderHook(() =>
        useSlider({ total: 3, loop: false })
      );
      act(() => result.current.goTo(2));
      act(() => result.current.next());
      expect(result.current.current).toBe(2);
    });

    it("does not go back before the first slide", () => {
      const { result } = renderHook(() =>
        useSlider({ total: 3, loop: false })
      );
      act(() => result.current.prev());
      expect(result.current.current).toBe(0);
    });

    it("isFirst is true on slide 0", () => {
      const { result } = renderHook(() =>
        useSlider({ total: 3, loop: false })
      );
      expect(result.current.isFirst).toBe(true);
    });

    it("isLast is true on the last slide", () => {
      const { result } = renderHook(() =>
        useSlider({ total: 3, loop: false })
      );
      act(() => result.current.goTo(2));
      expect(result.current.isLast).toBe(true);
    });
  });

  describe("autoPlay", () => {
    beforeEach(() => vi.useFakeTimers());
    afterEach(() => vi.useRealTimers());

    it("automatically advances at the configured interval", () => {
      const { result } = renderHook(() =>
        useSlider({ total: 3, autoPlay: true, autoPlayInterval: 1000 })
      );
      act(() => vi.advanceTimersByTime(1000));
      expect(result.current.current).toBe(1);
      act(() => vi.advanceTimersByTime(1000));
      expect(result.current.current).toBe(2);
    });

    it("clears the interval on unmount", () => {
      const clearSpy = vi.spyOn(globalThis, "clearInterval");
      const { unmount } = renderHook(() =>
        useSlider({ total: 3, autoPlay: true })
      );
      unmount();
      expect(clearSpy).toHaveBeenCalled();
    });
  });
});
