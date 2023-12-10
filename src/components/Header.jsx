import Pixelart from "../assets/pixelartgodspace.png";

export default function Header() {
    return (
        <header class="header">
            <div class="layer1"></div>
            <div class="layer2"></div>
            <div class="layer3"></div>
            <img src={Pixelart} alt="pixelart"></img>
        </header>
    )
}