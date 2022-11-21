import createConsecutiveDuplicateCard from './createConsecutiveDuplicateCard';

const shuffleCards = (images: Record<number, string>) => {
  const cards = [];

  for (let i = 1; i <= Object.keys(images).length; i += 1) {
    cards.push(...createConsecutiveDuplicateCard(i));
  }

  return cards.sort(() => Math.random() - 0.5);
};

export default shuffleCards;
