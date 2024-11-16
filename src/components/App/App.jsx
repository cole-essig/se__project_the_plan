import React from 'react'
import { useState, useEffect } from 'react'
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import JoinPlan from "../JoinPlan/JoinPlan";
import CreatePlan from '../CreatePlan/CreatePlan';
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
            path="/home/create-plan"
            element={
              <ProtectedRoute>
                <CreatePlan />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/home/pick-your-dish"
            element={
              <ProtectedRoute>
                <DishPicker />
              </ProtectedRoute>
            }  
          />
          <Route 
            path="/home/review" 
            element={
              <ProtectedRoute>
                <Review />
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
