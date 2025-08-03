import Project from './Project';

function Projects() {
  const projects = [
    {
      emoji: "⚙️",
      name: "kogu \\ コグ",
      description: "Java compiler plugin, introducing exhaustive matching over enums",
      url: "https://github.com/dekanat/kogu"
    },
    {
      emoji: "🎹",
      name: "qibord",
      description: "Advanced keyboard interface and input management system",
      url: "https://github.com/haniravi/nito/blob/master/qibord"
    },
    {
      emoji: "📞",
      name: "darling",
      description: "A fluent GMail API implemented in Scala",
      url: "https://github.com/dekanat/darling"
    },
    {
      emoji: "🪈",
      name: "shvi",
      description: "Shvi is a tool in JS to write music in Lisp notation",
      url: "https://github.com/amuradyan/shvi/tree/master/shvi"
    },
    {
      emoji: "🌊",
      name: "sea",
      description: "Lisp-like language implementation: musings in Elixir",
      url: "https://github.com/amuradyan/sea"
    }
  ];

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Project
            key={index}
            emoji={project.emoji}
            name={project.name}
            description={project.description}
            url={project.url}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
