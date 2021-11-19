import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Entries from "./components/entries";
import Footer from "./components/Footer";




function App() {
  
  return (
    <div>
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/entries" className="navbar-brand m-3">
          Home
        </a>
        <a href="#Project-section" className="navbar-brand m-3">
          Projects
        </a>
        <a href="#Education-section" className="navbar-brand m-3">
          Education
        </a>
        <a href="#contact-section" className="navbar-brand m-3">
          Contact
        </a>
        <a href="https://github.com/kabaothao/React-Portfolio/blob/main/portfolio-app/assets/resume.pdf" className="navbar-brand m-3">
          Resume
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/entries"} className="nav-link">
              {/* Projects */}
            </Link>
          </li>
        </div>
      </nav>

      <section>
        <div className="top-content">
          <div className="grid">
            <div className="w3-container w3-center w3-animate-left">
              <img className="profile-image" src="https://kabaothao.github.io/Portfolio/asset/Kabao%20Headshot_20210603%20-%20Copy.PNG" alt="Kabao"/>
              <h1><span>Kabao <br/> Thao</span></h1>
            </div>
            <div className="w3-container w3-center w3-animate-right">
              "As someone with years of experience as a Business Analysis, 
               I am looking to expand my skills and knowledge into a Web Developer Role for an Agile Environment."
            </div>
          </div>
        </div>
      </section>
      
      <div className="container mt-3">
        <Routes>
          <Route exact path="/" element={<Entries/>} />
          <Route exact path="/entries" element={<Entries/>} />
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
