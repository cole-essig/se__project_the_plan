import React from 'react'
import { useState, useEffect } from 'react'
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Register from "../Register/Register";
import JoinPlan from "../JoinPlan/JoinPlan";
import CreatePlan from '../CreatePlan/CreatePlan';
import Home from "../Home/Home"
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute"
import AppContext from '../../context/AppContext';
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  return ( 
    <div className='page'>
     <div className="page__content">
     <AppContext.Provider value={isLoggedIn} >
        <Routes>
          <Route
            path="/home"
            element={
            <ProtectedRoute anonymous>
              <Home />
            </ProtectedRoute>
          }
          />
          <Route 
            path="/home/create-plan"
            element={
              <ProtectedRoute anonymous>
                <CreatePlan />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/register"
            element={<Register />}
          />
          <Route 
            path="/login"
            element={<JoinPlan />}
          />
          <Route
            path="*"
            element={
              isLoggedIn ? (
                <Navigate to="/home" replace />
              ) : (
                <Navigate to="/register" replace />
              )
            }
          />
        </Routes>
      </AppContext.Provider>
     </div>
    </div>
  )
}

export default App
