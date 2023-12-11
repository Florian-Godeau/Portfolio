import React from 'react';

function FlipCard({ image, text }) {
    return (
        <div className="card" data-aos="zoom-in">
            <img src={image} alt="Logo" className="card-image" />
            <p className="card-text">{text}</p>
        </div>
    );
}

export default FlipCard;