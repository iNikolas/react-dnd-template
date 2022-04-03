import React from "react";
import { Position } from "../features/Game/Board";
import Knight from "../features/Game/Knight";
import BoardSquare from "../features/Game/BoardSquare";

type RenderSquare = (index: number, position: Position) => JSX.Element;
type RenderPiece = (
  x: number,
  y: number,
  position: Position
) => JSX.Element | null;

const renderPiece: RenderPiece = (x, y, [knightX, knightY]) => {
  const isKnightHere = knightX === x && knightY === y;
  return isKnightHere ? <Knight /> : null;
};

const renderSquare: RenderSquare = (index, position) => {
  const x = index % 8;
  const y = Math.floor(index / 8);

  return (
    <BoardSquare key={index} x={x} y={y}>
      {renderPiece(x, y, position)}
    </BoardSquare>
  );
};

export default renderSquare;
