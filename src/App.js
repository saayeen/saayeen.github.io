import { useEffect, useRef } from 'react';
import './App.css';
import SimpleParallax from 'simple-parallax-js';

function App() {
  const parallaxRef = useRef(null);
  const parallaxRef2 = useRef(null);

  useEffect(() => {
    // Inicializar parallax en los elementos que quieras
    if (parallaxRef.current) {
      new SimpleParallax(parallaxRef.current, {
        orientation: 'up',
        scale: 1.2,
        overflow: false,
        delay: 0.6,
        transition: 'cubic-bezier(0,0,0,1)'
      });
    }
    
    if (parallaxRef2.current) {
      new SimpleParallax(parallaxRef2.current, {
        orientation: 'down',
        scale: 1.3,
        overflow: false
      });
    }
  }, []);

  return (
    <div className="App">
      {/* Header / Hero Section con parallax */}
      <header className="hero">
        <div className="container">
          {/* Imagen con parallax (opcional) */}
          <div className="parallax-bg" ref={parallaxRef}>
            <div className="parallax-content">
              <h1>📚 FlashCards Pro</h1>
              <p className="subtitle">Aprende más rápido, estresa menos</p>
              <p className="description">
                Domina idiomas, prepara exámenes y retén información con nuestro 
                método de <strong>repetición espaciada</strong>. Únete a más de 
                <strong> 10,000 estudiantes</strong> que ya mejoraron sus resultados.
              </p>
              <button className="btn-primary" onClick={() => alert('🚀 Próximamente: Tienda de flashcards')}>
                🛒 Comprar decks ahora
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Features con parallax en las tarjetas */}
      <section className="features">
        <div className="container">
          <h2 ref={parallaxRef2}>¿Por qué elegir FlashCards Pro?</h2>
          <div className="features-grid">
            <div className="card">
              <span className="emoji">🎴</span>
              <h3>Crea flashcards fácilmente</h3>
              <p>Desde texto, imágenes o importa desde otros formatos.</p>
            </div>
            <div className="card">
              <span className="emoji">📦</span>
              <h3>+50 decks prediseñados</h3>
              <p>Inglés, medicina, programación, oposiciones y más.</p>
            </div>
            <div className="card">
              <span className="emoji">🤝</span>
              <h3>Comparte con amigos</h3>
              <p>Estudia en grupo y compite por mejores puntuaciones.</p>
            </div>
            <div className="card">
              <span className="emoji">⏱️</span>
              <h3>Repetición espaciada</h3>
              <p>Algoritmo inteligente que optimiza tu memoria.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="testimonials">
        <div className="container">
          <h2>Lo que dicen nuestros clientes</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p>"Aprobé el MIR gracias a los decks de medicina. ¡Repetí solo lo que necesitaba!"</p>
              <span className="author">- Dra. Laura Gómez</span>
            </div>
            <div className="testimonial-card">
              <p>"Aprendí 1000 palabras en inglés en 2 semanas. Mejor que Duolingo."</p>
              <span className="author">- Carlos M., estudiante</span>
            </div>
            <div className="testimonial-card">
              <p>"Como profesor, recomiendo FlashCards Pro a todos mis alumnos."</p>
              <span className="author">- Javier Ruiz, profesor</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <div className="container">
          <h2>¡Empieza a aprender hoy mismo!</h2>
          <p>Pack básico: <strong>$9.99</strong> | Pack premium: <strong>$29.99</strong> (acceso vitalicio)</p>
          <button className="btn-primary btn-large" onClick={() => alert('🔗 Redirigiendo a pasarela de pago')}>
            💳 Comprar ahora
          </button>
          <p className="small">Oferta limitada: 30% de descuento con código FLASH30</p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>© 2026 FlashCards Pro - Tu método inteligente de estudio</p>
        </div>
      </footer>
    </div>
  );
}

export default App;