// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  // Estado para los decks de ejemplo
  const [decks, setDecks] = useState([
    { id: 1, name: 'Vocabulario de Francés', cards: [{front: 'Bonjour', back: 'Hola'}, {front: 'Merci', back: 'Gracias'}] },
    { id: 2, name: 'Anatomía Básica', cards: [{front: 'Hueso del muslo', back: 'Fémur'}, {front: 'Órgano que bombea sangre', back: 'Corazón'}] },
  ]);
  const [currentDeck, setCurrentDeck] = useState(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleStudy = (deck) => {
    setCurrentDeck(deck);
    setCurrentCardIndex(0);
    setIsFlipped(false);
  };

  const nextCard = () => {
    if (currentDeck && currentCardIndex < currentDeck.cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false);
    } else {
      alert('¡Terminaste el deck!');
      setCurrentDeck(null);
    }
  };

  // Vista principal: Lista de Decks
  if (!currentDeck) {
    return (
      <div className="App">
        <header className="app-header">
          <h1>📚 Mis FlashDecks</h1>
          <p className="subtitle">Estudia con repetición espaciada</p>
        </header>
        <main className="container">
          <div className="decks-grid">
            {decks.map(deck => (
              <div key={deck.id} className="deck-card">
                <h3>{deck.name}</h3>
                <p>{deck.cards.length} cartas</p>
                <button className="btn-primary" onClick={() => handleStudy(deck)}>
                  Estudiar →
                </button>
              </div>
            ))}
          </div>
          <button className="btn-secondary">+ Crear Nuevo Deck</button>
        </main>
      </div>
    );
  }

  // Vista de Estudio (cuando se selecciona un deck)
  return (
    <div className="App study-view">
      <header className="study-header">
        <button className="btn-icon" onClick={() => setCurrentDeck(null)}>← Volver</button>
        <h2>{currentDeck.name}</h2>
        <p>Tarjeta {currentCardIndex + 1} de {currentDeck.cards.length}</p>
      </header>
      <main className="study-area">
        <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={() => setIsFlipped(!isFlipped)}>
          <div className="flashcard-inner">
            <div className="flashcard-front">
              <p>{currentDeck.cards[currentCardIndex].front}</p>
              <span className="hint">(toca para voltear)</span>
            </div>
            <div className="flashcard-back">
              <p>{currentDeck.cards[currentCardIndex].back}</p>
            </div>
          </div>
        </div>
        <div className="study-controls">
          <button className="btn-secondary" onClick={nextCard}>Siguiente tarjeta →</button>
        </div>
      </main>
    </div>
  );
}

export default App;