import React from "react";
import Board, { Props } from "./Board";
import { Box, Paper } from "@mui/material";

const Game: React.FC<Props> = ({ knightPosition }) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={10}
        sx={{
          marginTop: ({ padding: { boardPadding } }) => `${boardPadding / 2}px`,
          width: ({ padding: { boardPadding } }) =>
            `calc(100vh - ${boardPadding}px)`,
          height: ({ padding: { boardPadding } }) =>
            `calc(100vh - ${boardPadding}px)`,
          display: "flex",
          flexWrap: "wrap",
          "@media screen and (orientation: portrait)": {
            width: ({ padding: { boardPadding } }) =>
              `calc(100vw - ${boardPadding / 2}px)`,
            height: ({ padding: { boardPadding } }) =>
              `calc(100vw - ${boardPadding / 2}px)`,
            marginTop: ({ padding: { boardPadding } }) =>
              `${boardPadding / 4}px`,
          },
        }}
      >
        <Board knightPosition={knightPosition} />
      </Paper>
    </Box>
  );
};

export default Game;
