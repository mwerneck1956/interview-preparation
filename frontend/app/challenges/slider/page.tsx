import Link from "next/link";
import Slider from "@/components/Slider";

const slides = [
  {
    id: 1,
    content: (
      <div className="flex h-64 flex-col items-center justify-center gap-3 bg-violet-50 p-8 dark:bg-violet-950">
        <span className="text-4xl">🪝</span>
        <h3 className="text-xl font-semibold text-violet-900 dark:text-violet-100">
          useSlider Hook
        </h3>
        <p className="max-w-sm text-center text-sm text-violet-700 dark:text-violet-300">
          Gerencia o índice atual, navegação e auto-play com estado mínimo.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className="flex h-64 flex-col items-center justify-center gap-3 bg-sky-50 p-8 dark:bg-sky-950">
        <span className="text-4xl">⚡</span>
        <h3 className="text-xl font-semibold text-sky-900 dark:text-sky-100">
          useCallback
        </h3>
        <p className="max-w-sm text-center text-sm text-sky-700 dark:text-sky-300">
          Funções <code className="font-mono">next</code>,{" "}
          <code className="font-mono">prev</code> e{" "}
          <code className="font-mono">goTo</code> são memoizadas para evitar
          re-renders desnecessários.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className="flex h-64 flex-col items-center justify-center gap-3 bg-emerald-50 p-8 dark:bg-emerald-950">
        <span className="text-4xl">🔄</span>
        <h3 className="text-xl font-semibold text-emerald-900 dark:text-emerald-100">
          Auto-play com cleanup
        </h3>
        <p className="max-w-sm text-center text-sm text-emerald-700 dark:text-emerald-300">
          O <code className="font-mono">useEffect</code> retorna um cleanup
          para limpar o <code className="font-mono">setInterval</code> ao
          desmontar.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    content: (
      <div className="flex h-64 flex-col items-center justify-center gap-3 bg-amber-50 p-8 dark:bg-amber-950">
        <span className="text-4xl">🔁</span>
        <h3 className="text-xl font-semibold text-amber-900 dark:text-amber-100">
          Loop opcional
        </h3>
        <p className="max-w-sm text-center text-sm text-amber-700 dark:text-amber-300">
          Com <code className="font-mono">loop=false</code> os botões são
          desabilitados nos extremos. Com <code className="font-mono">loop=true</code>{" "}
          o slider volta ao início.
        </p>
      </div>
    ),
  },
];

export default function SliderPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <Link
        href="/challenges"
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
        Voltar para desafios
      </Link>

      <div className="mb-2 flex items-center gap-2">
        <span className="rounded-md bg-violet-100 px-2 py-0.5 text-xs font-medium text-violet-700 dark:bg-violet-900 dark:text-violet-300">
          React Hook
        </span>
        <span className="text-xs text-zinc-400">Frontend</span>
      </div>

      <h1 className="mb-3 text-3xl font-bold tracking-tight">Slider</h1>
      <p className="mb-10 text-zinc-500 dark:text-zinc-400">
        Componente de slider com hook customizado{" "}
        <code className="rounded bg-zinc-100 px-1 py-0.5 text-sm dark:bg-zinc-800">
          useSlider
        </code>{" "}
        para gerenciar navegação, loop e auto-play.
      </p>

      <section className="mb-12">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-400">
          Demo
        </h2>
        <Slider slides={slides} showDots showArrows />
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-400">
          API do hook
        </h2>
        <div className="overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50 dark:bg-zinc-900">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-zinc-600 dark:text-zinc-400">
                  Parâmetro
                </th>
                <th className="px-4 py-3 text-left font-medium text-zinc-600 dark:text-zinc-400">
                  Tipo
                </th>
                <th className="px-4 py-3 text-left font-medium text-zinc-600 dark:text-zinc-400">
                  Descrição
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {[
                ["total", "number", "Quantidade total de slides (obrigatório)"],
                ["autoPlay", "boolean", "Avança automaticamente (padrão: false)"],
                ["autoPlayInterval", "number", "Intervalo em ms (padrão: 3000)"],
                ["loop", "boolean", "Volta ao início ao chegar no fim (padrão: true)"],
              ].map(([param, type, desc]) => (
                <tr key={param}>
                  <td className="px-4 py-3 font-mono text-violet-600 dark:text-violet-400">
                    {param}
                  </td>
                  <td className="px-4 py-3 font-mono text-zinc-500">{type}</td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">
                    {desc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-400">
          Retorno do hook
        </h2>
        <div className="overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50 dark:bg-zinc-900">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-zinc-600 dark:text-zinc-400">
                  Valor
                </th>
                <th className="px-4 py-3 text-left font-medium text-zinc-600 dark:text-zinc-400">
                  Tipo
                </th>
                <th className="px-4 py-3 text-left font-medium text-zinc-600 dark:text-zinc-400">
                  Descrição
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {[
                ["current", "number", "Índice do slide atual"],
                ["next", "() => void", "Avança para o próximo slide"],
                ["prev", "() => void", "Volta para o slide anterior"],
                ["goTo", "(index: number) => void", "Vai para um slide específico"],
                ["isFirst", "boolean", "true se estiver no primeiro slide"],
                ["isLast", "boolean", "true se estiver no último slide"],
              ].map(([val, type, desc]) => (
                <tr key={val}>
                  <td className="px-4 py-3 font-mono text-emerald-600 dark:text-emerald-400">
                    {val}
                  </td>
                  <td className="px-4 py-3 font-mono text-zinc-500">{type}</td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">
                    {desc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
