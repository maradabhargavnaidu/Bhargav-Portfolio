import React from "react";

const Skills = () => {
  return (
    <div
      className="bg-neutral-950 font-varela scroll-smooth scroll-m-24"
      id="Skills"
    >
      <div className="container mx-auto px-5">
        <div className="text-white py-10 text-2xl">
          <div className="flex flex-wrap gap-10 justify-start items-start">
            <p className="bg-clip-text text-transparent bg-gradient-to-b from-yellow-200 to-yellow-500 font-semibold text-3xl w-full">
              Skills
            </p>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-white rounded-md">
                <i className="devicon-html5-plain colored text-6xl"></i>
              </div>
              <span className="mt-2 text-[20px]">HTML5</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-white rounded-md">
                <i className="devicon-css3-plain colored text-6xl"></i>
              </div>
              <span className="mt-2 text-[20px]">CSS3</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-white rounded-md">
                <i className="devicon-javascript-plain colored text-6xl"></i>
              </div>
              <span className="mt-2 text-[20px]">JavaScript</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-white rounded-md">
                <i className="devicon-c-line colored text-6xl"></i>
              </div>
              <span className="mt-2 text-[20px]">C</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-white rounded-md">
                <i className="devicon-java-plain colored text-6xl"></i>
              </div>
              <span className="mt-2 text-[20px]">Java</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-white rounded-md">
                <i className="devicon-python-plain colored text-6xl"></i>
              </div>
              <span className="mt-2 text-[20px]">Python</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-white rounded-md">
                <i className="devicon-react-original colored text-6xl"></i>
              </div>
              <span className="mt-2 text-[20px]">React</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-white rounded-md">
                <i className="devicon-nodejs-plain colored text-6xl"></i>
              </div>
              <span className="mt-2 text-[20px]">Node.js</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4  bg-white rounded-md">
                <i className="devicon-bootstrap-plain colored text-6xl"></i>
              </div>
              <span className="mt-2 text-[20px]">Bootstrap</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 border-2 bg-white rounded-md">
                <i className="devicon-tailwindcss-plain colored text-6xl"></i>
              </div>
              <span className="mt-2 text-[20px]">Tailwind CSS</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-white border-white rounded-md">
                <i className="devicon-mongodb-plain colored text-6xl"></i>
              </div>
              <span className="mt-2 text-[20px]">MongoDB</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-white border-white rounded-md">
                <i className="devicon-mysql-plain-wordmark colored text-6xl"></i>
              </div>
              <span className="mt-2 text-[20px]">MySQL</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4  bg-gray-100 border-white rounded-md">
                <i className="devicon-firebase-plain colored text-6xl"></i>
              </div>
              <span className="mt-2 text-[20px]">Firebase</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
