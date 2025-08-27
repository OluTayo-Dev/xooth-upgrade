import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // Use BrowserRouter
// import News from "./Pages/News.jsx";
import Login from "./Pages/Login.jsx";
// import Signup from "./Pages/Signup.jsx";
import Forum from "./Pages/Forum.jsx";
import Homepage from "./Pages/Homepage.jsx";
import Dashboards from "./Pages/Dashboards.jsx";
import Jobs from "./Pages/Jobs.jsx";
// import PostedJobs from "./Pages/PostedJobs.jsx";
import Apply from "./Pages/Apply.jsx";
// // import Profile from "./Pages/Profile.jsx";
// import ForumNewsPage from "./Pages/ForumNewsPage.jsx";
// import Professionals from "./Professionals/Professionals.jsx";
import Dating from "./Dating/Dating.jsx";
// import ProjectResourcePerson from "./Pages/ProjectResourcePerson.jsx";
// import Sales from "./Pages/Sales.jsx";
// import Doctors from "./Professionals/Doctors.jsx";
// import ChangePassword from "./Pages/ChangePassword.jsx";
// import UpdateProfile from "./Pages/UpdateProfile.jsx";
import ForgotPassword from "./Pages/ForgotPassword.jsx";
// import Lawyers from "./Professionals/Lawyers.jsx";
// import Drivers from "./Professionals/Drivers.jsx";
// import Pharmacist from "./Professionals/Pharmacist.jsx";
// import Plumber from "./Professionals/Plumber.jsx";
import Tech from "./Professionals/Tech.jsx";
// import Teacher from "./Professionals/Teacher.jsx";
import Singles from "./Dating/Singles.jsx";
import Married from "./Dating/Married.jsx";
import Divorced from "./Dating/Divorced.jsx";
// import Newscontent from "./Pages/Newscontent.jsx";
import Politics from "./ForumPages/Politics.jsx";
import Sports from "./ForumPages/Sports.jsx";
import Technology from "./ForumPages/Technology.jsx";
import Fashion from "./ForumPages/Fashion.jsx";
import Religion from "./ForumPages/Religion.jsx";
import Entertainment from "./ForumPages/Entertainment.jsx";
import Business from "./ForumPages/Business.jsx";
import MarketsPlace from "./marketplace/MarketsPlace.jsx";
// import RealEstate from "./connect/RealEstate.js";
import Services from "./connect/Services.jsx";
import Properties from "./connect/Properties.jsx";
// import ForumInterface from "./Pages/ForumInterface.jsx";
// import SPLoader from "./Pages/SpinnerLoader.jsx";  
import './App.css';

function App() {

  
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/news/:id" element={<Newscontent />} /> */}
          <Route path="/login" element={<Login />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
          <Route path="/forum" element={<Forum />} />
          {/* <Route path="/news" element={<News />} /> */}
          <Route path="/dashboard" element={<Dashboards />} />
          <Route path="/jobs" element={<Jobs />} />
          {/* <Route path="/postedjobs" element={<PostedJobs />} /> */}
          <Route path="/apply" element={<Apply />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          {/* <Route path="/forum-news/:id" element={<ForumNewsPage />} /> */}
          {/* <Route path="/professionals" element={<Professionals />} /> */}
          <Route path="/dating" element={<Dating />} />
          {/* <Route path="/project-resource-person" element={<ProjectResourcePerson />} /> */}
          {/* <Route path="/sales" element={<Sales />} /> */}
          {/* <Route path="/doctors" element={<Doctors />} /> */}
          {/* <Route path="/update-profile" element={<UpdateProfile />} />
          <Route path="/change-password" element={<ChangePassword />} /> */}
          <Route path="/forgot-password" element={<ForgotPassword />} />
          {/* <Route path="/lawyers" element={<Lawyers />} /> */}
          {/* <Route path="/drivers" element={<Drivers />} /> */}
          <Route path="/tech" element={<Tech />} />
          {/* <Route path="/pharmacists" element={<Pharmacist />} /> */}
          {/* <Route path="/tutors" element={<Teacher />} /> */}
          {/* <Route path="/plumbers" element={<Plumber />} /> */}
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
           {/* <Route path="/forumInterface" element={<ForumInterface />} /> */}
          <Route path="/properties" element={<Properties />} />
            <Route path="/dashboards" element={<Dashboards />} />
          <Route path="*" element={<div>Page Not Found!</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
