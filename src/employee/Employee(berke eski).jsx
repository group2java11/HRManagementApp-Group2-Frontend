// Employee.jsx

import 'material-icons/iconfont/material-icons.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
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
          <div className="logo">
            <img
              src="https://cdn.cloudwises.com/ba-assets/genel/bilgeadam_teknoloji_logo_dikey_regular(CMYK).svg"
              width="200"
              height="200"
              alt=""
            />
          </div>
          <div className="side-menu">
            <ul>
              <li>
                <a href="#" className="active">
                  <i className="material-icons">transfer_within_a_station</i>Clock In/Out
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="material-icons">assignment_ind</i>Paid Time Off Request
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="material-icons">schedule</i>Salary Advance Request
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="material-icons">attach_money</i>Expenses
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="material-icons">settings</i>Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="right">
          <div className="top-menu">
            <a href="#" className="menu-btn">
              EMPLOYEES
            </a>
            <a href="#" className="menu-btn">
              PTO
            </a>
            <div className="logout">
              <a href="#">Logout</a>
            </div>
          </div>

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
