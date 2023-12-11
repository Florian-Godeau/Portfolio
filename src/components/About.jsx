import Me from "../assets/Florian Godeau.jpeg";

export default function About() {

    return (
        <section className="about" id="About">
            <div className="about__overlay"></div>
            <h2>À propos de moi</h2>
            <div className="about__content">
                <div className="about__content__photo">
                    <img
                        className="about__content__photo__me"
                        src={Me}
                        alt="Florian Godeau"
                    />
                </div>
                <div className="about__content__text">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum vulputate urna, 
                        at bibendum sem tempus ut. Cras euismod mi et efficitur fringilla. 
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum vulputate urna, 
                        at bibendum sem tempus ut. Cras euismod mi et efficitur fringilla. 
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum vulputate urna, 
                        at bibendum sem tempus ut. Cras euismod mi et efficitur fringilla. 
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum vulputate urna, 
                        at bibendum sem tempus ut. Cras euismod mi et efficitur fringilla. 
                    </p>
                    <a href="vide" className="about__content__text__cvLink" target="_blank" rel="noreferrer">Mon CV</a>
                </div>
            </div>
        </section>
    )
}