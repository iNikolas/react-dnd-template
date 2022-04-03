import React from "react";
import Square from "../Square";
import DRAG_TYPES from "../../../common/dragTypes";
import { canMoveKnight, moveKnight } from "../../../common/observe";
import { useDrop } from "react-dnd";
import { Box } from "@mui/material";
import Overlay from "../Overlay";

interface Props {
  x: number;
  y: number;
}

const BoardSquare: React.FC<Props> = ({ x, y, children }) => {
  const black = !!((x + y) % 2);

  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: DRAG_TYPES.KNIGHT,
      canDrop: () => canMoveKnight(x, y),
      drop: () => moveKnight(x, y),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [x, y]
  );

  return (
    <Box
      ref={drop}
      sx={{
        height: "12.5%",
        width: "12.5%",
        backgroundColor: black ? "black" : "white",
        position: "relative",
      }}
    >
      <Square black={black}>{children}</Square>
      {!isOver && canDrop && <Overlay backgroundColor="yellow" />}
      {isOver && !canDrop && <Overlay backgroundColor="red" />}
      {isOver && canDrop && <Overlay backgroundColor="green" />}
    </Box>
  );
};

export default BoardSquare;
