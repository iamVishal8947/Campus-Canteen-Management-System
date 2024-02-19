import React from 'react'
import { Box } from "@mui/material";
import StudentDetails from '../../../components/admin/StudentDetails';
// import StudentService from '../../../services/StudentService';
import { useEffect,useState } from 'react';
import StudentForm from '../../../components/admin/StudentForm'
import { useParams } from 'react-router-dom';
import StudentService from '../../../services/StudentService';
import { useNavigate } from 'react-router-dom';
export default function DeleteStudent() {
    const navigate = useNavigate();
    let { id } = useParams();
  const [userData, setUserData] = useState(null); 
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    // Function to fetch user profile data based on ID
    const fetchUserProfile = async () => {
      try {
        setLoading(true); // Set loading state to true
        const userData = await StudentService.getById(id); // Fetch user profile data
        console.log(userData)
        setUserData(userData.data); // Update state with fetched data
        setLoading(false); // Set loading state to false
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setLoading(false); // Set loading state to false
      }
    };

    fetchUserProfile(); 
  }, [id]); 
    
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
        console.log("in deleteStudent func")
        StudentService.deleteStudent(id).then((res)=>{
            console.log(res.data);
            alert(id +" has been deleted successfully");
            navigate('/admin/students')
        }).catch((err)=>console.log(err.response.data))
    }
  return (
    <Box m={"20px"}>
     {userData!=null &&  <StudentDetails student={userData} action="delete" takeAction={deleteStudent}></StudentDetails>
  }    </Box>
  )
}
