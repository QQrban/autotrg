"use client";

import { RegisterFormTypes } from "@/types/registerFormTypes";
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
import { FormikErrors, FormikHandlers } from "formik";
import { useState } from "react";

type RegisterFormProps = {
  values: RegisterFormTypes;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: FormikHandlers["handleChange"];
  errors: FormikErrors<RegisterFormTypes>;
};

export default function RegisterForm({
  values,
  handleSubmit,
  handleChange,
  errors,
}: RegisterFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        mt: 3,
      }}
      component="form"
      onSubmit={(e) => handleSubmit(e)}
    >
      <Box
        sx={{
          display: "flex",
          gap: 3,
        }}
      >
        <TextField
          id="firstName"
          name="firstName"
          label="First name"
          variant="outlined"
          value={values.firstName}
          onChange={handleChange}
        />
        <Typography component="span">{errors.firstName}</Typography>
        <TextField
          id="lastName"
          name="firstName"
          label="Last name"
          variant="outlined"
          value={values.lastName}
          onChange={handleChange}
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
          name="userName"
          label="Username"
          variant="outlined"
          value={values.userName}
          onChange={handleChange}
        />
        <TextField
          sx={{
            width: "100%",
          }}
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          slotProps={{
            htmlInput: {
              type: "email",
            },
          }}
          value={values.email}
          onChange={handleChange}
        />

        <OutlinedInput
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange}
          placeholder="Password"
          endAdornment={
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          }
        />
        <OutlinedInput
          id="confirmPassword"
          name="confirmPassword"
          type={showConfirmPassword ? "text" : "password"}
          value={values.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          endAdornment={
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowConfirmPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
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
        <Checkbox
          id="termsCheckbox"
          name="agreedTerms"
          value={values.agreedTerms}
          onChange={handleChange}
          sx={{ p: 0 }}
        />
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
        type="submit"
      >
        Create Account
      </Button>
    </Box>
  );
}
