import React from 'react';

function ProfileHeader({
  photoClassName = "aboutme-photo",
  iconsClassName = "aboutme-icons",
  onPhotoClick,
  onNotesClick,
  showCV = true
}) {
  return (
    <>
      <img
        src="/me.png"
        alt="Andranik"
        className={`${photoClassName} ${onPhotoClick ? 'clickable' : ''}`}
        onClick={onPhotoClick}
        title={onPhotoClick ? "Back to Homepage" : undefined}
      />
      <div className={iconsClassName}>
        {showCV && (
          <a href="/RESUME.pdf" target="_blank" rel="noopener noreferrer" title="CV">
            <img src="/cv.png" alt="CV" />
          </a>
        )}
        <a href="https://github.com/amuradyan" target="_blank" rel="noopener noreferrer" title="GitHub">
          <img src="/gh.png" alt="GitHub" />
        </a>
        <a href="mailto:andranik@amuradyan.am" title="Email">
          <img src="/email.png" alt="Email" />
        </a>
        <button
          type="button"
          onClick={() => {
            if (onNotesClick) onNotesClick();
          }}
          title={onNotesClick ? "Notes" : "Back to Notes"}
          className="icon-button"
        >
          <img src="/holocron.png" alt="Notes" />
        </button>
        <a href="https://թութ.հայ/@spectrum" target="_blank" rel="noopener noreferrer" title="Mastodon">
          <img src="/mastodon.png" alt="Mastodon" />
        </a>
      </div>
    </>
  );
}

export default ProfileHeader;
