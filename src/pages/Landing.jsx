import React from 'react'
import { NavBar } from '../Components'
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home, DcComics, Marvel, Search, Hero } from '../pages'

export const Landing = () => {
  return (
    <>
      <NavBar />
      <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/marvel" element={<Marvel />} />
            <Route path="/dc-comics" element={<DcComics />} />
            <Route path="/search" element={<Search />} />
            <Route path="/hero/:id" element={<Hero />} />
            <Route path="/*" element={<Navigate to="/home" />} />
          </Routes>
        </div>
          
    </>
  )
}
