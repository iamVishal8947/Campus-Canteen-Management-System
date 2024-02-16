import React from 'react'
import { Box } from "@mui/material";
import StudentDetails from '../../../components/admin/StudentDetails';
import StudentService from '../../../services/StudentService';
export default function DeleteStudent() {
    const student={
        name: "John Doe",
        email: "john@example.com",
        password: "john",
        mobileNo: "9988776655",
        balance: 100,
        dob: "01/01/2000",
        courseName: "DAC",
        }
    const deleteStudent = (id) =>{
        StudentService.deleteStudent(id).then((res)=>{
            console.log(res.data);
        })
    }
  return (
    <Box m={"20px"}>
        <StudentDetails student={student} action="delete" takeAction={deleteStudent}></StudentDetails>
        {/* <Button variant='contained' color=colors. onClick={goBack}>Back to List</Button> */}
    </Box>
  )
}
