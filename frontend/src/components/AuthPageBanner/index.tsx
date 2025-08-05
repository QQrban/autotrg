import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

export const AuthPageBanner = () => {
  const router = useRouter();

  const goToMainPage = () => {
    router.push("/");
  };

  return (
    <Box
      sx={{
        boxShadow: "1px 1px 4px #292929",
        width: "50%",
        height: "100vh",
        backgroundImage: 'url("/images/erik-mcleanunsplash.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        onClick={goToMainPage}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          cursor: "pointer",
          p: "1px 10px",
          width: "220px",
        }}
      >
        <Box
          component="img"
          src="/icons/logo.png"
          alt="Car Icon"
          sx={{
            width: 60,
            height: "auto",
          }}
        />
        <Typography
          variant="h6"
          noWrap
          component="a"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontWeight: 700,
            textDecoration: "none",
            color: "white",
          }}
        >
          AutoTrade
        </Typography>
      </Box>
    </Box>
  );
};
