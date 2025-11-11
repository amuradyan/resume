import React from 'react';
import ProfileHeader from '../../components/ProfileHeader';

function AboutMe({ onNotesClick, theme }) {
  const personalContent = (
    <>
      <p>
        I enjoy programming and am particularly interested in programming languages and systems /currently into Lisps/. I write programs both for fun and commercially. Every now and then I'll take up teaching, volunteered at my uni for quite some time, might give a talk. You can read my notes by clicking the <a href="https://starwars.fandom.com/wiki/Holocron" target="_blank" rel="noopener noreferrer"><i>holocron</i></a>.
      </p>

      <p>
        If you decide to contact me, you can ping me at mastodon or email me at <a href="mailto:andranik@amuradyan.am"><i>andranik [at] amuradyan [dot] am</i></a>.
      </p>

      <p>
        P.S. Recently got my driving license, so we can talk traffic.
      </p>
    </>
  );

  const corporateContent = (
    <>
      <p>
        Software engineer with 18+ years of experience across the full spectrum of software development, from low-level C/C++ to modern functional programming with Scala. Currently supporting recommendation engines at Grid Dynamics while maintaining a strong focus on code quality, testing practices, and team collaboration.
      </p>

      <p>
        Core expertise in JVM ecosystem (Scala, Java), functional programming (Cats, Akka), and building robust backend systems. Led teams, mentored developers, and established engineering practices that balance technical excellence with pragmatic delivery. Equally comfortable diving deep into complex domains or teaching high schoolers to build their first programming language.
      </p>

      <p>
        Available for consulting, contracting, or full-time roles. Contact me at <a href="mailto:andranik@amuradyan.am"><i>andranik [at] amuradyan [dot] am</i></a>.
      </p>
    </>
  );

  return (
    <div className="aboutme-container">
      <div className="aboutme-left">
        <div className="aboutme-photo-links">
          <ProfileHeader
            onNotesClick={onNotesClick}
            theme={theme}
          />
        </div>
      </div>
      <div className="aboutme-right">
        <h2>Hello, I'm Andranik!</h2>

        {theme === 'charcoal' ? corporateContent : personalContent}
      </div>
    </div>
  )
}

export default AboutMe;
