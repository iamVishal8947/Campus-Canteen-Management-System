import React  from 'react'
import { useEffect,useState } from 'react';
import StudentForm from '../../../components/admin/StudentForm'
import { useParams,useNavigate } from 'react-router-dom';
import StudentService from '../../../services/StudentService';
export default function EditStudent() {
  const navigate = useNavigate();
  let { id } = useParams();
  const [userData, setUserData] = useState(null); 
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    
    const fetchUserProfile = async () => {
      try {
        setLoading(true); 
        const userData = await StudentService.getById(id);
        console.log(userData)
        setUserData(userData.data);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setLoading(false); 
      }
    };

    fetchUserProfile(); 
  }, [id]); 
    

    const editStudent=(student)=>{
      console.log("In edit Student")
        console.log(student)
        StudentService.updateStudent(student).then((response)=>{
          if(response.status==200){
            alert(student.name + " Updated Successfully");
            navigate("/admin/students")
          }else{
            alert("Failed To update")
          }
        })
    }
    
  return (
    <div>
      {userData!=null  &&  <StudentForm action="edit" takeAction={editStudent} title="Edit Student" subtitle="Update Student Details" studentData={userData}/>
}
    </div>
  )
}
