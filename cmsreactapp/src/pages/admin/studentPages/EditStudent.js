import React  from 'react'
import { useEffect,useState } from 'react';
import StudentForm from '../../../components/admin/StudentForm'
import { useParams } from 'react-router-dom';
import StudentService from '../../../services/StudentService';
export default function EditStudent() {
  let { id } = useParams();
  const [userData, setUserData] = useState(null); 
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    // Function to fetch user profile data based on ID
    const fetchUserProfile = async () => {
      try {
        setLoading(true); // Set loading state to true
        const userData = await StudentService.getById(); // Fetch user profile data
        console.log(userData)
        setUserData(userData); // Update state with fetched data
        setLoading(false); // Set loading state to false
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setLoading(false); // Set loading state to false
      }
    };

    fetchUserProfile(); 
  }, [id]); 
    

    const editStudent=(student)=>{
      console.log("In edit Student")
        console.log(student)
    }
    
  return (
    <div>
        <StudentForm action="edit" takeAction={editStudent} title="Edit Student" subtitle="Update Student Details" studentData={userData}></StudentForm>
    </div>
  )
}
