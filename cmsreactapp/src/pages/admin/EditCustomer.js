import React ,{useState} from 'react'
import CustomerForm from '../../components/admin/CustomerForm'

export default function EditCustomer() {
    const[customer, setCustomer]=useState({
        id: 10000,
        name: "Name",
        email: "email@gmail.com",
        pwd: "",
        mob: "8765987659",
        dob: "01/01/1900",
        course: "DAC",
      })

    const editCustomer=(cust)=>{
        console.log(cust)
    }
    
  return (
    <div>
        <CustomerForm action="edit" customer={customer} takeAction={editCustomer}></CustomerForm>
    </div>
  )
}
