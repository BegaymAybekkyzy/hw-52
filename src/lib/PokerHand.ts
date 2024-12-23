import { ICard } from "../types";

class PokerHand {
  public hand: ICard[];

  constructor(hand: ICard[]) {
    this.hand = hand;
  }

  getOutcome(): string {
    const ranks = this.hand.map((card) => card.rank);
    const suits = this.hand.map((card) => card.suit);

    const rankCount = this.getRankCount(ranks);
    const isFlush = this.isFlush(suits);
    const isStraight = this.isStraight(ranks);

    if (isFlush && isStraight) {
      if (ranks.includes("A")) {
        return "Роял-флэш";
      }
    }

    if (this.isFourOfAKind(rankCount)) return "Каре";
    if (this.isFullHouse(rankCount)) return "Фулл-хаос";
    if (isFlush) return "Флэш";
    if (isStraight) return "Стрит";
    if (this.isThreeOfAKind(rankCount)) return "Тройка";
    if (this.isTwoPair(rankCount)) return "Две пары";
    if (this.isOnePair(rankCount)) return "Одна пара";

    return "Старшая карта";
  }

  getRankCount(ranks: string[]): Record<string, number> {
    return ranks.reduce(
      (acc, rank) => {
        acc[rank] = (acc[rank] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );
  }

  isFlush(suits: string[]): boolean {
    return new Set(suits).size === 1;
  }

  isStraight(ranks: string[]): boolean {
    const orderedRanks = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];
    const indices = ranks
      .map((rank) => orderedRanks.indexOf(rank))
      .sort((a, b) => a - b);
    return indices[4] - indices[0] === 4 && new Set(indices).size === 5;
  }

  isFourOfAKind(rankCount: Record<string, number>): boolean {
    return Object.values(rankCount).includes(4);
  }

  isFullHouse(rankCount: Record<string, number>): boolean {
    const counts = Object.values(rankCount);
    return counts.includes(3) && counts.includes(2);
  }

  isThreeOfAKind(rankCount: Record<string, number>): boolean {
    return Object.values(rankCount).includes(3);
  }

  isTwoPair(rankCount: Record<string, number>): boolean {
    return Object.values(rankCount).filter((count) => count === 2).length === 2;
  }

  isOnePair(rankCount: Record<string, number>): boolean {
    return Object.values(rankCount).includes(2);
  }
}

export default PokerHand;
