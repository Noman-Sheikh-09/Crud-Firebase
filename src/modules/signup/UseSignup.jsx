import { useState } from "react";
import { useDispatch } from "react-redux";
import { doSignup } from "../../redux/actions/authActions/AuthActions";


export default function UseSignup() {
  const [name, setName] = useState("");
  const [father, setFather] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");

const dispatch = useDispatch();

  const signupHandler = () => {
let newUserData = {
    name:name,
    email:email,
    // father:father,
    password:password,
    
}
if(email!='' && password!='' ){
  dispatch(doSignup(newUserData))
// console.log("data in custom hook", newUserData);
}
else{
  alert('All fields are required')
}
  };
  return [
    name,
    setName,
    father,
    setFather,
    email,
    setEmail,
    password,
    setPassword,
    number,
    setNumber,
    signupHandler,
  ];
}
