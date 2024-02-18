import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { Field, Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/admin/common/Header";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EditIcon from "@mui/icons-material/Edit";
import StudentService from "../../services/StudentService";
import { Navigate, useNavigate } from "react-router-dom";

export default function StudentForm(props) {
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)"); //

  const initValues =
     {
          oldpassword: "",
          newpassword: "",
          confirmnewpassword : ""
        }
     



  const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
  const mobRegex = /[789][0-9]{9}/;
  const pwdRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;


  const studentSchema = yup.object().shape({
    oldpassword: yup
      .string()
      .required("Required"),
    newpassword: yup
      .string()
      .matches(pwdRegex ,"Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be 8-16 characters long.")
      .required("Required"),
    confirmnewpassword: yup
    .string()
    .oneOf([yup.ref('newpassword'), null], 'Passwords must match')

  });

  const handleFormSubmit = (values) => {
    console.log(values);
    const updatePasswordObj = {oldPassword : values.oldpassword, newPassword : values.newpassword}
    const id = localStorage.getItem("username")
    StudentService.changePassword(id,updatePasswordObj).then((res)=>{

      if(res.data === "ok"){
       alert("Password Updated Successfully! Please Login Again");
       localStorage.clear();
       navigate("/LoginComp")
      }
       else if(res.data === "Invalid old password"){
        alert("Invalid old password");
        
       }
       
    }).catch((err)=>console.log(err));
  
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
              <form onSubmit={handleSubmit} style={{width:"300px"}}>
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
                    label="Old Password"
                    placeholder="Enter your Old Password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.oldpassword}
                    name="oldpassword"
                    error={!!touched.oldpassword && !!errors.oldpassword}
                    helperText={touched.oldpassword && errors.oldpassword}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="new Password"
                    placeholder="enter new password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.newpassword}
                    name="newpassword"
                    error={!!touched.newpassword && !!errors.newpassword}
                    helperText={touched.newpassword && errors.newpassword}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="confirmnewpassword"
                    placeholder="confirmnewpassword"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.confirmnewpassword}
                    name="confirmnewpassword"
                    error={!!touched.confirmnewpassword && !!errors.confirmnewpassword}
                    helperText={touched.confirmnewpassword && errors.confirmnewpassword}
                    sx={{ gridColumn: "span 4" }}
                  />
                  
                  </Box>
                <Box display="flex" justifyContent="end" mt="20px">
                  <Button type="submit" color="secondary" variant="contained">
                     <span><EditIcon/>&nbsp;&nbsp;Update Password</span>
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
