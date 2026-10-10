import { useState } from 'react'
import { CalendarCheck, Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const enlaces = [
  { href: '#inicio', texto: 'Inicio' },
  { href: '#nosotros', texto: 'Nosotros' },
  { href: '#servicios', texto: 'Servicios' },
  { href: '#metodo', texto: 'Método' },
  { href: '#indicadores', texto: 'Indicadores' },
  { href: '#contacto', texto: 'Contacto' },
]

export default function Navbar() {
  const [abierto, setAbierto] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-violet-100 bg-white/90 backdrop-blur dark:border-violet-900 dark:bg-neutral-950/90">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#inicio" className="flex items-center gap-2">
          <img src="/LOGO.webp" alt="Logo de la veterinaria" className="h-10 w-10 object-contain" />
          <span className="text-lg font-bold text-violet-950 dark:text-white">Huellitas<span className="text-violet-700 dark:text-violet-400">Vet</span></span>
        </a>
        <ul className="hidden items-center gap-7 text-sm font-medium text-violet-900 dark:text-violet-100 lg:flex">
          {enlaces.map((enlace) => <li key={enlace.href}><a href={enlace.href} className="transition hover:text-violet-600 dark:hover:text-violet-400">{enlace.texto}</a></li>)}
        </ul>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a href="#contacto" className="hidden items-center gap-2 bg-violet-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-violet-600 lg:inline-flex"><CalendarCheck size={16} />Agendar cita</a>
          <button type="button" onClick={() => setAbierto(!abierto)} aria-label="Abrir menú" className="border border-violet-200 p-2 text-violet-800 dark:border-violet-700 dark:text-violet-200 lg:hidden">
            {abierto ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      {abierto && <ul className="border-t border-violet-100 bg-white px-4 py-3 dark:border-violet-900 dark:bg-neutral-950 lg:hidden">
        {enlaces.map((enlace) => <li key={enlace.href}><a href={enlace.href} onClick={() => setAbierto(false)} className="block py-2 text-violet-900 hover:text-violet-600 dark:text-violet-100 dark:hover:text-violet-400">{enlace.texto}</a></li>)}
      </ul>}
    </header>
  )
}
