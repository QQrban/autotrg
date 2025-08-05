"use client";

import { AuthPageBanner } from "@/components/AuthPageBanner";
import Header from "@/components/Header";
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
  confirmPassword: string;
  email: string;
  showPassword: boolean;
  showConfirmPassword: boolean;
}

export default function Register() {
  const [values, setValues] = useState<State>({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    email: "",
    showPassword: false,
    showConfirmPassword: false,
  });

  const router = useRouter();

  const handleChange =
    (prop: keyof State) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleClickShowConfirmPassword = () => {
    setValues({
      ...values,
      showConfirmPassword: !values.showConfirmPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const goToLogin = () => {
    router.push("/login");
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
              display: "flex",
              gap: 3,
            }}
          >
            <TextField
              id="firstName"
              label="First name"
              variant="outlined"
            />
            <TextField
              id="lastName"
              label="Last name"
              variant="outlined"
            />
          </Box>
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
              id="username"
              label="Username"
              variant="outlined"
            />
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
            <OutlinedInput
              id="confirmPassword"
              type={values.showConfirmPassword ? "text" : "password"}
              value={values.confirmPassword}
              onChange={handleChange("confirmPassword")}
              placeholder="Confirm Password"
              endAdornment={
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showConfirmPassword ? (
                    <Visibility />
                  ) : (
                    <VisibilityOff />
                  )}
                </IconButton>
              }
            />
          </Box>
          <Box
            sx={{
              mt: 2,
              display: "flex",
              gap: 1,
              alignItems: "center",
            }}
          >
            <Checkbox sx={{ p: 0 }} id="termsCheckbox" />
            <Box
              htmlFor="termsCheckbox"
              component="label"
              sx={{
                fontSize: "14px",
                color: "#555",
                cursor: "pointer",
              }}
            >
              I agree to the{" "}
              <Typography color="primary" component="span">
                Terms of Service
              </Typography>{" "}
              and{" "}
              <Typography color="primary" component="span">
                Privacy Policy
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              mt: 2,
              display: "flex",
              gap: 1,
              alignItems: "center",
            }}
          >
            <Checkbox sx={{ p: 0 }} id="newsCheckbox" />
            <Box
              htmlFor="newsCheckbox"
              component="label"
              sx={{
                fontSize: "14px",
                color: "#555",
                cursor: "pointer",
              }}
            >
              Send me updates about new cars and special offers
            </Box>
          </Box>
          <Button
            variant="contained"
            sx={{
              mt: 3,
              width: "100%",
              height: "45px",
            }}
          >
            Create Account
          </Button>
        </Box>
        <Typography sx={{ mt: 1 }}>
          Already have an account?{" "}
          <Typography
            onClick={goToLogin}
            sx={{
              textDecoration: "underline",
              cursor: "pointer",
            }}
            color="primary"
            component="span"
          >
            Log In
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
}
