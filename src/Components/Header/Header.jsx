import { Box, Typography } from '@mui/material'
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import Btn from '../Button/Btn';



const menuList = [
    {name:'Home' , route:"/"},
    {name:'Plant Type' , route:"/"},
    {name:'More' , route:"/"},
    {name:'Contact' , route:"/"},
]

const Header = () => {
  return (
    <>
    <nav style={{position:'absolute', display:'flex' , width:'100%' , justifyContent:'space-between' ,
padding:'1rem 5%' , boxSizing:'border-box'}}>
       <Box sx={{display:'flex', alignItems:'center'}}>
       <Box sx={{width:'3rem' , height:'auto'}}>
            <img src="/hero/logo2.png" alt=""  style={{width:'100%', height:'auto'}}/>
        </Box>
        <Typography sx={{color:'white', fontWeight:'600'}}>
            Plantora
        </Typography>
       </Box>

      <Box sx={{display:'flex' , gap:'15px' , color:'white',alignItems:'center'}}>
      {menuList.map((row)=>(
           <Typography>
            {row.name}
           </Typography>
       ))}
      </Box>


      <Box sx={{display:'flex', gap:'10px', alignItems:'center'}}>
      <Box >
           <input type="text" name="" id="" placeholder=''
           style={{backgroundColor:'transparent' , outline:'transparent' , border:'transparent', width:'10px'}}/>
           <CiSearch style={{color:"white"}}/>
       </Box>
       <FaCartArrowDown style={{color:'white'}}/>
       {/* <Btn sx={{padding:'0' , color:'white' , border :'1px solid red '}}>
      
       </Btn> */}
        <CiMenuFries style={{color:'white'}}/>
      </Box>

    </nav>
    </>
  )
}

export default Header
