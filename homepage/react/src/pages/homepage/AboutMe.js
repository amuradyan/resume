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
          I enjoy programming and am particularly interested in programming languages and systems /currently into Lisps/. I write programs both for fun and commercially. Every now and then I'll take up teaching, volunteered at my uni for quite some time, might give a talk. You can read my notes by clicking the <a href="https://starwars.fandom.com/wiki/Holocron" target="_blank" rel="noopener noreferrer"><i>holocron</i></a>.
        </p>

        <p>
          If you decide to contact me, you can ping me at mastodon or email me at <a href="mailto:andranik@amuradyan.am"><i>andranik [at] amuradyan [dot] am</i></a>.
        </p>

        <p>
          P.S. Recently got my driving license, so we can talk traffic.
        </p>
      </div>
    </div>
  )
}

export default AboutMe;
