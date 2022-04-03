import React from "react";
import { Box } from "@mui/material";

interface Props {
  backgroundColor: "red" | "yellow" | "green";
}

const Overlay: React.FC<Props> = ({ backgroundColor }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1,
        backgroundColor,
        opacity: 0.5,
        height: "100%",
        width: "100%",
      }}
    />
  );
};

export default Overlay;
