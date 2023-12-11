import Pixelart from "../assets/pixelartgodspace.png";

export default function Banner() {
    return (
       
        <div className="banner">
            <div className="banner__backgroundLayer layer1"></div>
            <div className="banner__backgroundLayer layer2"></div>
            <div className="banner__backgroundLayer layer3"></div>
            <div className="banner__content">
                <p className="banner__content__text">Bonjour, bienvenue sur mon portfolio</p>
                <img className="banner__content__pixelArt" src={Pixelart} alt="pixelart"></img>
            </div>
        </div>
    )
}    