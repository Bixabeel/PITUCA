import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, Coffee, Clock, MapPin } from 'lucide-react';

function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden -mt-[88px]">
      <div
        className="absolute inset-0 animate-heroZoom"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(15,8,4,0.96) 0%, rgba(15,8,4,0.82) 35%, rgba(15,8,4,0.48) 60%, rgba(15,8,4,0.78) 100%), url("/img/hero-home.webp")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.72) sepia(0.14) saturate(0.92)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.12] mix-blend-soft-light pointer-events-none z-[1]"
        style={{
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/asfalt-light.png")',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            'radial-gradient(circle at 20% 50%, rgba(232,119,34,0.18), transparent 42%), linear-gradient(180deg, rgba(0,0,0,0.12), rgba(0,0,0,0.42))',
        }}
      />

      <div className="relative z-[5] w-full max-w-[1200px] mx-auto px-6 pt-32">
        <div className="glass-card-dark max-w-[680px] p-8 md:p-12 animate-fadeInUp">
          <span className="inline-block mb-5 text-[#ffb36b] uppercase tracking-[0.18em] text-[0.8rem] font-semibold">
            Desde 1969
          </span>
          <h1 className="font-['Playfair_Display'] text-[clamp(2.8rem,6vw,5rem)] leading-[0.95] tracking-tight mb-6 text-white">
            El sabor que une{' '}
            <span className="block bg-gradient-to-br from-[#E87722] to-[#ffcb96] bg-clip-text text-transparent">
              generaciones
            </span>
          </h1>
          <p className="text-[1.1rem] leading-[1.9] text-white/90 mb-8 max-w-[560px]">
            Más de cinco décadas acompañando las tardes de café, las reuniones familiares 
            y los momentos que se quedan en la memoria. Galletas Pituca: tradición 
            costarricense hecha con amor.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/nosotros" className="btn-modern btn-modern-primary inline-flex items-center gap-2">
              Nuestra historia
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/productos" className="btn-modern btn-modern-secondary">
              Descubrir productos
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-8 z-[5] flex flex-col items-center gap-3 text-white/55 text-[0.72rem] uppercase tracking-[0.18em]">
        <span>◕</span>
        <div
          className="w-px h-[42px]"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.85), transparent)',
            animation: 'scrollPulse 2s ease-in-out infinite',
          }}
        />
      </div>
    </section>
  );
}

function FamilyValuesSection() {
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
  }, []);

  const values = [
    {
      icon: <Heart className="w-7 h-7" />,
      title: 'Hechas con Amor',
      desc: 'Cada galleta lleva el cariño de una receta familiar que se transmite de generación en generación.',
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: 'Reunión Familiar',
      desc: 'Desde 1969 somos el pretexto perfecto para juntar a la familia alrededor de la mesa.',
    },
    {
      icon: <Coffee className="w-7 h-7" />,
      title: 'Momentos de Calidez',
      desc: 'El acompañante ideal para esas charlas interminables con una taza de café humeante.',
    },
    {
      icon: <Clock className="w-7 h-7" />,
      title: 'Tradición Viva',
      desc: 'Más de cinco décadas manteniendo viva la esencia del sabor costarricense auténtico.',
    },
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFBF7] via-[#FFF5EC] to-[#FFFBF7]" />
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <span className="section-tag">Nuestra Esencia</span>
          <h2 className="section-title">Somos galletas, somos momentos</h2>
          <p className="section-subtitle mx-auto">
            Cuando alguien abre un paquete de Galletas Pituca, no solo comparte una merienda: 
            comparte tradición, historia y el sabor de sentirse en casa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div
              key={i}
              className="reveal glass-card p-8 text-center transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_16px_48px_rgba(90,45,12,0.14)] group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-gradient-to-br from-[rgba(232,119,34,0.15)] to-[rgba(90,45,12,0.08)] flex items-center justify-center text-[#E87722] transition-transform duration-300 group-hover:scale-110">
                {v.icon}
              </div>
              <h3 className="font-['Playfair_Display'] text-[1.25rem] font-bold text-[#5A2D0C] mb-3">
                {v.title}
              </h3>
              <p className="text-[#6B4423] text-[0.95rem] leading-[1.7]">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StorySection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      ref.current.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("/img/historia-abuelita.webp")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(15,8,4,0.94)] via-[rgba(15,8,4,0.82)] to-[rgba(15,8,4,0.76)]" />
        <div
          className="absolute inset-0 opacity-[0.08] mix-blend-soft-light pointer-events-none"
          style={{
            backgroundImage: 'url("https://www.transparenttextures.com/patterns/asfalt-light.png")',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="reveal">
            <span className="inline-block mb-5 text-[#ffb36b] uppercase tracking-[0.22em] text-[0.78rem] font-semibold">
              Una historia con raíces
            </span>
            <h2 className="font-['Playfair_Display'] text-[clamp(2.2rem,4vw,3.3rem)] font-bold text-white leading-[1.08] mb-7 drop-shadow-[0_4px_18px_rgba(0,0,0,0.55)]">
              Desde 1969,{' '}
              <span className="bg-gradient-to-br from-[#E87722] to-[#ffd2a7] bg-clip-text text-transparent">
                horneando recuerdos
              </span>
            </h2>
            <p className="text-white/90 text-[1.05rem] leading-[1.95] mb-6 max-w-[620px] drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
              Lo que comenzó como una receta familiar en una pequeña cocina costarricense 
              se convirtió en el sabor que ha acompañado a tres generaciones enteras. 
              Cada galleta Pituca lleva consigo la memoria de tardes compartidas, 
              café chorreado y conversaciones que marcan la memoria.
            </p>
            <p className="text-white/90 text-[1.05rem] leading-[1.95] mb-10 max-w-[620px] drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
              No solo son galletas, son el pretexto perfecto para volver a casa, 
              para sentarse a la mesa, para recordar que lo bueno no necesita prisa.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/nosotros"
                className="btn-modern btn-modern-primary inline-flex items-center gap-2"
              >
                Conoce nuestra historia
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: '200ms' }}>
            <div className="grid grid-cols-3 gap-4">
              {[
                { number: '55+', label: 'Años de tradición' },
                { number: '9+', label: 'Sabores clásicos' },
                { number: '99M+', label: 'de sonrisas' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="rounded-[24px] border border-white/10 bg-white/[0.05] backdrop-blur-xl p-5 text-center shadow-[0_10px_40px_rgba(0,0,0,0.28)]"
                >
                  <div className="font-['Playfair_Display'] text-[1.9rem] font-bold text-[#FFB067]">
                    {stat.number}
                  </div>
                  <div className="text-white/65 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductsPreviewSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      ref.current.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);

  const products = [
    {
      image: '/img/producto-vainilla.webp',
      name: 'Galleta de Vainilla',
      desc: 'Clásica, suave y familiar. Un sabor sencillo que nunca falla.',
    },
    {
      image: '/img/producto-coco.webp',
      name: 'Galleta de Coco',
      desc: 'Un gusto tropical, aromático y crujiente.',
    },
    {
      image: '/img/producto-besitos.webp',
      name: 'Besitos',
      desc: 'Pequeños y coloridos que conectan con la niñez.',
    },
    {
      image: '/img/producto-griega.webp',
      name: 'Galleta Griega',
      desc: 'Horneadas con sabor a tradición.',
    },
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFBF7] to-white" />
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <span className="section-tag">Nuestros Favoritos</span>
          <h2 className="section-title">Sabores que acompañan tu vida</h2>
          <p className="section-subtitle mx-auto">
            Recetas que han pasado de generación en generación, manteniendo esa esencia 
            casera que solo el tiempo puede perfeccionar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <div
              key={i}
              className="reveal group glass-card overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_16px_48px_rgba(90,45,12,0.14)]"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(90,45,12,0.5)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-5">
                <h3 className="font-['Playfair_Display'] text-[1.15rem] font-bold text-[#5A2D0C] mb-2">
                  {p.name}
                </h3>
                <p className="text-[#6B4423] text-[0.9rem] leading-[1.6]">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <Link
            to="/productos"
            className="btn-modern btn-modern-orange inline-flex items-center gap-2"
          >
            Ver todos los productos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function FindUsSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      ref.current.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FFF5EC] to-[#FFFBF7]" />
      <div className="relative z-10 w-full max-w-[1000px] mx-auto px-6">
        <div className="reveal glass-card p-10 md:p-14 text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[rgba(232,119,34,0.12)] flex items-center justify-center text-[#E87722]">
            <MapPin className="w-8 h-8" />
          </div>
          <h2 className="font-['Playfair_Display'] text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#5A2D0C] mb-4">
            Encontrá Pituca en tu supermercado
          </h2>
          <p className="text-[#6B4423] text-[1.05rem] leading-[1.8] mb-8 max-w-[600px] mx-auto">
            Estamos presentes en las principales cadenas de supermercados de Costa Rica. 
            Revisá dónde podés encontrar nuestras galletas cerca de vos.
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
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <FamilyValuesSection />
      <StorySection />
      <ProductsPreviewSection />
      <FindUsSection />
    </>
  );
}