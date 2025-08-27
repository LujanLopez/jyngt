import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './layout/Nav.jsx';
import Footer from './layout/Footer.jsx';
import Inicio from './pages/Inicio.jsx';
import Nosotros from './pages/Nosotros.jsx';
import Catalogo from './pages/Catalogo.jsx';
import PreguntasFrecuentes from './pages/Faq.jsx';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/faq" element={<PreguntasFrecuentes />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
