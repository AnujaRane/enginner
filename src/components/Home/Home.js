import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import { GoArrowUpRight } from "react-icons/go";

const Home = () => {
  return (
    <div>
        <div className="main-container">
        <Header />
            <div className="purple"></div>
            <div className="green"></div>

            {/* content */}
            <div className="title">
              <h1>I'm <br /> Sagar Sarode</h1>
            </div>

            {/* skills box */}
            <div className="skills-box">
            <div className="skill">
              <h1>Skilled</h1>
              <GoArrowUpRight className="icon" />
            </div>
              <p>Sr. Quality Engineer with a drive to deliver exceptional quality outcomes. With 6 years of experience.</p>
            </div>

            {/* image */}
            <div className="img">
              <img src="assets/img/personal.png" alt="not found" />
            </div>

            <div className="highlight-content">
              <h1>Senior <br /> Quality <span>Engineer</span></h1>
            </div>

            <div className="right-content">
              <h2>Building trust, one test at a time</h2>
            </div>
        </div>
    </div>
  )
}

export default Home;