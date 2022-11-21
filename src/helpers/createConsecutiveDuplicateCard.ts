const createConsecutiveDuplicateCard = (card: number) => [{
  id: card * 2 - 1,
  image: card,
}, {
  id: card * 2,
  image: card,
}];

export default createConsecutiveDuplicateCard;
