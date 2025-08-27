import '../styles/layout/Footer.css';
import logo from '../assets/logo.png'; // asegurate que esté ahí

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p className="footer-description">
            Nos especializamos en importar productos a pedido: gestionamos la logística y la aduana para que tu compra llegue sin preocupaciones.
          </p>
        </div>

        <div className="footer-column">
          <h4>Contacto</h4>
          <p>+54 11 3335 3252</p>
          <p>+54 11 3850 0093</p>
          <p>Buenos Aires, Argentina</p>
          <a
            href="https://wa.me/5491133353252"
            className="whatsapp-btn"
            target="_blank"
            rel="noreferrer"
          >
            Contáctanos en WhatsApp
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} JYN GLOBAL TRADE. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
