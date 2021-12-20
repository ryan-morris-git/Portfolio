import React, {useState, useEffect} from 'react';
import PortfolioHeader from '../Components/HeadersFooters/PortfolioHeader';
import NavHeader from '../Components/HeadersFooters/NavHeader';
import Footer from '../Components/HeadersFooters/Footer';
import HomeBody from '../Components/BodyContent/HomeBody';
import './App.css';

function App() {
  const [projects, getProjects] = useState([])

  useEffect(() => {
    fetch('/projects', {headers: {'Content-Type': 'application/json'}, mode: "no-cors"}).then(res => res.json()).then(data => {
      console.log(data.projects)
      getProjects(data.projects);
    }).catch((err) => console.log(err));
  }, []);

  return (
    <div className="Portfolio">
      <NavHeader />
      <PortfolioHeader />
      <HomeBody />
      <Footer />
      {projects.map(project => <p>{project.title}</p>)}
    </div>
  );
}

export default App;
