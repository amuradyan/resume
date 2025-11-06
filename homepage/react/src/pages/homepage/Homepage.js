import React from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';
import RandomMiraImages from '../../components/RandomMiraImages';
import ThemeToggle from '../../components/ThemeToggle';

function Homepage({ onNotesClick, theme, setTheme }) {
  return (
    <>
      <ThemeToggle currentTheme={theme} onThemeChange={setTheme} />
      <AboutMe onNotesClick={onNotesClick} theme={theme} />
      <Projects />
      <RandomMiraImages />
    </>
  );
}

export default Homepage;
