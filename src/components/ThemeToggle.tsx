import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const [oscuro, setOscuro] = useState<boolean>(() => {
    const guardado = localStorage.getItem('tema')
    if (guardado) return guardado === 'oscuro'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', oscuro)
    localStorage.setItem('tema', oscuro ? 'oscuro' : 'claro')
  }, [oscuro])

  return (
    <button
      type="button"
      role="switch"
      aria-checked={oscuro}
      aria-label={oscuro ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      onClick={() => setOscuro(!oscuro)}
      className={`relative h-8 w-16 shrink-0 overflow-hidden rounded-full border transition-colors duration-500 ${
        oscuro ? 'border-violet-400 bg-violet-950' : 'border-sky-300 bg-sky-300'
      }`}
    >
      <span className={`absolute left-2 top-1.5 h-1 w-1 rounded-full bg-white transition-opacity duration-500 ${oscuro ? 'opacity-100' : 'opacity-0'}`} />
      <span className={`absolute left-4 top-4 h-1 w-1 rounded-full bg-white transition-opacity delay-100 duration-500 ${oscuro ? 'opacity-100' : 'opacity-0'}`} />
      <span className={`absolute left-6 top-2 h-0.5 w-0.5 rounded-full bg-white transition-opacity delay-200 duration-500 ${oscuro ? 'opacity-100' : 'opacity-0'}`} />
      <span className={`absolute bottom-1.5 right-2 h-2.5 w-6 rounded-full bg-white transition-all duration-500 ${oscuro ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-90'}`} />
      <span className={`absolute left-0.5 top-0.5 flex h-6 w-6 items-center justify-center rounded-full transition-all duration-500 ${oscuro ? 'translate-x-8 bg-violet-200 text-violet-900' : 'translate-x-0 bg-yellow-300 text-yellow-700'}`}>
        <Sun size={14} className={`absolute transition-all duration-500 ${oscuro ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} />
        <Moon size={14} className={`absolute transition-all duration-500 ${oscuro ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`} />
      </span>
    </button>
  )
}
