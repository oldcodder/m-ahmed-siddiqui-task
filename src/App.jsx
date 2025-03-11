import React from 'react'
import NavBar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileCard from './components/ProileCard';
import JobListing from './components/JobListing';
import "./font.css";


function App() {
  return (
    <>
      <Router>
        <NavBar />
      </Router>
      <div className="flex flex-col lg:flex-row w-full bg-[#F4F4F4] px-4 sm:px-10 lg:px-20 py-6 gap-6">
        <div className="w-full lg:w-1/3 flex justify-center">
          <ProfileCard />
        </div>
        <div className="w-full lg:w-2/2">
          <JobListing />
        </div>
      </div>
    </>
  );
}

export default App;
