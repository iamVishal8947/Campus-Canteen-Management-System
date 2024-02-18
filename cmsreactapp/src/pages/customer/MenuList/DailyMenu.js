import React from 'react'
import MenuGrid from '../../../components/CustomerComponents/menu/MenuGrid'
import Header from '../../../components/admin/common/Header'

export default function DailyMenu() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return (
    <div>
        <Header title="Daily Menu" subtitle = "Select your desired items"></Header>
        <div> <h2 style={{textAlign:"center"}}>{date}</h2>  </div>
        <MenuGrid></MenuGrid>
    </div>
  )
}
