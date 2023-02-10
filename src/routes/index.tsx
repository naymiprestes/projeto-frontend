import { Route, Routes } from "react-router-dom";
import DashboardUser from "../pages/Dashboard";
import Login from "../pages/Login";
import RegistrationContact from "../pages/RegistrationContact";
import RegistrationUser from "../pages/RegistrationUser";

const RoutesApplication = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/user" element={<RegistrationUser />} />
      <Route path="/contacts" element={<RegistrationContact />} />
      <Route path="/dashboard" element={<DashboardUser />} />
    </Routes>
  );
};

export default RoutesApplication;
