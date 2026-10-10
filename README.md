# HuellitasVet

Landing page responsive para una clínica veterinaria. El sitio presenta los servicios de
HuellitasVet, explica su método de atención, muestra indicadores de la clínica y permite
solicitar una cita mediante WhatsApp o correo electrónico.

## Integrante

**Pariona Ramos Saul Anibal**

## Descripción del proyecto

HuellitasVet es una interfaz web de una sola página construida con React, TypeScript,
Vite y Tailwind CSS. Su objetivo es ofrecer una experiencia clara, moderna y adaptable
para que los dueños de mascotas puedan:

- Conocer la propuesta y los valores de la clínica.
- Revisar los servicios disponibles.
- Consultar indicadores de atención.
- Cambiar entre modo claro y modo oscuro.
- Contactar a la clínica para solicitar una cita.

La aplicación está orientada a una clínica ubicada en Huancayo, Junín, y utiliza una
identidad visual basada en tonos violetas, imágenes de mascotas e iconos de
`lucide-react`.

## Cumplimiento de los 5 pasos de la práctica

La implementación cumple los cinco pasos solicitados:

### Paso 1: Scaffold y configuración inicial

El proyecto parte de Vite con React y TypeScript. Se configuraron Tailwind CSS 4,
`@tailwindcss/vite` y `lucide-react` en `package.json` y `vite.config.ts`.

### Paso 2: Arquitectura de componentes

Se limpió el boilerplate de Vite y se organizó la aplicación en componentes dentro de
`src/components/` y datos dentro de `src/data/`. `src/App.tsx` es el único componente
raíz y funciona como orquestador: importa y compone `Navbar`, `Hero`, `Nosotros`,
`Servicios`, `Metodo`, `Dashboard`, `Contacto` y `Footer`, sin concentrar la lógica de
negocio.

El árbol de render principal es:

```text
App
├── MarcaAgua
├── Navbar
└── main
    ├── Hero
    ├── Nosotros
    ├── Servicios
    ├── Metodo
    ├── Dashboard
    │   └── MetricCard
    └── Contacto
└── Footer
```

El JSX es transformado por React en llamadas equivalentes a `React.createElement`.
Por ejemplo, `<Hero />` representa conceptualmente `React.createElement(Hero)`.

### Paso 3: Props y `children`

`Dashboard` recibe `titulo`, `subtitulo` y `children`. `MetricCard` recibe `titulo`,
`valor`, `icono` y `children`. Las métricas se definen como datos estructurados en
`src/data/metricas.ts` y se pasan desde `App` hacia los componentes hijos.

Esto demuestra:

- Flujo unidireccional de datos.
- Inmutabilidad de props.
- Composición mediante `children` en lugar de herencia.
- Tipado con interfaces TypeScript.
- Documentación JSDoc en `Dashboard` y `MetricCard`.
- Ausencia de `useState` en `Dashboard` y `MetricCard`.

### Paso 4: Estrategias de estilado

Se aplican las tres estrategias solicitadas:

- **CSS Modules:** `MetricCard.module.css` encapsula los estilos de `MetricCard` y
  evita colisiones mediante clases generadas por Vite.
- **Tailwind CSS:** se utilizan clases responsive como `sm:grid-cols-2`,
  `md:grid-cols-2` y `lg:grid-cols-4` en los componentes de la interfaz.
- **Inline style:** `MetricCard` utiliza un estilo inline puntual para
  `letterSpacing`, permitiendo contrastar la prioridad de la cascada.

En JSX se utiliza `className` en lugar de `class`, porque `class` es una palabra
reservada de JavaScript.

### Paso 5: Validación de CSR

La aplicación utiliza Client-Side Rendering. `index.html` contiene inicialmente el
contenedor vacío `<div id="root"></div>` y `src/main.tsx` monta `<App />` mediante
`createRoot`. React inyecta después el árbol de componentes en el DOM del navegador.

La validación se puede realizar de estas maneras:

1. Revisar **View Page Source** y comprobar que el HTML inicial solo contiene
   `#root`.
2. Revisar **Elements** y comprobar que React inyectó el contenido dentro de `#root`.
3. Revisar **React DevTools** para observar el árbol de componentes.
4. Revisar **Network**, filtrar los archivos JavaScript y localizar el bundle generado
   por Vite.
5. Ejecutar `npm run build` para comprobar el bundle de producción.

El `meta viewport`, el título y las etiquetas SEO están en `index.html`, porque son
metadatos globales del documento y no contenido propio de un componente React.

## Características principales

### 1. Encabezado y navegación

- Barra de navegación fija (`sticky`) en la parte superior.
- Logo y nombre de marca **HuellitasVet**.
- Enlaces internos a Inicio, Nosotros, Servicios, Método, Indicadores y Contacto.
- Menú desplegable para pantallas pequeñas.
- Botón de acceso rápido para agendar una cita.
- Desplazamiento suave entre las secciones.

### 2. Portada o sección Hero

- Mensaje principal: “Cuidamos a tu mascota como a familia”.
- Presentación de la clínica veterinaria.
- Botones para reservar una cita y consultar los servicios.
- Imagen principal de mascotas.

### 3. Sección Nosotros

Incluye los pilares de la clínica:

- Atención con propósito.
- Cuidado integral.
- Confianza y acompañamiento.

También presenta datos destacados de referencia:

- Más de 2,500 mascotas atendidas.
- 12 profesionales.
- Acompañamiento en emergencias las 24 horas.

### 4. Sección Servicios

Los servicios se generan desde `src/data/servicios.ts` y se muestran en tarjetas
responsive:

- Consulta general.
- Vacunación.
- Cirugía.
- Peluquería.

Cada tarjeta contiene un icono, una imagen, un nombre y una descripción. Las imágenes
locales se encuentran en `public/` y algunas imágenes de servicio se cargan desde
Unsplash.

### 5. Sección Método

Explica el proceso de atención de la clínica en cuatro pasos:

1. Escuchamos.
2. Evaluamos.
3. Actuamos.
4. Acompañamos.

La sección utiliza la imagen `public/images_METODO.webp`.

### 6. Indicadores de la clínica

El dashboard se alimenta desde `src/data/metricas.ts` y muestra:

- 128 pacientes atendidos.
- 14 citas de hoy.
- 46 vacunas aplicadas.
- Satisfacción promedio de 4.8/5.

La estructura es reutilizable porque `Dashboard` recibe el título, el subtítulo y sus
tarjetas como contenido hijo.

### 7. Formulario de contacto

El formulario solicita:

- Nombre completo.
- Celular.
- Correo electrónico.
- Nombre de la mascota.
- Servicio requerido.
- Mensaje.

Antes de enviar, se validan los datos en el navegador:

- El nombre debe tener al menos tres caracteres.
- El celular debe tener nueve dígitos y comenzar con `9`.
- El correo debe tener un formato válido.
- El nombre de la mascota debe tener al menos dos caracteres.
- El mensaje debe tener como mínimo diez caracteres.

Después de validar, la solicitud puede abrirse:

- En WhatsApp, usando el número `923 791 008`.
- En el cliente de correo predeterminado, usando
  `sparionaramos7601@gmail.com`.

El formulario no utiliza una base de datos ni un backend: prepara el mensaje y delega
el envío a WhatsApp o al correo del usuario.

### 8. Modo claro y modo oscuro

El componente `ThemeToggle` permite alternar entre ambos temas. La preferencia:

- Se guarda en `localStorage` con la clave `tema`.
- Se recupera cuando el usuario vuelve a visitar la página.
- Usa la preferencia del sistema si todavía no existe una selección guardada.

## Tecnologías utilizadas

- **React 19**: construcción de la interfaz mediante componentes.
- **TypeScript**: tipado estático para componentes y datos.
- **Vite**: servidor de desarrollo y empaquetado para producción.
- **Tailwind CSS 4**: estilos responsive y utilidades visuales.
- **Lucide React**: iconos de navegación, servicios y contacto.
- **Oxlint**: revisión estática del código.

## Requisitos previos

Antes de ejecutar el proyecto, instala:

- Node.js 20 o una versión LTS posterior.
- npm, incluido normalmente con Node.js.
- Git, si deseas clonar el repositorio.

Puedes comprobar las versiones instaladas con:

```bash
node --version
npm --version
```

## Instalación paso a paso

### Paso 1: Obtener el proyecto

Si trabajas con el repositorio remoto:

```bash
git clone https://github.com/saulPariona/AGUILAR_SEMANA_5.git
cd AGUILAR_SEMANA_5
```

Si ya tienes la carpeta descargada, abre una terminal dentro de:

```text
C:\DAW\SEMANA5_AGUILAR
```

### Paso 2: Instalar las dependencias

Ejecuta:

```bash
npm install
```

Este comando instala React, React DOM, TypeScript, Vite, Tailwind CSS, Lucide React y
las herramientas de desarrollo declaradas en `package.json`.

### Paso 3: Iniciar el servidor de desarrollo

```bash
npm run dev
```

Vite mostrará una dirección similar a:

```text
http://localhost:5173/
```

Abre esa dirección en el navegador. El servidor tiene recarga automática: los cambios
realizados en los archivos se reflejan sin tener que reiniciar manualmente la
aplicación.

### Paso 4: Revisar la aplicación

Verifica manualmente los siguientes flujos:

1. Los enlaces del menú desplazan a la sección correspondiente.
2. El menú móvil se abre y se cierra correctamente.
3. El interruptor de tema cambia entre claro y oscuro.
4. La preferencia de tema permanece al recargar la página.
5. Las tarjetas de servicios y métricas se muestran correctamente.
6. El formulario muestra errores cuando los datos no cumplen las reglas.
7. WhatsApp y correo reciben la información validada de la solicitud.

## Scripts disponibles

| Comando | Función |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo de Vite. |
| `npm run build` | Ejecuta el chequeo de TypeScript y genera la versión de producción. |
| `npm run lint` | Analiza el código con Oxlint. |
| `npm run preview` | Sirve localmente la compilación de producción. |

Para validar el proyecto antes de entregarlo, ejecuta:

```bash
npm run lint
npm run build
```

## Estructura del proyecto

```text
AGUILAR_SEMANA_5/
├── public/
│   ├── FOTO_GRUPAL DE ANIMALES.webp
│   ├── LOGO.webp
│   ├── favicon.svg
│   ├── icons.svg
│   ├── images.webp
│   └── images_METODO.webp
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Contacto.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── LoadingScreen.tsx
│   │   ├── MarcaAgua.tsx
│   │   ├── Metodo.tsx
│   │   ├── MetricCard.module.css
│   │   ├── MetricCard.tsx
│   │   ├── Navbar.tsx
│   │   ├── Nosotros.tsx
│   │   ├── Servicios.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── Institucional.tsx
│   ├── data/
│   │   ├── metricas.ts
│   │   └── servicios.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

### Responsabilidad de los archivos principales

- `src/main.tsx`: punto de entrada de React.
- `src/App.tsx`: compone el layout completo de la página.
- `src/index.css`: importa Tailwind CSS y configura el desplazamiento suave y la
  variante de modo oscuro.
- `src/components/`: contiene las secciones reutilizables de la interfaz.
- `src/data/`: contiene los datos tipados de servicios e indicadores.
- `public/`: contiene imágenes, logo, favicon y recursos públicos.
- `index.html`: define el idioma, metadatos SEO, favicon y título del documento.
- `vite.config.ts`: configura los plugins de React y Tailwind para Vite.

## Personalización

### Actualizar los servicios

Edita el arreglo `servicios` en `src/data/servicios.ts`. Cada elemento debe conservar
las propiedades `id`, `nombre`, `img`, `icono` y `texto`.

### Actualizar los indicadores

Edita el arreglo `metricas` en `src/data/metricas.ts`. Cada métrica debe incluir
`id`, `titulo`, `valor`, `icono` y `descripcion`.

### Cambiar los datos de contacto

Los datos de WhatsApp y correo se encuentran al inicio de
`src/components/Contacto.tsx`, en las constantes `WHATSAPP` y `CORREO`.

Al cambiar el número de WhatsApp, conserva el formato internacional sin espacios ni
el signo `+`, porque se utiliza en la URL `https://wa.me/`.

### Cambiar el título y metadatos

Edita `index.html` para modificar el título, la descripción, las palabras clave, el
favicon y los metadatos para compartir la página en redes sociales.

## Construcción y despliegue

Para crear la versión optimizada:

```bash
npm run build
```

El resultado se genera en la carpeta `dist/`. Para probar esa versión localmente:

```bash
npm run preview
```

La carpeta `dist/` puede publicarse en servicios compatibles con aplicaciones
frontend estáticas, como GitHub Pages, Netlify, Vercel o cualquier servidor web que
permita servir archivos estáticos.

## Consideraciones

- El envío del formulario depende de que el usuario tenga WhatsApp o un cliente de
  correo configurado.
- Las imágenes alojadas en Unsplash requieren conexión a internet.
- Los indicadores son datos demostrativos y deben reemplazarse por datos reales si el
  proyecto se conecta posteriormente a una API o base de datos.
- La aplicación no almacena información personal en el navegador ni en un servidor.

## Licencia

Este proyecto se presenta con fines académicos y demostrativos.
