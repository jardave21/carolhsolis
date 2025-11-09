"use client"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-6 bg-white scroll-mt-28">
      <div className="max-w-3xl mx-auto scroll-mt-28">
        <div className="space-y-12">
          {/* ¿Quién Soy? */}
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
              <p>Dog lover.</p>
              <p>Coautora del libro Presidenta: más de 100 mujeres te escriben.</p>
            </div>
          </div>

          {/* ¿Qué Hago? */}
          <div id="que-hago" className="scroll-mt-28">
            <h2 className="text-3xl font-bold font-poppins text-foreground mb-6">¿QUÉ HAGO?</h2>
            <ul className="list-disc list-inside space-y-2 text-muted">
              <li>Conferencias</li>
              <li>Talleres</li>
              <li>Editorialista independiente</li>
              <li>Analista política</li>
              <li>Activista</li>
              <li>Escritora</li>
            </ul>
          </div>

          {/* Mis Temas */}
          <div id="mis-temas" className="scroll-mt-28">
            <h2 className="text-3xl font-bold font-poppins text-foreground mb-6">MIS TEMAS</h2>
            <ul className="list-disc list-inside space-y-2 text-muted">
              <li>Análisis político</li>
              <li>Racismo, clasismo y desigualdad</li>
              <li>Cultura animal</li>
              <li>Diversidad</li>
              <li>Feminismos y otras luchas</li>
            </ul>
          </div>

          {/* Quote */}
          <div className="pt-8 text-center">
            <blockquote className="text-xl italic text-foreground relative">
              <p>“Busco abrir el diálogo sobre los temas que generalmente no nos gusta hablar y aterrizarlos sin tanto rollo. Ponerlos sobre la mesa sin filtros y sin sutilezas, accesibles y desde una perspectiva simple que ayude a cuestionarnos.”</p>
              <footer className="mt-4 not-italic font-medium text-muted">— Carol H. Solís</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
