import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="container navbar-container">
          <div className="logo">
            <span className="logo-icon">📚</span>
            <span className="logo-text">FlashCards Pro</span>
          </div>
          <div className="nav-buttons">
            <button className="nav-btn-login">Iniciar sesión</button>
            <button className="nav-btn-register">Registrarse</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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
              <button className="btn-secondary">📚 Decks Colaborativos</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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