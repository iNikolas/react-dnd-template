import React from "react";
import { Box } from "@mui/material";
import FIGURES from "../../../common/figures";
import { useDrag } from "react-dnd";
import DRAG_TYPES from "../../../common/dragTypes";

const Knight: React.FC = () => {
  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: DRAG_TYPES.KNIGHT,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <Box
      sx={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
        backgroundColor: "transparent !important",
      }}
      ref={drag}
    >
      {FIGURES.KNIGHT}
    </Box>
  );
};

export default Knight;
