import { Banner } from "@/components/Banner";
import { CarCard } from "@/components/CarCard";
import Header from "@/components/Header";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box component="main">
      <Header />
      <div>
        <Banner />
      </div>
      <Box sx={{ textAlign: "center" }}>
        <Typography
          sx={{
            mt: 3,
            fontSize: "30px",
            fontWeight: "bold",
          }}
          component="p"
        >
          Featured Vehicles
        </Typography>
        <Typography sx={{ mt: 1 }}>
          Top Value and Quality, Chosen by Our Experts
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <CarCard />
        <CarCard />
        <CarCard />
      </Box>
    </Box>
  );
}
