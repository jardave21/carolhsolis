"use client"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-6 bg-white scroll-mt-40">
      <div className="max-w-5xl mx-auto space-y-24">
        {/* ¿Quién Soy? */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Texto */}
          <div>
            <h2 className="text-3xl font-bold font-poppins text-foreground mb-6">¿QUIÉN SOY?</h2>
            <div className="space-y-4 text-muted">
              <p>Periodista con más de 25 años de experiencia.</p>
              <p>Autora de la trilogía sobre desplazamiento forzado interno en México:</p>
              <ul className="list-disc list-inside pl-4">
                <li>Nos están matando</li>
                <li>No podemos habitar</li>
                <li>Nos está tragando el mar</li>
              </ul>
              <p>Reconocida como Agente de Cambio 2022 por la revista Quién.</p>
              <p>Coautora del libro <em>Presidenta: más de 100 mujeres te escriben</em>.</p>
              <p>Dog lover.</p>
            </div>
          </div>

          {/* Imagen derecha – estable, sin “bajarse” en desktop */}
          <div className="w-full">
            <div className="w-full rounded-3xl shadow-lg overflow-hidden bg-white border border-border/40">
              {/* Mantén proporción y evita recortes feos */}
              <div className="aspect-[5/4]">
                <img
                  src="/images/foto.jpg"
                  alt="Carol H. Solís"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ¿Qué Hago? */}
        <div id="que-hago" className="grid md:grid-cols-2 gap-10 items-center scroll-mt-40">
          {/* Collage imágenes derecha */}
          <div className="md:order-2">
            <div className="grid grid-cols-2 gap-4">
              {/* Dos cards superiores del mismo alto */}
              <div className="rounded-2xl shadow-md overflow-hidden bg-white border border-border/40">
                <div className="aspect-[4/5]">
                  <img
                    src="/images/conferencias2.jpg"
                    alt="Cuidado y cultura animal"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="rounded-2xl shadow-md overflow-hidden bg-white border border-border/40">
                <div className="aspect-[4/5]">
                  <img
                    src="/images/perros.jpeg"
                    alt="Conferencia"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Card ancha inferior (no se corta) */}
              <div className="col-span-2 rounded-2xl shadow-md overflow-hidden bg-white border border-border/40">
                <div className="aspect-video">
                  <img
                    src="/images/conferencias3.jpg"
                    alt="Conferencia magistral"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Texto izquierda */}
          <div>
            <h2 className="text-3xl font-bold font-poppins text-foreground mb-6">¿QUÉ HAGO?</h2>
            <ul className="list-disc list-inside space-y-2 text-muted">
              <li>Master classes</li>
              <li>Conferencias</li>
              <li>Talleres</li>
              <li>Editorialista independiente</li>
              <li>Analista política</li>
              <li>Activista</li>
              <li>Escritora</li>
            </ul>
          </div>
        </div>

        {/* Mis Temas */}
        <div id="mis-temas" className="grid md:grid-cols-2 gap-10 items-center scroll-mt-40">
          {/* Texto */}
          <div>
            <h2 className="text-3xl font-bold font-poppins text-foreground mb-6">MIS TEMAS</h2>
            <ul className="list-disc list-inside space-y-2 text-muted">
              <li>Análisis político</li>
              <li>Racismo, clasismo y desigualdad</li>
              <li>Cultura animal</li>
              <li>Diversidad</li>
              <li>Feminismos y otras luchas</li>
            </ul>
          </div>

          {/* Dos thumbs lado a lado, misma altura */}
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl shadow-md overflow-hidden bg-white border border-border/40">
                <div className="aspect-video">
                  <img
                    src="/images/podcast1.jpg"
                    alt="Podcast 1"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="rounded-2xl shadow-md overflow-hidden bg-white border border-border/40">
                <div className="aspect-video">
                  <img
                    src="/images/podcast2.jpg"
                    alt="Podcast 2"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="pt-8 text-center">
          <blockquote className="text-xl italic text-foreground relative">
            <p>
              “Busco abrir el diálogo sobre los temas que generalmente no nos gusta hablar y
              aterrizarlos sin tanto rollo. Ponerlos sobre la mesa sin filtros y sin sutilezas,
              accesibles y desde una perspectiva simple que ayude a cuestionarnos.”
            </p>
            <footer className="mt-4 not-italic font-medium text-muted">— Carol H. Solís</footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
