// Employee.jsx

import 'material-icons/iconfont/material-icons.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SideMenu from '../components/SideMenu';
import Header from '../components/Header'; // Import the Header component
import '../components/SideMenu.css';
import './Employee.css';

const Employee = () => {
  const navigate = useNavigate();

  const handleEmployeeDetailsClick = () => {
    navigate('/employeeProfile');
  };

  return (
    <div className="container">
      <div className="top">
        <div className="left">
          <SideMenu />
        </div>

        <div className="right">
          <Header /> {/* Include the Header component here */}

          <div className="content">
            <h1>HR Dashboard</h1>
            <div className="dashboard">
              <div className="dashboard-panel dashboard-panel-todo">
                <ul>
                  <div id="algn">
                    <div id="card">
                      <div id="upper-bg">
                        <img
                          src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="profile-pic"
                          className="profile-pic"
                        />
                      </div>
                      <div id="lower-bg">
                        <div className="text">
                          <p className="name">Berke Yıldırımer</p>
                          <p className="title">Java Developer & <br /> Competitive programmer</p>
                        </div>
                        <div id="icons">
                          <a href="#" className="ico">
                            <img
                              width="48"
                              height="48"
                              src="https://img.icons8.com/color/48/gmail-new.png"
                              alt="gmail-new"
                            />
                          </a>
                          <a href="#" className="ico">
                            <img
                              width="48"
                              height="48"
                              src="https://img.icons8.com/fluency/48/github.png"
                              alt="github"
                            />
                          </a>
                          <a href="#" className="ico">
                            <img
                              width="48"
                              height="48"
                              src="https://img.icons8.com/color/48/linkedin.png"
                              alt="linkedin"
                            />
                          </a>
                          <a href="#" className="ico">
                            <img
                              width="48"
                              height="48"
                              src="https://img.icons8.com/color/48/facebook-new.png"
                              alt="facebook-new"
                            />
                          </a>
                        </div>
                        <div id="btn">
                          <button className="jsx" onClick={handleEmployeeDetailsClick}>
                            Employee Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dashboard-panel dashboard-panel-other"></div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="footer">slmcnmbubifooter</div>
      </div>
    </div>
  );
};

export { Employee };
export default Employee;
