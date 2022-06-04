import { LOGIN, LOGOUT, SIGNUP,GET_USER_ON_AUTH_STATE_CHANGE } from "../../actions/authActions/AuthActions";

const intialState = {
  isLoginUser: false,
  user: {},
};

export default function AuthReducers(state = intialState, action) {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        isLoginUser: true,
        user: action.payload,
      };
    }

    case LOGOUT: {
      return {
        ...state,
        isLoginUser: false,
        user: {},
      };
    }
    case SIGNUP: {
    console.log("signup data in reducer", action.payload);

      return {
        ...state,
        isLoginUser: true,
        userData: action.payload,
      };
    }
    case GET_USER_ON_AUTH_STATE_CHANGE: {
        return {
          ...state,
          isLoginUser: true,
          userData: action.payload,
        };
      }
    default:
      return state;
  }
}
