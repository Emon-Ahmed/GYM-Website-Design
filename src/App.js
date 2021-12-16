import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Pricing from "./Pages/Pricing";
import Class from "./Pages/Class";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import SingleClass from "./Pages/SingleClass";
import ContactUs from "./Pages/ContactUs";

function App() {
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
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
