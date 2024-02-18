import React, { useState, useEffect} from 'react'
import List from '@mui/material/List';
import { Box, Typography, useTheme, Button, Grid } from "@mui/material";
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { tokens } from '../../../theme';
export default function MenuList() {
    const theme = useTheme();
  const colors = tokens(theme.palette.mode);
    const [items,setItems] = useState([]);
    useEffect(()=>{
        console.log("Fetching Items")
    })
    const trial=()=>{
        const items = [{
            id: 10,
            name: "Coffee",
            img_link:
            'https://photos.app.goo.gl/EyfRnv3sNYu1wu8N6',
            qty: 0,
            price: 20,
          },
          {
            id: 20,
            name: "Idli",
            img_link:
              "https://www.istockphoto.com/photo/side-view-of-hot-latte-coffee-with-latte-art-in-a-ceramic-green-cup-and-saucer-gm1174632449-326763860?phrase=coffee&searchscope=image%2Cfilm",
            qty: 0,
            price: 20,
          },
          {
            id: 30,
            name: "Medu Vada",
            img_link:
              "https://www.istockphoto.com/photo/side-view-of-hot-latte-coffee-with-latte-art-in-a-ceramic-green-cup-and-saucer-gm1174632449-326763860?phrase=coffee&searchscope=image%2Cfilm",
            qty: 10,
            price: 20,
          },
          {
            id: 40,
            name: "Pav Bhaji",
            img_link:
              "https://www.istockphoto.com/photo/side-view-of-hot-latte-coffee-with-latte-art-in-a-ceramic-green-cup-and-saucer-gm1174632449-326763860?phrase=coffee&searchscope=image%2Cfilm",
            qty: 10,
            price: 20,
          },
          {
            id: 50,
            name: "Pohe",
            img_link:
              "https://www.istockphoto.com/photo/side-view-of-hot-latte-coffee-with-latte-art-in-a-ceramic-green-cup-and-saucer-gm1174632449-326763860?phrase=coffee&searchscope=image%2Cfilm",
            qty: 2,
            price: 20,
          },
          {
            id: 60,
            name: "Vadapav",
            img_link:
              "https://www.istockphoto.com/photo/side-view-of-hot-latte-coffee-with-latte-art-in-a-ceramic-green-cup-and-saucer-gm1174632449-326763860?phrase=coffee&searchscope=image%2Cfilm",
            qty: 4,
            price: 20,
          },]
          setItems(items.filter(item=>item.qty<=5))
    }

    useEffect(()=>{
        trial();
    },[])
  return (
    <Box marginLeft={'20px'} p='20px' bgcolor={colors.primary[600]} alignContent={'center'} justifyContent={'center'} >
        <Typography variant='h4' style={{marginLeft: '70px'}}>The below items are nearing unavailability</Typography>
        {items.map(item=><List key={item.id} align="center" sx={{ maxWidth:'300px', bgcolor: 'background.paper',marginLeft: '100px' }} >
            <ListItemText sx={{color: item.qty>0?colors.redAccent[100]:colors.redAccent[300]}} primary={`${item.name} : ${item.qty}`} />
        </List>)}
    </Box>
  )
}
