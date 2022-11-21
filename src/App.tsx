import React, {
  useState,
  useEffect,
} from 'react';
import cardImages from './images/cards';
import * as Helper from './helpers';

import Card from './components/Card';

const cards = Helper.shuffleCards(cardImages);

function App() {
  // Initialise the state
  const [solvedCards, setSolvedCards] = useState<Set<number>>(new Set());
  const [flippedCards, setFlippedCards] = useState<Array<number>>([]);

  const handleClick = (cardId: number, isFlipped: boolean, isSolved: boolean) => {
    // Ignore the click if the card is already solved
    if (isFlipped || isSolved) {
      return;
    }

    setFlippedCards((prevFlippedCards: Array<number>) => {
      if (prevFlippedCards.length % 2 === 0) return [cardId];

      return [prevFlippedCards[0], cardId];
    });
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstCardId, secondCardId] = flippedCards;

      // eslint-disable-next-line max-len
      if (cards.find((card) => card.id === firstCardId)?.image === cards.find((card) => card.id === secondCardId)?.image) {
        setSolvedCards((prevSolvedCards: Set<number>) => new Set(prevSolvedCards)
          .add(firstCardId)
          .add(secondCardId));
      }
    }
  }, [flippedCards]);

  if (!cards.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="wrapper">
      <div className="board">
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            image={card.image}
            flipped={flippedCards.indexOf(card.id) !== -1}
            solved={solvedCards.has(card.id)}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
