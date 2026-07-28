import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { CustomCursor } from './components/ui/CustomCursor';
import { ScrollProgressBar } from './components/ui/ScrollProgressBar';
import { AnimatedBlobs } from './components/ui/AnimatedBlobs';
import './styles/global.css';

function App() {
  return (
    <Router>
      {/* Global premium effects */}
      <ScrollProgressBar />
      <CustomCursor />
      <AnimatedBlobs />
      
      {/* Sticky Navigation */}
      <Navbar />
      
      {/* Main Sections */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
