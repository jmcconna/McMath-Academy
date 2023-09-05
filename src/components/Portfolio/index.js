import React, { useState } from 'react';
import Projects from "../Projects";

function Portfolio() {

  
  const [projects] = useState([
    {
      name: 'Pre-Algebra',
      description: 'Solidify your foundation before beginning algebra',
      link: "https://fathomless-brook-62747-69ac2fbd8802.herokuapp.com/",
      repo: "https://github.com/jmcconna/Daily-Dungeon"
    },
    {
      name: 'Algebra 1', 
      description: 'Understanding variables and basic functions',
      link: "https://jtruehitt.github.io/Do_You_Even_Trivia_Bro/",
      repo: "https://github.com/JTruehitt/Do_You_Even_Trivia_Bro"
    },
    {
      name: 'Geometry',
      description: 'Points, pictures, and proofs',
      link: "https://jmcconna.github.io/Weather-Dashboard/",
      repo: "https://github.com/jmcconna/Weather-Dashboard"
    },
    {
      name: 'Algebra 2 and Trigonometry',
      description: 'More complicated functions with more variables',
      link: "https://github.com/jmcconna/SVG-Logo-Maker",
      repo: "https://github.com/jmcconna/SVG-Logo-Maker"
    },
    {
      name: 'Pre-Calculus',
      description: 'Limits and stuff',
      link: "https://github.com/jmcconna/Social-Network-API",
      repo: "https://github.com/jmcconna/Social-Network-API"
    },
    {
      name: 'Calculus',
      description: 'Integrals and Derivatives',
      link: "https://github.com/jmcconna/Text-Editor-PWA",
      repo: "https://github.com/jmcconna/Text-Editor-PWA"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
          <Projects/>
      </div>
    </div>
  );
};

export default Portfolio;
