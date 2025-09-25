//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';


import Navbar from './components/Navbar';
//import Footer from './components/Footer';
import NotFound from './components/NotFound';

import HomePage from './pages/HomePage';
import BookListPage from './pages/BookListPage';
import CategoryPage from './pages/CategoryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';




function App() {
  return (
    <div className="App">
      {/* Navigation Bar - แสดงในทุกหน้า */}
      <Navbar />
      

      {/* Main Content - เปลี่ยนตาม route */}
      <main className="main-content">
        <Routes>
          {/* หน้าแรก - แสดงหนังสือแนะนำ */}
          <Route path="/" element={<HomePage />} />
          {/* booklist */}
          <Route path="/books" element={<BookListPage />} />
          {/* category */}
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          {/* about */}
          <Route path="/about" element={<AboutPage />} />
          {/* contact */}
          <Route path="/contact" element={<ContactPage />} />
          {/* หน้า 404 - สำหรับ URL ที่ไม่มีอยู่ */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      

    </div>
  );
}

export default App;
