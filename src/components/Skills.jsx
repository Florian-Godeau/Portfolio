import React from 'react';
import Flipskill from '../components/Flipskill'; // Assurez-vous que le chemin est correct
import logosData from '../datas/logoSkills.json';

function LogosList() {
  return (
    <section id='skills'>
        <h2>Compétences</h2>
        <div className="logos-list">
        {logosData.map((logo) => (
            <Flipskill key={logo.id} image={logo.image} text={logo.text} />
        ))}
        </div>
    </section>
  );
}

export default LogosList;