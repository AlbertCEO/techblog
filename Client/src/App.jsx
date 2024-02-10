import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Home from './Pages/Home'
import About from './Pages/About'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import Projects from './Pages/Projects'
import Header from './components/Header'
import Footer from './components/Footer'
import PrivateRoute from './components/PrivateRoute'


export default function App() {
  return (
   <BrowserRouter>
   <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Projects" element={<Projects />} />
         <Route element={<PrivateRoute />}>
      <Route path="/Dashboard" element={<Dashboard />} />
        </Route>
    </Routes>
    <Footer />
   </BrowserRouter>
  )
}
