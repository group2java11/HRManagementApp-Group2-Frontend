import "./Employee.css";
import {decodeJwt} from "jose";
import axios from 'axios';
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";

import React, { useEffect, useState } from 'react';

export function Employee(){

  const token = localStorage.getItem("token");
  let id;
  console.log("token: "+token);
  const navigate = useNavigate();

  try{
    const decodedToken = decodeJwt(token);
    console.log("decodedToken: "+decodedToken);
    id = decodedToken.id;
    console.log("id: "+id);
  }catch(error){
    console.error("Token çözme hatası:", error);
  }

  const[userData, setUserData] = useState({
    name:"",
    surname:"",
    email:"",
    photo:"",
  })

  useEffect(()=>{
    if(id){
      axios
      .get(`http://localhost:9092/api/v1/employee/find-by-id2/${id}`,{
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          'Cache-Control': 'no-cache',
        },
        params: {
          timestamp: new Date().getTime(),
        },
      })
      .then((response)=>{
        const{name, surname, email, photo} =response.data;
        console.log("API yanıtı: ",response.data);
        setUserData({name,surname,email,photo});
        
      })
      .catch((error)=>{
        console.log(error);
      });
     
    }
  }, [id,token]);

  console.log(userData.name);
  console.log(userData.photo);

  
  function handleGoToEmpoyeeProfile(){
    localStorage.setItem("token", token);
    navigate('/employeeProfile');
  }

  

  return (
    <>
    <div className="profile-page-container" onClick={handleGoToEmpoyeeProfile}>
    <div className="profile-page">
      <div className="profile-picture">
      <Avatar
            alt="User Profile"
            src={userData.photo || "/assets/default-image.jpg"} 
            style={{ width: 120, height: 120, marginBottom: "20px" }}
          />
      </div>
      <div className="user-details">
        <p className="name">{userData.name} {userData.surname}</p>
        <p className="email">{userData.email}</p>
      </div>
    </div>
    </div>
         
    </>
  );
}





/*
import "./Employee.css";
import {decodeJwt} from "jose";
import axios from 'axios';

import React, { useEffect, useState } from 'react';

export function Employee(){




  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    email: "",
    photo:"",
  });

  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");
  

  
   useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(token);
        
          const response = await axios.get(`http://localhost:9092/api/v1/employee/find-by-id/`, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
              'Cache-Control': 'no-cache',
            
            },
            params: {
              token:token,
              timestamp: new Date().getTime(),
            },
            mode:'cors',
          });

          const { name, surname, email, photo } = response.data;
          setUserData({
            name,
            surname,
            email,
            photo,

          });
        
      } catch (error) {
        console.error('Veri getirme hatası', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData(); 
  }, [token]);
  

  return (
    <>
    <div className="profile-page-container">
    <div className="profile-page">
      <div className="profile-picture">
        <img className="photo" src={userData.photo} alt="photo" />
      </div>
      <div className="user-details">
        <p className="name">{userData.name} {userData.surname}</p>
        <p className="email">{userData.email}</p>
      </div>
    </div>
    </div>
         
    </>
  );
}

*/
 
