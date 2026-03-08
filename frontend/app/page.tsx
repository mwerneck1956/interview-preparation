import Link from "next/link";

const topics = [
  {
    title: "Frontend",
    description: "Componentes React, hooks customizados e padrões de UI.",
    href: "/challenges",
    emoji: "⚛️",
  },
  {
    title: "Estruturas de dados",
    description: "Listas, árvores, grafos e implementações em TypeScript.",
    href: "#",
    emoji: "🗂️",
    soon: true,
  },
  {
    title: "Algoritmos",
    description: "Ordenação, busca, recursão e programação dinâmica.",
    href: "#",
    emoji: "🧮",
    soon: true,
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <div className="mb-14">
        <p className="mb-3 text-sm font-medium text-zinc-400 uppercase tracking-widest">
          Interview Prep
        </p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Estudos para entrevistas
        </h1>
        <p className="text-lg text-zinc-500 dark:text-zinc-400">
          Documentação dos componentes, hooks e algoritmos implementados durante
          a preparação para entrevistas técnicas.
        </p>
      </div>

      <ul className="flex flex-col gap-4">
        {topics.map((topic) => (
          <li key={topic.title}>
            <Link
              href={topic.href}
              aria-disabled={topic.soon}
              className={`group flex items-start gap-4 rounded-xl border p-5 transition ${
                topic.soon
                  ? "pointer-events-none border-zinc-100 dark:border-zinc-900"
                  : "border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
              }`}
            >
              <span className="mt-0.5 text-2xl">{topic.emoji}</span>
              <div className="flex-1">
                <div className="mb-1 flex items-center gap-2">
                  <h2
                    className={`font-semibold ${
                      topic.soon
                        ? "text-zinc-400 dark:text-zinc-600"
                        : "text-zinc-900 dark:text-zinc-100"
                    }`}
                  >
                    {topic.title}
                  </h2>
                  {topic.soon && (
                    <span className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-400 dark:bg-zinc-900 dark:text-zinc-600">
                      em breve
                    </span>
                  )}
                </div>
                <p
                  className={`text-sm ${
                    topic.soon
                      ? "text-zinc-400 dark:text-zinc-600"
                      : "text-zinc-500 dark:text-zinc-400"
                  }`}
                >
                  {topic.description}
                </p>
              </div>
              {!topic.soon && (
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
              )}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
