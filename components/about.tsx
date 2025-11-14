"use client"

export default function About() {
  return (
    <section id="about" className="py-5 px-4 md:px-6 bg-white scroll-mt-40">
      <div className="max-w-5xl mx-auto space-y-24">

        {/* ¿Quién Soy? */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Texto */}
          <div className="font-open-sans">
            <h2
              className="
                font-anton text-[#ff9d33] mb-6
                text-[36px] sm:text-[60px] md:text-[80px] lg:text-[140px] xl:text-[180px]
                whitespace-nowrap lg:whitespace-normal
                leading-none lg:leading-[0.95]
              "
            >
              ¿QUIÉN
              {/* En desktop: salto de línea. En móvil: espacio */}
              <span className="hidden lg:inline"><br /></span>
              <span className="inline lg:hidden">&nbsp;</span>
              SOY?
            </h2>

            <div className="space-y-4 text-[#333] max-w-[520px] text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed">
              <p>
                <strong className="font-extrabold text-black">Periodista</strong> con más de 25 años de experiencia.
              </p>
              <p>
                <strong className="font-extrabold text-black">Autora</strong> de la trilogía sobre desplazamiento forzado interno en México:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-1">
                <li>Nos están matando</li>
                <li>No podemos habitar</li>
                <li>Nos está tragando el mar</li>
              </ul>
              <p>
                Reconocida como <strong className="font-extrabold text-black">Agente de Cambio 2022</strong> por la revista Quién.
              </p>
              <p>
                <strong className="font-extrabold text-black">Coautora</strong> del libro <em>"Presidenta: más de 100 mujeres te escriben"</em>.
              </p>
            </div>
          </div>

          {/* Imagen derecha */}
          <div className="w-full md:flex md:justify-end">
            <div className="rounded-3xl shadow-lg bg-white border border-border/40 p-2 overflow-hidden">
              <img
                src="/images/foto.jpg"
                alt="Carol H. Solís"
                className="block mx-auto w-full h-auto max-h-[580px] object-contain"
              />
            </div>
          </div>
        </div>

        {/* ¿Qué Hago? */}
        <div id="que-hago" className="grid md:grid-cols-2 gap-10 items-center scroll-mt-40">

          {/* Collage imágenes */}
          <div className="md:order-2">
            <div className="grid grid-cols-2 gap-4">
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

          {/* Texto */}
          <div className="font-open-sans">
            <h2
              className="
                font-anton text-[#ff9d33] mb-6
                text-[36px] sm:text-[60px] md:text-[80px] lg:text-[140px] xl:text-[180px]
                whitespace-nowrap lg:whitespace-normal
                leading-none lg:leading-[0.95]
              "
            >
              ¿QUÉ
              <span className="hidden lg:inline"><br /></span>
              <span className="inline lg:hidden">&nbsp;</span>
              HAGO?
            </h2>

            <ul className="list-disc list-inside space-y-2 text-[#333] max-w-[520px] text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed">
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
<div
  id="mis-temas"
  className="grid md:grid-cols-2 gap-10 items-center scroll-mt-40 mt-[5px] md:mt-[150px]"
>

  {/* Texto */}
  <div className="font-open-sans">
    <h2
      className="
        font-anton text-[#ff9d33] mb-6
        text-[36px] sm:text-[60px] md:text-[80px] lg:text-[140px] xl:text-[180px]
        whitespace-nowrap lg:whitespace-normal
        leading-none lg:leading-[0.95]
      "
    >
      MIS
      <span className="hidden lg:inline"><br /></span>
      <span className="inline lg:hidden">&nbsp;</span>
      TEMAS
    </h2>

    <ul className="list-disc list-inside space-y-2 text-[#333] max-w-[520px] text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed">
      <li>Análisis político</li>
      <li>Racismo, clasismo y desigualdad</li>
      <li>Cultura animal</li>
      <li>Diversidad</li>
      <li>Feminismos y otras luchas</li>
    </ul>
  </div>

  {/* Imágenes */}
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

        {/* Cita final */}
        <div className="pt-8 text-center font-open-sans">
          <blockquote className="text-xl italic relative">
            <p>
              “Busco abrir el diálogo sobre los temas que generalmente no nos gusta hablar y aterrizarlos sin tanto rollo. Ponerlos sobre la mesa sin filtros y sin sutilezas, accesibles y desde una perspectiva simple que ayude a cuestionarnos.”
            </p>
            <footer className="mt-4 not-italic font-medium text-muted">
              — Carol H. Solís
            </footer>
          </blockquote>
        </div>

      </div>
    </section>
  )
}
