"use client";

import { AuthPageBanner } from "@/components/AuthPageBanner";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  IconButton,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface State {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  showPassword: boolean;
}

export default function Login() {
  const [values, setValues] = useState<State>({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleChange =
    (prop: keyof State) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const router = useRouter();

  const goToRegister = () => {
    router.push("/register");
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 40,
        alignItems: "center",
      }}
    >
      <AuthPageBanner />
      <Box
        sx={{
          width: "400px",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "40px",
          }}
          component="h1"
        >
          AutoTrade
        </Typography>
        <Typography
          sx={{
            mt: 1,
            fontSize: "20px",
            fontWeight: 600,
          }}
          component="h2"
        >
          Join AutoTrade
        </Typography>
        <Typography sx={{ marginTop: "2px" }}>
          Create your account to start buying and selling cars
        </Typography>
        <Box
          sx={{
            mt: 3,
          }}
          component="form"
        >
          <Box
            sx={{
              mt: 3,
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <TextField
              sx={{
                width: "100%",
              }}
              id="email"
              label="Email"
              variant="outlined"
              slotProps={{
                htmlInput: {
                  type: "email",
                },
              }}
            />
            <OutlinedInput
              id="password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              placeholder="Password"
              endAdornment={
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? (
                    <Visibility />
                  ) : (
                    <VisibilityOff />
                  )}
                </IconButton>
              }
            />
          </Box>
          <Button
            variant="contained"
            sx={{
              mt: 3,
              width: "100%",
              height: "45px",
            }}
          >
            Log In
          </Button>
        </Box>
        <Typography sx={{ mt: 1 }}>
          New to AutoTrade?{" "}
          <Typography
            onClick={goToRegister}
            sx={{
              textDecoration: "underline",
              cursor: "pointer",
            }}
            color="primary"
            component="span"
          >
            Sign Up
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
}
