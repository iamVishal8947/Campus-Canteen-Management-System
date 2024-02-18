import React from 'react'
import StudentForm from '../../../components/admin/StudentForm'
import StudentService from '../../../services/StudentService'
export default function AddStudent() {

  const addStudent = (student) => {
    console.log(student)
    console.log("in Add customer")
    StudentService.insertStudent(student).then((response) => {
      //console.log(response.data.token);
      return response.data.token;
      })
      .catch((error) => {
          console.log(error);
      });
  }
  
  return (
    <div>
        <StudentForm action="add" takeAction={addStudent} title="Add Student" subtitle="Student Registration Form"></StudentForm>
    </div>
  )
}
