import { useEffect, useRef } from 'react';
import { Heart, Users, Clock, Award, MapPin, Phone } from 'lucide-react';

export default function Nosotros() {
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

  return (
    <div ref={ref} className="min-h-[100dvh]">
      {/* ===== Hero ===== */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 animate-heroZoom"
            style={{
              backgroundImage: `url("/img/hero-nosotros.webp")`,
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
                'radial-gradient(circle at 20% 50%, rgba(232,119,34,0.18), transparent 42%), linear-gradient(180deg, rgba(0,0,0,0.12), rgba(0,0,0,0.42))',
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6">
          <div className="max-w-[700px]">
            <span className="inline-block mb-4 text-[#ffb36b] uppercase tracking-[0.18em] text-[0.8rem] font-semibold">
              Nuestra Historia
            </span>
            <h1 className="font-['Playfair_Display'] text-[clamp(2.5rem,5vw,4rem)] font-bold text-white leading-[1.1] mb-6">
              Una galleta con{' '}
              <span className="bg-gradient-to-br from-[#E87722] to-[#ffcb96] bg-clip-text text-transparent">
                memoria
              </span>
            </h1>
            <p className="text-white/75 text-[1.1rem] leading-[1.9] max-w-[560px]">
              Más de cinco décadas de historias compartidas, de mesas llenas de risas, 
              de tardes de café y conversaciones interminables. Así se construye una tradición.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Story ===== */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFFBF7] via-[#FFF5EC] to-[#FFFBF7]" />
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <div className="relative">
                <div className="glass-card-dark p-6 md:p-8 overflow-hidden">
                  <div
                    className="rounded-2xl overflow-hidden"
                    style={{
                      backgroundImage: `linear-gradient(135deg, rgba(232,119,34,0.3), rgba(90,45,12,0.5)), url("/img/historia-inicio.webp")`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      minHeight: '400px',
                    }}
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 glass-card p-5 text-center animate-[float_4s_ease-in-out_infinite]">
                  <div className="font-['Playfair_Display'] text-[2.5rem] font-bold text-[#E87722]">
                    1969
                  </div>
                  <div className="text-[#6B4423] text-sm font-semibold">Desde entonces</div>
                </div>
              </div>
            </div>

            <div className="reveal" style={{ transitionDelay: '150ms' }}>
              <span className="section-tag">El Comienzo</span>
              <h2 className="section-title">Una historia que nació en familia</h2>
              <div className="space-y-5 text-[#6B4423] text-[1.05rem] leading-[1.9]">
                <p>
                  Desde <strong className="text-[#5A2D0C]">1969</strong>,{' '}
                  <strong className="text-[#5A2D0C]">Galletas Pituca</strong> ha acompañado a las
                  familias costarricenses, convirtiéndose en un símbolo de tradición, sabor casero y
                  momentos compartidos con quienes amamos.
                </p>
                <p>
                  Nacida como una empresa familiar, Pituca ha mantenido a lo largo de décadas
                  esa esencia cálida y cercana que caracteriza a los productos hechos con dedicación
                  y amor. No fue solo un negocio — fue una forma de llevar calidez a cada hogar.
                </p>
                <p>
                  Sus sabores han acompañado familias enteras, creando momentos de cercanía,
                  conversación y alegría alrededor de una mesa. Desde el café de la mañana hasta las
                  meriendas de la tarde, siempre hubo un paquete de Pituca en el centro de todo.
                </p>
              </div>

              <div className="mt-8 glass-card p-6 border-l-4 border-[#E87722]">
                <p className="font-['Playfair_Display'] text-[1.15rem] text-[#5A2D0C] font-semibold italic leading-[1.8]">
                  "Porque cuando alguien abre un paquete de Galletas Pituca no solo comparte una
                  merienda: comparte tradición, historia y el sabor de sentirse en casa."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Values ===== */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("/img/historia-abuelita.webp")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(15,8,4,0.92)] via-[rgba(15,8,4,0.82)] to-[rgba(15,8,4,0.88)]" />
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
                'radial-gradient(circle at 30% 50%, rgba(232,119,34,0.2), transparent 45%)',
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14 reveal">
            <span className="inline-block mb-4 text-[#ffb36b] uppercase tracking-[0.18em] text-[0.8rem] font-semibold">
              Lo Que Nos Mueve
            </span>
            <h2 className="font-['Playfair_Display'] text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-[1.15]">
              Nuestros valores de{' '}
              <span className="bg-gradient-to-br from-[#E87722] to-[#ffcb96] bg-clip-text text-transparent">
                familia
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Heart className="w-7 h-7" />,
                title: 'Amor en cada receta',
                desc: 'Cada galleta es elaborada con el mismo cariño que una abuelita pone en su cocina. Ese amor se siente en cada bocado.',
              },
              {
                icon: <Users className="w-7 h-7" />,
                title: 'La familia primero',
                desc: 'Diseñamos nuestros productos pensando en esos momentos especiales donde la familia se reúne sin prisa, con ganas de compartir.',
              },
              {
                icon: <Clock className="w-7 h-7" />,
                title: 'Tradición que perdura',
                desc: 'Mantenemos vivas las recetas originales que han pasado de generación en generación, porque lo bueno no necesita cambiar.',
              },
              {
                icon: <Award className="w-7 h-7" />,
                title: 'Calidad sin igual',
                desc: 'Seleccionamos los mejores ingredientes y cuidamos cada detalle del proceso para que cada paquete llegue perfecto a tu mesa.',
              },
              {
                icon: <MapPin className="w-7 h-7" />,
                title: 'Raíces costarricenses',
                desc: 'Somos 100% costarricenses y llevamos el sabor de nuestra tierra dentro y fuera del país. Hecho aquí, con orgullo.',
              },
              {
                icon: <Phone className="w-7 h-7" />,
                title: 'Siempre cercanos',
                desc: 'Como en una verdadera familia, siempre estamos ahí. Puedes contactarnos en cualquier momento, siempre tendrás una respuesta cálida.',
              },
            ].map((v, i) => (
              <div
                key={i}
                className="reveal glass-card-dark p-8 transition-all duration-300 hover:-translate-y-2 group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-14 h-14 mb-5 rounded-full bg-[rgba(232,119,34,0.15)] flex items-center justify-center text-[#FF9F43] transition-transform duration-300 group-hover:scale-110">
                  {v.icon}
                </div>
                <h3 className="font-['Playfair_Display'] text-[1.2rem] font-bold text-white mb-3">
                  {v.title}
                </h3>
                <p className="text-white/70 text-[0.95rem] leading-[1.7]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Timeline ===== */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFFBF7] to-[#FFF5EC]" />
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14 reveal">
            <span className="section-tag">Generaciones</span>
            <h2 className="section-title">Un legado que crece con el tiempo</h2>
            <p className="section-subtitle mx-auto">
              Tres generaciones de familias costarricenses han crecido con el sabor de Galletas Pituca. 
              Cada década trae nuevas historias, pero la esencia sigue intacta.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                year: '1969',
                title: 'El comienzo de un sueño',
                desc: 'En una pequeña cocina familiar nace Galletas Pituca. La receta original de galletas de vainilla conquista los primeros hogares costarricenses.',
              },
              {
                year: '1980s',
                title: 'El sabor se expande',
                desc: 'Las familias de toda Costa Rica comienzan a identificar el aroma de Pituca con momentos de reunión. Nuevos sabores se suman a la tradición.',
              },
              {
                year: '2000s',
                title: 'De generación en generación',
                desc: 'Los niños que crecieron con Pituca ahora comparten el mismo sabor con sus propios hijos. El círculo familiar se cierra una y otra vez.',
              },
              {
                year: 'Hoy',
                title: 'La tradición continúa',
                desc: 'Más de 50 años después, seguimos horneando con el mismo amor, las mismas recetas y el mismo deseo de unir familias alrededor de una mesa.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="reveal grid md:grid-cols-[120px_1fr] gap-6 items-start"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="glass-card p-4 text-center">
                  <div className="font-['Playfair_Display'] text-[1.6rem] font-bold text-[#E87722]">
                    {item.year}
                  </div>
                </div>
                <div className="glass-card p-6 md:p-8">
                  <h3 className="font-['Playfair_Display'] text-[1.3rem] font-bold text-[#5A2D0C] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#6B4423] text-[1rem] leading-[1.8]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}