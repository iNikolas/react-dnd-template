import { Position } from "../features/Game/Board";

type Receive = (position: Position) => void;
type Observer = (receive: Receive) => void;
type CanMoveKnight = (toX: number, toY: number) => boolean;

export type MoveKnight = (toX: number, toY: number) => void;

let knightPosition: Position = [1, 7];
let observer: Receive | null = null;

const emitChange = () => {
  if (!observer) return;
  observer(knightPosition);
};

export const observe: Observer = (o) => {
  if (observer) {
    throw new Error("Multiple observers not implemented.");
  }

  observer = o;
  emitChange();
};

export const moveKnight: MoveKnight = (toX, toY) => {
  knightPosition = [toX, toY];
  emitChange();
};

export const canMoveKnight: CanMoveKnight = (toX, toY) => {
  const [x, y] = knightPosition;
  const dx = toX - x;
  const dy = toY - y;

  return (
    (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    (Math.abs(dx) === 1 && Math.abs(dy) === 2)
  );
};

export default observe;
