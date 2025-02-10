import React from 'react';

function ProjectsPage() {
  const projects = [
    {
      title: "Project 1",
      description: "A description of project 1.",
      link: "https://github.com/your-username/project1"
    },
    {
      title: "Project 2",
      description: "A description of project 2.",
      link: "https://github.com/your-username/project2"
    },
    // Add more projects here...
  ];

  return (
    <section>
      <h1>My Projects</h1>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectsPage;
