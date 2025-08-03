import * as React from 'react';

import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Note from './pages/Note';
import Notes from './pages/Notes';

function App() {
  const [showNotes, setShowNotes] = React.useState(false);
  const [selectedNoteSlug, setSelectedNoteSlug] = React.useState(null);

  const handleNotesClick = () => {
    setShowNotes(!showNotes);
  };

  React.useEffect(() => {
    const handleNoteSelection = (event) => {
      setSelectedNoteSlug(event.detail);
    };

    window.addEventListener('selectNote', handleNoteSelection);
    return () => window.removeEventListener('selectNote', handleNoteSelection);
  }, []);

  return (
    <div className="main-container">
      <AboutMe onNotesClick={handleNotesClick} />
      <Projects />
      {showNotes && <Notes />}
      {selectedNoteSlug && <Note slug={selectedNoteSlug} />}
    </div>
  );
}

export default App;
