import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./components/Login";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import ManageAccount from "./components/ManageAccount";
import User from "./components/User";
import AddUsers from "./components/AddNewUser";
import AddNewDepartment from "./components/AddNewDepartment";
import ViewDepartment from "./components/ViewDepartment";
import ManageGroup from "./components/Group";
import Layout from "./components/shared/Layout";
import EditUser from "./components/EditUser";
import AlertMessage from "./components/GeneratePassword";
import Home from "./accounts/Home";
import PersonalInfo from "./accounts/PersonalInfo";
import MngSecurity from "./accounts/MngSecurity";
import MngAccessControl from "./accounts/MngAccessControl";
import Document from "./components/Document";
import DocumentType from "./documentType/DocumentType";
import SystemReport from "./components/SystemReport";
import RecyleBin from "./components/RecyleBin";
import AuditTrail from "./systemReport/AuditTrail";
import UserAccess from "./systemReport/UserAccess";
import DepartmentAccess from "./systemReport/DepartmentAccess";
import ActivityLog from "./systemReport/ActivityLog";
import SingleUpload from "./documents/SingleUpload";
import MultipleUpload from "./documents/MultipleUpload";
import MachineConnectivity from "./documents/MachineConnectivity";
import ViewScan from "./documents/viewing/ViewScan";
import UploadScanFile from "./documents/viewing/UploadScanFile";

import Header from "./components/shared/Header";
// import Scan from "./scan/Scan";
// import Products from './components/Products';

// import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ToastContainer /> */}
    <Router>
      <Routes>
        {/* <Route path="/scan" element={<Scan />} /> */}
        <Route index element={<App />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />

        <Route path="/manageaccount" element={<ManageAccount />} />
        <Route path="/" element={<Login />} />

        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/layout" element={<Layout />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/department/" element={<AddNewDepartment />} />
          <Route path="/user/viewdepartment" element={<ViewDepartment />} />
          <Route path="/user/addusers" element={<AddUsers />} />
          <Route path="/group" element={<ManageGroup />} />
          <Route path="/user/editusers/:id" element={<EditUser />} />
          <Route path="/user/addusers/:pass" element={<AlertMessage />} />
          <Route path="/document" element={<Document />} />
          <Route path="/documentType" element={<DocumentType />} />
          <Route path="/systemReport" element={<SystemReport />} />
          <Route path="/recycleBin" element={<RecyleBin />} />

          <Route path="/audittrail" element={<AuditTrail />} />
          <Route path="/useraccess" element={<UserAccess />} />
          <Route path="/departmentaccess" element={<DepartmentAccess />} />
          <Route path="/activitylog" element={<ActivityLog />} />
          <Route path="/documents/singleupload" element={<SingleUpload />} />
          <Route
            path="/documents/multipleupload"
            element={<MultipleUpload />}
          />
          <Route
            path="/documents/machineconnectivity"
            element={<MachineConnectivity />}
          />
          <Route path="/documents/viewscan" element={<ViewScan />} />
          <Route
            path="/documents/uploadscanfile"
            element={<UploadScanFile />}
          />

          <Route path="/head" element={<Header />} />
          {/* <Route path='/products' element={<Products />} /> */}
        </Route>
      </Routes>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/personalinfo" element={<PersonalInfo />} />
        <Route path="/mngsecurity" element={<MngSecurity />} />
        <Route path="/accesscontrol" element={<MngAccessControl />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
