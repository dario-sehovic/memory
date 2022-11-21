import React, {
  useState,
  useEffect,
} from 'react';

import * as Helper from './helpers';

import cardImages from './images/cards';
import Card, { CardId, CardIds, CardInterface } from './components/Card';

// Load and shuffle cards
const cards = Helper.shuffleCards(cardImages);

function App() {
  // Initialise the state
  // Array of solved/paired cards
  const [solvedCardIds, setSolvedCardIds] = useState<CardIds>([]);
  // Array of currently active/flipped cards
  const [flippedCardIds, setFlippedCardIds] = useState<CardIds>([]);

  // Card click handler
  const handleClick = (cardId: CardId, isFlipped: boolean, isSolved: boolean) => {
    // Ignore the click if the card is already solved or flipped
    if (isFlipped || isSolved) return;

    setFlippedCardIds((prevFlippedCards: Array<number>) => {
      // If no card is flipped, flip the card
      // If two cards are flipped, validate them in the useEffect hook below and flip just this card
      if (prevFlippedCards.length % 2 === 0) return [cardId];

      // If one card is flipped, open the current card besides the already flipped one
      return [prevFlippedCards[0], cardId];
    });
  };

  // Validate the flipped cards
  useEffect(() => {
    // If two cards are flipped, check if they match
    if (flippedCardIds.length === 2 && Helper.compareCardsById(cards, flippedCardIds)) {
      // If the cards match, present them as solved
      setSolvedCardIds((prevSolvedCardIds: CardIds) => [
        ...prevSolvedCardIds,
        ...flippedCardIds,
      ]);
    }
  }, [flippedCardIds]);

  return (
    <div className="wrapper">
      <div className="board">
        {cards.map((card: CardInterface) => (
          <Card
            key={card.id}
            id={card.id}
            image={card.image}
            flipped={flippedCardIds.includes(card.id)}
            solved={solvedCardIds.includes(card.id)}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
