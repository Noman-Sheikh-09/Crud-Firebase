import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { doLogin } from "../../redux/actions/authActions/AuthActions";
import { useNavigate } from 'react-router-dom';
export default function UseLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log();
  const submitHandler = () => {
    let userData = {
      email: email,
      password: password,
    };
    
    dispatch(doLogin(userData,navigate));
 setEmail("")
 setPassword("")
  };

  return [
    email,
    setEmail,
    password,
    setPassword,
    submitHandler,
  ];
}
