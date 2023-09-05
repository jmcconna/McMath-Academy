import React from 'react';
import profilePic from '../../assets/images/mrsmcmath.jpg'

function About() {
  return (
    <section className="my-5">
      <div className="profilePic">
        <div className="profile-img">
        <img className="profilePic" src={profilePic} alt="Laura McConnaughey Profile"></img>
      </div>
      </div>
        <p>
        Laura McConnaughey is an award-winning mathematics educator, with over a decade teaching students at the #1 high school in the US, Thomas Jefferson High School for Science and Technology. Laura has a dual PhD in Mathetmatics Education and in Learning Technologies. 
        </p>
        <p>
        McMath Academy offers secondary mathematics classes online for high school courses: Pre-Algebra through Calculus.
        </p>
    </section>
  );
}

export default About;
