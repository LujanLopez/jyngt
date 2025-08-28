import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './layout/Nav.jsx';
import Footer from './layout/Footer.jsx';
import Inicio from './pages/Inicio.jsx';
import Nosotros from './pages/Nosotros.jsx';
import Catalogo from './pages/Catalogo.jsx';
import PreguntasFrecuentes from './pages/Faq.jsx';

export default function App() {
  return (
    <Router>
      <Nav />
      <Inicio />    {/* toda la web en una sola vista */}
      <Footer />
    </Router>
  );
}