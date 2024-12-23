import React from "react";

interface Props {
  rank: string;
  suit: "diams" | "hearts" | "clubs" | "spades";
}

const cardSuits = {
  diams: "♦",
  hearts: "♥",
  clubs: "♣",
  spades: "♠",
};

const Card: React.FC<Props> = ({ rank, suit }) => {
  return (
    <span className={`card rank-${rank.toLowerCase()} ${suit}`}>
      <span className="rank">{rank}</span>
      <span className="suit">{cardSuits[suit]}</span>
    </span>
  );
};

export default Card;
