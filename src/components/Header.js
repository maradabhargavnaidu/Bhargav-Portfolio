import React from "react";

const Header = () => {
  return (
    <div className="max-w-6xl text-left p-4 ">
      <p className="text-2xl">
        I'm <span className="text-white">Bhargav</span>
      </p>
      <br />
      <p className="text-2xl text-white">
        DevOps Engineer | Full Stack Developer
      </p>
      <br />
      <p className="text-xl">
        I'm a <span className="text-white">DevOps Engineer</span> at{" "}
        <span className="text-white">cognizant</span>, currently undergoing
        training in various{" "}
        <span className="text-white">DevOps tools and practices</span>. Prior to
        this, I gained hands-on experience building{" "}
        <span className="text-white">full-stack web applications </span>
        in startups using the <span className="text-white">MERN stack</span>,
        working with{" "}
        <span className="text-white">React, Node.js, Express, and MongoDB</span>{" "}
        to deliver scalable and efficient solutions.
      </p>
      <div className="flex gap-7 py-16 text-md font-semibold">
        <a
          href="https://github.com/maradabhargavnaidu"
          target="_blank"
          className="cursor-pointer border-2 p-1 border-gray-400 hover:border-white hover:text-white"
        >
          GitHub
        </a>
        <a
          href="https://leetcode.com/u/BHASAH1829/"
          target="_blank"
          className="cursor-pointer border-2 p-1 border-gray-400 hover:border-white hover:text-white"
        >
          Leetcode
        </a>
        <a
          href="https://www.linkedin.com/in/bhargav-naidu/"
          target="_blank"
          className="cursor-pointer border-2 p-1 border-gray-400 hover:border-white hover:text-white"
        >
          LinkedIn
        </a>
        <a
          href="https://drive.google.com/file/d/1KjDe40krN4PKwtFlEaXva7_jREIhZfBY/view?usp=drive_link"
          target="_blank"
          className="cursor-pointer border-2 p-1 border-gray-400 hover:border-white hover:text-white"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Header;
