import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './components/nav.jsx';
import Wrap from './components/wrap.jsx';
import Project from './components/project.jsx';
import Contact from './components/contact.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <Nav/>
  <Project/>
  <Contact/>
  <Wrap/>
  </div>
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// <div>
//     <Nav/>
//     <Head/>
//     <Feature/>
//     <Statistic/>
//     <FAQ/>
//     <Footer/>
// </div>
//     );