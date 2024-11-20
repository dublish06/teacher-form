import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Typography,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";

const TeacherSignUpForm = ({ onSubmitSuccess }) => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      gender: "",
      experience: "",
      joiningDate: "",
      achievements: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phoneNumber: Yup.string()
        .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
        .required("Phone Number is required"),
      gender: Yup.string().required("Gender is required"),
      experience: Yup.number()
        .min(0, "Experience must be 0 or more")
        .required("Experience is required"),
      joiningDate: Yup.date().required("Joining Date is required"),
      achievements: Yup.string()
        .max(400, "Achievements must be under 400 characters")
        .required("Achievements are required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      // Mock backend API call
      setTimeout(() => {
        console.log("Form Submitted:", values);
        setLoading(false);
        onSubmitSuccess();
      }, 1500);
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        sx={{
          backgroundColor: "background.paper",
          padding: "24px",
          borderRadius: "8px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          maxWidth: "600px",
          margin: "auto",
        }}
      >
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Typography variant="h5" color="primary" align="center" gutterBottom>
            Teacher Register
          </Typography>
        </motion.div>
        <form onSubmit={formik.handleSubmit}>
          <Box sx={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {/* Left Column */}
            <Box sx={{ flex: 1 }}>
              <TextField
                fullWidth
                label="Full Name"
                id="fullName"
                name="fullName"
                margin="normal"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                helperText={formik.touched.fullName && formik.errors.fullName}
              />
              <TextField
                fullWidth
                label="Email"
                id="email"
                name="email"
                margin="normal"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                fullWidth
                label="Phone Number"
                id="phoneNumber"
                name="phoneNumber"
                margin="normal"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                error={
                  formik.touched.phoneNumber &&
                  Boolean(formik.errors.phoneNumber)
                }
                helperText={
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                }
              />
            </Box>

            {/* Right Column */}
            <Box sx={{ flex: 1 }}>
              <FormControl fullWidth margin="normal">
                <InputLabel id="gender-label">Gender</InputLabel>
                <Select
                  id="gender"
                  name="gender"
                  labelId="gender-label"
                  value={formik.values.gender}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.gender && Boolean(formik.errors.gender)
                  }
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl>
              <TextField
                fullWidth
                label="Experience (in years)"
                id="experience"
                name="experience"
                type="number"
                margin="normal"
                value={formik.values.experience}
                onChange={formik.handleChange}
                error={
                  formik.touched.experience &&
                  Boolean(formik.errors.experience)
                }
                helperText={
                  formik.touched.experience && formik.errors.experience
                }
              />
              <TextField
                fullWidth
                label="Joining Date"
                id="joiningDate"
                name="joiningDate"
                type="date"
                margin="normal"
                InputLabelProps={{ shrink: true }}
                value={formik.values.joiningDate}
                onChange={formik.handleChange}
                error={
                  formik.touched.joiningDate &&
                  Boolean(formik.errors.joiningDate)
                }
                helperText={
                  formik.touched.joiningDate && formik.errors.joiningDate
                }
              />
            </Box>
          </Box>

          {/* Achievements */}
          <TextField
            fullWidth
            label="Achievements"
            id="achievements"
            name="achievements"
            multiline
            rows={3}
            margin="normal"
            value={formik.values.achievements}
            onChange={formik.handleChange}
            error={
              formik.touched.achievements &&
              Boolean(formik.errors.achievements)
            }
            helperText={
              formik.touched.achievements && formik.errors.achievements
            }
          />

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: "16px", padding: "10px", textTransform: "none" }}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Sign Up"}
          </Button>
        </form>
      </Box>
    </motion.div>
  );
};

export default TeacherSignUpForm;
