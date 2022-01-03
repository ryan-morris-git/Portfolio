import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import PortfolioHeader from '../Components/HeadersFooters/PortfolioHeader';
import NavHeader from '../Components/HeadersFooters/NavHeader';
import Footer from '../Components/HeadersFooters/Footer';
import HomeBody from '../Components/BodyContent/HomeBody';
import ContactPage from '../Components/BodyContent/ContactPage';
import ProjectCard from '../Components/Projects/ProjectCard';
import Resume from '../Components/BodyContent/Resume';
import './App.css';

function App() {
  return (
    <div className="Portfolio">
      <NavHeader />
      <PortfolioHeader />
      <Router>
        <Routes>
          <Route exact path="/"><HomeBody /> <Route />
          <Route exact path="/projects"> <ProjectCard/> <Route />
          <Route exact path="/resume"> <Resume/> <Route />
          <Route exact path="/contact"> <ContactPage/> <Route />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
