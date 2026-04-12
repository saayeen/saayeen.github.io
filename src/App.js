import './App.css';
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "./animations";

function App() {

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("#scroll-container"),
      smooth: true,
      smartphone: { smooth: true },
      tablet: { smooth: true }
    });

    return () => scroll.destroy();
  }, []);

  return (
    <div id="scroll-container" data-scroll-container>

      {/* HERO */}
      <section className="hero" data-scroll-section>
        <div className="container">

          {/* TEXTO */}
          <motion.div
            className="hero-content"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.h1 variants={fadeUp} data-scroll data-scroll-speed="2">
              FlashCards Pro :<br />Aprende Más, Estresa Menos
            </motion.h1>

            <motion.p 
              variants={fadeUp}
              className="hero-description"
              data-scroll
              data-scroll-speed="1"
            >
              Domina tus exámenes, aprende idiomas y mucho más, gracias a la repetición espaciada.
            </motion.p>

            <motion.div 
              variants={fadeUp}
              className="hero-buttons"
              data-scroll
              data-scroll-speed="1"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary btn-large"
              >
                🚀 Comienza a aprender
              </motion.button>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                📚 Decks Colaborativos
              </motion.button>
            </motion.div>
          </motion.div>

          {/* IMAGEN */}
          <div className="hero-image">
            <img
              data-scroll
              data-scroll-speed="-3"
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="hero"
            />
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="features" data-scroll-section>
        <div className="container">

          <h2 className="section-title">
            Estudia inteligentemente
          </h2>

          <motion.div
            className="features-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >

            <motion.div className="feature-card" variants={fadeUp}>
              <div className="feature-icon">🎴</div>
              <h3>Crea flashcards</h3>
              <p>Personaliza tus cartas fácilmente.</p>
            </motion.div>

            <motion.div className="feature-card" variants={fadeUp}>
              <div className="feature-icon">📚</div>
              <h3>+50,000 decks</h3>
              <p>Accede a contenido listo para estudiar.</p>
            </motion.div>

            <motion.div className="feature-card" variants={fadeUp}>
              <div className="feature-icon">👥</div>
              <h3>Comparte</h3>
              <p>Estudia con amigos y colabora.</p>
            </motion.div>

            <motion.div className="feature-card" variants={fadeUp}>
              <div className="feature-icon">⏱️</div>
              <h3>Repetición espaciada</h3>
              <p>Optimiza tu memoria a largo plazo.</p>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer data-scroll-section>
        <div className="container">
          <p>© 2026 FlashCards Pro</p>
        </div>
      </footer>

    </div>
  );
}

export default App;