export interface Game {
  id: string;
  title: string;
  description: string;
  status: 'UPCOMING' | 'ONGOING' | 'COMPLETED';
  isTournament: boolean;
  entryFee: number;
  reward: number;
  hasPlayedGame: boolean;
  playerCount: number;
}
