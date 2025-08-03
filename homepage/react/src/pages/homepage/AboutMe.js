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
          I enjoy programming and am more interested in programming languages and systems overall. I write programs both for fun and commercially. Every now and then I'll take up teaching, and when I do not do computer stuff, I try to make things of wood, work out, cook and what not...

        </p>
        <p>
          Recently got my driving license, so we can talk cars and traffic.
        </p>
      </div>
    </div>
  )
}

export default AboutMe;
