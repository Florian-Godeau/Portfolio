import React from 'react';
import Flipskill from '../components/Flipskill';
import logosData from '../datas/logoSkills.json';

function LogosList() {
  return (
    <div>
      {logosData.map((logo) => (
        <Flipskill key={logo.id} logo={logo.image} text={logo.text} />
      ))}
    </div>
  );
}

export default LogosList;