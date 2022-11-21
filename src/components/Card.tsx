import React from 'react';
import classNames from 'classnames';
import cardImages from '../images/cards';

export interface CardInterface {
  id: number;
  image: number;
}

export interface CardProps extends CardInterface {
  handleClick: (id: number, isFlipped: boolean, isSolved: boolean) => void;
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
        <div className="card__front" />
        <div className="card__back">
          <img src={cardImages[image]} alt="Card" />
        </div>
      </div>
    </button>
  );
}

export default Card;