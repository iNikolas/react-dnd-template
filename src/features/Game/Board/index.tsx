import React from "react";
import renderSquare from "../../../common/renderSquare";

export type Position = Array<number>;

export interface Props {
  knightPosition: Position;
}

const Board: React.FC<Props> = ({ knightPosition }) => {
  const squares = [];

  for (let i = 0; i < 64; i++) squares.push(renderSquare(i, knightPosition));

  return <>{squares}</>;
};

export default Board;
