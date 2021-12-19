import React, {useState, useEffect} from 'react';
import PortfolioHeader from '../Components/HeadersFooters/PortfolioHeader';
import NavHeader from '../Components/HeadersFooters/NavHeader';
import Footer from '../Components/HeadersFooters/Footer';
import HomeBody from '../Components/BodyContent/HomeBody';
import './App.css';

function App() {
  const [projects, getProjects] = useState([])

  useEffect(() => {
    fetch('/projects').then(res => res.json()).then(data => {
      getProjects(data);
    });
  }, []);

  return (
    <div className="Portfolio">
      <NavHeader />
      <PortfolioHeader />
      <HomeBody />
      <Footer />
      <p>Projects are: {projects}</p>
    </div>
  );
}

export default App;
