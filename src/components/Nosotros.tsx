import { ShieldCheck, Siren, Stethoscope } from 'lucide-react'

const ventajas = [
  { id: 1, icono: ShieldCheck, texto: 'Profesionales colegiados y capacitados' },
  { id: 2, icono: Stethoscope, texto: 'Equipos modernos de diagnóstico' },
  { id: 3, icono: Siren, texto: 'Atención de emergencias' },
]

export default function Nosotros() {
  return (
    <section id="nosotros" className="mx-auto max-w-6xl px-4 py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <img src="/images.webp" alt="Atención veterinaria en la clínica" className="h-72 w-full object-cover shadow-xl shadow-violet-200 dark:shadow-none md:h-96" />
        <div>
          <h2 className="text-3xl font-bold text-violet-950 dark:text-white md:text-4xl">Sobre <span className="text-violet-700 dark:text-violet-400">nosotros</span></h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300">Somos una clínica veterinaria enfocada en la prevención, el diagnóstico oportuno y el trato cercano con cada mascota y su familia.</p>
          <ul className="mt-6 space-y-3 text-neutral-700 dark:text-neutral-200">
            {ventajas.map((ventaja) => <li key={ventaja.id} className="flex items-center gap-3"><ventaja.icono size={20} className="text-violet-700 dark:text-violet-400" />{ventaja.texto}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
