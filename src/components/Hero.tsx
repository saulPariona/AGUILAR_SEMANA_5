import { ArrowRight, CalendarCheck, PawPrint } from 'lucide-react'

export default function Hero() {
  return (
    <section id="inicio" className="bg-gradient-to-br from-violet-50 via-white to-violet-100 dark:from-neutral-950 dark:via-violet-950 dark:to-neutral-950">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 bg-violet-100 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-violet-700 dark:bg-violet-900 dark:text-violet-200"><PawPrint size={14} />Clínica veterinaria</p>
          <h1 className="text-4xl font-extrabold leading-tight text-violet-950 dark:text-white md:text-5xl">Cuidamos a tu mascota como a <span className="text-violet-700 dark:text-violet-400">familia</span></h1>
          <p className="mt-5 max-w-lg text-neutral-600 dark:text-neutral-300">Consulta general, vacunación, cirugía y estética con profesionales comprometidos con el bienestar de tu compañero.</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#contacto" className="inline-flex items-center justify-center gap-2 bg-violet-700 px-8 py-3 font-semibold text-white shadow-lg shadow-violet-300/50 transition hover:bg-violet-600 dark:shadow-none"><CalendarCheck size={18} />Reservar ahora</a>
            <a href="#servicios" className="inline-flex items-center justify-center gap-2 border border-violet-700 px-8 py-3 font-semibold text-violet-700 transition hover:bg-violet-50 dark:border-violet-400 dark:text-violet-300 dark:hover:bg-violet-900">Ver servicios<ArrowRight size={18} /></a>
          </div>
        </div>
        <img src="/FOTO_GRUPAL DE ANIMALES.webp" alt="Grupo de mascotas de la clínica veterinaria" className="h-72 w-full border-4 border-white object-cover shadow-2xl shadow-violet-300/50 dark:border-violet-800 dark:shadow-none md:h-[420px]" />
      </div>
    </section>
  )
}
