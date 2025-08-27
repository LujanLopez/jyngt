import React from "react";
import { motion } from "framer-motion";
import "../styles/pages/Nosotros.css";

import historiaImg from "../assets/inicio1.jpg";
import valoresImg from "../assets/inicio2.jpg";
import equipoImg from "../assets/inicio3.jpg";


function Nosotros() {
  return (
    <div className="nosotros-wrapper">

      {/* Sección 1: Historia */}
      <section className="seccion blanca">
        <div className="contenido">
          <motion.div className="texto"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}>
            <h2>Nuestra historia</h2>
            <p>
              Desde nuestros inicios, nos propusimos ser más que un puente comercial. Fundada con la visión de simplificar los procesos de importación, nuestra empresa creció junto a nuestros clientes, adaptándose a los desafíos del mercado global y consolidando una red confiable de socios internacionales.
            </p>
          </motion.div>
          <motion.img src={historiaImg} alt="Historia" className="imagen"
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }} />
        </div>
      </section>

      {/* Sección 2: Cultura y valores */}
      <section className="seccion gris">
        <div className="contenido">
          <motion.img src={valoresImg} alt="Cultura y valores" className="imagen"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }} />
          <motion.div className="texto"
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}>
            <h2>Nuestra cultura</h2>
            <p>
              Nos guía la transparencia, el compromiso y la mejora continua. Fomentamos un entorno colaborativo donde la innovación, la adaptabilidad y la confianza son pilares fundamentales para brindar soluciones a medida, con foco humano y estratégico.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sección 3: Nuestro equipo */}
      <section className="seccion blanca">
        <div className="contenido">
          <motion.div className="texto"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}>
            <h2>Un equipo, una misión</h2>
            <p>
              Profesionales con trayectoria en comercio exterior, logística, tecnología y atención al cliente. Cada integrante aporta una mirada estratégica para acompañarte en cada operación, minimizando riesgos y maximizando oportunidades.
            </p>
          </motion.div>
          <motion.img src={equipoImg} alt="Equipo" className="imagen"
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }} />
        </div>
      </section>

      {/* Sección 4: Visión a futuro */}
      <section className="seccion azul footer-seccion">
        <motion.div className="cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          <h2>Mirá lo que se viene</h2>
          <p>
            A futuro, expandiremos nuestras operaciones en LATAM, integrando inteligencia logística y trazabilidad digital para que importar sea cada vez más simple, seguro y escalable. ¿Crecemos juntos?
          </p>
        </motion.div>
      </section>

    </div>
  );
}

export default Nosotros;
