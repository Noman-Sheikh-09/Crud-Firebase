import { applyMiddleware ,createStore} from "redux";
import thunk from "redux-thunk";
 import RootReducer from '../redux/reducers/RootReducer';
const Store = createStore(RootReducer, applyMiddleware(thunk, ))

export default Store ;