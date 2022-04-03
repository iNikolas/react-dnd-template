import React from "react";
import { Typography } from "@mui/material";

export interface Props {
  black: boolean;
  onClick?: () => void;
}

const Square: React.FC<Props> = ({ black, onClick, children }) => {
  return (
    <Typography
      onClick={onClick}
      align="justify"
      sx={{
        height: "100%",
        width: "100%",
        backgroundColor: black ? "black" : "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      component="div"
      color={black ? "white" : "black"}
      fontSize="8vh"
    >
      {children}
    </Typography>
  );
};

export default Square;
