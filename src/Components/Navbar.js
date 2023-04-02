import React from "react";

const Navbar = () => {
  return (
    <div className="bg-black ">
      <nav className="flex justify-between container py-3 mx-auto text-3xl px-3">
        <ul className="list-none text-white">
          <li>
            <a href="#Home" className="text-white font-abc">
              MBN
            </a>
          </li>
        </ul>
        <ul className="list-none flex space-x-5 text-xl items-center font-abc ">
          <li>
            <a href="#Home" className="text-white ">
              Home
            </a>
          </li>
          <li>
            <a href="#About" className="text-white">
              About
            </a>
          </li>
          <li>
            <a href="#Skills" className="text-white">
              Skills
            </a>
          </li>
          <li>
            <a href="#Contact" className="text-white">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
