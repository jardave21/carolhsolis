"use client"

export default function About() {
  return (
    <section id="about" className="py-5 px-4 md:px-6 bg-white scroll-mt-40">
      <div className="max-w-5xl mx-auto">

        {/* ... (Secciones anteriores: ¿Quién soy?, ¿Qué hago? se mantienen igual) ... */}

        {/* ¿Quién Soy? */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="font-open-sans">
            <h2 className="font-anton text-[#F23827] mb-6 text-[36px] sm:text-[60px] md:text-[80px] lg:text-[140px] xl:text-[180px] whitespace-nowrap lg:whitespace-normal leading-none lg:leading-[0.95]">
              ¿QUIÉN
              <span className="hidden lg:inline"><br /></span>
              <span className="inline lg:hidden">&nbsp;</span>
              SOY?
            </h2>
            <div className="space-y-4 text-[#333] max-w-[520px] text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed">
              <p><strong className="font-extrabold text-black">Periodista</strong> con más de 25 años de experiencia.</p>
              <p><strong className="font-extrabold text-black">Autora</strong> de la trilogía sobre desplazamiento forzado interno en México:</p>
              <ul className="list-disc list-inside space-y-1 pl-1">
                <li>Nos están matando</li>
                <li>No podemos habitar</li>
                <li>Nos está tragando el mar</li>
              </ul>
              <p>Reconocida como <strong className="font-extrabold text-black">Agente de Cambio 2022</strong> por la revista Quién.</p>
              <p><strong className="font-extrabold text-black">Coautora</strong> del libro <em>"Presidenta: más de 100 mujeres te escriben"</em>.</p>
            </div>
          </div>
          <div className="w-full md:flex md:justify-end">
            <div className="rounded-3xl shadow-lg bg-white border border-border/40 p-2 overflow-hidden">
              <img src="/images/foto.jpg" alt="Carol H. Solís" className="block mx-auto w-full h-auto max-h-[580px] object-contain" />
            </div>
          </div>
        </div>


        {/* Separator */}
        <div className="w-full h-4 bg-[#F23827] rounded-full mx-auto mt-12 mb-24"></div>

        {/* ¿Qué Hago? */}
        <div id="que-hago" className="grid md:grid-cols-2 gap-10 items-center scroll-mt-40">
          <div className="md:order-2">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1 rounded-2xl shadow-md overflow-hidden bg-white border border-border/40 h-80 w-full">
                <div className="aspect-[4/5] h-80 w-full">
                  <img src="/images/conferencias2.jpg" alt="Cuidado y cultura animal" className="h-full w-full object-cover" />
                </div>
              </div>
              <div className="col-span-2 rounded-2xl shadow-md overflow-hidden bg-white border border-border/40 h-80 w-full">
                <div className="aspect-video h-80 w-full">
                  <img src="/images/conferencias4.jpg" alt="Conferencia" className="h-full w-full object-cover" />
                </div>
              </div>
              <div className="col-span-3 rounded-2xl shadow-md overflow-hidden bg-white border border-border/40">
                <div className="aspect-video">
                  <img src="/images/conferencias3.jpg" alt="Conferencia magistral" className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
          <div className="font-open-sans">
            <h2 className="font-anton text-[#F23827] mb-6 text-[36px] sm:text-[60px] md:text-[80px] lg:text-[140px] xl:text-[180px] whitespace-nowrap lg:whitespace-normal leading-none lg:leading-[0.95]">
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

        {/* Separator */}
        <div className="w-full h-4 bg-[#F23827] rounded-full mx-auto mt-12 mb-24"></div>

        {/* MIS TEMAS */}
        <div id="mis-temas" className="grid md:grid-cols-2 gap-10 items-start scroll-mt-40 mt-[5px] md:mt-[150px]">

          {/* Texto (Columna Izquierda) */}
          <div className="font-open-sans">
            <h2
              className="
                font-anton text-[#F23827] mb-3
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

            <ul className="list-disc list-inside space-y-2 text-[#333] max-w-[520px] text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed mt-6">
              <li>Análisis político</li>
              <li>Racismo, clasismo y desigualdad</li>
              <li>Cultura animal</li>
              <li>Diversidad</li>
              <li>Feminismos y otras luchas</li>
            </ul>
          </div>

          {/* BOTÓN + IMÁGENES (Columna Derecha) */}
          {/* CAMBIO: Se agregaron clases md:mt-12 y lg:mt-24 para bajar el bloque completo y alinear el botón con "MIS" */}
          <div className="space-y-20 md:mt-12 lg:mt-24">

            {/* BOTÓN YOUTUBE */}
            <a
              href="http://www.youtube.com/@carolhsolis"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group w-full md:w-[420px] mx-auto
                flex items-center justify-between
                bg-gradient-to-r from-[#F23827] to-[#d62211]
                text-white font-bold
                px-6 py-4 md:px-8 md:py-5 rounded-full shadow-lg shadow-red-500/30
                hover:shadow-red-500/50 hover:scale-[1.02]
                transition-all duration-300
              "
            >
              <span className="text-base sm:text-lg tracking-wide">
                MIRA LOS VIDEOS EN YOUTUBE
              </span>

              <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-7 h-7 sm:w-8 sm:h-8 group-hover:text-red-100 transition-colors" viewBox="0 0 24 24">
                  <path d="M19.615 3.184a4.78 4.78 0 01 1.675 1.675c.394.7.63 1.49.71 2.36.12 1.33.12 2.66.12 4s0 2.67-.12 4a6.56 6.56 0 01-.71 2.36 4.78 4.78 0 01-1.675 1.675c-.7.39-1.49.63-2.37.71-1.33.12-2.66.12-3.99.12s-2.66 0-3.99-.12a6.56 6.56 0 01-2.37-.71 4.78 4.78 0 01-1.675-1.675 6.56 6.56 0 01-.71-2.36c-.12-1.33-.12-2.66-.12-4s0-2.67.12-4c.08-.87.316-1.66.71-2.36A4.78 4.78 0 015.505 3.184c.7-.394 1.49-.63 2.37-.71C9.205 2.35 10.535 2.33 11.865 2.33c1.33 0 2.66.02 3.99.14.88.08 1.67.32 2.37.71zM10 8.5v5l4.5-2.5L10 8.5z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </a>

            {/* IMÁGENES */}
            <div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl shadow-md overflow-hidden bg-white border border-border/40">
                  <div className="aspect-video">
                    <img src="/images/podcast1.jpg" alt="Podcast 1" className="h-full w-full object-cover" />
                  </div>
                </div>
                <div className="rounded-2xl shadow-md overflow-hidden bg-white border border-border/40">
                  <div className="aspect-video">
                    <img src="/images/podcast2.jpg" alt="Podcast 2" className="h-full w-full object-cover" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Cita final */}
        <div className="pt-8 text-center font-open-sans">
          <blockquote className="text-xl italic relative">
            <p>
              “Busco abrir el diálogo sobre los temas que generalmente no nos gusta hablar y aterrizarlos sin tanto rollo.
              Ponerlos sobre la mesa sin filtros y sin sutilezas, accesibles y desde una perspectiva simple que ayude a cuestionarnos.”
            </p>
            <footer className="mt-4 not-italic font-medium text-muted">— Carol H. Solís</footer>
          </blockquote>
        </div>

      </div>
    </section >
  )
}