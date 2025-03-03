import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SelectUserType from "./components/SelectUserType";
import CreateYourAccount from "./components/CreateYourAccount";
import AdminDashBoard from "./components/AdminDashBoard";
import VisiterRegistration from "./components/VisiterRegistration";
import BrokerRegistration from "./components/BrokerRegistration";
import PropertyListing from "./components/PropertyListing";
import NewProjectForm from "./components/NewProjectForm";
import LeadMangment from "./components/LeadMangement";
import ProtectedRoute from "./components/ProtectedRoute"; // Import ProtectedRoute
import LeadRegistraion from "./components/LeadRegistration";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/select-user" element={<SelectUserType />} />
        <Route path="/signup" element={<CreateYourAccount />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/AdminDashBoard" element={<AdminDashBoard />} />
          <Route path="/VisiterRegistration" element={<VisiterRegistration />} />
          <Route path="/BrokerRegistration" element={<BrokerRegistration />} />
          <Route path="/propertylisting" element={<PropertyListing />} />
          <Route path="/newproject" element={<NewProjectForm />} />
          <Route path="/leadmangment" element={<LeadMangment />} />
          <Route path="/leadregistration" element={<LeadRegistraion />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
