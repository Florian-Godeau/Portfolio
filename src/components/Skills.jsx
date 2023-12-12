import React from 'react';
import Flipskill from '../components/Flipskill';
import logosData from '../datas/logoSkills.json';

function LogosList() {
  return (
    <section id='skills'>
        <h2>Compétences</h2>
        <div className="logos-list" data-aos="zoom-in">
        {logosData.map((logo) => (
            <Flipskill key={logo.id} image={logo.image} text={logo.text} />
        ))}
        </div>
    </section>
  );
}

export default LogosList;