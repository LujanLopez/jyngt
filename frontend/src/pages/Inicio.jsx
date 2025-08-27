import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import "../styles/pages/Inicio.css";
import "../styles/pages/Nosotros.css";

import inicio1 from "../assets/inicio1.jpg";
import inicio2 from "../assets/inicio2.jpg";
import inicio3 from "../assets/inicio3.jpg";
import inicio4 from "../assets/inicio4.jpg";
import inicio5 from "../assets/inicio5.jpg";
import inicio6 from "../assets/inicio6.jpg";

function Inicio() {
  const location = useLocation();

  // URL de tu Tienda Nube
  const tiendaNubeURL = "https://tu-tienda-nube.com"; // ⬅️ reemplazá por tu link real
  // WhatsApp (AR: 54 + 9 + área sin 0 + número)
  const whatsappHref = "https://wa.me/5491133353252?text=Hola%21%20Quiero%20hacer%20una%20consulta%20sobre%20importaciones."; // ⬅️ reemplazá por tu nro real

  // Scroll automático cuando la URL tiene #top o #nosotros
  useEffect(() => {
    const doScroll = () => {
      if (location.hash === "#nosotros") {
        const el = document.getElementById("nosotros");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else if (location.hash === "#top" || location.hash === "") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    setTimeout(doScroll, 0);
  }, [location.hash]);

  return (
    <div className="inicio-wrapper" id="top">
      {/* Sección 1: Hero visual */}
      <motion.section
        className="hero"
        style={{ backgroundImage: `url(${inicio1})` }}
        initial={{ height: "100vh" }}
        animate={{ height: "80vh" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="hero-overlay">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h1>Importamos lo que necesitás</h1>
            <p>Soluciones ágiles, confiables y personalizadas</p>

            {/* VER CATÁLOGO: abre Tienda Nube y hereda hover de .nav-btn */}
            <a
              href="https://jynglobaltrade2.mitiendanube.com"
              className="hero-btn nav-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver catálogo
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Sección 2: ¿Qué ofrecemos? */}
      <section className="seccion blanca">
        <div className="contenido">
          <motion.div
            className="texto"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2>¿Qué ofrecemos?</h2>
            <p>
              Ya sea para tu negocio, tu emprendimiento o productos personales, gestionamos la importación de lo que necesites y lo entregamos sin complicaciones.
            </p>
          </motion.div>
          <motion.img
            src={inicio2}
            alt="¿Qué ofrecemos?"
            className="imagen"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </section>

      {/* Sección 3: Cómo trabajamos */}
      <section className="seccion gris">
        <div className="contenido">
          <motion.img
            src={inicio3}
            alt="Cómo trabajamos"
            className="imagen"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            className="texto"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2>¿Cómo trabajamos?</h2>
            <p>
              Nos ocupamos de todo el recorrido de tu importación: desde la compra en el exterior hasta la entrega final en tus manos. Coordinamos envíos internacionales, resolvemos la documentación aduanera y controlamos cada etapa para que el producto llegue a destino en tiempo y forma. Nuestro objetivo es que vos solo elijas lo que necesitás, mientras nosotros hacemos el resto.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sección 4: CTA final de Inicio */}
      <section className="seccion azul footer-seccion">
        <div className="cta">
          <h2>Empezá a importar hoy con nosotros</h2>
          {/* CONTACTANOS: a WhatsApp */}
          <a
            href="https://wa.me/5491133353252?text=Hola%21%20Quiero%20hacer%20una%20consulta%20sobre%20importaciones."
            className="hero-btn blanco"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contactanos
          </a>
        </div>
      </section>

      {/* ===== SECCIÓN NOSOTROS ===== */}
      <div className="nosotros-wrapper" id="nosotros">
        {/* Historia */}
        <section className="seccion blanca">
          <div className="contenido">
            <motion.div
              className="texto"
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2>Nuestra historia</h2>
              <p>
                Desde nuestros primeros pasos tuvimos un propósito claro: acercar productos del mundo a quienes los necesitan. Con cada operación fuimos perfeccionando la forma de trabajar, buscando siempre que el proceso sea más ágil y transparente. Hoy seguimos con la misma misión: simplificar cada importación para que empresas y personas puedan acceder a lo que buscan sin preocupaciones.
              </p>
            </motion.div>
            <motion.img
              src={inicio4}
              alt="Historia"
              className="imagen"
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </section>

        {/* Cultura y valores */}
        <section className="seccion gris">
          <div className="contenido">
            <motion.img
              src={inicio5}
              alt="Cultura y valores"
              className="imagen"
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
            <motion.div
              className="texto"
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2>Nuestra cultura</h2>
              <p>
                Creemos en una manera clara y honesta de trabajar. Nuestra cultura se basa en la transparencia, el compromiso y la cercanía con cada cliente. Queremos que cada persona sienta la tranquilidad de confiar en un equipo que entiende sus necesidades y que se compromete a hacer llegar su producto con seguridad, responsabilidad y confianza.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Nuestro equipo */}
        <section className="seccion blanca">
          <div className="contenido">
            <motion.div
              className="texto"
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2>Un equipo, una misión</h2>
              <p>
                Profesionales con trayectoria en comercio exterior, logística, tecnología y atención al cliente. Cada integrante aporta una mirada estratégica para acompañarte en cada operación, minimizando riesgos y maximizando oportunidades.
              </p>
            </motion.div>
            <motion.img
              src={inicio6}
              alt="Equipo"
              className="imagen"
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </section>

        {/* Visión a futuro */}
        <section className="seccion azul footer-seccion">
          <motion.div
            className="cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Mirá lo que se viene</h2>
            <p>
              A futuro, expandiremos nuestras operaciones, integrando inteligencia logística y trazabilidad digital para que importar sea cada vez más simple, seguro y escalable. ¿Crecemos juntos?
            </p>
          </motion.div>
        </section>
      </div>
    </div>
  );
}

export default Inicio;
