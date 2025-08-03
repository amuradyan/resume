import * as React from 'react';

import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Note from './pages/Note';

function Homepage() {
  return (
    <div className="main-container">
      <AboutMe />
      <Projects />
      <Note slug="code-as-data" />
    </div>
  );
}

export default Homepage;
