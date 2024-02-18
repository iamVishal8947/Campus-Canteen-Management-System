import React from 'react'
import { Box } from "@mui/material";
import StudentDetails from '../../../components/admin/StudentDetails';
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from 'react';
import StudentForm from '../../../components/admin/StudentForm'
import { useParams } from 'react-router-dom';
import StudentService from '../../../services/StudentService';
export default function DisplayStudent() {
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
    const navigate = useNavigate()
   
    const goBack = () =>{
        navigate('/admin/students')
    }
  return (
    <Box m={"20px"}>
       {userData!=null && <StudentDetails student={userData} action="display" takeAction={goBack}></StudentDetails>}  </Box>
  )
}
