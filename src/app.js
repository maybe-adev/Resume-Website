import React, { useState, useEffect } from 'react';
import Loader from './loader';
import Nav from "./components/nav.jsx";
import Wrap from "./components/wrap.jsx";
import Project from "./components/project.jsx";
import Contact from "./components/contact.jsx";

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setLoading(false);
      }, 500); // Match this duration with the CSS transition duration
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      <Loader loading={!fadeOut} />
      <div className={`app-content ${loading ? 'hidden' : ''}`}>
        <Nav/>
        <Wrap/>
        <Project/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;

