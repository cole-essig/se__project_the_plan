import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./Register.css";

function Register() {
const [name, setName] = useState('');
  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const [password, setPassword] = useState('');
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  
  return (
    <div className="register"> 
      <h2 className="register__title">Create Dinner Plans</h2>
      <div className="register__form">
      <label htmlFor='name' className='register__label'>
                Name{" "}
                <input 
                    type='text'
                    className='register__input'
                    id='name'
                    placeholder='Name'
                    value={name}
                    onChange={handleNameChange}
                />
            </label>
            <label htmlFor='password' className='register__label'>
                Password{" "}
                <input 
                    type='password'
                    className='register__input'
                    id='password'
                    placeholder='Password'
                    onChange={handlePasswordChange}
                    value={password}
                />
            </label>
      </div>
      <div className='register__buttons'>
            <button type='submit' className="register__submit-button">Create Plan</button>
            <Link to='/login'>
              <button className="register__switch-button">Join Dinner Instead</button>
            </Link>
      </div>
      <Footer />
    </div>
  )
}

export default Register