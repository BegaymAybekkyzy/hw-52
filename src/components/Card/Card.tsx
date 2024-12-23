import React from 'react';

interface ICardSuit {
  diams: string;
  hearts: string;
  clubs: string;
  spades: string;
}

interface Props {
  rank: '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A';
  suit: keyof ICardSuit;
}

const cardSuits: ICardSuit = {
  diams: '♦',
  hearts: '♥',
  clubs: '♣',
  spades: '♠',
};

const Card: React.FC<Props> = ({rank, suit}) => {
  return (
    <span className={`card rank-${rank} ${suit}`}>
      <span className={rank}>K</span>
      <span className={suit}>{cardSuits[suit]}</span>
    </span>
  );
};

export default Card;
