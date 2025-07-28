function AboutMe(params) {
  return (
    <div className="aboutme-container">
      <div className="aboutme-left">
        <img
          src="/me.png"
          alt="Andranik"
          className="aboutme-photo"
        />
        <div className="aboutme-icons" >
          <a href="https://github.com/amuradyan" target="_blank" rel="noopener noreferrer" title="GitHub">
            <img src="./gh.png" alt="GitHub" />
          </a>
          <a href="#experience" title="Experience">
            <img src="./droid.png" alt="Experience" />
          </a>
          <a href="mailto:andranik@amuradyan.am" title="Email">
            <img src="./email.png" alt="Email" />
          </a>
        </div>
      </div>
      <div className="aboutme-right">
        <h2>Hello, I'm Andranik!</h2>
        <p>
          I enjoy programming /languages/ and write programs both commercially and for fun. When not at the computer I try to make things of wood and practice music.
        </p>
      </div>
    </div>
  )
}

export default AboutMe;
