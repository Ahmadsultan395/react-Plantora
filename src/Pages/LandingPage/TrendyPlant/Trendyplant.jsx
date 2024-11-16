import { Box, Typography, Grid, IconButton, useTheme , useMediaQuery } from '@mui/material'
import React from 'react'
import Btn from '../../../Components/Button/Btn'
import { FaCartShopping } from "react-icons/fa6";



const Trendyplant = () => {
    const theme  = useTheme();
  const isMedium = useMediaQuery('(max-width:900px)');
  return (
   <>
   <Box sx={{display:'flex' , display:'flex' , justifyContent:'center'}}>
  <Typography
    sx={{
      color: 'white',
      fontWeight: '500',
      fontSize: '2.5rem',
      display: 'inline-block',
      p: '1rem',
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '30%',
        height: '95%',
        borderTop: '3px solid #547b12',
        borderLeft: '3px solid #547b12',
        borderRadius:' 20px 0px 0px 0px'
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '30%',
        height: '90%',
        borderBottom: '3px solid  #547b12',
        borderRight: '3px solid #547b12',
        borderRadius:'0px 0px 20px 0px'
      },
    }}
  >
    Our Trendy Plant
  </Typography>
</Box>

{/* ----------------one card ------------------ */}
<Box sx={{ boxSizing:'border-box' ,p:'0 5%' , marginTop:'3rem'}}>
    <Box sx={{background:'#2b3328' , borderRadius:'159px' , border:'1px solid #5b6058' , boxSizing:'border-box'}}>
    <Grid  container>
        <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box sx={{width:'100%', mt:'-7rem'}}>
                <img src="/hero/heroflower1.png" alt=""  />
            </Box>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box sx={{width:'100%' , height:'100%', display:'flex', flexDirection:'column' , justifyContent:'center' ,
                 alignItems:isMedium ?  'center': 'start', p:"2rem" , boxSizing:'border-box' }}>
            <Typography
                sx={{ color: "white", fontSize: "3rem", fontWeight: "600", mb:'0.5rem' }}
              >
                Breath Natureal
              </Typography>
              <Typography
                sx={{ color: "white", fontSize: "1rem", fontWeight: "400",mb:'0.5rem' }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              </Typography>
              <Typography
                sx={{ color: "white", fontSize: "1.5rem", fontWeight: "600", mb:'0.5rem' }}
              >
                RS. 599/-
              </Typography>
             <Box>
             <Btn
                  sx={{
                    textTransform: "none",
                    color: "white",
                    border: "1px solid white",
                    borderRadius: "5px",
                    p: "0.3rem 1.5rem",
                    mr: "1rem",
                  }}
                >
                  Explore
                </Btn>
                <Box sx={{border:'1px solid white' , display:'inline-block' , justifyContent:'center' , p:'0.3rem 0.5rem' , color:'white' , borderRadius:'5px'}}>
                <FaCartShopping />
                </Box>
             </Box>
            </Box>
        </Grid>
    </Grid>
    </Box>
</Box>


{/* second card ----------------------- */}
<Box sx={{ boxSizing:'border-box' ,p:'5% 5%' , mt:'3rem'}}>
    <Box sx={{background:'#2b3328' , borderRadius:'159px' , border:'1px solid #5b6058' , boxSizing:'border-box'}}>
    <Grid  container>
        <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box sx={{width:'100%' , height:'100%', display:'flex', flexDirection:'column' , justifyContent:'center' ,
                 alignItems:isMedium ?  'center': 'start', p:"3rem" , boxSizing:'border-box' }}>
            <Typography
                sx={{ color: "white", fontSize: "3rem", fontWeight: "600", mb:'0.5rem' }}
              >
                Breath Natureal
              </Typography>
              <Typography
                sx={{ color: "white", fontSize: "1rem", fontWeight: "400",mb:'0.5rem' }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              </Typography>
              <Typography
                sx={{ color: "white", fontSize: "1.5rem", fontWeight: "600", mb:'0.5rem' }}
              >
                RS. 599/-
              </Typography>
             <Box>
             <Btn
                  sx={{
                    textTransform: "none",
                    color: "white",
                    border: "1px solid white",
                    borderRadius: "5px",
                    p: "0.3rem 1.5rem",
                    mr: "1rem",
                  }}
                >
                  Explore
                </Btn>
                <Box sx={{border:'1px solid white' , display:'inline-block' , justifyContent:'center' , p:'0.3rem 0.5rem' , color:'white' , borderRadius:'5px'}}>
                <FaCartShopping />
                </Box>
             </Box>
            </Box>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box sx={{width:'100%', mt:'-7rem'}}>
                <img src="/hero/heroflower1.png" alt=""  />
            </Box>
        </Grid>
    </Grid>
    </Box>
</Box>

   </>
  )
}

export default Trendyplant

