import React from 'react';
import mathPic from "../../assets/images/math.jpg";

function Projects() {



  return (
    <div>

      <div className="project" key="Pre-Algebra">
        <img
          src={mathPic}
          alt="Pre-Algebra"
          className="project-bg"
        />
        <div className="project-text">
          <h3>
          <a href="#">Pre-Algebra</a>
          </h3>
          <p>'Solidify your foundation before beginning algebra'</p>
        </div>
      </div>

      <div className="project" key="Algebra 1">
        <img
          src={mathPic}
          alt="Algebra 1"
          className="project-bg"
        />
        <div className="project-text">
          <h3>
            <a href="https://jtruehitt.github.io/Do_You_Even_Trivia_Bro/">Algebra 1</a>{' '}
            
          </h3>
          <p>Understanding variables and basic functions'</p>
        </div>
      </div>

      <div className="project" key="Geometry">
        <img
          src={mathPic}
          alt="Geometry"
          className="project-bg"
        />
        <div className="project-text">
          <h3>
            <a href="https://jmcconna.github.io/Weather-Dashboard/">Geometry</a>{' '}
            
          </h3>
          <p>'Points, pictures, and proofs'</p>
        </div>
      </div>

      <div className="project" key="Algebra 2 and Trigonometry">
        <img
          src={mathPic}
          alt="Algebra 2 and Trigonometry"
          className="project-bg"
        />
        <div className="project-text">
          <h3>
            <a href="https://github.com/jmcconna/SVG-Logo-Maker">Algebra 2 and Trigonometry</a>{' '}
           
          </h3>
          <p>More complicated functions with more variables'</p>
        </div>
      </div>

      <div className="project" key="Pre-Calculus">
        <img
          src={mathPic}
          alt="Pre-Calculus"
          className="project-bg"
        />
        <div className="project-text">
          <h3>
            <a href="https://github.com/jmcconna/Social-Network-API">Pre-Calculus</a>{' '}
            
          </h3>
          <p>'Limits and stuff'</p>
        </div>
      </div>

      <div className="project" key="Calculus">
        <img
          src={mathPic}
          alt="Calculus"
          className="project-bg"
        />
        <div className="project-text">
          <h3>
            <a href="https://evening-hollows-76995-cbe2d520bede.herokuapp.com/">Calculus</a>{' '}
            
          </h3>
          <p>'Integrals and Derivatives'</p>
        </div>
      </div>
     
    </div>
  );
}

export default Projects;
