import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { CheckCircle2, Clock, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'

const WHATSAPP = '51923791008'
const CORREO = 'sparionaramos7601@gmail.com'
interface Datos { nombre: string; telefono: string; correo: string; mascota: string; servicio: string; mensaje: string }
type Errores = Partial<Record<keyof Datos, string>>
const inicial: Datos = { nombre: '', telefono: '', correo: '', mascota: '', servicio: 'Consulta general', mensaje: '' }
const contactos = [
  { id: 1, icono: Phone, texto: 'Celular / WhatsApp: 923 791 008' },
  { id: 2, icono: Mail, texto: CORREO },
  { id: 3, icono: MapPin, texto: 'Huancayo, Junín' },
  { id: 4, icono: Clock, texto: 'Lunes a sábado: 8:00 a 20:00' },
]

function validar(datos: Datos): Errores {
  const errores: Errores = {}
  if (datos.nombre.trim().length < 3) errores.nombre = 'Ingresa tu nombre completo.'
  if (!/^9\d{8}$/.test(datos.telefono)) errores.telefono = 'Usa un celular peruano de 9 dígitos.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.correo)) errores.correo = 'Ingresa un correo válido.'
  if (datos.mascota.trim().length < 2) errores.mascota = 'Indica el nombre de tu mascota.'
  if (datos.mensaje.trim().length < 10) errores.mensaje = 'Escribe al menos 10 caracteres.'
  return errores
}

export default function Contacto() {
  const [datos, setDatos] = useState<Datos>(inicial)
  const [errores, setErrores] = useState<Errores>({})
  const [aviso, setAviso] = useState('')
  const cambiar = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setDatos({ ...datos, [event.target.name]: event.target.value })
  const enviar = (canal: 'whatsapp' | 'correo') => {
    const nuevos = validar(datos)
    setErrores(nuevos)
    if (Object.keys(nuevos).length) { setAviso(''); return }
    const texto = ['Solicitud de cita - HuellitasVet', `Nombre: ${datos.nombre}`, `Celular: ${datos.telefono}`, `Correo: ${datos.correo}`, `Mascota: ${datos.mascota}`, `Servicio: ${datos.servicio}`, `Mensaje: ${datos.mensaje}`].join('\n')
    if (canal === 'whatsapp') window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`, '_blank', 'noopener,noreferrer')
    else window.location.href = `mailto:${CORREO}?subject=${encodeURIComponent('Solicitud de cita')}&body=${encodeURIComponent(texto)}`
    setAviso('Datos validados. Completa el envío en la ventana que se abrió.')
    setDatos(inicial)
  }
  const onSubmit = (event: FormEvent) => { event.preventDefault(); enviar('whatsapp') }
  const base = 'mt-1 w-full border bg-white px-4 py-2.5 text-sm text-violet-950 outline-none focus:border-violet-600 focus:ring-2 focus:ring-violet-200 dark:bg-neutral-950 dark:text-white dark:focus:ring-violet-900'
  const etiqueta = 'text-sm font-medium text-violet-900 dark:text-violet-200'

  return <section id="contacto" className="bg-violet-50/70 py-20 dark:bg-violet-950/40"><div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2"><div><h2 className="text-3xl font-bold text-violet-950 dark:text-white md:text-4xl">Agenda tu <span className="text-violet-700 dark:text-violet-400">cita</span></h2><p className="mt-4 text-neutral-600 dark:text-neutral-300">Completa el formulario y te responderemos por WhatsApp o correo.</p><ul className="mt-8 space-y-4 text-neutral-700 dark:text-neutral-200">{contactos.map((contacto) => <li key={contacto.id} className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center bg-violet-700 text-white"><contacto.icono size={18} /></span>{contacto.texto}</li>)}</ul></div><form onSubmit={onSubmit} noValidate className="space-y-4 border border-violet-100 bg-white p-6 shadow-lg shadow-violet-200/60 dark:border-violet-900 dark:bg-neutral-900 dark:shadow-none"><div><label htmlFor="nombre" className={etiqueta}>Nombre completo</label><input id="nombre" name="nombre" value={datos.nombre} onChange={cambiar} className={base} />{errores.nombre && <p className="mt-1 text-xs text-red-600">{errores.nombre}</p>}</div><div className="grid gap-4 sm:grid-cols-2"><div><label htmlFor="telefono" className={etiqueta}>Celular</label><input id="telefono" name="telefono" inputMode="numeric" maxLength={9} value={datos.telefono} onChange={cambiar} className={base} />{errores.telefono && <p className="mt-1 text-xs text-red-600">{errores.telefono}</p>}</div><div><label htmlFor="correo" className={etiqueta}>Correo</label><input id="correo" name="correo" type="email" value={datos.correo} onChange={cambiar} className={base} />{errores.correo && <p className="mt-1 text-xs text-red-600">{errores.correo}</p>}</div></div><div className="grid gap-4 sm:grid-cols-2"><div><label htmlFor="mascota" className={etiqueta}>Nombre de la mascota</label><input id="mascota" name="mascota" value={datos.mascota} onChange={cambiar} className={base} />{errores.mascota && <p className="mt-1 text-xs text-red-600">{errores.mascota}</p>}</div><div><label htmlFor="servicio" className={etiqueta}>Servicio</label><select id="servicio" name="servicio" value={datos.servicio} onChange={cambiar} className={base}><option>Consulta general</option><option>Vacunación</option><option>Cirugía</option><option>Peluquería</option></select></div></div><div><label htmlFor="mensaje" className={etiqueta}>Mensaje</label><textarea id="mensaje" name="mensaje" rows={4} value={datos.mensaje} onChange={cambiar} className={base} />{errores.mensaje && <p className="mt-1 text-xs text-red-600">{errores.mensaje}</p>}</div><div className="flex flex-col gap-3 sm:flex-row"><button type="submit" className="inline-flex flex-1 items-center justify-center gap-2 bg-violet-700 px-6 py-3 font-semibold text-white transition hover:bg-violet-600"><MessageCircle size={18} />Enviar por WhatsApp</button><button type="button" onClick={() => enviar('correo')} className="inline-flex flex-1 items-center justify-center gap-2 border border-violet-700 px-6 py-3 font-semibold text-violet-700 transition hover:bg-violet-50 dark:border-violet-400 dark:text-violet-300 dark:hover:bg-violet-900"><Send size={18} />Enviar por correo</button></div>{aviso && <p className="flex items-center gap-2 text-sm text-green-700 dark:text-green-400"><CheckCircle2 size={16} />{aviso}</p>}</form></div></section>
}
