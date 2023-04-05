import React from "react";

const Skills = () => {
  return (
    <div className="bg-black" id="#Skills">
      <div className="container mx-auto font-abc px-5">
        <p className="text-center text-yellow-400 md:text-5xl text-4xl">
          Skills
        </p>
        <div className="md:text-9xl text-white md:px-20 text-center flex flex-col space-y-10 py-10 text-7xl">
          <div className="space-x-10">
            <i class="devicon-html5-plain colored"></i>

            <i class="devicon-css3-plain colored"></i>

            <i class="devicon-javascript-plain colored"></i>
          </div>
          <div className="space-x-10">
            <i class="devicon-react-original colored"></i>

            <i class="devicon-nodejs-plain colored"></i>

            <i class="devicon-express-original colored"></i>
          </div>
          <div className="space-x-10">
            <i class="devicon-firebase-plain colored"></i>
            <i class="devicon-mongodb-plain colored"></i>

            <i class="devicon-github-original"></i>
          </div>
          <p className="text-center text-yellow-400 md:text-5xl text-4xl">
            Languages
          </p>
          <div className="space-x-10">
            <i class="devicon-java-plain colored"></i>

            <i class="devicon-python-plain colored"></i>

            <i class="devicon-c-line colored"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
