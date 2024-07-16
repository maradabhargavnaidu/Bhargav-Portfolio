import React from "react";

const About = () => {
  return (
    <div
      className="bg-neutral-950 text-gray-800 font-varela scroll-m-24 scroll-smooth"
      id="About"
    >
      <div className="container mx-auto text-4xl px-5">
        <p className="bg-clip-text text-transparent bg-gradient-to-b from-yellow-200 to-yellow-500 font-semibold">
          About
        </p>
        <div className="space-y-5 py-8 text-left">
          {/* <p className="text-green-700">Who is Bhargav ?</p> */}
          <p className="text-3xl text-left bg-clip-text text-transparent bg-white">
            I am a Full Stack Web Developer with experience as a Web Developer
            Intern at SkyGoal Innova Technologies Pvt Ltd. Currently, I am
            focused on mastering Data Structures and Algorithms, having solved
            over 600 problems on LeetCode with a contest rating of 1525.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
