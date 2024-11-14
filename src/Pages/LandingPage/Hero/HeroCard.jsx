import { Box, Typography } from "@mui/material";
import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import Btn from "../../../Components/Button/Btn";

const HeroCard = () => {
  return (
    <>
      <Box
        sx={{
          background: "#2b3328",
          width: "50%",
          display: "flex",
          flexDirection: "column",
          p:'2rem' ,
           borderRadius:'30px',
           border:'1px solid #5b6058'
        }}
      >
        <Box sx={{ width: "100%", height: "auto" , margin:'-9rem auto 0rem auto'}}>
          <img src="/hero/heroflower1.png" alt="" style={{ width: "100%", height:'auto'}} />
        </Box>
        <Box sx={{mt:'1rem'}}>
          <Typography
            sx={{ color: "white", fontSize: "0.9rem", fontWeight: "300", mb:'0.5rem' }}
          >
            Lorem ipsum dolor sit amet.
          </Typography>

          <Box sx={{display:'flex' , justifyContent:'space-between' , alignItems:'center' , width:'100%'}}>
            <Typography
              sx={{ color: "white", fontSize: "1.4rem", fontWeight: "400" }}
            >
              Breath Natureal
            </Typography>
            <RiArrowRightSLine  style={{color:'white'}}/>
          </Box>
          <Btn
                  sx={{
                    textTransform: "none",
                    color: "white",
                    border: "1px solid white",
                    borderRadius: "5px",
                    p: "0.3rem 1.5rem",
                    mr: "1rem", mt:'1rem'
                  }}
                >
                  Buy Now
                </Btn>
                <Typography
              sx={{ color: "white", fontSize: "1.4rem", fontWeight: "400" , textAlign:'center' }}
            >
             - <span style={{color:'gray'}}>- -</span>
            </Typography>
        </Box>
      </Box>
    </>
  );
};

export default HeroCard;
