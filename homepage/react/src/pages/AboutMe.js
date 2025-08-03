function AboutMe({ onNotesClick }) {
  return (
    <div className="aboutme-container">
      <div className="aboutme-left">
        <div className="aboutme-photo-links">
          <img
            src="/me.png"
            alt="Andranik"
            className="aboutme-photo"
          />
          <div className="aboutme-icons">
            <a href="https://github.com/amuradyan" target="_blank" rel="noopener noreferrer" title="GitHub">
              <img src="/gh.png" alt="GitHub" />
            </a>
            <a href="#experience" title="Experience">
              <img src="/droid.png" alt="Experience" />
            </a>
            <a href="mailto:andranik@amuradyan.am" title="Email">
              <img src="/email.png" alt="Email" />
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); onNotesClick(); }} title="Notes" className="icon-button">
              <img src="/holocron.png" alt="Notes" />
            </a>
            <a href="https://թութ.հայ/@spectrum" target="_blank" rel="noopener noreferrer" title="Mastodon">
              <img src="/mastodon.png" alt="Mastodon" />
            </a>
          </div>
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
