import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { ScrollProgressBar } from './components/ui/ScrollProgressBar';
import './styles/global.css';

function App() {
  return (
    <>
      {/* Global reading progress indicator */}
      <ScrollProgressBar />
      
      {/* Sticky Navigation */}
      <Navbar />
      
      {/* Main Sections */}
      <main className="main-content">
        <Home />
      </main>
    </>
  );
}

export default App;
