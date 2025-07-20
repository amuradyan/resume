function AboutMe(params) {
  return (
    <div className="aboutme-container">
      <div className="aboutme-left">
        {/* Replace the src with your actual photo path */}
        <img
          src="/me.png"
          alt="Andranik"
          className="aboutme-photo"
        />
      </div>
      <div className="aboutme-right">
        <h2>Hello, I'm Andranik!</h2>
        {/* All other text is hidden for now */}
      </div>
    </div>
  )
}

export default AboutMe;
