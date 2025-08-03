import { Banner } from "@/components/Banner";
import Header from "@/components/Header";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <div>
      <Header />
      <div>
        <Banner />
      </div>
      <Box sx={{ textAlign: "center" }}>
        <Typography
          sx={{
            mt: 1,
            fontSize: "30px",
            fontWeight: "bold",
          }}
          component="p"
        >
          Featured Vehicles
        </Typography>
      </Box>
    </div>
  );
}
