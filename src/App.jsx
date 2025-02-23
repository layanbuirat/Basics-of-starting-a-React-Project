import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Users from './Components/Users';
import Home from './Components/Home';
import { Route , Routes} from 'react-router-dom';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Users' element={<Users />} />
      <Route path='*' element={<h2>page not found</h2>} />

      </Routes>
      <Footer />
    </>
  )
}
