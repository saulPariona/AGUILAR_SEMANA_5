import type { LucideIcon } from 'lucide-react'
import { HeartPulse, Scissors, Stethoscope, Syringe } from 'lucide-react'

export interface Servicio {
  id: number
  nombre: string
  img: string
  icono: LucideIcon
  texto: string
}

export const servicios: Servicio[] = [
  { id: 1, nombre: 'Consulta general', img: '/images.webp', icono: Stethoscope, texto: 'Revisión completa y diagnóstico oportuno.' },
  { id: 2, nombre: 'Vacunación', img: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=700&q=85', icono: Syringe, texto: 'Esquemas de vacunas para cachorros y adultos.' },
  { id: 3, nombre: 'Cirugía', img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=700&q=85', icono: HeartPulse, texto: 'Procedimientos con equipo y personal especializado.' },
  { id: 4, nombre: 'Peluquería', img: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=700&q=85', icono: Scissors, texto: 'Baño, corte y cuidado estético.' },
]
