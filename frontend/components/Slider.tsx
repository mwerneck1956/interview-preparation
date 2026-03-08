"use client";

import { useSlider } from "@/hooks/useSlider";

interface Slide {
  id: number;
  content: React.ReactNode;
}

interface SliderProps {
  slides: Slide[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  loop?: boolean;
  showDots?: boolean;
  showArrows?: boolean;
}

export default function Slider({
  slides,
  autoPlay = false,
  autoPlayInterval = 3000,
  loop = true,
  showDots = true,
  showArrows = true,
}: SliderProps) {
  const { current, next, prev, goTo, isFirst, isLast } = useSlider({
    total: slides.length,
    autoPlay,
    autoPlayInterval,
    loop,
  });

  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
      {/* slides */}
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full">
            {slide.content}
          </div>
        ))}
      </div>

      {/* arrows */}
      {showArrows && (
        <>
          <button
            onClick={prev}
            disabled={!loop && isFirst}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-zinc-700 shadow-sm backdrop-blur-sm transition hover:bg-white disabled:opacity-30 dark:bg-zinc-800/80 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 12L6 8l4-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={next}
            disabled={!loop && isLast}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-zinc-700 shadow-sm backdrop-blur-sm transition hover:bg-white disabled:opacity-30 dark:bg-zinc-800/80 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M6 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </>
      )}

      {/* dots */}
      {showDots && (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-200 ${
                i === current
                  ? "w-5 bg-zinc-900 dark:bg-zinc-50"
                  : "w-2 bg-zinc-400 dark:bg-zinc-600"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
