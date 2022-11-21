import React, { useState, useEffect } from 'react';
import cardImages from './images/cards';
import * as Helper from './helpers';

interface Card {
  id: number;
  image: number;
}

function App() {
  const [cards, setCards] = useState<Array<Card>>([]);

  useEffect(() => {
    const newCards = Helper.shuffleCards(cardImages);

    setCards(newCards);
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
