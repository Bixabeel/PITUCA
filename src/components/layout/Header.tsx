import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/nosotros', label: 'Nuestra Historia' },
  { to: '/productos', label: 'Productos' },
  { to: '/donde-encontrarnos', label: 'Dónde Encontrarnos' },
  { to: '/contacto', label: 'Contacto' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    document.body.style.overflow = '';
  }, [location.pathname]);

  const toggleMobile = () => {
    setMobileOpen(!mobileOpen);
    document.body.style.overflow = !mobileOpen ? 'hidden' : '';
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FFFBF7]/95 shadow-[0_4px_20px_rgba(90,45,12,0.08)]'
          : 'bg-[#FFFBF7]/85'
      } backdrop-blur-[20px] border-b border-[rgba(232,119,34,0.1)]`}
    >
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/img/logo-pituca.webp"
              alt="Logo Galletas Pituca"
              className="h-[72px] w-auto object-contain"
            />
            <div>
              <span className="font-['Playfair_Display'] text-[1.3rem] font-bold text-[#5A2D0C] tracking-tight block">
                GALLETAS  PITUCA
              </span>
              <span className="font-['Poppins'] text-[0.6rem] font-semibold text-[#E87722] tracking-[0.15em] uppercase block -mt-1">
                Desde 1969
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-4 py-2 rounded-xl font-medium text-[0.9rem] transition-colors duration-300 group ${
                  location.pathname === link.to
                    ? 'text-[#E87722]'
                    : 'text-[#6B4423] hover:text-[#E87722]'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#E87722] transition-all duration-300 rounded-full ${
                    location.pathname === link.to ? 'w-[60%]' : 'w-0 group-hover:w-[60%]'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={toggleMobile}
            aria-expanded={mobileOpen}
            aria-label="Menú"
          >
            {mobileOpen ? (
              <X className="w-6 h-6 text-[#5A2D0C]" />
            ) : (
              <Menu className="w-6 h-6 text-[#5A2D0C]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-[#FFFBF7]/98 backdrop-blur-[20px] p-6 shadow-[0_8px_32px_rgba(90,45,12,0.1)] border-b border-[rgba(232,119,34,0.1)]">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`block px-4 py-3 rounded-xl font-medium transition-colors ${
                    location.pathname === link.to
                      ? 'text-[#E87722] bg-[rgba(232,119,34,0.08)]'
                      : 'text-[#6B4423] hover:text-[#E87722] hover:bg-[rgba(232,119,34,0.04)]'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}