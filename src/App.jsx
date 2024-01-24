import { useState } from 'react'

import { Login } from './components/Login';
import { Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import './App.css'
import {Employee} from "./employee/Employee";
import { EmployeeProfilePage } from './employee/EmployeeProfilePage';

function App() {
  return(
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" exact element={<Login />} ></Route>
      <Route path="/login" exact element={<Login />}></Route>


      <Route path="/employee" exact element={<Employee />} ></Route>
      <Route path="/employeeProfile" exact element={<EmployeeProfilePage />} ></Route>

      </Routes>
    </BrowserRouter>

    
    </>
  )
}
export default App
