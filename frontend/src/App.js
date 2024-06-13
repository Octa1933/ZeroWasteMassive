import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Layanan from './components/Layanan';
import Berita from './components/Berita';
import Tentang from './components/Tentang';
import Register from './components/Register';
import Pesan from './components/Pesan';
import Riwayat from './components/Riwayat';
import Detail_Pengambilan from './components/Detail_Pengambilan';
import Detail_Berita from './components/Detail_Berita';

const isUserLoggedIn = () => {
  return localStorage.getItem('user') !== null;
};

const PrivateRoute = ({ element, ...rest }) => {
  return isUserLoggedIn() ? (
    element
  ) : (
    <Navigate to="/login" replace />
  );
};

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pesan" element={<PrivateRoute element={<Pesan />} />} />
        <Route path="/riwayat" element={<PrivateRoute element={<Riwayat />} />} />
        <Route path="/detail_pengambilan/:id" element={<PrivateRoute element={<Detail_Pengambilan />} />} />
        <Route path="/detail_berita" element={<PrivateRoute element={<Detail_Berita />} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
