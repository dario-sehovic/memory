import { CardInterface } from '../components/Card';
import getCardById from './getCardById';

const compareCardsById = (cards: Array<CardInterface>, a: number, b: number) => {
  const imageA = getCardById(cards, a).image;
  const imageB = getCardById(cards, b).image;

  return imageA === imageB;
};

export default compareCardsById;
