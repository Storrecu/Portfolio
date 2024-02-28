import React from 'react';
import '../styles/layout/Landing.scss';

const Landing = ({ showLanding }) => {
  console.log(showLanding);
  return (
    <div className={`landing ${showLanding ? '' : 'hidden'}`}>
      {console.log(showLanding)}
      <h1 className="landing-title">Silvia Torres</h1>
    </div>
  );
};

export default Landing;
