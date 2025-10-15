import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Draft from './components/Draft';
import Playoffs from './components/Playoffs';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/draft" element={<Draft />} />
          <Route path="/playoffs" element={<Playoffs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

