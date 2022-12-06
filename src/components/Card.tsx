import React from 'react';
import classNames from 'classnames';
import cardImages from '../images/cards';

export type CardIds = Array<number>;
export type CardId = number;

export interface CardInterface {
  id: CardId;
  image: CardId;
}

export interface CardProps extends CardInterface {
  handleClick: (cardId: CardId, isFlipped: boolean, isSolved: boolean) => void;
  flipped: boolean;
  solved: boolean;
}

function Card({
  id,
  image,
  handleClick,
  flipped,
  solved,
}: CardProps) {
  const cardClassNames = classNames('card', {
    'card--flipped': flipped,
    'card--solved': solved,
  });

  return (
    <button
      type="button"
      className={cardClassNames}
      onClick={() => handleClick(id, flipped, solved)}
    >
      <div className="card__inner">
        <div className="card__front">
          <span>
            {image}
          </span>
        </div>
        <div className="card__back">
          <img src={cardImages[image]} alt="Card" />
        </div>
      </div>
    </button>
  );
}

const isCardTheSame = (prevProps: CardProps, nextProps: CardProps) => (
  prevProps.flipped === nextProps.flipped && prevProps.solved === nextProps.solved
);

export default React.memo(Card, isCardTheSame);
