"use client";

import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";

export const Banner = () => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "800px",
          backgroundImage: 'url("/images/banner.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(50%)",
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: "62px",
            fontWeight: "bold",
          }}
          component="h1"
        >
          Find Your Perfect Vehicle
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontSize: "28px",
          }}
          component="p"
        >
          Discover thousands of quality pre-owned vehicles from trusted
          dealers
        </Typography>
        <Paper
          sx={{
            mt: 2,
            p: 2,
            display: "flex",
            alignItems: "center",
            gap: 5,
          }}
          elevation={3}
        >
          <TextField id="outlined-basic" label="Make" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="Model"
            variant="outlined"
          />
          <TextField
            label="Min Price"
            value={minPrice}
            onChange={(e) => {
              const v = e.target.value.replace(/\D+/g, "");
              setMinPrice(v);
            }}
            slotProps={{
              htmlInput: {
                inputMode: "numeric",
                pattern: "[0-9]*",
              },
            }}
          />
          <TextField
            label="Max Price"
            value={maxPrice}
            onChange={(e) => {
              const v = e.target.value.replace(/\D+/g, "");
              setMaxPrice(v);
            }}
            slotProps={{
              htmlInput: {
                inputMode: "numeric",
                pattern: "[0-9]*",
              },
            }}
          />
          <Button
            sx={{
              width: "120px",
              height: "55px",
            }}
            variant="contained"
          >
            Search
          </Button>
        </Paper>
      </Box>
    </Box>
  );
};
