import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { doGetActiveUser } from "./redux/actions/authActions/AuthActions";
import Routing from "./routing/Routing";

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(doGetActiveUser())
  },[])
  return (
    <div className="App">
      <Routing />
    </div>
  ); 
}

export default App;
