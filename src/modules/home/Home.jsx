import React from "react";
import Typography from "@mui/material/Typography";
import { Button, TextField } from "@mui/material";
import UseHome from "./UseHome";
import { useDispatch } from "react-redux";
import { doLogout } from "../../redux/actions/authActions/AuthActions";
import { useNavigate } from "react-router-dom";
import StudentList from "../../components/studentList/StudentList";
export default function Home() {
  const [
    name,
    setName,
    email,
    setEmail,
    roll,
    setRoll,
    batch,
    setBatch,
    ctaSubmitHandler,
    student,
    ctaDeleteHandler,
    ctaUpdateHandler,
    flag,
    onClickUpdateHandle,
  ] = UseHome();
  // console.log(name, email, roll, batch);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isUserLogout = () => {
    dispatch(doLogout(navigate("/login")));
  };
  return (
    <>
      <br />
      <TextField
        label="Name"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Email"
        placeholder="Enter Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Roll No."
        placeholder="Enter Your Roll No."
        value={roll}
        onChange={(e) => setRoll(e.target.value)}
      />
      <TextField
        label="Batch "
        placeholder="Enter Your Batch"
        value={batch}
        onChange={(e) => setBatch(e.target.value)}
      />
      {!flag ? (
        <Button variant="contained" color="primary" onClick={ctaSubmitHandler}>
          Submit
        </Button>
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={onClickUpdateHandle}
        >
          Update
        </Button>
      )}

      <br />
      <br />
      <div>
        <Button variant="outlined" color="secondary" onClick={isUserLogout}>
          Log Out
        </Button>
        <hr />
        <br />
        <Typography variant="h1" color="primary">
          List of Students
        </Typography>

        <StudentList
          student={student}
          ctaDeleteHandler={ctaDeleteHandler}
          ctaUpdateHandler={ctaUpdateHandler}
        />
      </div>
    </>
  );
}
