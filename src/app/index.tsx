import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Game from "../features/Game";
import { Props } from "../features/Game/Board";
import theme from "../common/theme";

const App: React.FC<Props> = ({ knightPosition }) => {
  return (
    <ThemeProvider theme={theme}>
      <DndProvider backend={HTML5Backend}>
        <CssBaseline />
        <Game knightPosition={knightPosition} />
      </DndProvider>
    </ThemeProvider>
  );
};

export default App;
