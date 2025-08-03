import * as React from 'react';

import Homepage from './pages/homepage/Homepage';
import NoteView from './pages/notes/NoteView';
import Notes from './pages/notes/Notes';

function App() {
  const [showNotes, setShowNotes] = React.useState(false);
  const [selectedNoteSlug, setSelectedNoteSlug] = React.useState(null);

  const handleNotesClick = () => {
    setShowNotes(true);
    setSelectedNoteSlug(null);
  };

  const handleBackToHomepage = () => {
    setShowNotes(false);
    setSelectedNoteSlug(null);
  };

  const handleBackToNotes = () => {
    setSelectedNoteSlug(null); // Go back to notes list
  };

  React.useEffect(() => {
    const handleNoteSelection = (event) => {
      setSelectedNoteSlug(event.detail);
    };

    window.addEventListener('selectNote', handleNoteSelection);
    return () => window.removeEventListener('selectNote', handleNoteSelection);
  }, []);

  return (
    <div className={`main-container ${showNotes || selectedNoteSlug ? 'notes' : 'homepage'}`}>
      {selectedNoteSlug ? (
        <NoteView slug={selectedNoteSlug} onBackToNotes={handleBackToNotes} />
      ) : showNotes ? (
        <Notes onBackToHomepage={handleBackToHomepage} />
      ) : (
        <Homepage onNotesClick={handleNotesClick} />
      )}
    </div>
  );
}

export default App;
