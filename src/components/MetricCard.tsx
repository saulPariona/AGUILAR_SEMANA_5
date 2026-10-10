import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import styles from './MetricCard.module.css'

interface MetricCardProps { titulo: string; valor: string; icono: LucideIcon; children: ReactNode }

/** Tarjeta de métrica individual. */
export default function MetricCard({ titulo, valor, icono: Icono, children }: MetricCardProps) {
  return <article className={styles.card}><span className={styles.badge} style={{ letterSpacing: '0.05em' }}><Icono size={22} /></span><p className={styles.titulo}>{titulo}</p><p className={styles.valor}>{valor}</p><p className={styles.descripcion}>{children}</p></article>
}
