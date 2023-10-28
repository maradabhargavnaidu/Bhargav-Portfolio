import React from "react";

const Home = () => {
  return (
    <div
      className="bg-white text-gray-800 font-abc md:text-7xl text-5xl scroll-smooth pt-10"
      id="Home"
    >
      <div className="container mx-auto py-20 space-y-5 md:px-20 px-5 ">
        <p className="text-gray-800">G&apos;day,</p>
        <p>I&apos;m Bhargav</p>
        <p className="text-red-500">A Web Developer</p>
        <div className="md:text-5xl space-x-5 py-5 text-4xl">
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
        <a
          href="https://drive.google.com/file/d/13Oj4virqdkqCnWP7dp0bYazd2KrQqMiD/view?usp=sharing"
          className="text-4xl bg-red-500 py-2 px-5 rounded-lg text-white"
          target="_blank"
        >
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Home;
