import { AppBlockingSharp } from "@mui/icons-material";
import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <AppBar position="relative" color="inherit" height="30">
        <Toolbar>
          <Link style={{padding:'20px'}} to="/">Landing Page </Link>
          <Link  style={{padding:'20px'}} to="/home">Home </Link>
          <Link  style={{padding:'20px'}} to="/login">Login </Link>
          <Link  style={{padding:'20px'}} to="/signup">Signup </Link>
        </Toolbar>
      </AppBar>
    </>
  );
}
