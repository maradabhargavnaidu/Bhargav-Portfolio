import React, { useState } from "react";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(true);
  const Handletoggle = () => {
    setMenuToggle(!menuToggle);
  };
  return (
    <div className="bg-black fixed z-20 w-full shadow-gray-300 shadow-sm">
      <nav className="flex justify-between container py-4 mx-auto text-3xl px-3 items-center">
        <ul className="list-none text-white">
          <li>
            <a href="#Home" className="text-white font-varela font-semibold ">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-yellow-200 to-yellow-700">
                MBN
              </span>
            </a>
          </li>
        </ul>
        <div
          className="flex flex-col justify-between h-5 md:hidden"
          onClick={Handletoggle}
        >
          <span className="border-white border-2 rounded w-6"></span>
          <span className="border-white border-2 rounded"></span>
          <span className="border-white border-2 rounded"></span>
        </div>
        <ul className="list-none space-x-5 text-xl items-center font-varela hidden md:flex">
          <li>
            <a href="/#Home" className="text-white">
              Home
            </a>
          </li>
          <li>
            <a href="/#About" className="text-white">
              About
            </a>
          </li>
          <li>
            <a href="/#Skills" className="text-white">
              Skills
            </a>
          </li>
          <li>
            <a href="/#projects" className="text-white">
              Projects
            </a>
          </li>
        </ul>
        <ul
          onClick={Handletoggle}
          className={
            "md:hidden absolute mt-80 py-5 space-y-4 duration-1000 text-white flex flex-col font-varela w-[95%] text-center " +
            (menuToggle
              ? "-translate-x-full bg-transparent"
              : "translate-x-0 bg-black")
          }
        >
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
