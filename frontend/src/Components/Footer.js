import * as React from "react";
import { Box, Typography, IconButton, Grid, Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logo from '../assets/logo.png'; 

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(55, 55, 55, 1) 100%)",
        mt: "150px",
        py: 4,
        px: 3,
        textAlign: "center",
        color: "#ffffff",
        boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
        borderRadius: "10px",
        fontSize: "16px"
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {/* Company Info */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "auto", color: "#ffffff", fontSize: "22px" }}>
            A H Graphic Creation
          </Typography>
          <Typography variant="body1" sx={{ color: "#ffffff", fontWeight: "auto" }}>
            We made your ideas shine through innovative design!
          </Typography>
          {/* Image of the logo with adjusted size */}
          <Box 
            component="img" 
            src={logo} 
            alt="Logo" 
            sx={{ maxWidth: '200px', maxHeight: '100px', mt: 5, objectFit: 'contain' }} 
          />
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", color: "#ffffff", fontSize: "20px" }}>
            QUICK LINKS
          </Typography>
          <Button href="/" variant="contained" color="primary" sx={buttonStyles}>
            HOME
          </Button>
          <Button href="/services" variant="contained" color="primary" sx={buttonStyles}>
            SERVICES
          </Button>
          <br />
          <Button href="/about" variant="contained" color="primary" sx={buttonStyles}>
            ABOUT
          </Button>
          <Button href="/feedbackpage" variant="contained" color="primary" sx={buttonStyles}>
            FEEDBACK
          </Button>
        </Grid>

        {/* Social Media Links */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", color: "#ffffff", fontSize: "20px" }}>
            FOLLOW US
          </Typography>
          <Box>
            <IconButton href="https://web.facebook.com/profile.php?id=100075815988305" color="inherit" sx={iconStyles}>
              <FacebookIcon />
            </IconButton>
            <IconButton href="https://twitter.com" color="inherit" sx={iconStyles}>
              <TwitterIcon />
            </IconButton>
            <IconButton href="https://instagram.com" color="inherit" sx={iconStyles}>
              <InstagramIcon />
            </IconButton>
            <IconButton href="https://linkedin.com" color="inherit" sx={iconStyles}>
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Typography variant="body2" color="textSecondary" sx={{ mt: 0, color: "#ffffff", fontWeight: "auto" }}>
        &copy; {new Date().getFullYear()} A H Graphic Creation. All rights reserved.
      </Typography>
    </Box>
  );
};

// Button styles for quick links with elegant gradient
const buttonStyles = {
  background: "linear-gradient(90deg, rgba(228,177,240,1) 0%, rgba(167,223,119,1) 100%)",
  color: "#000000",
  fontWeight: "bold",
  fontSize: "16px",
  textTransform: "none",
  width: "150px",
  margin: "10px",
  marginTop: "23px",
  borderRadius: "8px", 
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  "&:hover": {
    background: "linear-gradient(to right, rgba(173,216,230,0), white)",
    color: "#ffffff"
  }
};

// Icon styles for social media with hover effect
const iconStyles = {
  color: "#ffffff",
  fontSize: "28px",
  transition: "color 0.3s",
  "&:hover": {
    color: "#388E3C",
  },
};

export default Footer;
