import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DummyHome from './pages/Home/DummyHome';
import Home from './pages/Home/Home';
import PropertyDetail from './pages/PropertyDetail/PropertyDetail';
import MyPage from './pages/MyPage/MyPage';
import Likes from './pages/Likes/Likes';
import Login from './pages/Login/Login';
import Logout from './pages/Login/Logout';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ScrollTop from './components/ScrollTop/ScrollTop';
import Compare from './pages/Compare/Compare';

function Router() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/properties/:zpid" element={<PropertyDetail />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/likes" element={<Likes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
