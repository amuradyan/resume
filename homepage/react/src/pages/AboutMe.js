function AboutMe(params) {
  return (
    <div className="aboutme-root">
      <div className="aboutme-top">
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
      <div className="aboutme-bottom">
        <h2>Projects</h2>
      </div>
    </div>
  )
}

export default AboutMe;
