import React from "react";

const Skills = () => {
  return (
    <div
      className="bg-neutral-950 font-varela scroll-smooth scroll-m-24"
      id="Skills"
    >
      <div className="container mx-auto  px-5">
        {/* <p className=" text-4xl bg-clip-text text-transparent bg-gradient-to-b from-yellow-200 to-yellow-500 font-semibold">
          Skills
        </p> */}

        <div className="text-white py-10 text-2xl">
          <div className="flex md:flex-row flex-wrap flex-col gap-10  justify-start items-start md:justify-between">
            {/* Languages */}
            <div className="flex flex-col items-start space-y-10">
              <p className="bg-clip-text text-transparent bg-gradient-to-b from-yellow-200 to-yellow-500 font-semibold text-3xl">
                Languages
              </p>
              <div className="flex flex-col items-start space-y-10">
                <div className="flex justify-center space-x-10">
                  <div className="flex flex-col items-center">
                    <div className="p-4 border-2 border-white rounded-full">
                      <i className="devicon-html5-plain colored text-5xl"></i>
                    </div>
                    <span className="mt-2 text-[18px]">HTML5</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="p-4 border-2 border-white rounded-full">
                      <i className="devicon-css3-plain colored text-5xl"></i>
                    </div>
                    <span className="mt-2 text-[18px]">CSS3</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="p-4 border-2 border-white rounded-full">
                      <i className="devicon-javascript-plain colored text-5xl"></i>
                    </div>
                    <span className="mt-2 text-[18px]">JavaScript</span>
                  </div>
                </div>
                <div className="flex justify-start space-x-10">
                  <div className="flex flex-col items-center">
                    <div className="p-4 border-2 border-white rounded-full">
                      <i className="devicon-c-line colored text-5xl"></i>
                    </div>
                    <span className="mt-2 text-[18px]">C</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="p-4 border-2 border-white rounded-full">
                      <i className="devicon-java-plain colored text-5xl"></i>
                    </div>
                    <span className="mt-2 text-[18px]">Java</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="p-4 border-2 border-white rounded-full">
                      <i className="devicon-python-plain colored text-5xl"></i>
                    </div>
                    <span className="mt-2 text-[18px]">Python</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Frameworks */}
            <div className="flex flex-col items-start space-y-10">
              <p className="bg-clip-text text-transparent bg-gradient-to-b from-yellow-200 to-yellow-500 font-semibold text-3xl">
                Frameworks
              </p>
              <div className="flex flex-col items-start space-y-10">
                <div className="flex justify-center space-x-10">
                  <div className="flex flex-col items-center">
                    <div className="p-4 border-2 border-white rounded-full">
                      <i className="devicon-react-original colored text-5xl"></i>
                    </div>
                    <span className="mt-2 text-[18px]">React</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="p-4 border-2 border-white rounded-full">
                      <i className="devicon-nodejs-plain colored text-5xl"></i>
                    </div>
                    <span className="mt-2 text-[18px]">Node.js</span>
                  </div>
                </div>
                <div className="flex justify-center space-x-10">
                  <div className="flex flex-col items-center">
                    <div className="p-4 border-2 border-white rounded-full">
                      <i className="devicon-bootstrap-plain colored text-5xl"></i>
                    </div>
                    <span className="mt-2 text-[18px]">Bootstrap</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="p-4 border-2 border-white rounded-full">
                      <i className="devicon-tailwindcss-plain colored text-5xl"></i>
                    </div>
                    <span className="mt-2 text-[17px]">Tailwind CSS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Databases */}
            <div className="flex flex-col items-start space-y-10">
              <p className="bg-clip-text text-transparent bg-gradient-to-b from-yellow-200 to-yellow-500 font-semibold  text-3xl">
                Databases
              </p>
              <div className="flex flex-col items-start space-y-10">
                <div className="flex justify-center space-x-10">
                  <div className="flex flex-col items-center">
                    <div className="p-4 border-2 border-white rounded-full">
                      <i className="devicon-mongodb-plain colored text-5xl"></i>
                    </div>
                    <span className="mt-2 text-[18px]">MongoDB</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="p-4 border-2 border-white rounded-full">
                      <i className="devicon-mysql-plain-wordmark colored text-5xl"></i>
                    </div>
                    <span className="mt-2 text-[18px]">MySQL</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cloud */}
            <div className="flex flex-col items-start space-y-10">
              <p className="bg-clip-text text-transparent bg-gradient-to-b from-yellow-200 to-yellow-500 font-semibold  text-3xl">
                Cloud
              </p>
              <div className="flex flex-col items-start space-y-10">
                <div className="flex justify-center space-x-10">
                  <div className="flex flex-col items-center">
                    <div className="p-4 border-2 border-white rounded-full">
                      <i className="devicon-firebase-plain colored text-5xl"></i>
                    </div>
                    <span className="mt-2 text-[18px]">Firebase</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
