# ribersistemas — Rediseño de landing page

> **Brief para Claude Code.** Este documento es la especificación completa del rediseño. Inspecciona el repo primero para entender el stack actual (probablemente Next.js, React o HTML estático) y adapta la implementación al framework existente, sin migrar salvo que sea imprescindible.

---

## Antes de empezar (lista para Tiberiu)

Rellena estos huecos antes de ejecutar este brief con Claude Code. Están marcados como `[PENDIENTE]` a lo largo del documento:

- [ ] Cifra protagonista del caso del **restaurante** (ej: "100%", "<2h", "X reseñas/mes")
- [ ] Cifra protagonista del caso del **ecommerce rumano** (ej: "7.500 contactos", "X% apertura")
- [ ] Cifra protagonista del caso del **almacén/logística** (ej: "0 errores", "X horas/semana ahorradas")
- [ ] Textos de "Resultado" finales de cada caso
- [ ] Nombre real de los clientes si los vas a mencionar (o dejar anónimos como "un restaurante en Madrid", etc.)
- [ ] Email y LinkedIn para footer y formulario de contacto
- [ ] Foto real tuya (no stock) para la sección "Quién soy"

Si aún no tienes alguno de estos, deja el placeholder en el código y rellénalos antes del deploy.

---

## 1. Objetivo y posicionamiento

### Objetivo de la web

Captar **clientes nuevos en frío** (dueños de pymes que llegan por Google, LinkedIn o recomendación) y convertirlos en una llamada de diagnóstico de 30 minutos. No es tarjeta de visita para clientes existentes.

### Posicionamiento

- **Qué soy**: Consultor técnico independiente generalista.
- **Qué hago**: Resuelvo problemas de negocio de pymes construyendo software e IA a medida.
- **Qué me diferencia**: Construyo yo directamente. No subcontrato, no trabajo con equipos grandes, no entrego PowerPoints — entrego sistemas funcionando en producción.
- **Cliente tipo**: Dueño o gerente de pyme (restauración, ecommerce, logística, distribución, servicios) sin equipo técnico propio, con un problema operativo concreto.

### Tono

- Primera persona del singular ("yo construyo", "resuelvo"), nunca "nosotros".
- Directo, sin jerga de agencia ("transformación digital", "impulsamos", "partner estratégico" — prohibidos).
- Honesto sobre el alcance: soy una persona, eso es una ventaja.

---

## 2. Dirección visual

Referencia estética: **River Labs** (riverlabs.ai) — fondo oscuro, tipografía grande escalonada como protagonista, cero ilustraciones decorativas.

La web actual (verde claro, fondo blanco, ilustraciones de gráficos y plantas) transmite "gestoría" o "clínica dental". Hay que reemplazar ese lenguaje visual por completo.

### Sistema de colores

| Rol | Hex | Uso |
|---|---|---|
| Fondo de página | `#05070c` | Color base, visible entre secciones y en el borde |
| Hero y secciones principales | `#0b1220` | Contenedores de contenido principal |
| Tarjetas y elementos elevados | `#141d30` | Cards de casos, bloques destacados |
| Texto primario | `#e8eaed` | Titulares y cuerpo principal |
| Texto secundario | `rgba(232, 234, 237, 0.68)` | Subtítulos, párrafos de apoyo |
| Texto muted | `rgba(232, 234, 237, 0.4)` | Labels, metadata, footer |
| Borde sutil | `rgba(232, 234, 237, 0.15)` | Separadores y bordes de cards |
| CTA primario — fondo | `#ffffff` | Botón principal |
| CTA primario — texto | `#0b1220` | Texto del botón principal |

### Patrón de puntos en el fondo de página

El fondo de página lleva un patrón de puntos sutil para dar textura sin ilustraciones:

```css
background-color: #05070c;
background-image: radial-gradient(circle, rgba(232, 234, 237, 0.09) 1px, transparent 1px);
background-size: 22px 22px;
```

Dentro de las cards (`#141d30`), quitar el patrón para que contrasten limpias.

### Tipografía

- **Fuente**: sans-serif moderna de calidad. Inter, Geist, o similar. Si el stack actual ya tiene una, mantenerla si es sans-serif; si es serif o display, cambiarla.
- **Jerarquía**:
  - H1 (hero): 44–52px desktop, 32–36px mobile
  - H2 (secciones): 32–40px desktop, 26–30px mobile
  - H3 (cards): 20–24px
  - Cuerpo: 16px, line-height 1.6–1.7
  - Metadata/labels: 12–13px con `letter-spacing: 0.08em`
- **Pesos**: solo `400` (regular) y `500` (medium). No usar 700/bold pesado.
- **Letter-spacing**: `-0.02em` en titulares grandes para apretarlos visualmente.
- **Efecto "escalonado" del hero**: la línea intermedia va en `font-style: italic`, `font-weight: 400`, color `rgba(232, 234, 237, 0.38)`.

### Principios de diseño

- **Sin** gradientes decorativos (excepto el patrón de puntos).
- **Sin** sombras grandes, efectos blur, glow o neon.
- **Sin** ilustraciones de stock, clipart, iconos genéricos de fondo.
- **Radio de bordes**: 8–12px en cards y contenedores. `999px` (pill) en botones.
- **Bordes**: `0.5px solid rgba(232, 234, 237, 0.15)` para separadores y cards.
- **Animaciones**: sutiles. Fade-in al scroll está bien. Nada que rebote o gire.

---

## 3. Estructura de la página

Orden exacto de secciones:

1. Nav + Hero
2. "¿Esto te suena?" — problemas reconocibles
3. "Cómo trabajo" — 3 pasos
4. "Sistemas reales. Resultados medidos." — 3 casos
5. "Quién soy" — humanización
6. CTA final + Footer

### 3.1. Nav + Hero

**Nav**:
- Izquierda: logo/nombre "ribersistemas"
- Centro: enlaces "Casos", "Cómo trabajo", "Sobre mí"
- Derecha: botón "Contacto" (pill blanca sólida)
- Sticky al hacer scroll, con fondo `rgba(5, 7, 12, 0.85)` y `backdrop-filter: blur(12px)` al entrar en modo sticky.

**Hero headline** (escalonado en 3 líneas):

```
Tu problema operativo,
entregado resuelto         ← línea en cursiva, color muted rgba(232, 234, 237, 0.38)
en semanas, no en meses.
```

**Subtítulo**:
> Consultor técnico independiente. Resuelvo problemas de operaciones, ventas y marketing construyendo software e IA a medida — sin agencias, sin subcontratas, sin PowerPoints.

**CTAs** (en fila, con `gap: 10px`):
- Primario: pill blanca sólida, texto `#0b1220`, label: **"Cuéntame tu problema →"**
- Secundario: pill ghost con borde sutil, label: **"Ver casos reales"**

**Barra de confianza** debajo (texto muted pequeño, separadores con `·`):

```
3 proyectos en producción  ·  ES · RO · EN  ·  Respuesta en 24h
```

### 3.2. "¿Esto te suena?"

Título: **"¿Esto te suena?"**
Subtítulo: *"Si te identificas con alguno de estos, probablemente puedo ayudarte."*

Grid de 4 cards (2x2 en desktop, 1 columna en mobile), cada una con fondo `#141d30`, padding generoso, borde sutil. Solo texto, sin iconos.

**Card 1** — Operaciones:
> "Pierdes horas gestionando pedidos con Excel y PDFs, y sabes que tiene que haber una forma mejor."

**Card 2** — Ecommerce:
> "Tu tienda online vende, pero sospechas que estás dejando dinero sobre la mesa con los clientes que ya tienes en la base de datos."

**Card 3** — Presencia digital:
> "Abres un negocio nuevo y no tienes ni web, ni presencia digital, ni tiempo para pelearte con diez herramientas distintas."

**Card 4** — Automatización:
> "Tienes un proceso repetitivo que come horas a tu equipo cada semana y que podría estar automatizado."

### 3.3. "Cómo trabajo"

Título: **"Cómo trabajo"**
Subtítulo: *"Tres pasos. Sin sorpresas."*

3 pasos numerados en horizontal (apilados en mobile). Cada uno con el número grande muted a la izquierda, título en peso 500, descripción debajo.

**01 · Entendemos tu problema.**
Una llamada de 30 minutos, gratis y sin compromiso. Me cuentas qué te frena. Te digo si puedo ayudarte y cómo. Si no puedo, te digo a quién llamar.

**02 · Te paso una propuesta concreta.**
Alcance cerrado, precio fijo, plazo. Sin "depende de", sin estimaciones infladas, sin letra pequeña.

**03 · Lo construyo y te lo entrego funcionando.**
En tu infraestructura, documentado, con sesión de traspaso. El sistema es tuyo al 100% desde el día uno.

### 3.4. "Sistemas reales. Resultados medidos."

**Sección crítica para conversión.** 3 cards en fila (apiladas en mobile), fondo `#141d30`, padding 24–28px.

Formato de cada card (de arriba abajo):

1. Label de categoría pequeña en muted con `letter-spacing: 0.08em` (ej: `RESTAURACIÓN · GESTIÓN DE RESEÑAS CON IA`)
2. Cifra protagonista grande (32–40px, peso 500) en color `#e8eaed`
3. Una línea corta describiendo la cifra, en muted
4. Separador `0.5px`
5. **Problema** (label muted "PROBLEMA") + 1–2 frases
6. **Qué hice** (label muted "SOLUCIÓN") + 1–2 frases
7. **Resultado** (label muted "RESULTADO") + 1–2 frases con cifra

#### Caso 1 — Restauración · Gestión de reseñas con IA

- **Cifra**: `[PENDIENTE]` (ej: "100%", "<2h", o "90%")
- **Descripción de la cifra**: `[PENDIENTE]` (ej: "de reseñas respondidas en menos de 2 horas")
- **Problema**: Un restaurante no tenía capacidad de responder sus reseñas de Google a tiempo. Cada reseña sin respuesta era un cliente potencial yéndose a la competencia.
- **Solución**: Sistema de respuesta automática con IA montado en AWS, que mantiene el tono de la marca y responde en minutos sin intervención humana.
- **Resultado**: `[PENDIENTE — cifra concreta antes/después]`

#### Caso 2 — Ecommerce · Automatización de email marketing

- **Cifra**: `[PENDIENTE]`
- **Descripción de la cifra**: `[PENDIENTE]`
- **Problema**: Una tienda online con miles de clientes en su base de datos que no estaba aprovechando. Cada venta dependía de captar clientes nuevos, ignorando a los que ya habían comprado.
- **Solución**: Análisis y segmentación GDPR de la base de contactos, templates HTML por flujo (bienvenida, carrito abandonado, reactivación, VIP, post-compra), 5 automatizaciones configuradas en TheMarketer + Gomag.
- **Resultado**: `[PENDIENTE]`

#### Caso 3 — Logística · Sistema de gestión de pedidos

- **Cifra**: `[PENDIENTE]`
- **Descripción de la cifra**: `[PENDIENTE]`
- **Problema**: Una empresa gestionaba sus pedidos desde PDFs y hojas de Excel, con errores de transcripción y retrasos en el picking que costaban tiempo y dinero cada día.
- **Solución**: Sistema completo de gestión de pedidos en AWS con carga automática desde PDF, gestión de picking y trazabilidad del proceso end-to-end.
- **Resultado**: `[PENDIENTE]`

> **Nota al implementador**: Deja los `[PENDIENTE]` como strings visibles en el código con un comentario `// TODO: rellenar por Tiberiu antes del deploy`. No inventes cifras.

### 3.5. "Quién soy"

Sección a dos columnas en desktop (foto izquierda, texto derecha), apilada en mobile.

- **Foto**: placeholder por ahora (`<div>` con fondo `#141d30` y texto "Foto real aquí"). Tiberiu subirá la suya.
- **Título**: "Hola, soy Tiberiu."
- **Párrafo corto** (2–3 frases):
  > Consultor técnico independiente basado en España. Trabajo en español, rumano e inglés, con clientes de ambos lados de Europa. Lo que me mueve: resolver problemas reales, no coordinarlos; que el código funcione en producción, no en slides; y trabajar directamente con el dueño del negocio, sin capas intermedias.

- **Mini-lista** debajo (muted, con `·` de separador, no con bullets):
  > Con sede en España  ·  Trabajo en ES, RO, EN  ·  Disponible para proyectos puntuales y retainers mensuales

### 3.6. CTA final

Bloque centrado, fondo `#0b1220`, padding vertical generoso (80–120px).

- **Titular grande**: "¿Y si lo resolvemos?"
- **Subtítulo**: "30 minutos. Sin compromiso. Te digo exactamente dónde estás perdiendo tiempo y dinero."
- **CTA**: pill blanca grande, "Cuéntame tu problema →"

### 3.7. Footer

Minimalista, fondo `#05070c`, con separador superior `0.5px`.

- Izquierda: "ribersistemas · © 2025"
- Derecha: enlaces discretos a LinkedIn y email de contacto
- Nada más. Sin menús repetidos, sin "política de privacidad" si no hay datos sensibles (si hay formulario, añadir aviso legal mínimo).

---

## 4. Qué QUITAR de la web actual

- El verde claro y el fondo blanco.
- Toda la ilustración de fondo (gráficos, portátiles, plantas, lupa, etc.).
- Los iconos genéricos que acompañan los textos.
- El badge superior "IA aplicada para PYMEs — sin complicaciones".
- El claim "20+ años en entornos de alta exigencia" — poco creíble para un perfil individual y poco diferenciador.
- El menú actual "Nosotros / Servicios / Blog / Contacto".
- Cualquier sección tipo "Nuestros valores" o "Por qué elegirnos" genérica, si existe.

---

## 5. Qué NO hacer (líneas rojas)

- **No** añadir ilustraciones, fotos de stock, ni iconos decorativos. La tipografía es el diseño.
- **No** usar gradientes decorativos, sombras grandes, blur, glow o efectos neon.
- **No** usar "nosotros" en el copy. Es un consultor individual.
- **No** inventar testimonios, logos de clientes, ni cifras. Si falta un dato, dejar `[PENDIENTE]`.
- **No** usar jerga de agencia ("transformación digital", "impulsamos", "partners", "soluciones end-to-end", "sinergias").
- **No** meter blog vacío. Si no hay posts reales, no crear la sección.
- **No** hacer la web responsive "como última capa". Diseñar mobile y desktop con el mismo cuidado.

---

## 6. Notas de implementación

1. **Inspecciona el repo primero.** Identifica el framework, la estructura de componentes, el sistema de estilos (Tailwind, CSS modules, styled-components, etc.) y adapta la implementación al stack existente.

2. **Crea un sistema de tokens** (variables CSS o equivalente) con los colores y tamaños tipográficos del brief, en lugar de hardcodearlos en cada componente.

3. **Responsive**: breakpoints estándar. Mobile-first.

4. **Accesibilidad**: ratio de contraste mínimo AA. El texto `rgba(232, 234, 237, 0.4)` sobre `#05070c` pasa justo — verifica con una herramienta y sube la opacidad a 0.5 si es necesario para cumplir.

5. **Performance**: no cargar fuentes pesadas, no importar librerías de iconos completas. Mantén el bundle ligero.

6. **Al terminar**:
   - Resume qué archivos han cambiado y por qué.
   - Marca claramente los `[PENDIENTE]` como TODO en el código.
   - **No hagas deploy automático.** Espera revisión manual de Tiberiu.
   - Lista cualquier decisión que hayas tomado por tu cuenta donde el brief fuera ambiguo, para que Tiberiu pueda validar.

---

## Resumen de deliverables

Al final del trabajo debe haber:

- [ ] Landing page nueva con las 6 secciones descritas.
- [ ] Sistema de colores y tipografía aplicado consistentemente.
- [ ] Patrón de puntos en el fondo de página implementado.
- [ ] Copy exacto del brief en cada sección (respetando el estilo).
- [ ] Placeholders `[PENDIENTE]` visibles donde falten datos.
- [ ] Responsive funcionando en mobile y desktop.
- [ ] Resumen de cambios y decisiones al terminar.
