import React from 'react';
import ProfileHeader from '../../components/ProfileHeader';

function AboutMe({ onNotesClick, theme }) {
  const personalContent = (
    <>
      <p>
        I enjoy programming and am particularly interested in programming languages and systems /currently into Lisps/. I write programs both for fun and commercially. Every now and then I'll take up teaching, volunteered at my uni for quite some time, might give a talk. Right now working actively on Lyre - a musical lisp.
      </p>

      <p>On a non-engineering note, I really enjoy cooking - particularly it's short feedback loop /unlike software/, and plan on moving to Argentina with my wife and our cat.</p>

      <p>
        You can read my notes by clicking the <a href="https://starwars.fandom.com/wiki/Holocron" target="_blank" rel="noopener noreferrer"><i>holocron</i></a>. If you decide to contact me, you can ping me at mastodon or email me at <a href="mailto:andranik@amuradyan.am"><i>andranik [at] amuradyan [dot] am</i></a>.
      </p>

      <p>
        P.S. Recently got my driving license, so we can talk traffic.
      </p>
    </>
  );

  const corporateContent = (
    <>
      <p>
        I have been programming for about two decades. During that time, I've worked on both legacy projects /including one I'm maintaining currently/ and designed modules and systems from scratch - solo, in teams, and leading them. While I've worked across various domains, my longest experience is in fintech. Language-wise I started with C/C++ but gradually moved to C#/Java, got into functional programming and moved to Scala, and now I'm big into Lisps /Clojure/.
      </p>

      <p>
        Through both my private practice and enterprise work, I've come to avoid deep forward planning on both scope and abstractions, and get to development right away. By starting with the <i>reasonably</i> simplest useful scenario and building just for that, then iteratively growing different aspects of the system, I've been able to deliver my best working systems. I prefer small bespoke tools over dependencies - something AI has made even more comfortable now.
      </p>

      <p>
        Beyond development, I've taught at universities, workshops, and training sessions, and I genuinely enjoy the process. Teaching has taught me that a well-structured syllabus is essential - it sets goals, provides a visible path forward, and offers a way to check if we've reached our objectives. Equally important are exercises, which help skills take root.
      </p>

      <p>
        If you think I can be of help, you can contact me at <a href="mailto:andranik@amuradyan.am"><i>andranik [at] amuradyan [dot] am</i></a>.
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
