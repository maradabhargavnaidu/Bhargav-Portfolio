import React from "react";

const About = () => {
  return (
    <div
      className="bg-white text-gray-800 font-abc scroll-m-24 scroll-smooth"
      id="About"
    >
      <div className="container mx-auto md:px-20  md:text-5xl text-4xl text-center px-5">
        <p className="text-blue-600">About</p>
        <div className="space-y-5 py-8 text-left">
          <p className="text-green-700">Who is Bhargav ?</p>
          <p className="md:text-5xl text-left text-4xl">
            I am a full-stack developer, currently pursuing my 3<sup>rd</sup>{" "}
            year of B.Tech at Malla Reddy Engineering College. I have a strong
            interest in coding.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
