import { CardInterface } from '../components/Card';

const getCardById = (cards: Array<CardInterface>, id: number) => (
  cards.find((card: CardInterface) => card.id === id) as CardInterface
);

export default getCardById;
