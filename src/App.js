import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Pricing from "./Pages/Pricing";
import Class from "./Pages/Class";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import SingleClass from "./Pages/SingleClass";
import ContactUs from "./Pages/ContactUs";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "./Redux/auth/action";
import { useEffect } from "react";
import Order from "./Components/Order";
import AllOrder from "./Components/AllOrder";
import Details from "./Components/Details";
import AllDetails from "./Components/AllDetails";
import MakeAdmin from "./Components/MakeAdmin";
import DefaultDashboard from "./Components/Dashboard";

function App() {
  const user = { email: "emon@emon.com" };
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(userLoggedIn(user))

  },[user, dispatch]) 
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="class" element={<Class />}>
          <Route path=":id" element={<SingleClass />} />
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="dashboard" element={<Dashboard />} >
          <Route path="order" element={<Order />} />
          <Route path="allorder" element={<AllOrder />} />
          <Route path="details" element={<Details />} />
          <Route path="alldetails" element={<AllDetails />} />
          <Route path="makeadmin" element={<MakeAdmin />} />
          <Route index element={<DefaultDashboard />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
