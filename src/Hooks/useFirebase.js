import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../Redux/auth/action";

const useFirebase = () => {
  const user = { email: "emon@emon.com" };
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(userLoggedIn(user))
  },[user]) 
  
  return {
    user,
  };
};

export default useFirebase;
