import React from 'react';
import ProjectCards from './ProjectCards';
import projectsData from '../datas/projects.json';

function Work() {
  return (
    <section id='works'>
        <div className='works__overlay'></div>
        <h2>Mes projets</h2>
        <div className="work-list">
        {projectsData.map(project => (
            <ProjectCards key={project.id} title={project.title} picture={project.picture} />
        ))}
        </div>
    </section>
  );
}

export default Work;