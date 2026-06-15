import { useEffect, useRef } from 'react';
import { Tag, FlaskConical, Factory, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Servicios() {
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

  const services = [
    {
      icon: <Tag className="w-8 h-8" />,
      title: 'Marca Privada',
      desc: 'Convertimos tus ideas en productos listos para vender con tu propia marca y empaque personalizado.',
      features: [
        'Diseño de empaque exclusivo',
        'Etiquetado a tu medida',
        'Calidad garantizada',
        'Lanzamiento rápido al mercado',
      ],
    },
    {
      icon: <FlaskConical className="w-8 h-8" />,
      title: 'Desarrollo de Fórmulas',
      desc: 'Creamos recetas a medida según tus objetivos comerciales y el perfil de sabor que busques.',
      features: [
        'Investigación de sabores',
        'Pruebas de mercado',
        'Ajuste de texturas',
        'Optimización de costos',
      ],
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: 'Producción Industrial',
      desc: 'Escalamos tu producción sin perder el carácter artesanal que hace únicas a nuestras galletas.',
      features: [
        'Capacidad de escala',
        'Control de calidad riguroso',
        'Trazabilidad completa',
        'Cumplimiento normativo',
      ],
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Nos contactas',
      desc: 'Cuéntanos tu idea, tu visión y lo que sueñas crear. Estamos aquí para escucharte.',
    },
    {
      step: '02',
      title: 'Desarrollamos',
      desc: 'Nuestro equipo crea la fórmula perfecta y el diseño de empaque que represente tu marca.',
    },
    {
      step: '03',
      title: 'Producimos',
      desc: 'Fabricamos con el mismo amor y dedicación que ponemos en cada galleta Pituca desde 1969.',
    },
    {
      step: '04',
      title: 'Creces',
      desc: 'Tu producto llega al mercado con la calidad que solo décadas de experiencia pueden garantizar.',
    },
  ];

  return (
    <div ref={ref} className="min-h-[100dvh]">
      {/* ===== Hero ===== */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 animate-heroZoom"
            style={{
              backgroundImage: `url("/img/hero-servicios.webp")`,
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
                'radial-gradient(circle at 50% 50%, rgba(232,119,34,0.18), transparent 45%)',
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6">
          <div className="max-w-[700px]">
            <span className="inline-block mb-4 text-[#ffb36b] uppercase tracking-[0.18em] text-[0.8rem] font-semibold">
              Marca Privada
            </span>
            <h1 className="font-['Playfair_Display'] text-[clamp(2.5rem,5vw,4rem)] font-bold text-white leading-[1.1] mb-6">
              Fabricamos para{' '}
              <span className="bg-gradient-to-br from-[#E87722] to-[#ffcb96] bg-clip-text text-transparent">
                tu marca
              </span>
            </h1>
            <p className="text-white/75 text-[1.1rem] leading-[1.9] max-w-[560px]">
              ¿Tenés una idea para un producto? La hacemos realidad con la misma calidad y
              dedicación que nos caracteriza desde 1969.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Services ===== */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFFBF7] to-white" />
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14 reveal">
            <span className="section-tag">Lo Que Ofrecemos</span>
            <h2 className="section-title">Servicios hechos con experiencia</h2>
            <p className="section-subtitle mx-auto">
              Más de 50 años de tradición al servicio de tu visión. Cada proyecto es una nueva
              historia que escribimos juntos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div
                key={i}
                className="reveal glass-card p-8 transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_16px_48px_rgba(90,45,12,0.14)] group relative overflow-hidden"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{
                    background:
                      'linear-gradient(135deg, #E8E8E8 0%, #C0C0C0 30%, #F0F0F0 50%, #B8B8B8 70%, #D8D8D8 100%)',
                    backgroundSize: '200% auto',
                    animation: 'borderShine 3s linear infinite',
                  }}
                />
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[rgba(232,119,34,0.15)] flex items-center justify-center text-[#E87722] transition-transform duration-300 group-hover:scale-110">
                  {s.icon}
                </div>
                <h3 className="font-['Playfair_Display'] text-[1.4rem] font-bold text-[#5A2D0C] text-center mb-4">
                  {s.title}
                </h3>
                <p className="text-[#6B4423] text-[0.95rem] leading-[1.7] text-center mb-6">
                  {s.desc}
                </p>
                <ul className="space-y-3">
                  {s.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-[0.9rem] text-[#6B4423]">
                      <CheckCircle2 className="w-5 h-5 text-[#E87722] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Process ===== */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("/img/servicio-ejemplo-vainilla.webp")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(15,8,4,0.92)] via-[rgba(15,8,4,0.85)] to-[rgba(15,8,4,0.9)]" />
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
                'radial-gradient(circle at 40% 50%, rgba(232,119,34,0.2), transparent 45%)',
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14 reveal">
            <span className="inline-block mb-4 text-[#ffb36b] uppercase tracking-[0.18em] text-[0.8rem] font-semibold">
              Proceso
            </span>
            <h2 className="font-['Playfair_Display'] text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-[1.15]">
              De tu idea al mercado en{' '}
              <span className="bg-gradient-to-br from-[#E87722] to-[#ffcb96] bg-clip-text text-transparent">
                4 pasos
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="reveal glass-card-dark p-8 text-center transition-all duration-300 hover:-translate-y-2"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="font-['Playfair_Display'] text-[3rem] font-bold text-[#E87722]/30 mb-4">
                  {step.step}
                </div>
                <h3 className="font-['Playfair_Display'] text-[1.2rem] font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/65 text-[0.9rem] leading-[1.7]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-[#FFF5EC]" />
        <div className="relative z-10 w-full max-w-[800px] mx-auto px-6 text-center">
          <div className="reveal glass-card p-10 md:p-14">
            <h2 className="font-['Playfair_Display'] text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#5A2D0C] mb-4">
              Comencemos algo juntos
            </h2>
            <p className="text-[#6B4423] text-[1.05rem] leading-[1.8] mb-8">
              Ya sea que tengas una idea clara o solo el deseo de crear algo especial, estamos aquí
              para ayudarte. Como en familia, escuchamos con atención y trabajamos con el corazón.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contacto"
                className="btn-modern btn-modern-orange inline-flex items-center gap-2"
              >
                Hablemos de tu proyecto <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/50688748822?text=Hola%20Galletas%20Pituca,%20tengo%20una%20idea%20para%20marca%20privada"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-modern btn-modern-outline"
              >
                Escribinos por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}