import React from 'react';
import ProfileHeader from '../../components/ProfileHeader';

function AboutMe({ onNotesClick }) {
  return (
    <div className="aboutme-container">
      <div className="aboutme-left">
        <div className="aboutme-photo-links">
          <ProfileHeader
            onNotesClick={onNotesClick}
          />
        </div>
      </div>
      <div className="aboutme-right">
        <h2>Hello, I'm Andranik!</h2>
        <p>
          I enjoy programming /languages/ and write programs both commercially and for fun. Every now and then I'll take up teaching, and when I do not do computer stuff, I try to make things of wood and practice music.
        </p>
      </div>
    </div>
  )
}

export default AboutMe;
