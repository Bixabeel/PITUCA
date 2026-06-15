import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/nosotros', label: 'Nuestra Historia' },
  { to: '/productos', label: 'Productos' },
  { to: '/donde-encontrarnos', label: 'Dónde Encontrarnos' },
  { to: '/contacto', label: 'Contacto' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[#2E1708]" />

      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'url("https://www.transparenttextures.com/patterns/asfalt-light.png")',
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">

          <div>
            <div className="flex items-center gap-4 mb-5">
              <img
                src="/img/logo-pituca.webp"
                alt="Galletas Pituca"
                className="h-[100px] w-auto object-contain"
              />

              <div>
                <h3 className="font-['Playfair_Display'] text-2xl text-white font-bold">
                  Galletas Pituca
                </h3>

                <p className="text-[#FFB067] uppercase tracking-[0.2em] text-xs">
                  Desde 1969
                </p>
              </div>
            </div>

            <p className="text-white/75 leading-8 max-w-md">
              Más de cinco décadas acompañando los momentos que
              realmente importan. Tradición costarricense horneada
              con cariño generación tras generación
            </p>
          </div>

          <div>
            <h4 className="text-[#FFB067] font-semibold uppercase tracking-[0.15em] text-sm mb-5">
              Navegación
            </h4>

            <ul className="space-y-3">
              {links.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-white/75 hover:text-[#FFB067] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#FFB067] font-semibold uppercase tracking-[0.15em] text-sm mb-5">
              Nuestra Promesa
            </h4>

            <p className="text-white/75 leading-8">
              Mantener vivo el sabor que ha acompañado a las familias
              costarricenses durante más de medio siglo
            </p>
          </div>

        </div>

        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-white/50 text-sm">
            © {year} Galletas Pituca. Todos los derechos reservados
          </p>

          <p className="flex items-center gap-2 text-white/50 text-sm">
            Hecho con <Heart className="w-4 h-4 text-[#E87722]" />
            en Costa Rica
          </p>

        </div>
      </div>
    </footer>
  );
}