import React, { useState, useEffect } from 'react';
import ProfileHeader from '../../components/ProfileHeader';

function Notes({ onBackToHomepage }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('/posts/toc.json')
      .then(response => response.json())
      .then(data => {
        const notesArray = Array.isArray(data) ? data : [data];
        setNotes(notesArray);
      })
      .catch(error => console.error('Error loading notes:', error));
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="notes-layout">
      <div className="notes-top-bar">
        <ProfileHeader
          photoClassName="notes-photo"
          iconsClassName="notes-icons"
          onPhotoClick={onBackToHomepage}
          onNotesClick={null}
          showCV={true}
        />
      </div>

      <div className="notes-content">
        <div className="notes-header">
          <h1>Notes</h1>
        </div>
        <div className="notes-list">
          {notes.map((note, index) => (
            <div key={index} className="note-item">
              <h3 className="note-title">
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('selectNote', { detail: note.link }))}
                  className="note-title-button"
                >
                  {note.title}
                </button>
              </h3>
              <p className="note-date">{formatDate(note.date)}</p>
              <p className="note-description">{note.description}</p>
              <div className="note-tags">
                {note.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="note-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Notes;
