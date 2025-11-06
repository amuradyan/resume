import * as React from 'react';

import Homepage from './pages/homepage/Homepage';
import NoteView from './pages/notes/NoteView';
import Notes from './pages/notes/Notes';

function App() {
  const [showNotes, setShowNotes] = React.useState(false);
  const [selectedNoteSlug, setSelectedNoteSlug] = React.useState(null);
  const [theme, setTheme] = React.useState('personal');

  const handleNotesClick = () => {
    setShowNotes(true);
    setSelectedNoteSlug(null);
    window.history.pushState({ page: 'notes' }, '', '#notes');
  };

  const handleBackToHomepage = () => {
    setShowNotes(false);
    setSelectedNoteSlug(null);
    window.history.pushState({ page: 'homepage' }, '', '#');
  };

  const handleBackToNotes = () => {
    setSelectedNoteSlug(null);
    window.history.pushState({ page: 'notes' }, '', '#notes');
  };

  React.useEffect(() => {
    const handleNoteSelection = (event) => {
      setSelectedNoteSlug(event.detail);
      window.history.pushState({ page: 'note', slug: event.detail }, '', `#note/${event.detail}`);
    };

    window.addEventListener('selectNote', handleNoteSelection);
    return () => window.removeEventListener('selectNote', handleNoteSelection);
  }, []);

  React.useEffect(() => {
    document.body.className = `theme-${theme}`;
  }, [theme]);

  React.useEffect(() => {
    const handlePopState = (event) => {
      const state = event.state;

      if (!state || state.page === 'homepage') {
        setShowNotes(false);
        setSelectedNoteSlug(null);
      } else if (state.page === 'notes') {
        setShowNotes(true);
        setSelectedNoteSlug(null);
      } else if (state.page === 'note' && state.slug) {
        setShowNotes(true);
        setSelectedNoteSlug(state.slug);
      }
    };

    const initializeFromHash = () => {
      const hash = window.location.hash;
      if (hash === '#notes') {
        setShowNotes(true);
        setSelectedNoteSlug(null);
      } else if (hash.startsWith('#note/')) {
        const slug = hash.replace('#note/', '');
        setShowNotes(true);
        setSelectedNoteSlug(slug);
      } else {
        setShowNotes(false);
        setSelectedNoteSlug(null);
      }
    };

    initializeFromHash();
    window.addEventListener('popstate', handlePopState);

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className={`main-container ${showNotes || selectedNoteSlug ? 'notes' : 'homepage'} theme-${theme}`}>
      {selectedNoteSlug ? (
        <NoteView
          slug={selectedNoteSlug}
          onBackToNotes={handleBackToNotes}
          onBackToHomepage={handleBackToHomepage}
        />
      ) : showNotes ? (
        <Notes onBackToHomepage={handleBackToHomepage} />
      ) : (
        <Homepage onNotesClick={handleNotesClick} theme={theme} setTheme={setTheme} />
      )}
    </div>
  );
}

export default App;
