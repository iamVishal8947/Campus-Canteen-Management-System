import React from 'react'
import CustomerForm from '../../components/admin/CustomerForm'
import StudentService from '../../services/StudentService'
export default function AddCustomer() {

  const addStudent = (Student) => {
    StudentService.insertStudent(Student);
    
  }
  return (
    <div>
        <CustomerForm action="add" takeAction = {addStudent}></CustomerForm>
    </div>
  )
}
