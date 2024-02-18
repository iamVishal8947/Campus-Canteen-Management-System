import React from 'react'
import MenuGrid from '../../../components/CustomerComponents/menu/MenuGrid'
import Header from '../../../components/admin/common/Header'

export default function DailyMenu() {
  return (
    <div>
        <Header title="Daily Menu" subtitle = "Select your desired items"></Header>
        <MenuGrid></MenuGrid>
    </div>
  )
}
