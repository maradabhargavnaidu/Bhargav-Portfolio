import React from "react";

const About = () => {
  return (
    <div
      className="bg-white text-black font-abc scroll-m-10 scroll-smooth"
      id="About"
    >
      <div className="container mx-auto md:px-20  md:text-5xl text-4xl text-center px-5">
        <p className="text-yellow-400">About</p>
        <div className="space-y-5 py-20 text-left">
          <p className="text-green-400">Who is Bhargav ?</p>
          <p className="md:text-5xl text-left text-4xl">
            A full stack Developer, Currently pursuing B.Tech 2nd year in Malla
            Reddy Engineering College. I am very much intrested in coding.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
