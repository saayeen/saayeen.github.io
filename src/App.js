import './App.css';
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

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

      {/* Hero Section */}
      <section className="hero" data-scroll-section>
        <div className="container">
          <div className="hero-content">
            <h1 data-scroll data-scroll-speed="2">
              FlashCards Pro :<br />Aprende Más, Estresa Menos
            </h1>

            <p 
              className="hero-description"
              data-scroll
              data-scroll-speed="1"
            >
              Domina tus exámenes, aprende idiomas y mucho más...
            </p>

            <div className="hero-buttons" data-scroll data-scroll-speed="1">
              <button className="btn-primary btn-large">🚀 Comienza a aprender</button>
              <button className="btn-secondary">📚 Decks Colaborativos</button>
            </div>
          </div>

          {/* Imagen con parallax */}
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

      {/* Features */}
      <section className="features" data-scroll-section>
        <div className="container">
          <h2 
            className="section-title"
            data-scroll
            data-scroll-speed="1"
          >
            Estudia inteligentemente
          </h2>

          <div className="features-grid">
            <div className="feature-card" data-scroll data-scroll-speed="1">
              <div className="feature-icon">🎴</div>
              <h3>Crea flashcards</h3>
            </div>

            <div className="feature-card" data-scroll data-scroll-speed="2">
              <div className="feature-icon">📚</div>
              <h3>+50,000 decks</h3>
            </div>

            <div className="feature-card" data-scroll data-scroll-speed="1">
              <div className="feature-icon">👥</div>
              <h3>Comparte</h3>
            </div>

            <div className="feature-card" data-scroll data-scroll-speed="2">
              <div className="feature-icon">⏱️</div>
              <h3>Repetición espaciada</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer data-scroll-section>
        <div className="container">
          <p>© 2026 FlashCards Pro</p>
        </div>
      </footer>

    </div>
  );
}

export default App;