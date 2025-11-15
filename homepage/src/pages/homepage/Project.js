function Project({ emoji, name, description, url }) {
  const handleClick = () => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <div className="project-item" onClick={handleClick} style={{ cursor: url ? 'pointer' : 'default' }}>
      <div className="project-emoji">{emoji}</div>
      <h3 className="project-name">{name}</h3>
      <p className="project-description">{description}</p>
    </div>
  );
}

export default Project;
