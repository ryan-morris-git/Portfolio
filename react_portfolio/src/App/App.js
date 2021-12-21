import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PortfolioHeader from '../Components/HeadersFooters/PortfolioHeader';
import NavHeader from '../Components/HeadersFooters/NavHeader';
import Footer from '../Components/HeadersFooters/Footer';
import HomeBody from '../Components/BodyContent/HomeBody';
import ProjectCard from '../Components/Projects/ProjectCard';
import './App.css';

function App() {
  return (
    <div className="Portfolio">
      <NavHeader />
      <PortfolioHeader />
      <Router>
        <Routes>
          <Route exact path="/" element={<HomeBody/>} />
          <Route exact path="/projects" element={<ProjectCard/>} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
