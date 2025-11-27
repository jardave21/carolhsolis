# Guía de Implementación SEO - Próximos Pasos

## ✅ Completado

1. **Metadatos SEO en `layout.tsx`**
   - Título optimizado con template para páginas hijas
   - Descripción SEO-friendly
   - Keywords estratégicas
   - OpenGraph y Twitter Cards
   - Canonical URL
   - metadataBase configurado
   - Viewport separado (Next.js 16+)

2. **Metadatos SEO en `page.tsx` (Home)**
   - Título y descripción específicos
   - JSON-LD con Schema.org (Person)
   - Canonical URL

3. **`sitemap.ts` creado**
   - Genera automáticamente `/sitemap.xml`
   - Incluye todas las páginas principales
   - Prioridades y frecuencias de cambio configuradas

4. **`robots.ts` creado**
   - Genera automáticamente `/robots.txt`
   - Permite rastreo de todo el sitio
   - Bloquea rutas internas (/api/, /_next/)
   - Referencia al sitemap

## 📝 Páginas Pendientes de Crear

Para completar la estrategia SEO, necesitas crear las siguientes páginas. Aquí te muestro cómo hacerlo:

### 1. Página de Conferencias

Crea el archivo: `app/conferencias/page.tsx`

```tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Conferencias para Empresas | Carol H Solis - Speaker México",
  description:
    "Contrata conferencias inspiradoras para tu empresa o evento. Carol H Solis, conferencista política en México. Temas: liderazgo, activismo y transformación.",
  alternates: {
    canonical: "https://www.carolhsolis.com.mx/conferencias",
  },
}

export default function ConferenciasPage() {
  // JSON-LD para Servicio
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Conferencias y Presentaciones",
    provider: {
      "@type": "Person",
      name: "Carol H Solis",
    },
    areaServed: {
      "@type": "Country",
      name: "México",
    },
    description:
      "Conferencias inspiradoras para empresas, emprendedores y líderes políticos",
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">
          Conferencias que Inspiran Acción y Transformación
        </h1>
        
        <p className="text-lg mb-8">
          Como conferencista en México, ofrezco conferencias diseñadas para empresas, 
          organizaciones y eventos que buscan contenido de alto impacto. Mis presentaciones 
          combinan análisis político, activismo y experiencias reales para inspirar a líderes, 
          emprendedores y equipos de trabajo.
        </p>

        <h2 className="text-3xl font-bold mb-4">
          Temas de Conferencias Disponibles
        </h2>
        
        {/* Agrega aquí tu contenido de conferencias */}
        
        <h2 className="text-3xl font-bold mb-4 mt-12">
          ¿Por Qué Elegir a Carol H Solis como Conferencista?
        </h2>
        
        {/* Agrega aquí tu contenido */}
      </div>
    </>
  )
}
```

### 2. Página de Talleres

Crea el archivo: `app/talleres/page.tsx`

```tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Talleres de Liderazgo y Empoderamiento | Carol H Solis México",
  description:
    "Talleres corporativos y master classes de liderazgo para emprendedores y empresas en México. Aprende con Carol H Solis, experta en transformación social.",
  alternates: {
    canonical: "https://www.carolhsolis.com.mx/talleres",
  },
}

export default function TalleresPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Talleres Carol H Solis",
    description:
      "Talleres de liderazgo, empoderamiento y transformación social",
    provider: {
      "@type": "Person",
      name: "Carol H Solis",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">
          Talleres de Liderazgo, Empoderamiento y Transformación
        </h1>
        
        <p className="text-lg mb-8">
          Mis talleres de liderazgo en México están diseñados para emprendedores, 
          empresas y organizaciones que buscan desarrollar habilidades prácticas y 
          generar cambios reales. A través de master classes interactivas, combino 
          teoría, análisis político y herramientas aplicables para fortalecer el 
          liderazgo y el pensamiento crítico.
        </p>

        <h2 className="text-3xl font-bold mb-4">
          Talleres Corporativos para Empresas
        </h2>
        
        {/* Agrega aquí tu contenido */}
      </div>
    </>
  )
}
```

### 3. Página Sobre Mí

Crea el archivo: `app/sobre-mi/page.tsx`

```tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Carol H Solis | Analista Política, Activista y Escritora México",
  description:
    "Conoce a Carol H Solis: analista política, editorialista independiente, activista y conferencista en México. Trayectoria, valores y compromiso social.",
  alternates: {
    canonical: "https://www.carolhsolis.com.mx/sobre-mi",
  },
}

export default function SobreMiPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">
        Carol H Solis: Analista Política, Activista y Escritora
      </h1>
      
      <p className="text-lg mb-8">
        Soy Carol H Solis, analista política, activista, escritora y editorialista 
        independiente con base en México. Mi trabajo se centra en el análisis crítico 
        de la realidad política y social mexicana, combinando investigación rigurosa 
        con un compromiso profundo por la justicia y la transformación social.
      </p>

      <h2 className="text-3xl font-bold mb-4">
        Mi Trayectoria y Experiencia
      </h2>
      
      {/* Agrega aquí tu contenido */}
    </div>
  )
}
```

### 4. Página de Blog

Crea el archivo: `app/blog/page.tsx`

```tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog y Artículos | Carol H Solis - Análisis Político México",
  description:
    "Artículos de análisis político, opinión y activismo en México. Lee las columnas y reflexiones de Carol H Solis, editorialista independiente.",
  alternates: {
    canonical: "https://www.carolhsolis.com.mx/blog",
  },
}

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog de Carol H Solis",
    description: "Artículos de análisis político y opinión sobre México",
    author: {
      "@type": "Person",
      name: "Carol H Solis",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">
          Artículos de Análisis Político y Opinión
        </h1>
        
        <p className="text-lg mb-8">
          En este espacio comparto artículos de análisis político, columnas de opinión 
          y reflexiones sobre la realidad mexicana. Como editorialista independiente, 
          mi objetivo es ofrecer perspectivas críticas y fundamentadas que contribuyan 
          al debate público y a la construcción de una sociedad más justa.
        </p>

        <h2 className="text-3xl font-bold mb-4">
          Últimos Artículos Publicados
        </h2>
        
        {/* Agrega aquí tu lista de artículos */}
      </div>
    </>
  )
}
```

### 5. Página de Contacto

Crea el archivo: `app/contacto/page.tsx`

```tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto | Contrata a Carol H Solis - Conferencista México",
  description:
    "Contrata conferencias y talleres con Carol H Solis. Solicita información para tu evento empresarial o corporativo en México. Respuesta garantizada.",
  alternates: {
    canonical: "https://www.carolhsolis.com.mx/contacto",
  },
}

export default function ContactoPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">
        Contrata Conferencias y Talleres con Carol H Solis
      </h1>
      
      <p className="text-lg mb-8">
        ¿Buscas contratar una conferencista en México para tu próximo evento 
        empresarial o corporativo? Completa el formulario a continuación y recibe 
        una respuesta personalizada en menos de 24 horas. Ofrezco conferencias, 
        talleres y master classes adaptados a las necesidades de tu organización.
      </p>

      <h2 className="text-3xl font-bold mb-4">
        Solicita una Cotización
      </h2>
      
      {/* Agrega aquí tu formulario de contacto */}
    </div>
  )
}
```

## 🔧 Optimización de Imágenes

Para cada imagen que uses, asegúrate de agregar atributos `alt` descriptivos:

```tsx
import Image from "next/image"

<Image
  src="/images/carol-conferencia.jpg"
  alt="Carol H Solis conferencista durante presentación empresarial"
  width={800}
  height={600}
  loading="lazy"
/>
```

## 🔗 Enlaces Internos

Agrega enlaces internos en tus componentes existentes:

```tsx
import Link from "next/link"

// Ejemplo en Hero o About
<Link href="/conferencias" className="...">
  explora mis conferencias disponibles
</Link>

<Link href="/talleres" className="...">
  conoce los talleres de liderazgo
</Link>

<Link href="/sobre-mi" className="...">
  conoce mi trayectoria como analista política
</Link>
```

## 📊 Verificar Implementación

Después de crear las páginas, ejecuta:

```bash
npm run build
```

Esto generará:
- `/sitemap.xml` con todas las páginas
- `/robots.txt` con las reglas de rastreo

Puedes verificar los archivos en:
- `http://localhost:3000/sitemap.xml`
- `http://localhost:3000/robots.txt`

## 🚀 Próximos Pasos

1. **Crear las 5 páginas** usando los templates de arriba
2. **Agregar contenido real** a cada página (textos, imágenes, etc.)
3. **Implementar enlaces internos** entre páginas
4. **Optimizar imágenes** con atributos alt descriptivos
5. **Hacer build y deploy** a producción
6. **Registrar en Google Search Console** (ver estrategia_seo_carolhsolis.md)
7. **Enviar sitemap** a Google Search Console

## 📝 Notas Importantes

- **URLs amigables**: Las URLs ya están optimizadas (`/conferencias`, `/talleres`, etc.)
- **Canonical URLs**: Cada página tiene su URL canónica configurada
- **JSON-LD**: Datos estructurados para ayudar a Google a entender el contenido
- **Metadatos únicos**: Cada página tiene título y descripción únicos
- **Mobile-first**: Next.js ya optimiza para móvil automáticamente

## ✅ Checklist de Implementación

- [x] Metadatos SEO en layout.tsx
- [x] Metadatos SEO en page.tsx (home)
- [x] sitemap.ts creado
- [x] robots.ts creado
- [x] Viewport configurado correctamente
- [x] metadataBase configurado
- [ ] Crear página /conferencias
- [ ] Crear página /talleres
- [ ] Crear página /sobre-mi
- [ ] Crear página /blog
- [ ] Crear página /contacto
- [ ] Agregar enlaces internos
- [ ] Optimizar atributos alt de imágenes
- [ ] Deploy a producción
- [ ] Registrar en Google Search Console
- [ ] Enviar sitemap a Google

---

**Tiempo estimado para completar**: 2-3 días de trabajo
**Resultado esperado**: Sitio completamente optimizado para SEO orgánico
