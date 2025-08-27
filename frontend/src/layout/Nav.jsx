import { useState, useEffect } from 'react';
import '../styles/layout/Nav.css';
import logo from '../assets/logo.png';

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Altura real del header → posiciona el overlay móvil
  useEffect(() => {
    const setNavHeight = () => {
      const el = document.querySelector('.nav-content');
      if (el) {
        document.documentElement.style.setProperty('--nav-h', `${el.offsetHeight}px`);
      }
    };
    setNavHeight();
    window.addEventListener('resize', setNavHeight);
    return () => window.removeEventListener('resize', setNavHeight);
  }, [scrolled]);

  // Bloquear scroll del fondo cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // ⚠️ Reemplazá 54911XXXXXXXX por tu número (código país 54 + 9 + área sin 0 + número)
  const whatsappHref =
    "https://wa.me/5491133353252?text=Hola%21%20Quiero%20hacer%20una%20consulta%20sobre%20importaciones.";

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">

        {/* Izquierda: Logo */}
        <div className="nav-left">
          <a href="#top" aria-label="Ir al inicio">
            <img src={logo} alt="Logo" className="logo" />
          </a>
        </div>

        {/* Centro: enlaces */}
        <div className={`nav-center ${menuOpen ? 'open' : ''}`} id="site-menu">
          <ul className="nav-links">
            <li><a href="#top" onClick={() => setMenuOpen(false)}>Inicio</a></li>
            <li>
              <a
                href="https://jynglobaltrade2.mitiendanube.com" /* ← TU URL real */
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                Catálogo
              </a>
            </li>
            <li><a href="#nosotros" onClick={() => setMenuOpen(false)}>Nosotros</a></li>
          </ul>
        </div>

        {/* Derecha: botón WhatsApp + hamburguesa */}
        <div className="nav-right">
          <a
            href={whatsappHref}
            className="nav-btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
          >
            Contacto
          </a>

          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
          >
            <span></span><span></span><span></span>
          </button>
        </div>

        {/* Backdrop para cerrar tocando fuera */}
        <div
          className={`nav-backdrop ${menuOpen ? 'show' : ''}`}
          onClick={() => setMenuOpen(false)}
        />
      </div>
    </nav>
  );
}

export default Nav;
