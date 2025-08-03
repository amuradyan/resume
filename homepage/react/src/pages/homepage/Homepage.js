import React from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';

function Homepage({ onNotesClick }) {
  return (
    <>
      <AboutMe onNotesClick={onNotesClick} />
      <Projects />
    </>
  );
}

export default Homepage;
