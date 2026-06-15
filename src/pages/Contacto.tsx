import { useState, useEffect, useRef, type FormEvent } from 'react';
import { Mail, Phone, MessageCircle, Clock, Send, Building2 } from 'lucide-react';

export default function Contacto() {
  const ref = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    interes: '',
    mensaje: '',
  });

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email || !formData.telefono) {
      alert('Por favor completa los campos obligatorios.');
      return;
    }
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactCards = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: 'Teléfono',
      info: '+506 2252-1114',
      href: 'tel:+50622521114',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'Correo',
      info: 'info@pitucasnacks.com',
      href: 'mailto:info@pitucasnacks.com',
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: 'WhatsApp Corporativo',
      info: '+506 8874-8822',
      href: 'https://wa.me/50688748822?text=Hola%20Galletas%20Pituca,%20me%20gustaría%20consultar%20sobre%20alianzas%20o%20distribución',
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: 'Horario',
      info: 'Lun - Vie: 7:00 - 17:00',
      href: undefined,
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
              backgroundImage: `url("/img/hero-contacto.webp")`,
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
                'radial-gradient(circle at 40% 50%, rgba(232,119,34,0.2), transparent 45%)',
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6">
          <div className="max-w-[700px]">
            <span className="inline-block mb-4 text-[#ffb36b] uppercase tracking-[0.18em] text-[0.8rem] font-semibold">
              Contacto Corporativo
            </span>
            <h1 className="font-['Playfair_Display'] text-[clamp(2.5rem,5vw,4rem)] font-bold text-white leading-[1.1] mb-6">
              Hablemos de{' '}
              <span className="bg-gradient-to-br from-[#E87722] to-[#ffcb96] bg-clip-text text-transparent">
                negocios
              </span>
            </h1>
            <p className="text-white/75 text-[1.1rem] leading-[1.9] max-w-[560px]">
              Si representás a una empresa, buscás distribución, alianzas comerciales, 
              marca privada o prensa, estamos aquí para escucharte.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Contact Section ===== */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFFBF7] to-white" />
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10">
            {/* Form */}
            <div className="reveal">
              <div className="glass-card p-8 md:p-10">
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#E87722] to-[#FF9F43] flex items-center justify-center">
                      <Send className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="font-['Playfair_Display'] text-[1.8rem] font-bold text-[#5A2D0C] mb-4">
                      ¡Gracias por tu mensaje!
                    </h3>
                    <p className="text-[#6B4423] text-[1.05rem] leading-[1.8] mb-6">
                      Nuestro equipo se pondrá en contacto contigo a la brevedad.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          nombre: '',
                          empresa: '',
                          email: '',
                          telefono: '',
                          interes: '',
                          mensaje: '',
                        });
                      }}
                      className="btn-modern btn-modern-orange"
                    >
                      Enviar otro mensaje
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="font-['Playfair_Display'] text-[1.5rem] font-bold text-[#5A2D0C] mb-6">
                      Solicita tu cotización corporativa
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block mb-2 font-semibold text-[0.9rem] text-[#6B4423]">
                            Nombre *
                          </label>
                          <input
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                            placeholder="Tu nombre"
                            className="w-full px-4 py-[0.85rem] border-2 border-[#E8E8E8] rounded-xl font-['Poppins'] text-[0.95rem] text-[#3D1E08] bg-[#FFFBF7] transition-all duration-300 focus:outline-none focus:border-[#E87722] focus:shadow-[0_0_0_4px_rgba(232,119,34,0.15)] focus:bg-white"
                          />
                        </div>
                        <div>
                          <label className="block mb-2 font-semibold text-[0.9rem] text-[#6B4423]">
                            Empresa
                          </label>
                          <input
                            type="text"
                            name="empresa"
                            value={formData.empresa}
                            onChange={handleChange}
                            placeholder="Nombre de tu empresa (opcional)"
                            className="w-full px-4 py-[0.85rem] border-2 border-[#E8E8E8] rounded-xl font-['Poppins'] text-[0.95rem] text-[#3D1E08] bg-[#FFFBF7] transition-all duration-300 focus:outline-none focus:border-[#E87722] focus:shadow-[0_0_0_4px_rgba(232,119,34,0.15)] focus:bg-white"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block mb-2 font-semibold text-[0.9rem] text-[#6B4423]">
                            Correo *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="tu@email.com"
                            className="w-full px-4 py-[0.85rem] border-2 border-[#E8E8E8] rounded-xl font-['Poppins'] text-[0.95rem] text-[#3D1E08] bg-[#FFFBF7] transition-all duration-300 focus:outline-none focus:border-[#E87722] focus:shadow-[0_0_0_4px_rgba(232,119,34,0.15)] focus:bg-white"
                          />
                        </div>
                        <div>
                          <label className="block mb-2 font-semibold text-[0.9rem] text-[#6B4423]">
                            Teléfono *
                          </label>
                          <input
                            type="tel"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                            required
                            placeholder="0000-0000"
                            className="w-full px-4 py-[0.85rem] border-2 border-[#E8E8E8] rounded-xl font-['Poppins'] text-[0.95rem] text-[#3D1E08] bg-[#FFFBF7] transition-all duration-300 focus:outline-none focus:border-[#E87722] focus:shadow-[0_0_0_4px_rgba(232,119,34,0.15)] focus:bg-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block mb-2 font-semibold text-[0.9rem] text-[#6B4423]">
                          Motivo de contacto *
                        </label>
                        <select
                          name="interes"
                          value={formData.interes}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-[0.85rem] border-2 border-[#E8E8E8] rounded-xl font-['Poppins'] text-[0.95rem] text-[#3D1E08] bg-[#FFFBF7] transition-all duration-300 focus:outline-none focus:border-[#E87722] focus:shadow-[0_0_0_4px_rgba(232,119,34,0.15)] focus:bg-white"
                        >
                          <option value="">Selecciona una opción</option>
                          <option value="Marca privada">Marca privada</option>
                          <option value="Distribución">Distribución</option>
                          <option value="Alianzas comerciales">Alianzas comerciales</option>
                          <option value="Prensa">Prensa</option>
                          <option value="Servicio al cliente">Servicio al cliente</option>
                          <option value="Otro">Otro</option>
                        </select>
                      </div>

                      <div>
                        <label className="block mb-2 font-semibold text-[0.9rem] text-[#6B4423]">
                          Mensaje
                        </label>
                        <textarea
                          name="mensaje"
                          value={formData.mensaje}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Cuéntanos en qué podemos ayudarte..."
                          className="w-full px-4 py-[0.85rem] border-2 border-[#E8E8E8] rounded-xl font-['Poppins'] text-[0.95rem] text-[#3D1E08] bg-[#FFFBF7] transition-all duration-300 focus:outline-none focus:border-[#E87722] focus:shadow-[0_0_0_4px_rgba(232,119,34,0.15)] focus:bg-white resize-none"
                        />
                      </div>

                      <button type="submit" className="btn-modern btn-modern-orange w-full">
                        Enviar consulta
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Contact Cards */}
            <div className="space-y-5">
              {contactCards.map((card, i) => (
                <a
                  key={i}
                  href={card.href}
                  target={card.href?.startsWith('http') ? '_blank' : undefined}
                  rel={card.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`reveal glass-card p-6 flex items-center gap-5 transition-all duration-300 hover:translate-x-2 hover:shadow-[0_8px_32px_rgba(90,45,12,0.14)] group ${
                    !card.href ? 'cursor-default' : ''
                  }`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="w-12 h-12 rounded-full bg-[rgba(232,119,34,0.12)] flex items-center justify-center text-[#E87722] shrink-0 transition-transform duration-300 group-hover:scale-110">
                    {card.icon}
                  </div>
                  <div>
                    <h4 className="font-['Playfair_Display'] text-[1.1rem] font-bold text-[#5A2D0C] flex items-center gap-2">
                      {card.title}
                    </h4>
                    <p className="text-[#9B7B5B] text-[0.9rem]">{card.info}</p>
                  </div>
                </a>
              ))}

              <div
                className="reveal glass-card p-6 border-l-4 border-[#E87722]"
                style={{ transitionDelay: '400ms' }}
              >
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-[#E87722] shrink-0 mt-1" />
                  <div>
                    <p className="font-['Playfair_Display'] text-[1rem] text-[#5A2D0C] font-semibold mb-2">
                      Ubicación corporativa
                    </p>
                    <p className="text-[#9B7B5B] text-[0.9rem] leading-[1.7]">
                      Curridabat, Costa Rica.
                      <br />
                      <span className="italic text-[0.85rem]">
                        Referencia administrativa. No es punto de venta ni atención al público.
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="reveal glass-card p-6 border-l-4 border-[#E87722]"
                style={{ transitionDelay: '500ms' }}
              >
                <p className="font-['Playfair_Display'] text-[1.05rem] text-[#5A2D0C] italic leading-[1.8]">
                  "Para compras individuales, visitá la sección{' '}
                  <a href="/donde-encontrarnos" className="text-[#E87722] underline font-semibold not-italic">
                    Dónde Encontrarnos
                  </a>
                  "
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}