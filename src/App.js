import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Component/LandingPage/Navbar";
import Jumbotron from "./Component/LandingPage/Jumbotron";
import Footer from "./Component/LandingPage/Footer";
import Card from "./Component/LandingPage/Card";
import JobDetail from "./Component/LandingPage/JobDetail";
import Login from "./Component/LandingPage/Login";
import Register from "./Component/LandingPage/Register";
import ManageData from "./Component/Dashboard/ManageData";
import NavDash from "./Component/Dashboard/NavDash";
import CreateData from "./Component/Dashboard/CreateData";
import Cookies from "js-cookie";
import EditData from "./Component/Dashboard/EditData";
import ResetPassword from "./Component/Dashboard/ResetPassword";
import NotFound from "./Component/NotFound";

function PrivateRoute({ element, ...props }) {
  const token = Cookies.get('token');
  if (!token) {
    alert("Login terlebih dahulu untuk dapat akses ke page ini.");
    return <Navigate to="/login" />;
  }
  return React.cloneElement(element, props);
}

function LoginRoute() {
  if (Cookies.get('token')) {
    alert("You are already logged in.");
    return <Navigate to="/" />;
  }
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Jumbotron />
              <Card />
              <Footer />
            </>
          }
        />
        <Route path="/about/:id" element={<><Navbar /><JobDetail /><Footer /></>} />
        <Route path="/login" element={<><LoginRoute /><Navbar /><Login /><Footer /></>} />
        <Route path="/register" element={<><Navbar /><Register /><Footer /></>} />
        <Route
          path="/dashboard/*"
          element={<NotFound />}
        />
        <Route path="/dashboard/manage" element={<PrivateRoute element={<><NavDash /><ManageData /></>} />} />
        <Route path="/dashboard/create" element={<PrivateRoute element={<><NavDash /><CreateData /></>} />} />
        <Route path="/dashboard/edit/:id" element={<PrivateRoute element={<><NavDash /><EditData /></>} />} />
        <Route path="/dashboard/change-password" element={<PrivateRoute element={<><NavDash /><ResetPassword /></>} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;