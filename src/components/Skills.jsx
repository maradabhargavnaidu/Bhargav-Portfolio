import React from "react";

const Skills = () => {
  return (
    <div
      className="bg-neutral-950 font-varela scroll-smooth scroll-m-24"
      id="Skills"
    >
      <div className="container mx-auto font-abc px-5">
        <p className="text-center text-blue-600 md:text-5xl text-4xl bg-clip-text text-transparent bg-gradient-to-b from-yellow-200 to-yellow-700 font-semibold">
          Skills
        </p>
        <div className="md:text-9xl text-white md:px-20 text-center flex flex-col space-y-10 py-10 text-7xl">
          <div className="space-x-10">
            <i className="devicon-html5-plain colored"></i>

            <i className="devicon-css3-plain colored"></i>

            <i className="devicon-javascript-plain colored"></i>
          </div>
          <div className="space-x-10">
            <i className="devicon-react-original colored"></i>

            <i className="devicon-nodejs-plain colored"></i>

            <i className="devicon-express-original colored"></i>
          </div>
          <div className="space-x-10">
            <i className="devicon-firebase-plain colored"></i>
            <i className="devicon-mongodb-plain colored"></i>

            <i className="devicon-github-original colored"></i>
          </div>
          <div className="space-x-10">
            <i className="devicon-mysql-plain-wordmark colored"></i>
            <i className="devicon-redux-original colored"></i>
            <i className="devicon-tailwindcss-plain colored"></i>
          </div>
          <div>
            <i className="devicon-bootstrap-plain colored"></i>
          </div>
          <p className="text-center bg-clip-text text-transparent bg-gradient-to-b from-yellow-200 to-yellow-700 font-semibold md:text-5xl text-4xl">
            Languages
          </p>
          <div className="space-x-10">
            <i className="devicon-java-plain colored"></i>

            <i className="devicon-python-plain colored"></i>

            <i className="devicon-c-line colored"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
