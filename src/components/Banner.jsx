import React from 'react';
import Typewriter from 'typewriter-effect';
import Pixelart from "../assets/pixelartgodspace.png";

export default function Banner() {
    return (
        <div className="banner">
            <div className="banner__backgroundLayer layer1"></div>
            <div className="banner__backgroundLayer layer2"></div>
            <div className="banner__backgroundLayer layer3"></div>
            <div className="banner__content">
                <h1 className="banner__content__text">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString('Bonjour, bienvenue dans l\'espace !')
                                .pauseFor(1000)
                                .deleteChars(15) // Supprime "l'espace !"
                                .typeString('sur mon portfolio !')
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString('N\'hésitez pas à éxplorer mes projets !')
                                .pauseFor(1000)
                                .start();
                            }}
                        options={{
                            loop: true,
                        }}
                    />
                </h1>
                <img className="banner__content__pixelArt" src={Pixelart} alt="pixelart" />
            </div>
        </div>
    );
}