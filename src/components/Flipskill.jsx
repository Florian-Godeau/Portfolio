import React from 'react';

function FlipCard({ image, text }) {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={image} alt="Logo" />
                </div>
                <div className="flip-card-back">
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
}

export default FlipCard;