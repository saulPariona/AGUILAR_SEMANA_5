import type { ReactNode } from 'react'

interface DashboardProps { titulo: string; subtitulo?: string; children: ReactNode }

/** Contenedor de indicadores que compone tarjetas mediante children. */
export default function Dashboard({ titulo, subtitulo, children }: DashboardProps) {
  return <section id="indicadores" className="bg-violet-900 py-20 dark:bg-black"><div className="mx-auto max-w-6xl px-4"><h2 className="text-3xl font-bold text-white md:text-4xl">{titulo}</h2>{subtitulo && <p className="mt-2 text-violet-200">{subtitulo}</p>}<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{children}</div></div></section>
}
