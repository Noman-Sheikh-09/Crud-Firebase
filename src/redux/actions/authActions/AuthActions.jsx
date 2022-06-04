import { auth, db } from "../../../config/Firebase";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SIGNUP = "SIGNUP";
export const GET_USER_ON_AUTH_STATE_CHANGE = "GET_USER_ON_AUTH_STATE_CHANGE";
export const doLogin = (userData, navigate) => async (dispatch) => {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(
      userData.email,
      userData.password
    );
    var user = userCredential.user;
    console.log("user", user);
    dispatch({
      type: LOGIN,
      payload: user,
    });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const doLogout = () => async (dispatch) => {
  try {
    const res = await auth.signOut();

    dispatch({
      type: LOGOUT,
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export const doSignup = (newUserData) => async (dispatch) => {
  console.log("signup data in action", newUserData);
  try {
    const userCredential = await auth.createUserWithEmailAndPassword(
      newUserData?.email,
      newUserData?.password
    );
    var userData = userCredential.user;
    const dbData = await db.collection("users").add(newUserData);
    console.log(dbData);
    dispatch({
      type: LOGIN,
      payload: userData,
    });
    // navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const doGetActiveUser = () => async (dispatch) => {
  try {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        dispatch({
          type: GET_USER_ON_AUTH_STATE_CHANGE,
          payload: user,
        });
      }
    });
  } catch (error) {
    console.log(error);
  } finally {
  }
};
