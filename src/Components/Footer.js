import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-gray-300 font-abc text-center">
      <div className="container mx-auto py-20 space-y-5">
        <p className="text-3xl">Marada Bhargav Naidu</p>
        <p className="text-xl">Stay Connected</p>
        <div className="md:text-5xl space-x-5 text-3xl text-white">
          <a href="#">
            <i class="devicon-github-original"></i>
          </a>
          <a href="#">
            <i class="devicon-linkedin-plain"></i>
          </a>
          <a href="#">
            <i class="devicon-twitter-original"></i>
          </a>
        </div>
        <p className="text-gray-400">maradabhargavnaidu &copy; 2023</p>
      </div>
    </div>
  );
};

export default Footer;
