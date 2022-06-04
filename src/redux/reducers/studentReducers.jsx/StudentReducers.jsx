import {
  FETCH_STUDENT,
  ADD_STUDENT,
  UPDATE_STUDENT,
  DELETE_STUDENT,
} from "../../types/Types";
// import { v4 as uuidv4 } from "uuid";

const initialState = {
  student: [],
};
export const StudentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STUDENT:
      console.log("action.payload in reducer", action.payload);
      return {
        ...state,
        student: action.payload,
      };

    case ADD_STUDENT:
      let newStudent = [...state.student, action.payload];
      // newStudent.push(action.payload)
      return {
        ...state,
        student: newStudent,
      };

    case DELETE_STUDENT:
      let delStudent = state.student.filter(
        (item) => item.docID !== action.payload
      );
      console.log("data after delete", delStudent);
      return {
        ...state,
        student: delStudent,
      };
      
    case UPDATE_STUDENT:
      let updateStudents = state.student.map((item) => {
        if (item.docID === action.payload.docId) {
          return action.payload.data;
        } else {
          return item;
        }
      });
      return {
        ...state,
        student: updateStudents,
      };

    default:
      return state;
  }
};
