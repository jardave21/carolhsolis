"use client"

export default function SecondaryContent() {
  const books = [
    { title: "Nos están matando", image: "/images/libro3.jpg", link: "https://www.audible.com/es_US/pd/Nos-estan-matando-Audiolibro/B0DJVQ91GV?qid=1762703225&sr=1-3&ref_pageloadid=K2e9cR8cPXOyGjNC&pf_rd_p=83218cca-c308-412f-bfcf-90198b687a2f&pf_rd_r=NH1P06W7835EMZZ1WQ8N&plink=mKQdJnbAxk2L0VnE&pageLoadId=BoERn3Ywx1Bgiabk&creativeId=0d6f6720-f41c-457e-a42b-8c8dceb62f2c&ref=a_es-US_sea_c3_lProduct_1_3" },
    { title: "No podemos habitar", image: "/images/libro1.jpg", link: "https://www.audible.com/es_US/pd/No-podemos-habitar-Audiolibro/B0DTK751M3?qid=1762703225&sr=1-1&ref_pageloadid=K2e9cR8cPXOyGjNC&pf_rd_p=83218cca-c308-412f-bfcf-90198b687a2f&pf_rd_r=NH1P06W7835EMZZ1WQ8N&plink=mKQdJnbAxk2L0VnE&pageLoadId=BoERn3Ywx1Bgiabk&creativeId=0d6f6720-f41c-457e-a42b-8c8dceb62f2c&ref=a_es-US_sea_c3_lProduct_1_1" },
    { title: "Nos está tragando el mar", image: "/images/libro2.jpg", link: "https://www.audible.com/es_US/pd/Nos-esta-tragando-el-mar-Una-historia-de-crisis-climatica-y-desplazamiento-forzado-en-Mexico-Audiolibro/B0FG7PMS1B?ref_pageloadid=76eBdrVQDjKAZzBT&pf_rd_p=ba0b74bd-286d-453e-9588-8bf88c08f56e&pf_rd_r=F3VT2YDSMZ2VBX1N8DQP&plink=af5uLRIRzcjXfLc0&pageLoadId=c3vZ4ubh9Kni7WAK&creativeId=f95414bc-7ba6-4405-a00d-814a498f7165&ref=a_es-US_pd_c5_adblp13npsbx_1" },
  ]

  return (
    <section id="libros" className="py-20 px-4 md:px-6 bg-background scroll-mt-28">
      <div className="max-w-5xl mx-auto">
        {/* Books Section */} 
        <div className="text-center mb-16">
          <h2 className="text-3xl  font-anton mb-4">Mis Libros</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto font-open-sans">
            Autora de la trilogía sobre desplazamiento forzado interno en México.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {books.map((book) => (
            <div key={book.title} className="text-center p-4 border-2 border-transparent hover:border-primary transition-all duration-300 rounded-lg font-open-sans">
              <a href={book.link} target="_blank" rel="noopener noreferrer">
                <img src={book.image} alt={book.title} className="w-full h-auto rounded-lg shadow-lg mb-4" />
                <h3 className="text-lg font-medium">{book.title}</h3>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
