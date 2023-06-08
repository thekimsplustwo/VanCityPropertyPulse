import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import PropertyDetail from './pages/PropertyDetail/PropertyDetail';
import MyPage from './pages/MyPage/MyPage';
import Likes from './pages/Likes/Likes';
import Header from './components/Header/Header';
import ScrollTop from './components/ScrollTop/ScrollTop';

function Router() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/properties" element={<PropertyDetail />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/likes" element={<Likes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
