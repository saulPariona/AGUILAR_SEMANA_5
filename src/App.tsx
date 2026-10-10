import MarcaAgua from './components/MarcaAgua'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Nosotros from './components/Nosotros'
import Servicios from './components/Servicios'
import Metodo from './components/Metodo'
import Dashboard from './components/Dashboard'
import MetricCard from './components/MetricCard'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import { metricas } from './data/metricas'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-violet-950 transition-colors duration-500 dark:bg-neutral-950 dark:text-violet-50">
      <MarcaAgua />
      <Navbar />
      <main>
        <Hero />
        <Nosotros />
        <Servicios />
        <Metodo />
        <Dashboard titulo="Nuestra clínica en números" subtitulo="Indicadores de atención de la última semana">
          {metricas.map((metrica) => (
            <MetricCard key={metrica.id} titulo={metrica.titulo} valor={metrica.valor} icono={metrica.icono}>
              {metrica.descripcion}
            </MetricCard>
          ))}
        </Dashboard>
        <Contacto />
      </main>
      <Footer />
    </div>
  )
}
