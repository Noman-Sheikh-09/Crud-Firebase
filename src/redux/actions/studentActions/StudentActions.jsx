import {
  FETCH_STUDENT,
  ADD_STUDENT,
  UPDATE_STUDENT,
  DELETE_STUDENT,
} from "../../types/Types";
import { db } from "../../../config/Firebase";

export const fetchStudents = () => async (dispatch) => {
  try {
    let student = [];
    let snapshot = await db.collection("Students").get();
    snapshot.forEach((doc) => {
      student.push({ docID: doc.id, ...doc.data() });
    });

    console.log("data from firebase into action", student);
    dispatch({
      type: FETCH_STUDENT,
      payload: student,
    });
  } catch (error) {
    console.log(error);
  }
};

//  Add Student to Firebase
export const addStudent = (data) => async (dispatch) => {
  try {
    await db.collection("Students").add(data);
    //    console.log("data from firebase into action", student);
    dispatch({
      type: ADD_STUDENT,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

// Delete Student Action

export const deleteStudent = (docID) => async (dispatch) => {
  console.log("id from custom hooks", docID);
  try {
    await db.collection("Students").doc(docID).delete();
    console.log("delete from firebase action");
    dispatch({
      type: DELETE_STUDENT,
      payload: docID,
    });
  } catch (error) {
    console.log(error);
  }
};

// Update Student Action

export const updateStudent = (id, studentData) => async (dispatch) => {
  console.log(id, studentData);
  try {
    await db.collection("Students").doc(id).update(studentData);
    dispatch({
      type: UPDATE_STUDENT,
      payload: { data: studentData, docId: id },
    });
  } catch (error) {
    console.log(error);
  }
};
