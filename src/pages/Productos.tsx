import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';

type Category = 'all' | 'dulce' | 'salada';

interface Product {
  name: string;
  desc: string;
  image: string;
  category: Category;
  badge: string;
  moment: string;
}

const products: Product[] = [
  {
    name: 'Galleta de Vainilla',
    desc: 'Clásica, suave y familiar. Un sabor sencillo que nunca falla y que siempre encuentra su lugar en la mesa.',
    image: '/img/producto-vainilla.webp',
    category: 'dulce',
    badge: 'Dulce',
    moment: 'Vainilla Tradicional',
  },
  {
    name: 'Galleta de Coco',
    desc: 'Un gusto, aromático y crujiente. Ideal para quienes tienen un paladar exótico con personalidad.',
    image: '/img/producto-coco.webp',
    category: 'dulce',
    badge: 'Dulce',
    moment: 'Coco Tropical',
  },
  {
    name: 'Besitos',
    desc: 'Pequeños y coloridos suspiritos en una galleta que conecta con la niñez de muchísimas personas.',
    image: '/img/producto-besitos.webp',
    category: 'dulce',
    badge: 'Dulce',
    moment: 'Sonrisas de grandes y chicos',
  },
  {
    name: 'Dedos de Señora',
    desc: 'Delicados, prácticos y deliciosos. Una galleta ideal para crear tus postres, acompañar al café o momentos especiales.',
    image: '/img/producto-dedos.webp',
    category: 'dulce',
    badge: 'Dulce',
    moment: 'En repostería o solas',
  },
  {
    name: 'Galleta Griega',
    desc: 'Horneadas con sabor a tradición. Las auténticas Galletas Griegas Pituca, despiertan recuerdos y evocan el sabor de hogar.',
    image: '/img/producto-griega.webp',
    category: 'dulce',
    badge: 'Dulce',
    moment: 'Tradición Familiar',
  },
  {
    name: 'Galletas Juanita',
    desc: 'Delicadamente horneadas y llenas de tradición, las Juanitas ofrecen una experiencia dulce y auténtica, con una textura equilibrada y un sabor clásico que permanece en la memoria.',
    image: '/img/producto-juanita.webp',
    category: 'dulce',
    badge: 'Dulce',
    moment: 'Favorita de Siempre',
  },
  {
    name: 'Cajeta Típica',
    desc: 'Elaborada con leche en polvo y un toque de vainilla, nuestra Cajeta Típica ofrece la cremosidad y el sabor tradicional que endulza los mejores momentos.',
    image: '/img/producto-cajeta.webp',
    category: 'dulce',
    badge: 'Dulce',
    moment: 'Hecha para comparti',
  },
  {
    name: 'Galleta Salada',
    desc: 'Crujiente, rica y funcional. Pensada para acompañar comidas, boquitas, sopas y antojos con su sabor inconfundible.',
    image: '/img/producto-galleta-salada.webp',
    category: 'salada',
    badge: 'Salada',
    moment: 'Combina con todo',
  },
  {
    name: 'Bizcochos de Maíz y Queso',
    desc: 'Un sabor tradicional con identidad costarricense. Crujientes, caseras y hechas para compartir.',
    image: '/img/producto-bizcochos.webp',
    category: 'salada',
    badge: 'Salada',
    moment: 'De la mazorca a tu mano',
  },
];

export default function Productos() {
  const [filter, setFilter] = useState<Category>('all');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    if (ref.current) {
      ref.current.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    }
    return () => observer.disconnect();
  }, [filter]);

  const filtered = filter === 'all' ? products : products.filter((p) => p.category === filter);

  return (
    <div ref={ref} className="min-h-[100dvh]">
      {/* ===== Hero ===== */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 animate-heroZoom"
            style={{
              backgroundImage: `url("/img/hero-productos.webp")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(15,8,4,0.94)] via-[rgba(15,8,4,0.82)] to-[rgba(15,8,4,0.76)]" />
          <div
            className="absolute inset-0 opacity-[0.1] mix-blend-soft-light"
            style={{
              backgroundImage: 'url("https://www.transparenttextures.com/patterns/asfalt-light.png")',
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at 70% 40%, rgba(232,119,34,0.2), transparent 45%)',
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6">
          <div className="max-w-[700px]">
            <span className="inline-block mb-4 text-[#ffb36b] uppercase tracking-[0.18em] text-[0.8rem] font-semibold">
              Nuestros Productos
            </span>
            <h1 className="font-['Playfair_Display'] text-[clamp(2.5rem,5vw,4rem)] font-bold text-white leading-[1.1] mb-6">
              Galletas que son{' '}
              <span className="bg-gradient-to-br from-[#E87722] to-[#ffcb96] bg-clip-text text-transparent">
                momentos
              </span>
            </h1>
            <p className="text-white/75 text-[1.1rem] leading-[1.9] max-w-[560px]">
              Cada galleta es elaborada con recetas originales y los mejores ingredientes, 
              para que cada mordisco sea una experiencia memorable alrededor de la mesa familiar.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Manifiesto ===== */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFFBF7] to-white" />
        <div className="relative z-10 w-full max-w-[800px] mx-auto px-6 text-center">
          <div className="reveal">
            <p className="font-['Playfair_Display'] text-[1.4rem] md:text-[1.6rem] text-[#5A2D0C] italic leading-[1.8]">
              "No vendemos galletas, acompañamos tus momentos. Cada paquete que se abre 
              es una invitación a sentarse, a compartir, a conversar"
            </p>
          </div>
        </div>
      </section>

      {/* ===== Products ===== */}
      <section className="py-12 md:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-[#FFFBF7]" />
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6">
          {/* Filter */}
          <div className="flex gap-3 flex-wrap justify-center mb-12 reveal">
            {([
              { key: 'all', label: 'Todas' },
              { key: 'dulce', label: 'Dulces' },
              { key: 'salada', label: 'Saladas' },
            ] as const).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`px-6 py-[0.65rem] rounded-full font-semibold text-[0.9rem] transition-all duration-300 border-2 ${
                  filter === tab.key
                    ? 'bg-gradient-to-r from-[#E87722] to-[#C45A10] text-white border-transparent shadow-[0_4px_15px_rgba(232,119,34,0.3)]'
                    : 'bg-transparent text-[#6B4423] border-[#E8E8E8] hover:border-[#E87722] hover:text-[#E87722]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((product, i) => (
              <article
                key={product.name}
                className="reveal glass-card overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_16px_48px_rgba(90,45,12,0.14)] group flex flex-col"
                style={{ transitionDelay: `${i * 80}ms`, animation: 'fadeInUp 0.5s ease forwards' }}
              >
                <div
                  className="h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: 'linear-gradient(90deg, #E87722, #FF9F43, #E87722)',
                    backgroundSize: '200% auto',
                    animation: 'shimmer 3s linear infinite',
                  }}
                />
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(90,45,12,0.5)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block px-4 py-[0.35rem] bg-[rgba(232,119,34,0.15)] rounded-full text-[0.75rem] font-bold text-[#E87722] uppercase tracking-wider">
                      {product.badge}
                    </span>
                  </div>
                  <h3 className="font-['Playfair_Display'] text-[1.3rem] font-bold text-[#5A2D0C] mb-2">
                    {product.name}
                  </h3>
                  <p className="text-[#6B4423] text-[0.9rem] leading-[1.7] flex-1 mb-3">
                    {product.desc}
                  </p>
                  <p className="text-[#9B7B5B] text-[0.8rem] italic mb-4 flex items-center gap-1.5">
                    <span className="text-[#E87722]">✦</span> {product.moment}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA Final ===== */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFFBF7] to-[#FFF5EC]" />
        <div className="relative z-10 w-full max-w-[800px] mx-auto px-6 text-center">
          <div className="reveal glass-card p-10 md:p-14">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[rgba(232,119,34,0.12)] flex items-center justify-center text-[#E87722]">
              <MapPin className="w-8 h-8" />
            </div>
            <h2 className="font-['Playfair_Display'] text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#5A2D0C] mb-4">
              ¿Querés probar nuestras galletas?
            </h2>
            <p className="text-[#6B4423] text-[1.05rem] leading-[1.8] mb-8 max-w-[600px] mx-auto">
              Encontrá Galletas Pituca en supermercados seleccionados de Costa Rica. 
              Revisá el punto de venta más cercano a vos.
            </p>
            <Link
              to="/donde-encontrarnos"
              className="btn-modern btn-modern-orange inline-flex items-center gap-2"
            >
              Dónde encontrarnos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}