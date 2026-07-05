# Plan de Desarrollo y Arquitectura: Nueva Web Muccino

Este documento detalla la reestructuración completa del sitio web de **Aceites Muccino**. La arquitectura está diseñada bajo el enfoque **Mobile-First** (con foco en el tráfico desde celulares en Paraguay), optimización SEO avanzada y centralización de datos para un desarrollo eficiente con **Astro** y **Tailwind CSS**.

---

## 🗺️ 1. Mapa del Sitio (Arquitectura de la Información)

- **`/` (Inicio):** Landing page principal orientada a la conversión y segmentación inmediata del tipo de cliente.
- **`/productos` (Catálogo):** Galería interactiva con filtros rápidos por volumen y aplicación.
- **`/mayorista` (B2B):** Sección exclusiva con información comercial para distribuidoras, despensas y el sector gastronómico.
- **`/nosotros` (Empresa):** Trayectoria de la marca (desde 2009), procesos de control de calidad e infraestructura de la planta.

---

## 📐 2. Estructura Detallada de la Home (Sección por Sección)

### A. Header / Navegación

- **Logo:** Isotipo/Logotipo de Muccino en alta fidelidad y formato vectorial.
- **Menú de Navegación:** Inicio | Productos | Distribución Mayorista | Nosotros.
- **CTA Principal:** Botón destacado `[ Contactar Ventas ]` vinculado al canal directo de WhatsApp.

### B. Hero Section (Primer Impacto Visual)

- **Visual:** Composición limpia de las botellas principales sobre un fondo uniforme de alta calidad.
- **H1 (Encabezado Principal):** `"Aceite de Soja Muccino: Calidad y Rendimiento para tu Hogar o Negocio"`
- **Subtítulo:** `"Fraccionamiento controlado y distribución en todo Paraguay desde 2009."`
- **Doble CTA de Conversión:**
  - _Botón Primario:_ `[ Ver Presentaciones ]` (Desplaza el scroll al catálogo).
  - _Botón Secundario:_ `[ Solicitar Catálogo Mayorista ]` (Abre flujo B2B).

### C. Segmentación por Tipo de Cliente (Filtro de Intención)

Tres tarjetas interactivas para guiar al usuario según su necesidad específica:

- **Tarjeta 1 (Hogar):** _"Formatos prácticos y económicos para el día a día en la cocina."_
- **Tarjeta 2 (Comercios y Despensas):** _"Alta rotación, empaque cerrado cerrado y excelente margen de ganancia."_
- **Tarjeta 3 (Gastronomía):** _"Bidones de alto rendimiento para restaurantes, comedores e industrias."_

### D. Catálogo de Productos Dinámico

- **Botonera de Filtros (Tabs):** `[ Todos ] [ Uso Familiar ] [ Uso Comercial / Gastronómico ]`
- **Grilla de Tarjetas (Cards de Producto):**
  - Fotografía real e individual del envase purificado sobre fondo blanco.
  - Título limpio (Ej: _Aceite de Soja Muccino · 900 ml_).
  - Etiqueta de destaque (Ej: `[ Formato Ahorro ]` o `[ Más Vendido ]`).
  - Ficha comercial: Unidades por caja y rendimiento sugerido.
  - Botón individual: `[ Consultar por WhatsApp ]` con texto predefinido codificado correctamente (`encodeURIComponent`) para evitar errores de caracteres.

### E. Pilares de Calidad y Confianza (Diferenciadores)

- **Fraccionamiento Controlado:** Procesos automatizados bajo estrictas normas de higiene y consistencia.
- **Suministro Continuo:** Stock garantizado durante todo el año para evitar quiebres en góndolas.
- **Logística Eficiente:** Distribución coordinada con cobertura optimizada.

### F. Captación B2B / Formulario de Cierre

- **Llamado a la acción:** _¿Querés ser distribuidor o comprar por volumen en tu zona?_
- **Campos del Formulario:** Nombre, Ciudad, Tipo de Negocio (Despensa, Gastronomía, Distribuidor), Teléfono de contacto.
- **Acción:** Envío automatizado a través de Netlify Forms o Formspree directo al correo corporativo.

### G. Footer (Pie de Página)

- Bloque institucional con logo y descripción breve.
- Datos fijos: Dirección física de la planta/depósito en Paraguay, teléfono principal y correo de contacto.
- Enlaces de privacidad y derechos reservados.

---

## ⚙️ 3. Centralizado de Datos (`src/data/siteInfo.ts`)

Archivo TypeScript para administrar las variables globales del negocio desde un único punto.

```typescript
export const siteInfo = {
  name: "Aceites Muccino",
  legalName: "Muccino S.A.",
  description:
    "Empresa paraguaya dedicada al fraccionamiento y distribución de aceite de soja comestible de alta calidad desde 2009.",
  url: "[https://muccino.com.py](https://muccino.com.py)",
  ogImage: "/images/og-default.jpg",

  contact: {
    phone: "+595982649300",
    phoneDisplay: "+595 982 649300",
    email: "ventas@muccino.com.py",
    address: "Asunción, Paraguay",
    googleMapsLink: "[https://maps.google.com/](https://maps.google.com/)...",
  },

  socials: {
    instagram:
      "[https://instagram.com/aceitesmuccino](https://instagram.com/aceitesmuccino)",
    facebook:
      "[https://facebook.com/aceitesmuccino](https://facebook.com/aceitesmuccino)",
  },

  logistics: {
    minOrderWholesale: "A partir de X cajas",
    coverage:
      "Distribución en Gran Asunción y principales cabeceras departamentales",
  },
};
```
