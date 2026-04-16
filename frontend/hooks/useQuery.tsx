"use client";

import { useEffect, useState, DependencyList } from "react";

type AsyncState<T> =
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: Error };

export default function useQuery<TResult>(
  fn: () => Promise<TResult>,
  deps: DependencyList = [],
): AsyncState<TResult> {
  const [queryState, setQueryState] = useState<AsyncState<TResult>>({
    status: "loading",
  });

  useEffect(() => {
    let ignore = false;

    async function executeAsyncFn() {
      setQueryState({
        status: "loading",
      });

      try {
        const response = await fn();

        if (ignore) {
          return;
        }

        setQueryState({
          status: "success",
          data: response,
        });
      } catch (err) {
        const error = err instanceof Error ? err : new Error("Request failed");

        if (ignore) return;

        setQueryState({
          status: "error",
          error: error,
        });
      }
    }

    executeAsyncFn();

    return () => {
      ignore = true;
    };
  }, deps);

  return { ...queryState };
}
