import React from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';
import RandomMiraImages from '../../components/RandomMiraImages';

function Homepage({ onNotesClick }) {
  return (
    <>
      <AboutMe onNotesClick={onNotesClick} />
      <Projects />
      <RandomMiraImages />
    </>
  );
}

export default Homepage;
