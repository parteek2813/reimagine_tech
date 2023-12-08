import React, { useState } from "react";
import { PieChart, Pie, Tooltip } from "recharts";
import logo from "../assets/images/bit_logo.webp";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Pie_Gender from "./helpers/Pie_Gender";
import Pie_Employment from "./helpers/Pie_Employment";
import { useUserContext } from "../context/UserContext";

function Main() {
  const [showLogout, setShowLogout] = useState(true);
  const [showNavs, setShowNavs] = useState(true);
  const [showUsername, setShowUsername] = useState(true);
  const { userInfo } = useUserContext(); // gettng from React userContext

  return (
    <>
      <div className="main_navbar">
        <Navbar
          showLogout={showLogout}
          showNavs={showNavs}
          showUsername={showUsername}
          userInfo={userInfo}
        />
      </div>
      <div className="main-container">
        {/* SIDEBAR */}
        <nav id="sidebarMenu" className="sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-home margin-right"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  Dashboard
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <main role="main" className="main-content">
          <div className="main-content-inner">
            <div className="kpi-container">
              <h3 className="key_title">Key Performance Indicators</h3>
              <div className="row mt-5">
                {/* Gender Pie Chart section */}
                {/* 1 */}
                <div className="col-3">
                  <button>
                    <a href="#" class="btn2">
                      <span class="spn2">GENDER</span>
                    </a>
                  </button>
                </div>

                {/* 2 */}
                <Pie_Gender />

                {/* 3 */}
                <div className="col-4">
                  <h5>TOTAL USERS = 1024</h5>
                  <h5>MALE = 768</h5>
                  <h5>FEMALE = 256</h5>
                </div>
              </div>

              <hr />
              <hr />

              <div className="row mt-5">
                {/* Employment Type Pie Chart section */}
                {/* 1 */}
                <div className="col-3">
                  <button>
                    <a href="#" class="btn2">
                      <span class="spn2">EMPLOYMENT TYPE</span>
                    </a>
                  </button>
                </div>

                {/* 2 */}
                <Pie_Employment />

                {/* 3 */}
                <div className="col-4">
                  <h5>TOTAL USERS = 1024</h5>
                  <h5>FULL TIME = 205</h5>
                  <h5>PART TIME = 317</h5>
                  <h5>DAILY WAGE = 502 </h5>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Main;
