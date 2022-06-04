import { Box } from "@mui/system";
import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import UseLogin from "./UseLogin";
import { Grid, Paper } from "@mui/material";
export default function Login() {
  const [email, setEmail, password, setPassword, submitHandler] = UseLogin();
  return (
    <Grid align="center">
      <Paper evaluation={10}  style={{width:'400px', height:'80vh',}}>
      <Grid container align="center">
<Grid style={{width:'100%',marginTop:'150px'}}>
<TextField
  label="Username"
  placeholder="username"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  style={{width:'100%',}}
/>
</Grid>
<Grid style={{width:'100%',}}>
<TextField
  label="password"
  placeholder="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  style={{width:'100%',}}
/>

</Grid>
<Grid style={{width:'400px',}} >
<Button variant="contained" color="primary" onClick={submitHandler} style={{width:'100%',marginTop:'20px'}}>
  Login
</Button>
</Grid>

</Grid >
      </Paper>
    </Grid>
   
  );
}
