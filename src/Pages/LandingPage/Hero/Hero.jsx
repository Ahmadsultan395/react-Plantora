import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import Btn from "../../../Components/Button/Btn";
import { IoPlayCircleOutline } from "react-icons/io5";
import HeroCard from "./HeroCard";
import Trendyplant from "../TrendyPlant/Trendyplant";




const Hero = () => {
  const theme  = useTheme();
  const isMedium = useMediaQuery('(max-width:900px)');

  return (
    <Box
      sx={{
        backgroundImage: "url(/hero/hero-bg.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        objectFit: "cover",
        width: "100%",
        height: "auto",
      }}
    >
      <Box sx={{ p: "10% 5%" }}>
        <Grid container>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box sx={{ width: "100%", 
              // backgroundColor: "red" 
              }}>
              <Typography
                sx={{ color: "white", fontSize: "3rem", fontWeight: "600" }}
              >
                Breath Natureal
              </Typography>
              <Typography sx={{ color: "white", fontSize: "1rem" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                sunt quidem ut nemo deleniti facere blanditiis facilis soluta
                distinctio unde.
              </Typography>
              <Box sx={{ mt: "1rem" }}>
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

                <IconButton>
                  <IoPlayCircleOutline
                    style={{
                      color: "white",
                      fontSize: "2rem",
                      marginRight: "3px",
                    }}
                  />
                  <span style={{color:'white', fontSize:'1rem' , }}>
                  live demo
                  </span>
                </IconButton>
              </Box>

             <Box
             sx={{
              marginTop:'10rem',
              width: '50%',
              p: '2rem',
              border: '1px solid #5b6058',
              borderTop:'none',
              borderRadius: '20px', 
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              position: 'relative',
              background:'#2b3328',
              
          
              // Pseudo-element for downward curved top border
              '&::before': {
                content: '""',
                position: 'absolute',
                width:'90%',
                margin:'0 auto',
                top: '-7px', 
                left: 0,
                right: 0,
                height: '10px', 
                backgroundColor: '#fff', 
                borderRadius: '0% 0% 50% 50%', 
                borderBottom:'1px solid white',
                background:'transparent'
                
              },
            }}
             >
             <Box sx={{ display: "flex", gap: "10px" , mb:'0.5rem' }}>
                <Box sx={{ display: "flex" }}>
                  <Avatar>
                    <img src="/hero/herodp.jpg" alt="/hero/herodp.jpg" />
                  </Avatar>
                </Box>
                <Box>
                  <Typography sx={{ color: "white", fontSize: "1.1rem" }}>
                    Rayana Tech
                  </Typography>
                  <Rating name="half-rating" defaultValue={5} size="small" />
                </Box>
              </Box>
              <Typography sx={{color:'white'}}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam eius assumenda cumque tenetur perferendis nam tempora in blanditiis accusantium tempore!
              </Typography>
             </Box>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box sx={{display:'flex', justifyContent: isMedium ? 'center' :'end'}}>
            <HeroCard/>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* --------------trendy plant ------------- */}
      <Box>
        <Trendyplant/>
      </Box>
    </Box>
  );
};

export default Hero;
