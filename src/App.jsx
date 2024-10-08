import React from 'react';
import { useState } from 'react';
import './App.css';
import Header from './header/header.jsx';
import About from './about/about.jsx';
import Project from './project/project.jsx';
import Timeline from './timeline/timeline.jsx';
import Contact from './contact/contact.jsx';

function App() {
  return (
    <div className="App">
        <Header />
      <main>
        <About />
        <Project />
        <Timeline />
        <Contact />
      </main>
    </div>
  );
}

export default App;
