import React, { useState, useEffect } from 'react';

export default function Nav() {
    const [showNav, setShowNav] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) { // Ajustez ce nombre si nécessaire
            setShowNav(true);
        } else {
            setShowNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`nav ${showNav ? 'show' : ''}`}>
            {<div className="nav__content">
                <p className="nav__content__name">Godeau Florian</p>
                <ul className="nav__content__list">
                    <li className="nav__content__list"><a href="#About">À propos</a></li>
                    <li className="nav__content__list"><a href="#skills">Compétences</a></li>
                    <li className="nav__content__list"><a href="#works">Mes projets</a></li>
                    <li className="nav__content__list"><a href="#contact">Contact</a></li>
                </ul>
            </div>}
        </nav>
    );
}
