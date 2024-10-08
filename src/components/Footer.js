import React from "react";
import Leetcode from "../images/leetcode.png";
const Footer = () => {
  return (
    <div className="bg-white scroll-smooth" id="Home">
      <div className="relative isolate px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-52"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="font-semibold   text-center   mt-10">
          <div className="container mx-auto py-20 space-y-5">
            <p className="text-2xl ">
              Developed by{" "}
              <span className="cursor-pointer inline bg-gradient-to-r from-indigo-700 via-sky-600 to-indigo-700 bg-clip-text font-display tracking-tight text-transparent ">
                Marada Bhargav Naidu
              </span>
            </p>
            <p className="text-xl">Stay Connected</p>
            <div className="md:text-4xl space-x-5 text-2xl cursor-pointer  bg-gradient-to-r from-indigo-600 via-indigo-600 to-indigo-400 bg-clip-text font-display tracking-tight text-transparent">
              <a href="https://github.com/maradabhargavnaidu">
                <i className="devicon-github-original"></i>
              </a>
              <a href="https://www.linkedin.com/in/bhargav-naidu">
                <i className="devicon-linkedin-plain"></i>
              </a>
              <a href="https://twitter.com/maradabhargav">
                <i className="devicon-twitter-original"></i>
              </a>
            </div>
            <p>maradabhargavnaidu &copy; 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
