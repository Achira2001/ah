import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'; 

// Styled search component
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "400px", // Set a larger width for larger screens
  },
  [theme.breakpoints.down("sm")]: {
    width: "250px", // Set a smaller width for smaller screens
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const NavBar = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <AppBar
        position="fixed"
        sx={{
          background: "linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(55, 55, 55, 1) 100%)",
          marginTop: "20px",
          borderRadius: "10px",
          color: "white",
        }}
      >
        <Toolbar>
          {/* Adjust the image size */}
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{
              width: "100px",
              height: "auto",
              maxHeight: "50px",
              marginRight: "20px",
              objectFit: "contain",
            }}
          />
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block", marginRight: "110px" } }}
          >
            A H Graphic Creation
          </Typography>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          {/* Align buttons to the right */}
          <Box sx={{ display: "flex", marginLeft: "auto" }}>
            <Link to="/">
              <Button sx={buttonStyles}>HOME</Button>
            </Link>
            <Link to="/services">
              <Button sx={buttonStyles}>SERVICES</Button>
            </Link>
            <Link to="/about">
              <Button sx={buttonStyles}>ABOUT</Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

// Button styles for links
const buttonStyles = {
  background: "linear-gradient(90deg, rgba(228,177,240,1) 0%, rgba(167,223,119,1) 100%)",
  color: "#000000",
  fontWeight: "bold",
  fontSize: "16px",
  textTransform: "none",
  width: "150px",
  margin: "5px",
  marginTop: "10px",
  borderRadius: "8px",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  "&:hover": {
    background: "linear-gradient(to right, rgba(173,216,230,0), white)",
    color: "white"
  },
};

export default NavBar;
