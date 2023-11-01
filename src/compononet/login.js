import API from '@/utils/apiConfig';
import Link from 'next/link';
import Router from 'next/router';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    try {
        
    // Add your login logic here
    API.post("/user/login",{
        email,password
    }).then((res)=>{
      
        localStorage.setItem("User",JSON.stringify(res.data))
        localStorage.setItem("Token",res.data.token)
        Router.push("/")
    }).catch((err)=>alert(err))
        
    } catch (error) {
        
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
      <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <Link href={"/signup"}>
        <p>Signup</p></Link>
      </div>
    </div>
  );
};

export default Login;
