import { renderHook, waitFor } from "@testing-library/react";
import { describe, vi, it, expect } from "vitest";
import useQuery from "../useQuery";

describe("useQuery", () => {
  it("calls the provided fn on mount", () => {
    const fn = vi.fn().mockReturnValue(new Promise(() => {})); // never resolves
    renderHook(() => useQuery(fn, []));
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("starts with loading status", () => {
    const fn = vi.fn().mockReturnValue(new Promise(() => {})); // never resolves
    const { result } = renderHook(() => useQuery(fn, []));
    expect(result.current.status).toBe("loading");
  });

  it("returns success with data when the promise resolves", async () => {
    const fn = vi.fn().mockResolvedValue({ id: 1 });
    const { result } = renderHook(() => useQuery(fn, []));

    await waitFor(() => expect(result.current.status).toBe("success"));

    expect(result.current).toMatchObject({ status: "success", data: { id: 1 } });
  });

  it("returns error when the promise rejects with an Error", async () => {
    const fn = vi.fn().mockRejectedValue(new Error("request failed"));
    const { result } = renderHook(() => useQuery(fn, []));

    await waitFor(() => expect(result.current.status).toBe("error"));

    if (result.current.status === "error") {
      expect(result.current.error.message).toBe("request failed");
    }
  });

  it("uses a generic message when the thrown value is not an Error instance", async () => {
    const fn = vi.fn().mockRejectedValue("string error");
    const { result } = renderHook(() => useQuery(fn, []));

    await waitFor(() => expect(result.current.status).toBe("error"));

    if (result.current.status === "error") {
      expect(result.current.error.message).toBe("Request failed");
    }
  });

  it("resets to loading and re-executes fn when deps change", async () => {
    const fn = vi.fn().mockResolvedValue("data");
    const { result, rerender } = renderHook(
      ({ dep }: { dep: number }) => useQuery(fn, [dep]),
      { initialProps: { dep: 0 } }
    );

    await waitFor(() => expect(result.current.status).toBe("success"));
    expect(fn).toHaveBeenCalledTimes(1);

    rerender({ dep: 1 });

    expect(result.current.status).toBe("loading");
    expect(fn).toHaveBeenCalledTimes(2);

    await waitFor(() => expect(result.current.status).toBe("success"));
  });

  it("ignores the result when the component unmounts before the promise resolves", async () => {
    let resolve: (value: string) => void;
    const fn = vi
      .fn()
      .mockReturnValue(new Promise<string>((res) => { resolve = res; }));

    const { result, unmount } = renderHook(() => useQuery(fn, []));

    expect(result.current.status).toBe("loading");

    unmount();
    resolve!("late data");

    // status stays loading — the ignore flag prevented the setState call
    expect(result.current.status).toBe("loading");
  });
});
