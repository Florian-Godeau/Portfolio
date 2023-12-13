import React from 'react';
import ProjectCard from './ProjectCards';
import projectsData from '../datas/projects.json';

function Work() {
  return (
    <section id='works'>
        <div className='works__overlay'></div>
        <h2>Mes projets</h2>
        <div className="work-list">
        {projectsData.map(project => (
            <ProjectCard key={project.id} project={project} />
        ))}
        </div>
    </section>
  );
}

export default Work;