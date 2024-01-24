import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/bilgeadam-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
  
   
  
    const handleLogin = async (e) => {
      e.preventDefault()
      try {
        const response = await fetch('http://localhost:9090/api/v1/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
          
        });
  
        if (response.ok) {
          const responseData = await response.text();
          localStorage.setItem("token", responseData);
          navigate('/employee');
        } else {
          alert("Email veya şifre hatalı. Yeniden deneyin.");
          console.error('Login failed');
        }
      } catch (error) {
        alert("Error");
        console.error('Error during login:', error);
      }
    };

    const togglePasswordVisibility = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    };
   
    return (
      <div className="login-page">
        <div className="logo-container">
                <img src={logo} alt="logo" />
            </div>
      
        <div className="form">
          
            <form className="login-form">
              <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
/>
              <button onClick={handleLogin}>login</button>
              <div className="password-toggle" onClick={togglePasswordVisibility}>
              <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
              </div>
             
            </form>
          
        </div>
      </div>
    );
  }

  /*
  : (
            <form className="register-form">
              <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
              <input type="password" placeholder="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
              <input type="text" placeholder="email address" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
              <button onClick={handleRegister}>create</button>
              <p className="message">Already registered? <a href="#" onClick={toggleForm}>Sign In</a></p>
            </form>
          )
  */