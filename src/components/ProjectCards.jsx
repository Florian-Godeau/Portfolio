import React from 'react';

function ProjectCard({ title, picture }) {
    return (
        <div className="project-card" data-aos="zoom-in">
            <img src={picture} alt={title} className="project-card-image" />
            <div className="project-card-title">{title}</div>
        </div>
    );
}

export default ProjectCard;