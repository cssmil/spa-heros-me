import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { NavBar } from './Components/NavBar'
import { Home, DcComics, Marvel, Search, Hero } from './pages'
import { Login } from './pages/Login';
import { Landing } from './pages/Landing';

export const AppHeros = () => {
  return (
    <>
      
      <div className="container">
        <Routes>
          <Route path="/login" element= {<Login />}  />
          <Route path="/*" element={<Landing />} />
        </Routes>
      </div>

    </>
  )
}
