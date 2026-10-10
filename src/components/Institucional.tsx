import { Award, Eye, HeartHandshake, ShieldCheck, Target, Users } from 'lucide-react'

const pillars = [
  { titulo: 'Misión', texto: 'Cuidar la salud de cada mascota con atención ética, cercana y tecnología veterinaria.', icono: Target },
  { titulo: 'Visión', texto: 'Ser la clínica referente por la confianza, la innovación y el bienestar animal.', icono: Eye },
  { titulo: 'Experiencia', texto: 'Más de 12 años acompañando a familias y formando relaciones para toda la vida.', icono: Award },
]

export function Institucional() {
  return <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8"><div className="mb-10 max-w-2xl"><p className="font-bold uppercase tracking-widest text-[#7c3aed]">Conoce VetVida</p><h1 className="mt-3 text-4xl font-black text-[#24113d] dark:text-white sm:text-5xl">Una clínica con propósito</h1><p className="mt-4 text-lg leading-8 text-[#6d5a7d] dark:text-[#e9ddff]">Nuestro trabajo combina conocimiento, empatía y un compromiso real con cada compañero de vida.</p></div><div className="grid gap-5 md:grid-cols-3">{pillars.map(({ titulo, texto, icono: Icon }) => <article key={titulo} className="bg-[#faf9ff] p-7 shadow-lg shadow-purple-950/10 dark:bg-[#2b1450]"><div className="mb-5 inline-flex bg-[#ede9fe] p-3 text-[#5b21b6] dark:bg-[#4c1d95] dark:text-[#ede9fe]"><Icon size={25} /></div><h2 className="text-2xl font-black text-[#24113d] dark:text-white">{titulo}</h2><p className="mt-3 leading-7 text-[#6d5a7d] dark:text-[#e9ddff]">{texto}</p></article>)}</div><div className="mt-8 grid gap-5 sm:grid-cols-3"><div className="bg-[#24113d] p-6 text-white"><HeartHandshake className="mb-4 text-[#c4b5fd]" /><strong className="block text-3xl">2,500+</strong><span className="text-[#e9ddff]">mascotas atendidas</span></div><div className="bg-[#7c3aed] p-6 text-white"><Users className="mb-4 text-[#ede9fe]" /><strong className="block text-3xl">12</strong><span className="text-[#ede9fe]">profesionales</span></div><div className="bg-[#ede9fe] p-6 text-[#3b1b5a]"><ShieldCheck className="mb-4" /><strong className="block text-3xl">24/7</strong><span>acompañamiento en emergencias</span></div></div></section>
}
