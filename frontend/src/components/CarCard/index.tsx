import { Box, Paper } from "@mui/material";
import React from "react";

export const CarCard = () => {
  return (
    <Paper
      sx={{
        mt: 6,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "400px",
          height: "200px",
          backgroundImage: 'url("/images/banner.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></Box>
      <Box
        sx={{
          p: 3,
        }}
      >
        asd
      </Box>
    </Paper>
  );
};
