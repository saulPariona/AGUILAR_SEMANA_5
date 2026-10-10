import { servicios } from '../data/servicios'

export default function Servicios() {
  return (
    <section
      id="servicios"
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-20 dark:bg-blend-multiply"
      style={{ backgroundImage: "url('/FOTO_GRUPAL DE ANIMALES.webp')" }}
    >
      <div className="absolute inset-0 bg-white/90 dark:bg-[#16072b]/90" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-violet-950 dark:text-white md:text-4xl">
          Nuestros <span className="text-violet-700 dark:text-violet-400">servicios</span>
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {servicios.map((servicio) => (
            <article key={servicio.id} className="group overflow-hidden border border-violet-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-200 dark:border-violet-900 dark:bg-neutral-900 dark:hover:shadow-none">
              <div className="h-44 overflow-hidden bg-violet-100 dark:bg-violet-950">
                <img src={servicio.img} alt={servicio.nombre} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2">
                  <servicio.icono size={20} className="text-violet-700 dark:text-violet-400" />
                  <h3 className="font-semibold text-violet-950 dark:text-white">{servicio.nombre}</h3>
                </div>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{servicio.texto}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
