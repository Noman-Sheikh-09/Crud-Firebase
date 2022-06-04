import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteStudent,
  fetchStudents,
  updateStudent,
} from "../../redux/actions/studentActions/StudentActions";

export default function UseStudentList() {
  const dispatch = useDispatch();
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


  return {
    student,
    ctaDeleteHandler,
  
  };
}
