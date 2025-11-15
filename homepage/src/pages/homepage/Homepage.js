import React from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Experiences from './Experiences';
import RandomMiraImages from '../../components/RandomMiraImages';
import ThemeToggle from '../../components/ThemeToggle';

function Homepage({ onNotesClick, theme, setTheme }) {
  return (
    <>
      <ThemeToggle currentTheme={theme} onThemeChange={setTheme} />
      <AboutMe onNotesClick={onNotesClick} theme={theme} />
      {theme === 'charcoal' ? <Experiences /> : <Projects />}
      <RandomMiraImages />
    </>
  );
}

export default Homepage;
