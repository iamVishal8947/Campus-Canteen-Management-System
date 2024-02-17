import React from 'react'
import {Grid} from '@mui/material';
import ItemMasterTable from '../../../components/admin/menu/ItemMasterTable';
export default function MenuSelector() {
  return (
    <Grid container m={"10px"}>
        <Grid item xs={12} sm={4}>
            <ItemMasterTable/>
        </Grid>
        <Grid item xs={12} sm={2}>
            {/*Buttons to transfer the selected items */}
        </Grid>
        <Grid item xs={12} sm={6}>
            {/* Daily Menu table with quantities */}
        </Grid>
    </Grid>
  )
}
