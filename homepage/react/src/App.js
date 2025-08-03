import * as React from 'react';

import Homepage from './pages/homepage/Homepage';
import Note from './pages/notes/Note';
import Notes from './pages/notes/Notes';

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
      <Homepage onNotesClick={handleNotesClick} />
      {showNotes && <Notes />}
      {selectedNoteSlug && <Note slug={selectedNoteSlug} />}
    </div>
  );
}

export default App;
