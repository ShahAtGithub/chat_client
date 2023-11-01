import API from '@/utils/apiConfig';
import Link from 'next/link';
import Router from 'next/router';
import React, { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    try {
        
    // Add your login logic here
    API.post("/user",{
        email,password,name
    }).then((res)=>{
       Router.push("/login")
    }).catch((err)=>{})
        
    } catch (error) {
        
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
      <h2>SignUp</h2>
        <form onSubmit={handleLogin}>
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
          <button type="submit" className="login-button">Signup</button>
          <Link href={"/login"}>
          <p>login</p></Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
