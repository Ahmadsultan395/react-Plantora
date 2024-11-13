import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Typography,
  Rating,
} from "@mui/material";
import React from "react";
import Btn from "../../../Components/Button/Btn";
import { IoPlayCircleOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url(/hero/hero-bg.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        objectFit: "cover",
        width: "100%",
        height: "100vh",
      }}
    >
      <Box sx={{ p: "10% 5%" }}>
        <Grid container>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box sx={{ width: "100%", backgroundColor: "red" }}>
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
                  live demo
                </IconButton>
              </Box>

             <Box sx={{
                 width:'50%',
              p:'2rem',
              border: '1px solid black', 
              borderTopLeftRadius: '50% 30px',
              borderTopRightRadius: '50% 30px',
              borderRadius:'30px'
              }}>
             <Box sx={{ display: "flex", gap: "10px" }}>
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
              <Typography>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam eius assumenda cumque tenetur perferendis nam tempora in blanditiis accusantium tempore!
              </Typography>
             </Box>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            jafjja
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Hero;
