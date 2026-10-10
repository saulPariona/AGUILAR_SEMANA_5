import type { LucideIcon } from 'lucide-react'
import { CalendarDays, PawPrint, Star, Syringe } from 'lucide-react'

export interface Metrica {
  id: number
  titulo: string
  valor: string
  icono: LucideIcon
  descripcion: string
}

export const metricas: Metrica[] = [
  { id: 1, titulo: 'Pacientes atendidos', valor: '128', icono: PawPrint, descripcion: 'Perros y gatos atendidos esta semana.' },
  { id: 2, titulo: 'Citas de hoy', valor: '14', icono: CalendarDays, descripcion: 'Consultas programadas para hoy.' },
  { id: 3, titulo: 'Vacunas aplicadas', valor: '46', icono: Syringe, descripcion: 'Esquemas de vacunación completados.' },
  { id: 4, titulo: 'Satisfacción', valor: '4.8/5', icono: Star, descripcion: 'Promedio de valoraciones de clientes.' },
]
