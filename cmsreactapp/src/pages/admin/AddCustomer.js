import React from 'react'
import CustomerForm from '../../components/admin/CustomerForm'
import StudentService from '../../services/StudentService'
export default function AddCustomer() {

  const addStudent = (Student) => {
    
    StudentService.insertStudent(Student).then((response) => {
      //console.log(response.data.token);
      console.log("in Add customer")
      return response.data.token;
      })
      .catch((error) => {
          console.log(error);
      });

  }
  return (
    <div>
        <CustomerForm action="add" takeAction = {addStudent}></CustomerForm>
    </div>
  )
}
