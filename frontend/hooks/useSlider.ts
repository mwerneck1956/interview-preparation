"use client";

import { useState, useCallback, useEffect, useRef } from "react";

interface UseSliderOptions {
  total: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  loop?: boolean;
}

interface UseSliderReturn {
  current: number;
  next: () => void;
  prev: () => void;
  goTo: (index: number) => void;
  isFirst: boolean;
  isLast: boolean;
}

export function useSlider({
  total,
  autoPlay = false,
  autoPlayInterval = 3000,
  loop = true,
}: UseSliderOptions): UseSliderReturn {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => {
    setCurrent((prev) => {
      if (prev === total - 1) return loop ? 0 : prev;
      return prev + 1;
    });
  }, [total, loop]);

  const prev = useCallback(() => {
    setCurrent((prev) => {
      if (prev === 0) return loop ? total - 1 : prev;
      return prev - 1;
    });
  }, [total, loop]);

  const goTo = useCallback(
    (index: number) => {
      if (index >= 0 && index < total) {
        setCurrent(index);
      }
    },
    [total]
  );

  useEffect(() => {
    if (!autoPlay) return;

    intervalRef.current = setInterval(next, autoPlayInterval);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoPlay, autoPlayInterval, next]);

  return {
    current,
    next,
    prev,
    goTo,
    isFirst: current === 0,
    isLast: current === total - 1,
  };
}
