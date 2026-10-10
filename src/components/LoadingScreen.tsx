import { LoaderCircle } from 'lucide-react'

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] flex min-h-screen items-center justify-center bg-white text-[#5b21b6]">
      <div className="flex flex-col items-center gap-5">
        <img src="/LOGO.webp" alt="VetVida" className="h-28 w-28 animate-pulse object-contain" />
        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.3em]">
          <LoaderCircle size={18} className="animate-spin" />
          Preparando tu visita
        </div>
        <div className="h-1 w-40 overflow-hidden bg-[#ede9fe]">
          <div className="h-full w-1/2 animate-[loading_1.2s_ease-in-out_infinite] bg-[#7c3aed]" />
        </div>
      </div>
    </div>
  )
}
