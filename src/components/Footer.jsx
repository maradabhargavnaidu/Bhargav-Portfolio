import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white font-varela text-center">
      <div className="container mx-auto py-20 space-y-5">
        <p className="text-2xl ">
          Developed by{" "}
          <span className="cursor-pointer bg-clip-text text-transparent bg-gradient-to-b from-yellow-200 to-yellow-500">
            Marada Bhargav Naidu
          </span>
        </p>
        <p className="text-xl">Stay Connected</p>
        <div className="md:text-4xl space-x-5 text-2xl cursor-pointer bg-clip-text text-transparent bg-gradient-to-b from-yellow-200 to-yellow-500">
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
  );
};

export default Footer;
