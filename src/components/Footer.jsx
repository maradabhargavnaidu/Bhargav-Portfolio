import React from "react";

const Footer = () => {
  return (
    <div className="bg-neutral-950 text-white font-varela border-t-[1px] border-white">
      <div className="container mx-auto pt-20 flex md:flex-row flex-col justify-center items-center gap-5 md:justify-between">
        <p className="text-xl"> Developed by Marada Bhargav Naidu</p>
        <div>
          <p className="text-xl mb-3">Stay Connected</p>
          <div className="flex text-3xl gap-4">
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
        </div>
      </div>
      <p className="text-center py-5">maradabhargavnaidu &copy; 2024</p>
    </div>
  );
};

export default Footer;
