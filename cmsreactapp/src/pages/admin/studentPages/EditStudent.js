import React  from 'react'
import StudentForm from '../../../components/admin/StudentForm'

export default function EditStudent() {
    const student={
      name: "John Doe",
      email: "john@example.com",
      password: "john",
      mobileNo: "9988776655",
      balance: 100,
      dob: "01/01/2000",
      courseName: "DAC",
      }

    const editStudent=(student)=>{
      console.log("In edit Student")
        console.log(student)
    }
    
  return (
    <div>
        <StudentForm action="edit" takeAction={editStudent} title="Edit Student" subtitle="Update Student Details" studentData={student}></StudentForm>
    </div>
  )
}
