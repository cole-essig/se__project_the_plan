import React from 'react'
import { useState, useEffect } from 'react'
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import JoinPlan from "../JoinPlan/JoinPlan";
import DishPicker from "../DishPicker/DishPicker";
import Review from "../Review/Review";
import Home from "../Home/Home"
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute"
import AppContext from '../../context/AppContext';
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
          />
          <Route 
            path="/register"
            element={<Register />}
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
