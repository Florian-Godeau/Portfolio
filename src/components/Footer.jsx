import PixelHeart from "../assets/pixel_heart.webp";

export default function Footer() {

    return (
        <footer className="footer">
            <p className="footer__textLeft">&copy; 2023 - Site développé avec</p>
            <img className="footer__pixelHeart" src={PixelHeart} alt="Pixel heart"></img>
            <p className="footer__textRight">par Florian Godeau</p>
        </footer>
    )
}