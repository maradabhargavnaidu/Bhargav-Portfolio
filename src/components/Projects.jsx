import React from "react";
// import yaatra from "../assets/yaatra.png";
// import portal from "../assets/portal.png";
const Projects = () => {
  return (
    <div className="bg-neutral-950">
      <div
        className="container bg-neutral-950 mx-auto font-abc px-5 py-5 flex flex-col justify-center items-center scroll-m-24 scroll-smooth"
        id="projects"
      >
        <p className="text-center bg-clip-text text-transparent bg-gradient-to-b from-yellow-200 to-yellow-700 font-semibold md:text-5xl text-4xl">
          Projects
        </p>
        <div className="flex gap-5 py-10 flex-wrap justify-center">
          <div className=" bg-green-300 rounded-[15px]">
            {/* <img
            src={yaatra}
            alt="yaatra"
            width="400px"
            height="500px"
            className=" rounded-t-[15px]"
          /> */}
            <p className="text-md-5xl text-3xl text-violet-900 mt-3 px-5">
              Yaatra
            </p>
            <p className="text-black text-xl px-5">
              This is a Trip planning website
            </p>
            <div className="flex gap-5 py-4 px-5">
              <a
                href="https://github.com/maradabhargavnaidu/Yaatra"
                className="text-red-600 underline"
                target="_blank"
              >
                Github link
              </a>
              <a
                href="https://yaatra.onrender.com/"
                className="text-blue-700 underline"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
          <div className=" bg-green-300 rounded-[15px] max-w-[400px]">
            {/* <img
            src={portal}
            alt="yaatra"
            width="400px"
            height="500px"
            className=" rounded-t-[15px]"
          /> */}
            <p className="text-md-5xl text-3xl text-violet-900 mt-3 px-5">
              College Portal
            </p>
            <p className="text-black text-xl px-5">
              College admin can store the expenses and other data
            </p>
            <div className="flex gap-5 py-4 px-5">
              <a
                href="https://github.com/maradabhargavnaidu/vasavi-dashboard"
                className="text-red-600 underline"
                target="_blank"
              >
                Github link
              </a>
              <a
                href="https://cllgportal.netlify.app/"
                className="text-blue-700 underline"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
