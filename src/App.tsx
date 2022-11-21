import React, { useState, useEffect } from 'react';
import cardImages from './images/cards';

interface Card {
  id: number;
  image: number;
}

function App() {
  const [cards, setCards] = useState<Array<Card>>([]);

  useEffect(() => {
    const newCards = [];

    for (let i = 1; i <= Object.keys(cardImages).length; i += 1) {
      newCards.push({
        id: i * 2 - 1,
        image: i,
      }, {
        id: i * 2,
        image: i,
      });
    }

    setCards(newCards.sort(() => Math.random() - 0.5));
  }, []);

  if (!cards.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="wrapper">
      <div className="board">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <div className="card__inner">
              <div className="card__front" />
              <div className="card__back">
                <img src={cardImages[card.image]} alt="Card" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
