import React from 'react';
import profilePic from '../../assets/images/mrsmcmath.jpg'

function About() {
  return (
    <section className="my-5">
      <div>
        <div className="flex-row">
          <img className="profilePic" src={profilePic} alt="Laura McConnaughey Profile"></img>
          <p>
          Laura McConnaughey is an award-winning mathematics educator, with over a decade teaching students at the #1 high school in the US, Thomas Jefferson High School for Science and Technology. Laura has a dual PhD in Mathetmatics Education and in Learning Technologies.
        </p>
        <p>
          McMath Academy offers secondary mathematics classes online for high school courses: Pre-Algebra through Calculus.
        </p>
        </div>
      
      </div>

    </section>
  );
}

export default About;
