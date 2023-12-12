import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

function FlipCard({ image, text }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div className="card-front" onClick={handleClick}>
                <img src={image} alt="Logo" className="card-image" />
            </div>

            <div className="card-back" onClick={handleClick}>
                <p className="card-text">{text}</p>
            </div>
        </ReactCardFlip>
    );
}

export default FlipCard;