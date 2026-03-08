import Link from "next/link";

interface Challenge {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  emoji: string;
}

const challenges: Challenge[] = [
  {
    slug: "slider",
    title: "Slider",
    description:
      "Componente de slides com hook customizado useSlider para navegação, loop e auto-play.",
    tags: ["React Hook", "useState", "useCallback", "useEffect"],
    emoji: "🎠",
  },
];

export default function ChallengesPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1 text-sm text-zinc-500 transition hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path
            d="M10 12L6 8l4-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Início
      </Link>

      <h1 className="mb-2 text-3xl font-bold tracking-tight">Desafios</h1>
      <p className="mb-10 text-zinc-500 dark:text-zinc-400">
        Componentes e hooks implementados do zero durante os estudos.
      </p>

      <ul className="flex flex-col gap-4">
        {challenges.map((challenge) => (
          <li key={challenge.slug}>
            <Link
              href={`/challenges/${challenge.slug}`}
              className="group flex items-start gap-4 rounded-xl border border-zinc-200 p-5 transition hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
            >
              <span className="mt-0.5 text-2xl">{challenge.emoji}</span>
              <div className="flex-1">
                <h2 className="mb-1 font-semibold text-zinc-900 transition group-hover:text-black dark:text-zinc-100 dark:group-hover:text-white">
                  {challenge.title}
                </h2>
                <p className="mb-3 text-sm text-zinc-500 dark:text-zinc-400">
                  {challenge.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {challenge.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <svg
                className="mt-1 shrink-0 text-zinc-400 transition group-hover:translate-x-0.5 group-hover:text-zinc-600 dark:group-hover:text-zinc-300"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M6 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
