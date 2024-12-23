import './App.css';
import Card from './components/Card/Card';
import CardDeck from './lib/CardDeck';
import { useState } from 'react';
import { ICard } from './types';
import PokerHand from './lib/PokerHand';

const App = () => {
  const [hand, setHand] = useState<ICard[]>([]);
  const [deck] = useState(new CardDeck());
  const combinations = new PokerHand(hand);

  const CardDistribution = () => {
    const cards = deck.getCards(5) as ICard[];
    setHand(cards);
  };

  if (hand.length === 0) {
    return (
      <>
        <div>
          <p>Всего карт: {deck.deck.length}</p>
        </div>
        <button onClick={CardDistribution}>Раздать карты</button>
      </>
    );
  } else if (deck.deck.length === 0) {
    return (
      <div>
        <p>Всего карт: {deck.deck.length}</p>
      </div>
    );
  } else {
    return (
      <>
        <div>
          <p>Всего карт: {deck.deck.length}</p>
          <p>Комбинация: {combinations.getOutcome()}</p>
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
