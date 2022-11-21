import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import * as Helper from '../helpers';

import Card, { CardId, CardIds, CardInterface } from './Card';
import cardImages from '../images/cards';

// Load and shuffle cards
const cards = Helper.shuffleCards(cardImages);

interface BoardProps {
  cheatMode: boolean;
}

function Board({ cheatMode }: BoardProps) {
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
      // If no card is flipped, flip the clicked card
      // If two cards are already flipped,
      // validate them in the useEffect hook below and
      // override them by flipping the clicked card
      if (prevFlippedCards.length % 2 === 0) return [cardId];

      // If only one card is flipped,
      // flip the clicked card besides the already flipped one
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

  const boardClassNames = classNames('board', {
    'board--cheat-mode': cheatMode,
  });

  return (
    <div className={boardClassNames}>
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
  );
}

export default Board;
