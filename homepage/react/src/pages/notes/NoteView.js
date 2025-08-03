import React from 'react';
import Note from './Note';
import ProfileHeader from '../../components/ProfileHeader';

function NoteView({ slug, onBackToNotes }) {
  return (
    <div className="note-view-layout">
      <div className="notes-top-bar">
        <ProfileHeader
          photoClassName="notes-photo"
          iconsClassName="notes-icons"
          onPhotoClick={onBackToNotes}
          onNotesClick={null}
          showCV={true}
        />
      </div>

      <div className="note-view-header">
        <button
          className="back-button"
          onClick={onBackToNotes}
          title="Back to Notes"
        >
          ← Back to Notes
        </button>
      </div>

      <div className="note-view-content">
        <Note slug={slug} />
      </div>
    </div>
  );
}

export default NoteView;
