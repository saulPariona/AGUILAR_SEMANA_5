import { ClipboardList, Microscope, Pill } from 'lucide-react'

const pasos = [
  { n: '1', icono: ClipboardList, titulo: 'Evaluación', texto: 'Revisamos el historial y el estado general de tu mascota.' },
  { n: '2', icono: Microscope, titulo: 'Diagnóstico', texto: 'Aplicamos los exámenes necesarios para un diagnóstico claro.' },
  { n: '3', icono: Pill, titulo: 'Tratamiento', texto: 'Definimos el plan y te acompañamos en el seguimiento.' },
]

export default function Metodo() {
  return <section id="metodo" className="mx-auto max-w-6xl px-4 py-20"><div className="grid items-center gap-10 md:grid-cols-2"><div><h2 className="text-3xl font-bold text-violet-950 dark:text-white md:text-4xl">Nuestro <span className="text-violet-700 dark:text-violet-400">método</span></h2><ol className="mt-8 space-y-6">{pasos.map((paso) => <li key={paso.n} className="flex gap-4"><span className="flex h-10 w-10 shrink-0 items-center justify-center bg-violet-700 text-white"><paso.icono size={20} /></span><div><h3 className="font-semibold text-violet-950 dark:text-white">{paso.n}. {paso.titulo}</h3><p className="text-sm text-neutral-600 dark:text-neutral-400">{paso.texto}</p></div></li>)}</ol></div><img src="/images_METODO.webp" alt="Método de atención de la veterinaria" className="h-72 w-full object-cover shadow-xl shadow-violet-200 dark:shadow-none md:h-96" /></div></section>
}
