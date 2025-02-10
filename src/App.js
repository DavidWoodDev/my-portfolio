import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import HomePage from 'src/pages/HomePage';
import AboutPage from 'src/pages/AboutPage';
import ProjectsPage from 'src/pages/ProjectsPage';
import ContactPage from 'src/pages/ContactPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
