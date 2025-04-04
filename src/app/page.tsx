'use client';

import Image from 'next/image';
import { titleFont } from './config/fonts';

const cats = [
  {
    id: 1,
    name: 'Benito',
    description: 'Experto en mimos y churus',
    image: '/cats/Benito-churu.MP4',
    isVideo: true,
    price: '$15.000/día',
    availability: 'Lunes a Viernes'
  },
  {
    id: 2,
    name: 'Touluse',
    description: 'Especialista en modelaje y siestas',
    image: '/cats/Touluse-modela.JPG',
    isVideo: false,
    price: '$12.000/día',
    availability: 'Fines de semana'
  },
  {
    id: 3,
    name: 'Vaquita',
    description: 'Perfecta para juegos y diversión',
    image: '/cats/Vaquita-juega.MOV',
    isVideo: true,
    price: '$18.000/día',
    availability: 'Todos los días'
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#e1d5c5] bg-opacity-90 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23391502%22%20fill-opacity%3D%220.05%22%20fill-rule%3D%22evenodd%22%3E%3Ccircle%20cx%3D%223%22%20cy%3D%223%22%20r%3D%223%22%2F%3E%3Ccircle%20cx%3D%2213%22%20cy%3D%2213%22%20r%3D%223%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] pt-16">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-[#391502] to-[#c44400] opacity-95" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className={`${titleFont.className} text-5xl font-bold mb-4`}>Cat.rolina Sitter</h1>
          <p className="text-xl mb-8">Cuidamos a tu felino como si fuera nuestro</p>
          <button className="bg-white text-[#391502] px-8 py-3 rounded-full font-semibold hover:bg-[#e1d5c5] hover:shadow-[0_2px_4px_rgba(57,21,2,0.1)] transition-all">
            Reserva Ahora
          </button>
        </div>
      </section>

      {/* Services Grid */}
      <section id="catsitters" className="max-w-7xl mx-auto py-16 px-4">
        <h2 className={`${titleFont.className} text-3xl font-bold text-center mb-12 text-[#391502]`}>
          Nuestros Catsitters Profesionales
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cats.map((cat) => (
            <div key={cat.id} className="bg-white rounded-lg shadow-[0_2px_4px_rgba(57,21,2,0.1)] overflow-hidden transform hover:scale-105 hover:shadow-[0_4px_8px_rgba(57,21,2,0.15)] transition-all duration-300">
              <div className="relative h-64">
                {cat.isVideo ? (
                  <video
                    src={cat.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    controls={false}
                  />
                ) : (
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover"
                    priority
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#391502]">{cat.name}</h3>
                <p className="text-[#391502]/80 mb-4">{cat.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#c44400] font-bold">{cat.price}</span>
                  <span className="text-sm text-[#391502]/70">{cat.availability}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="servicios" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className={`${titleFont.className} text-3xl font-bold text-center mb-12 text-[#391502]`}>
            ¿Por qué elegirnos?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_2px_4px_rgba(57,21,2,0.1)] border-2 border-[#c44400]">
                <span className="text-3xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#391502]">Cuidado en Casa</h3>
              <p className="text-[#391502]/80">Tu gato estará más cómodo en su ambiente familiar</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_2px_4px_rgba(57,21,2,0.1)] border-2 border-[#c44400]">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#391502]">Catsitters Certificados</h3>
              <p className="text-[#391502]/80">Personal capacitado y con experiencia</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_2px_4px_rgba(57,21,2,0.1)] border-2 border-[#c44400]">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#391502]">Actualizaciones Diarias</h3>
              <p className="text-[#391502]/80">Fotos y reportes de las actividades de tu gato</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="max-w-7xl mx-auto py-16 px-4">
        <div className="text-center">
          <h2 className={`${titleFont.className} text-3xl font-bold mb-8 text-[#391502]`}>¿Listo para empezar?</h2>
          <button className="bg-[#c44400] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#391502] hover:shadow-[0_2px_4px_rgba(57,21,2,0.1)] transition-all">
            Contáctanos
          </button>
        </div>
      </section>
    </main>
  );
}
