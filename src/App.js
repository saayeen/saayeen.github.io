import './App.css';

function App() {
  return (
    <div className="App">
      {/* Hero Section - igual que Noji */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>FlashCards Pro :<br />Aprende Más, Estresa Menos</h1>
            <p className="hero-description">
              Domina tus exámenes, aprende idiomas y mucho más, gracias a la magia de la 
              repetición espaciada, respaldada por la ciencia. 
              Únete a nuestra comunidad de más de <strong>10,000 estudiantes</strong>.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary btn-large">🚀 Comienza a aprender</button>
              <button className="btn-secondary">📚 Más de 50,000 decks</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Estudia inteligentemente */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Estudia inteligentemente con FlashCards Pro</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎴</div>
              <h3>Crea flashcards como quieras</h3>
              <p>Crea cartas desde texto, imágenes o importa desde otros formatos.</p>
              <a href="#" className="feature-link">Crear flashcards →</a>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>Elige entre +50,000 decks</h3>
              <p>Encuentra decks prediseñados de cualquier tema o materia.</p>
              <a href="#" className="feature-link">Explorar decks →</a>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Crea y comparte con amigos</h3>
              <p>Estudia en grupo, compite y comparte tus mejores decks.</p>
              <a href="#" className="feature-link">Crear y compartir →</a>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⏱️</div>
              <h3>Aprende con repetición espaciada</h3>
              <p>Algoritmo inteligente que optimiza tu memoria a largo plazo.</p>
              <a href="#" className="feature-link">Aprende más →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios grandes - igual que Noji */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">Alcanza tus objetivos</h2>
          
          <div className="testimonial-row">
            <div className="testimonial-badge">Preparación para exámenes</div>
            <div className="testimonial-content">
              <p className="testimonial-text">
                "Soy un estudiante de medicina estresado, y esta aplicación es mi salvación. 
                Gracias a FlashCards Pro que gestiona mi plan de estudio, he ganado tiempo libre 
                y una vida más equilibrada. Es como tener un compañero de estudio confiable."
              </p>
              <p className="testimonial-author">— Sam Makka, Estudiante de medicina</p>
            </div>
          </div>

          <div className="testimonial-row">
            <div className="testimonial-badge">Enseñar a otros</div>
            <div className="testimonial-content">
              <p className="testimonial-text">
                "Como profesor de matemáticas, ya conocía la repetición espaciada, pero era 
                escéptico con las soluciones digitales. FlashCards Pro me ha convencido por completo. 
                Ahora recomiendo esta aplicación a todos mis alumnos."
              </p>
              <p className="testimonial-author">— Shannon Stewart, Profesora de matemáticas</p>
            </div>
          </div>

          <div className="testimonial-row">
            <div className="testimonial-badge">Aprendizaje de idiomas</div>
            <div className="testimonial-content">
              <p className="testimonial-text">
                "Aprender un nuevo idioma mientras trabajo tiempo completo puede ser abrumador. 
                FlashCards Pro ha sido más efectivo que las mejores apps de idiomas. 
                Cada vez que encuentro una palabra nueva, la añado a un deck temático."
              </p>
              <p className="testimonial-author">— Luna Fridrih, Especialista en informática</p>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de tweets/testimonios pequeños */}
      <section className="social-proof">
        <div className="container">
          <h2 className="section-title">Nuestros Estudiantes = Nuestra Inspiración</h2>
          <div className="tweets-grid">
            <div className="tweet-card">
              <p>"La repetición espaciada es como repasar en el momento justo para que la información se quede 🌼"</p>
              <span className="tweet-author">@tmnastudyhub</span>
            </div>
            <div className="tweet-card">
              <p>"¡Dios mío, este examen fue tan fácil! ¿Por qué no usé FlashCards Pro antes?"</p>
              <span className="tweet-author">missypiggie</span>
            </div>
            <div className="tweet-card">
              <p>"Es tan fácil crear flashcards, puedo copiar y pegar contenido o importarlo de otras apps"</p>
              <span className="tweet-author">@everyrinidays</span>
            </div>
            <div className="tweet-card">
              <p>"Una app indispensable si estás aprendiendo un nuevo idioma. ¡La mejor forma de aprender vocabulario!"</p>
              <span className="tweet-author">@giiwwa</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="cta">
        <div className="container">
          <h2>¡Empieza a aprender hoy mismo!</h2>
          <p>Packs desde $9.99 | Acceso vitalicio por $29.99</p>
          <button className="btn-primary btn-large">💳 Comprar ahora</button>
          <p className="cta-small">Oferta especial: 30% de descuento con código FLASH30</p>
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