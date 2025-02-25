import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import CreateYourAccount from "./components/CreateYourAccount";
import AdminDashBoard from "./components/AdminDashBoard";
import VisiterRegistration from "./components/VisiterRegistration";
import BrokerRegistration from "./components/BrokerRegistration";
import PropertyListing from "./components/PropertyListing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<CreateYourAccount />} />
        <Route path="/AdminDashBoard" element={<AdminDashBoard />} />
        <Route path="/VisiterRegistration" element={<VisiterRegistration />} />
        <Route path="/BrokerRegistration" element={<BrokerRegistration />} />
        <Route path="/propertylisting" element={<PropertyListing />} />
      </Routes>
    </Router>
  );
}

export default App;
