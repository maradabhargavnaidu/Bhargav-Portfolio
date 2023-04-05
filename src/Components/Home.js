import React from "react";

const Home = () => {
  return (
    <div
      className="bg-black text-white font-abc md:text-7xl text-5xl"
      id="Home"
    >
      <div className="container mx-auto py-20 space-y-5 md:px-20 px-5 ">
        <p>G'day,</p>
        <p>I'm Bhargav</p>
        <p className="text-[#86a5d9]">A Web Developer</p>
        <div className="md:text-5xl space-x-5 py-5 text-4xl">
          <a href="https://github.com/maradabhargavnaidu">
            <i class="devicon-github-original"></i>
          </a>
          <a href="https://www.linkedin.com/in/bhargav-naidu">
            <i class="devicon-linkedin-plain"></i>
          </a>
          <a href="https://twitter.com/maradabhargav">
            <i class="devicon-twitter-original"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
