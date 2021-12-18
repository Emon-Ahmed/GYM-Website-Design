import "./App.css";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
  Outlet
} from "react-router-dom";
import Home from "./Pages/Home";
import Pricing from "./Pages/Pricing";
import Class from "./Pages/Class";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import SingleClass from "./Pages/SingleClass";
import ContactUs from "./Pages/ContactUs";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedIn } from "./Redux/auth/action";
import { useEffect } from "react";
import Order from "./Components/Order";
import AllOrder from "./Components/AllOrder";
import Details from "./Components/Details";
import AllDetails from "./Components/AllDetails";
import MakeAdmin from "./Components/MakeAdmin";
import DefaultDashboard from "./Components/Dashboard";
import CheckOut from "./Pages/CheckOut";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getClasses } from "./Redux/classes/action";
import { getClass } from "./Redux/user/action";
import RequireAuth from "./Components/PrivateRoute";
import { userLoading } from "./Redux/auth/userSlice";
import NotFound from "./Components/NotFound";

const auth = getAuth();
function App() {
  
  const {loading} = useSelector((state) => state.classes);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userLoading(true));
    dispatch(getClasses());
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(userLoggedIn(user));
        dispatch(userLoading(false));
        dispatch(getClass(user.email));
        
      } else {
        dispatch(userLoading(false));
      }
    });
    return () => unsub;
  }, []);
 

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pricing" element={<Pricing />} />

        <Route path="class" element={<Class />}/>
          <Route path="class/:classId" element={<RequireAuth><SingleClass /></RequireAuth>} />
        <Route path="register" element={<Register />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route path="order" element={<RequireAuth><Order /></RequireAuth>} />
          <Route path="allorder" element={<RequireAuth><AllOrder /></RequireAuth>} />
          <Route path="details" element={<RequireAuth><Details /></RequireAuth>} />
          <Route path="alldetails" element={<RequireAuth><AllDetails /></RequireAuth>} />
          <Route path="makeadmin" element={<RequireAuth><MakeAdmin /></RequireAuth>} />
          <Route index element={<DefaultDashboard />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
  );
}

export default App;
