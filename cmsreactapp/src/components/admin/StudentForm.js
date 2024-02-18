import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { Field, Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "./common/Header";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EditIcon from "@mui/icons-material/Edit";

export default function StudentForm(props) {
  const isNonMobile = useMediaQuery("(min-width:600px)"); //

  const initValues =
    props.action === "add"
      ? {
          
          name: "",
          studentId :0,
          email: "",
          password: "",
          mobileNo: "",
          balance: 0,
          dob: "",
          courseName: "DAC",
        }
      : props.studentData;

  const courses = [
    {
      value: null,
      label: "Select a course",
    },
    {
      value: "DAC",
      label: "DAC",
    },
    {
      value: "DITISS",
      label: "DITISS",
    },
    {
      value: "DBDA",
      label: "DBDA",
    },
    {
      value: "DAI",
      label: "DAI",
    },
  ];

  const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
  const mobRegex = /[789][0-9]{9}/;

  const studentSchema = yup.object().shape({
    name: yup
      .string()
      .matches(nameRegex, "Entered name is not valid")
      .required("Required"),
    email: yup
      .string()
      .email("Entered email is not valid")
      .required("Required"),
    mobileNo: yup
      .string()
      .matches(mobRegex, "Entered Mobile number is invalid")
      .required("Required"),
    dob: yup.string().required("Required")
    // courseName: yup.string().required("Required"),
  });

  const handleFormSubmit = (values) => {
    console.log(values);
    props.takeAction(values);
  };
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight={"100vh"}
    >
      <Box border={"1px solid black"} m={"20px"} p="20px" borderRadius={5}>
        <Header title={props.title} subtitle={props.subtitle}></Header>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initValues}
          validationSchema={studentSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => {
            return (
              <form onSubmit={handleSubmit}>
                <Box
                  display="grid"
                  gap="30px"
                  gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                  sx={{
                    "& > div": {
                      gridColumn: isNonMobile ? undefined : "span 4",
                    },
                  }}
                >
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Full Name"
                    placeholder="John Doe"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.name}
                    name="name"
                    error={!!touched.name && !!errors.name}
                    helperText={touched.name && errors.name}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="email"
                    label="Email"
                    placeholder="john.doe@example.com"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    error={!!touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Mobile Number"
                    placeholder="9999999999"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.mobileNo}
                    name="mobileNo"
                    error={!!touched.mobileNo && !!errors.mobileNo}
                    helperText={touched.mobileNo && errors.mobileNo}
                    sx={{ gridColumn: "span 2" }}
                  />

                  <TextField
                    fullWidth
                    variant="filled"
                    type="date"
                    label="Date of Birth"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.dob}
                    name="dob"
                    error={!!touched.dob && !!errors.dob}
                    helperText={touched.dob && errors.dob}
                    sx={{ gridColumn: "span 2" }}
                  />
                  {/* <Field
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Course Selector"
                    as="select"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.courseName}
                    name="courseName"
                    error={!!touched.courseName && !!errors.courseName}
                    helperText={touched.courseName && errors.courseName}
                    sx={{ gridColumn: "span 2" }}
                  >
                    <option value={null}>Select a Course</option>
                    <option value={'DAC'}>DAC</option>
                    <option value={'DBDA'}>DBDA</option>
                    <option value={"DITISS"}>DITISS</option>
                    <option value={"DAI"}>DAI</option>
                  </Field> */}
                  {/* <SelectField name="courseName"
                  label = {courses.label}
                  data={courses}
                  fullWidth
                    variant="filled"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.courseName}
                  error={!!touched.courseName && !!errors.courseName}
                    helperText={touched.courseName && errors.courseName}
                  ></SelectField> */}
                </Box>
                <Box display="flex" justifyContent="end" mt="20px">
                  <Button type="submit" color="secondary" variant="contained">
                    {props.action === "add" ? <span><PersonAddIcon/>&nbsp;&nbsp;Add Student</span> : <span><EditIcon/>&nbsp;&nbsp;Update Details</span>}
                  </Button>
                </Box>
              </form>
            );
          }}
        </Formik>
      </Box>
    </Box>
  );
}
