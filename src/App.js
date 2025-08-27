import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // Use BrowserRouter
import News from "./Pages/News.js";
import Login from "./Pages/Login.js";
import Signup from "./Pages/Signup.js";
import Forum from "./Pages/Forum.js";
import Homepage from "./Pages/Homepage.js";
import Dashboard from "./Pages/Dashboard.js";
import Jobs from "./Pages/Jobs.js";
import PostedJobs from "./Pages/PostedJobs.js";
import Apply from "./Pages/Apply.js";
import Profile from "./Pages/Profile.js";
import ForumNewsPage from "./Pages/ForumNewsPage.js";
import Professionals from "./Professionals/Professionals.js";
import Dating from "./Dating/Dating.js";
import ProjectResourcePerson from "./Pages/ProjectResourcePerson.js";
import Sales from "./Pages/Sales.js";
import Doctors from "./Professionals/Doctors.js";
import ChangePassword from "./Pages/ChangePassword.js";
import UpdateProfile from "./Pages/UpdateProfile.js";
import ForgotPassword from "./Pages/ForgotPassword.js";
import Lawyers from "./Professionals/Lawyers.js";
import Drivers from "./Professionals/Drivers.js";
import Pharmacist from "./Professionals/Pharmacist.js";
import Plumber from "./Professionals/Plumber.js";
import Tech from "./Professionals/Tech.js";
import Teacher from "./Professionals/Teacher.js";
import Singles from "./Dating/Singles.js";
import Married from "./Dating/Married.js";
import Divorced from "./Dating/Divorced.js";
import Newscontent from "./Pages/Newscontent.js";
import Politics from "./ForumPages/Politics.js";
import Sports from "./ForumPages/Sports.js";
import Technology from "./ForumPages/Technology.js";
import Fashion from "./ForumPages/Fashion.js";
import Religion from "./ForumPages/Religion.js";
import Entertainment from "./ForumPages/Entertainment.js";
import Business from "./ForumPages/Business.js";
import MarketsPlace from "./marketplace/MarketsPlace.js";
// import RealEstate from "./connect/RealEstate.js";
import Services from "./connect/Services.js";
import Properties from "./connect/Properties.js";
import ForumInterface from "./Pages/ForumInterface.js";
import SPLoader from "./Pages/SpinnerLoader.js";  
import Dashboards from "./Pages/Dashboards.js";

import './App.css';

function App() {

  
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/news/:id" element={<Newscontent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/news" element={<News />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/postedjobs" element={<PostedJobs />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/forum-news/:id" element={<ForumNewsPage />} />
          <Route path="/professionals" element={<Professionals />} />
          <Route path="/dating" element={<Dating />} />
          <Route path="/project-resource-person" element={<ProjectResourcePerson />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/lawyers" element={<Lawyers />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/pharmacists" element={<Pharmacist />} />
          <Route path="/tutors" element={<Teacher />} />
          <Route path="/plumbers" element={<Plumber />} />
          <Route path="/singles" element={<Singles />} />
          <Route path="/married" element={<Married />} />
          <Route path="/divorcee" element={<Divorced />} />
          <Route path="/politics" element={<Politics />} />
          <Route path="/business" element={<Business />} />
          <Route path="/religion" element={<Religion />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/sports" element={<Sports/>} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/marketsplace" element={<MarketsPlace />} />
          {/* <Route path="/realEstate" element={<RealEstate />} /> */}
          <Route path="/services" element={<Services />} />
           <Route path="/forumInterface" element={<ForumInterface />} />
          <Route path="/properties" element={<Properties />} />
            <Route path="/dashboards" element={<Dashboards />} />
          <Route path="*" element={<div>Page Not Found!</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
