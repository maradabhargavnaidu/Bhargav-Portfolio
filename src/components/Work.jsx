import React from "react";

const Work = () => {
  return (
    <div
      className="bg-neutral-950 text-gray-800 font-varela scroll-m-24 scroll-smooth"
      id="Work"
    >
      <div className="container mx-auto  text-4xl  px-5">
        <p className="bg-clip-text text-transparent bg-gradient-to-b from-yellow-200 to-yellow-700 font-semibold">
          Work
        </p>
        <div className="space-y-5 py-8 text-left">
          <p className="relative z-10 text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-varela  font-semibold">
            SkyGoal Innova Technologies Pvt Ltd
          </p>
          <div>
            <p className="relative z-10 text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-varela  font-normal">
              Web Developer Intern
            </p>
            <p className="relative z-10 text-xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-varela  font-extralight">
              Mar.2023 - Jun.2023
            </p>
          </div>

          <ul className="text-left text-xl list-disc marker:text-white pl-5">
            <li className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
              Sky Goal is an India-based Global Edtech platform that helps
              students seeking admissions to institutions simply.
            </li>
            <li className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
              Built Sky Goal Ambassador website in React framework from Figma
              design. Optimized API calls using Axios and enhanced user
              experience with Bootstrap styling.
            </li>
            <li className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
              Implemented React best practices for optimal performance, and
              built the Sky Goal Ambassador Admin Panel using the React
              framework and TailwindCSS for styling and designing components.
            </li>
            <li className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
              Built REST APIs in Node.js and MongoDB for seamless integration
              within the project.
            </li>
            <li className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
              I participated in identifying and fixing bugs in production.
              Additionally, I ensured code quality and consistency.
            </li>
            <li className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
              I developed my problem-solving skills, learned Firebase, and
              significantly enhanced my skills in developing the frontend part
              of websites through continuous learning and practical experience.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Work;
