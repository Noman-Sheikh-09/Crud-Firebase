import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addStudent,
  deleteStudent,
  fetchStudents,
  updateStudent,
} from "../../redux/actions/studentActions/StudentActions";

export default function UseHome() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [roll, setRoll] = useState("");
  const [batch, setBatch] = useState("");
  const [flag, setFlag] = useState(false);
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  // submit Button
  const ctaSubmitHandler = () => {
    let studentData = {
      name: name,
      email: email,
      roll: roll,
      batch: batch,
    };
    dispatch(addStudent(studentData));

    setName("");
    setEmail("");
    setRoll("");
    setBatch("");
  };

  const student = useSelector((state) => state.StudentReducer.student);

  useEffect(() => {
    console.log("call the action for fetch data", student);

    dispatch(fetchStudents());
  }, []);

  // Delete Students from Firebase
  const ctaDeleteHandler = (docID) => {
    dispatch(deleteStudent(docID));
    console.log("call Action in custom Hooks", docID);
  };

  // Update Student
  const ctaUpdateHandler = (item) => {
    // dispatch(updateStudent(docID, student));
    setFlag(true);
    setName(item.name);
    setEmail(item.email);
    setRoll(item.roll);
    setBatch(item.batch);
    setId(item.docID);
  };
  const onClickUpdateHandler = () => {
    let studentData = {
      name: name,
      email: email,
      roll: roll,
      batch: batch,
    };
    dispatch(updateStudent(id, studentData));
    setName("");
    setEmail("");
    setRoll("");
    setBatch("");
    setFlag(false);
  };
  
  return [
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
    onClickUpdateHandler,
  ];
}
