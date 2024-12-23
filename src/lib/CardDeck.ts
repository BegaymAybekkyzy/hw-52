import Card from './Card';

class CardDeck {
  public deck: Card[];

  constructor() {
    this.deck = [];
    const ranks:string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits:string[] = ['diams', 'hearts', 'clubs', 'spades'];

    for(const rank of ranks){
      for(const suit of suits){
        this.deck.push(new Card(rank, suit));
      }
    }
  }

  getCard(): Card {
    const randomCard = Math.floor(Math.random()*this.deck.length);
    const card = this.deck.splice(randomCard, 1);
    return card[0];
  }

  getCards(howMany:number): Card[] {
    for(let i = 0; i < howMany; i++) {
      this.getCard();
    }

    return this.deck;
  }
 }

 export default CardDeck;