import React, { useState } from 'react';
import ReactModal from 'react-modal';

function ProjectCard({ project }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = (event) => {
        console.log("Ouverture de la modal");
        event.stopPropagation(); // Empêcher la propagation de l'événement
        setModalIsOpen(true);
    };

    const closeModal = (event) => {
        console.log("Fermeture de la modal");
        event.stopPropagation(); // Empêcher la propagation de l'événement
        setModalIsOpen(false);
    };

    return (
        <div className="project-card" onClick={openModal} data-aos="zoom-in">
            <img src={project.picture} alt={project.title} className="project-card-image" />
            <div className="project-card-title">{project.title}</div>
            
            <ReactModal 
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="project-modal"
                overlayClassName="project-modal-overlay"
            >
                <i onClick={closeModal} className="fa-solid fa-xmark modal-close-button" aria-hidden="true"></i>
                <div className='modalContent'>
                    <img src={project.picture} alt={project.title} className="modalContent__image" />
                    <h3 className='modalContent__title'>{project.title}</h3>
                    <p className='modalContent__summary'>{project.description}</p>
                    <p className='modalContent__info'>{project.info}</p>
                    <div className='modalContent__techList'>
                        {project.technologies.map((tech, index) => (
                            <span className='modalContent__techList__name' key={index}>{tech}</span>
                        ))}
                    </div>
                    <div className='modalContent__links'>
                        <a className='modalContent__links__icon' href={project.page} target="_blank" rel="noopener noreferrer" title='Visiter le site'><i class="fas fa-external-link-square-alt"></i></a>
                        <a className='modalContent__links__icon' href={project.code} target="_blank" rel="noopener noreferrer" title='Voir le code sur GitHub'><i class="fab fa-github-square"></i></a>
                    </div>
                </div>
            </ReactModal>
        </div>
    );
}

export default ProjectCard;