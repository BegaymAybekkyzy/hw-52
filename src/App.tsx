import './App.css';
import Card from './components/Card/Card';
import CardDeck from './lib/CardDeck';
import { useState } from 'react';

interface ICard {
  rank: string;
  suit: 'diams' | 'hearts' | 'clubs' | 'spades';
}

const App = () => {
  const [hand, setHand] = useState<ICard[]>([]);
  const [deck] = useState(new CardDeck());

  const CardDistribution = () => {
    const cards = deck.getCards(5) as ICard[];
    console.log(cards);
    setHand(cards);
    console.log(hand);
  };

  if (hand.length === 0) {
    return (
      <>
        <div>
          <span>Всего карт: {deck.deck.length}</span>
        </div>
        <button onClick={CardDistribution}>Раздать карты</button>
      </>
    );
  } else if (deck.deck.length === 0) {
    return (
      <div>
        <span>Всего карт: {deck.deck.length}</span>
      </div>
    );
  } else {
    return (
      <>
        <div>
          <span>Всего карт: {deck.deck.length}</span>
        </div>
        <div className="playingCards faceImages">
          {hand.map((card, index) => (
            <Card key={index} rank={card.rank} suit={card.suit}/>
          ))}
        </div>

        <button onClick={CardDistribution}>Раздать карты</button>
      </>
    );
  }

};

export default App;
