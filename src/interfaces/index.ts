import { BoardStateType } from '../board';

export interface IPastVictory {
  winner: BoardStateType;
  date: Date;
}
