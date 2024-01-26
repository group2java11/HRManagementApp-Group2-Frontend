// SideMenu.jsx

import React from 'react';

const SideMenu = () => {
  return (
    <div>
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
  );
};

export default SideMenu;
