import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav"
import "./JoinPlan.css";

function JoinPlan() {
    const [name, setName] = useState('');
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const [password, setPassword] = useState('');
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
  return (
    <div className="joinPlan"> 
        <h2 className="joinPlan__title">Join Up</h2>
        <Nav />
        <div className="joinPlan__form">
        <label htmlFor='name' className='joinPlan__label'>
                Name{" "}
                <input 
                    type='text'
                    className='joinPlan__input'
                    id='name'
                    placeholder='Name'
                    value={name}
                    onChange={handleNameChange}
                />
            </label>
            <label htmlFor='password' className='joinPlan__label'>
                Password{" "}
                <input 
                    type='password'
                    className='joinPlan__input'
                    id='password'
                    placeholder='Password'
                    onChange={handlePasswordChange}
                    value={password}
                />
            </label>
        </div>
        <div className='joinPlan__buttons'>
                <button type='submit' className="joinPlan__submit-button">Join Plan</button>
                <Link to='/register'>
                <button className="joinPlan__switch-button">Create Dinner Instead</button>
                </Link>
        </div>
    </div>
  )
}

export default JoinPlan;