import React from 'react'
import MenuGrid from '../../../components/CustomerComponents/menu/MenuGrid'
import Header from '../../../components/admin/common/Header'

export default function DailyMenu() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const dayNumber = current.getDay(); // This returns a number from 0 (Sunday) to 6 (Saturday)

// Define an array to map day numbers to day names
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const dayString = daysOfWeek[dayNumber]; 
  return (
    <div>
        <Header title="Daily Menu" subtitle = "Select your desired items"></Header>
        <div> <h2 style={{textAlign:"center"}}> {dayString} -{date}  </h2>  </div>
        <MenuGrid></MenuGrid>
    </div>
  )
}
