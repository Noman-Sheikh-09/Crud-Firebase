import { Box } from "@mui/system";
import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import UseSignup from "./UseSignup";
export default function Signup() {
  const [ name, setName,father,setFather,email, setEmail, password, setPassword, number,setNumber, signupHandler,] = UseSignup();
  // console.log(email,password);
  return (
    <Box>
      <br />

      <TextField
        label="Name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Father's Name"
        placeholder="Father's Name"
        value={father}
        onChange={(e) => setFather(e.target.value)}
      />
      <br />
      <br />

      <br />

      <TextField
        label="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="password"
        placeholder="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />
      <br />
      <br />
      {/* <TextField
        label="Number"
        placeholder="phone Number"
        value={number}
        onChange={(e)=>setNumber(e.target.value)}
      /> */}
      <br /> 
<br />
      <Button variant="contained" color="primary" onClick={signupHandler}>
        Signup
      </Button>
    </Box>
  );
}
