"use client";

import { AuthPageBanner } from "@/components/AuthPageBanner";
import RegisterForm from "@/components/RegisterForm";
import { RegisterFormTypes } from "@/types/registerFormTypes";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import { useFormik } from "formik";

const initialFormValues = {
  firstName: "",
  lastName: "",
  userName: "",
  password: "",
  confirmPassword: "",
  email: "",
  agreedTerms: false,
};

export default function Register() {
  const router = useRouter();

  const submitForm = (values: typeof initialFormValues) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: initialFormValues,
    onSubmit: submitForm,
  });

  const { values, handleChange, handleSubmit, errors } = formik;

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
        <RegisterForm
          values={values}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          errors={errors}
        />
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

        <Alert sx={{ mt: 3 }} severity="error">
          This is an error Alert.
        </Alert>
      </Box>
    </Box>
  );
}
