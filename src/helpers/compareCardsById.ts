import { CardInterface, CardIds } from '../components/Card';
import getCardById from './getCardById';

const compareCardsById = (cards: Array<CardInterface>, cardIds: CardIds) => {
  const imageA = getCardById(cards, cardIds[0]).image;
  const imageB = getCardById(cards, cardIds[1]).image;

  return imageA === imageB;
};

export default compareCardsById;
