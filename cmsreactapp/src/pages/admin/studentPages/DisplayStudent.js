import React from 'react'
import { Box } from "@mui/material";
import StudentDetails from '../../../components/admin/StudentDetails';
import { useNavigate } from "react-router-dom";

export default function DisplayStudent() {
    const navigate = useNavigate()
    const student={
        name: "John Doe",
        email: "john@example.com",
        password: "john",
        mobileNo: "9988776655",
        balance: 100,
        dob: "01/01/2000",
        courseName: "DAC",
        }
    const goBack = () =>{
        navigate('/admin/students')
    }
  return (
    <Box m={"20px"}>
        <StudentDetails student={student} action="display" takeAction={goBack}></StudentDetails>
    </Box>
  )
}
