import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';

interface Supermarket {
  name: string;
  href: string;
  note: string;
  logo: string;
}

const supermarkets: Supermarket[] = [
  {
    name: 'Walmart',
    href: 'https://www.walmart.co.cr/localizador-de-tiendas',
    note: 'Localizador oficial de tiendas Walmart Costa Rica.',
    logo: '/img/Walmart.png',
  },
  {
    name: 'Palí',
    href: 'https://www.maxipali.co.cr/ubicaciones-pali-costa-rica',
    note: 'Ubicaciones oficiales de Palí Costa Rica.',
    logo: '/img/Pali.png',
  },
  {
    name: 'MaxiPalí',
    href: 'https://www.maxipali.co.cr/ubicaciones-pali-costa-rica',
    note: 'Ubicaciones oficiales de MaxiPalí Costa Rica.',
    logo: '/img/Maxipali.png',
  },
  {
    name: 'Más x Menos',
    href: 'https://www.masxmenos.cr/localizador-de-tiendas',
    note: 'Localizador oficial de tiendas Más x Menos.',
    logo: '/img/MasxMenos.jpg',
  },
  {
    name: 'AutoMercado',
    href: 'https://automercado.cr/',
    note: 'Sitio oficial de AutoMercado Costa Rica.',
    logo: '/img/AutoMercado.png',
  },
  {
    name: 'Supermercados BM',
    href: 'https://bm.cr/tiendas',
    note: 'Tiendas oficiales de Supermercados BM.',
    logo: '/img/BM.jpg',
  },
];

export default function DondeEncontrarnos() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      ref.current
        .querySelectorAll('.reveal')
        .forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="min-h-[100dvh]">

      {/* HERO */}
      <section className="relative py-28 md:py-36 overflow-hidden">

        <div className="absolute inset-0">
          <div
            className="absolute inset-0 animate-heroZoom"
            style={{
              backgroundImage: 'url("/img/hero-donde-encontrarnos.webp")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(15,8,4,0.94)] via-[rgba(15,8,4,0.82)] to-[rgba(15,8,4,0.76)]" />

          <div
            className="absolute inset-0 opacity-[0.1] mix-blend-soft-light"
            style={{
              backgroundImage:
                'url("https://www.transparenttextures.com/patterns/asfalt-light.png")',
            }}
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 30% 50%, rgba(232,119,34,0.2), transparent 45%)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <div className="max-w-[700px]">

            <span className="inline-block mb-4 text-[#ffb36b] uppercase tracking-[0.18em] text-[0.8rem] font-semibold">
              Puntos de Venta
            </span>

            <h1 className="font-['Playfair_Display'] text-[clamp(2.5rem,5vw,4rem)] font-bold text-white leading-[1.1] mb-6">
              Encuentra Pituca{' '}
              <span className="bg-gradient-to-br from-[#E87722] to-[#ffcb96] bg-clip-text text-transparent">
                cerca de ti
              </span>
            </h1>

            <p className="text-white/75 text-[1.1rem] leading-[1.9] max-w-[560px]">
              Pituca está presente en las principales cadenas de supermercados
              del país. Elegí tu cadena favorita para encontrar la sucursal más cercana.
            </p>

          </div>
        </div>

      </section>

      {/* SUPERMERCADOS */}
      <section className="py-20 md:py-28 relative">

        <div className="absolute inset-0 bg-gradient-to-b from-[#FFFBF7] to-white" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6">

          <div className="text-center mb-14 reveal">

            <span className="section-tag">
              Supermercados
            </span>

            <h2 className="section-title">
              Nuestras cadenas aliadas
            </h2>

            <p className="section-subtitle mx-auto">
              Seleccioná un supermercado para abrir su localizador oficial de tiendas.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {supermarkets.map((market, i) => (

              <a
                key={market.name}
                href={market.href}
                className="reveal glass-card p-8 transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_16px_48px_rgba(90,45,12,0.14)] group block"
                style={{
                  transitionDelay: `${i * 80}ms`,
                }}
              >

                <div className="w-full h-[180px] rounded-2xl overflow-hidden bg-white shadow-[0_10px_24px_rgba(0,0,0,0.08)] flex items-center justify-center mb-6">

                  <img
                    src={market.logo}
                    alt={market.name}
                    className="max-w-[92%] max-h-[150px] object-contain"
                    loading="lazy"
                  />

                </div>

                <h3 className="font-['Playfair_Display'] text-[1.5rem] font-bold text-[#5A2D0C] mb-3">
                  {market.name}
                </h3>

                <p className="text-[#6B4423] leading-[1.8] text-[0.95rem]">
                  {market.note}
                </p>

                <div className="mt-6 flex items-center gap-2 text-[#E87722] font-semibold group-hover:gap-3 transition-all">
                  <span>Ver tiendas</span>
                  <ArrowRight className="w-4 h-4" />
                </div>

              </a>

            ))}

          </div>

        </div>

      </section>

      {/* INFO */}
      <section className="py-16 relative">

        <div className="absolute inset-0 bg-gradient-to-b from-white to-[#FFF5EC]" />

        <div className="relative z-10 max-w-[800px] mx-auto px-6">

          <div className="reveal glass-card p-8 md:p-10 border-l-4 border-[#E87722]">

            <div className="flex items-start gap-4">

              <div className="w-12 h-12 rounded-full bg-[rgba(232,119,34,0.12)] flex items-center justify-center text-[#E87722] shrink-0">
                <MapPin className="w-6 h-6" />
              </div>

              <div>

                <h3 className="font-['Playfair_Display'] text-[1.3rem] font-bold text-[#5A2D0C] mb-3">
                  Disponibilidad Siempre Fresca
                </h3>

                <p className="text-[#6B4423] leading-[1.8]">
                  Puedes encontrar Galletas Pituca disponibles en las principales
                  cadenas de supermercados. Consultá la sucursal más cercana
                  utilizando los localizadores oficiales.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-20 relative">

        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF5EC] to-[#FFFBF7]" />

        <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center">

          <div className="reveal">

            <h2 className="font-['Playfair_Display'] text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#5A2D0C] mb-4">
              ¿No encontrás Pituca en tu supermercado?
            </h2>

            <p className="text-[#6B4423] text-[1.05rem] leading-[1.8] mb-8 max-w-[600px] mx-auto">
              Contactanos y te ayudamos a ubicar el punto de venta más cercano.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">

              <Link
                to="/contacto"
                className="btn-modern btn-modern-orange inline-flex items-center gap-2"
              >
                Contactar
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/productos"
                className="btn-modern btn-modern-outline"
              >
                Ver productos
              </Link>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}