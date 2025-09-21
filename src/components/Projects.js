import React from "react";

const Projects = () => {
  return (
    <div className="p-4">
      <p className="text-purple-700 text-3xl">Projects</p>
      <br />
      <div>
        <div className="text-white flex items-center gap-5">
          <p>EventHub | TypeScript, React, Node, MongoDB, Tanstack Query | </p>
          <a
            href="https://event-hub-chi-five.vercel.app/"
            className="underline cursor-pointer border-2 p-1 border-gray-400 hover:border-white hover:text-white"
          >
            Live
          </a>
          <a
            href="https://github.com/maradabhargavnaidu/EventHub"
            className="underline cursor-pointer border-2 p-1 border-gray-400 hover:border-white hover:text-white"
          >
            GitHub
          </a>
        </div>
        <ul className="list-disc list-inside">
          <li>
            Built a Event management platform which helps organizations to
            create and manage their events.
          </li>
          <li>
            Allows users to easily register for events and receive QR-coded
            tickets automatically after payment.
          </li>
          <li>
            Allows organizations to quickly and easily validate QR-coded tickets
            for event entry
          </li>
        </ul>
      </div>
      <br />
      <div>
        <div className="text-white flex items-center gap-5">
          <p>College Portal | React Js, Tailwind CSS, Firebase | </p>
          <a
            href="https://cllgportal.netlify.app/"
            className="underline cursor-pointer border-2 p-1 border-gray-400 hover:border-white hover:text-white"
          >
            Live
          </a>
          <a
            href="https://github.com/maradabhargavnaidu/vasavi-dashboard"
            className="underline cursor-pointer border-2 p-1 border-gray-400 hover:border-white hover:text-white"
          >
            GitHub
          </a>
        </div>
        <ul className="list-disc list-inside">
          <li>
            Developed a platform which helps organizations manage their
            information, including staff details, student details, and expenses.
          </li>
          <li>
            Implemented Firebase integration for seamless data storage and
            management
          </li>
        </ul>
      </div>
      <br />
      <div>
        <div className="text-white flex items-center gap-5">
          <p>Yaatra | Node Js, Bootstrap, PostgreSQL | </p>
          <a
            href="https://yaatra.onrender.com/"
            className="underline cursor-pointer border-2 p-1 border-gray-400 hover:border-white hover:text-white"
          >
            Live
          </a>
          <a
            href="https://github.com/maradabhargavnaidu/Yaatra"
            className="underline cursor-pointer border-2 p-1 border-gray-400 hover:border-white hover:text-white"
          >
            GitHub
          </a>
        </div>
        <ul className="list-disc list-inside">
          <li>
            Yaatra is a premier trip planning website that allows users to plan
            their trips based on their interests. Whether you're looking for
            information about famous tourist attractions or need expert guides,
            Yaatra has you covered.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
