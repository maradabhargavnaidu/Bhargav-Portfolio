import React from "react";

const Footer = () => {
  return (
    <div className="bg-neutral-950 text-white font-varela text-center">
      <div className="container mx-auto py-20 space-y-5">
        <p className="text-3xl">Marada Bhargav Naidu</p>
        <p className="text-xl">Stay Connected</p>
        <div className="md:text-5xl space-x-5 text-3xl ">
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
        <p>maradabhargavnaidu &copy; 2023</p>
      </div>
    </div>
  );
};

export default Footer;
