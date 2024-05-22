import React from "react";
// import {BackgroundBeams} from ""
import { BackgroundBeams } from "./ui/Background-beams.jsx";

export function BackgroundBeamsDemo() {
  return (
    <>
      <div className="bg-neutral-950 scroll-smooth pt-10" id="Home">
        <div className="container mx-auto py-20 space-y-5 px-5 ">
          <p className="relative z-10 text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-varela  font-normal">
            G&apos;day,
          </p>
          <p className="relative z-10 text-5xl bg-clip-text text-transparent bg-gradient-to-b from-yellow-200 to-yellow-700 font-varela font-bold">
            <span className="relative z-10 text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-varela font-normal">
              I&apos;m
            </span>{" "}
            Bhargav
          </p>

          <p className="relative z-10 text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-varela font-normal">
            Full Stack Developer
          </p>
          <div className=" space-x-5 py-5 pb-10 text-3xl">
            <a href="https://github.com/maradabhargavnaidu">
              <i className="devicon-github-original relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-yellow-200 to-yellow-700"></i>
            </a>
            <a href="https://www.linkedin.com/in/bhargav-naidu">
              <i className="devicon-linkedin-plain relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-yellow-200 to-yellow-700"></i>
            </a>
            <a href="https://twitter.com/maradabhargav">
              <i className="devicon-twitter-original relative z-10 cursor-pointer bg-clip-text text-transparent bg-gradient-to-b from-yellow-200 to-yellow-700"></i>
            </a>
          </div>
          <a
            href="https://drive.google.com/file/d/13Oj4virqdkqCnWP7dp0bYazd2KrQqMiD/view?usp=sharing"
            className="text-xl relative z-10 bg-gradient-to-b from-yellow-200 to-yellow-700 font-varela py-3 font-semibold text-neutral-900 px-4 rounded-lg text- tral-50"
            target="_blank"
          >
            My Resume
          </a>
        </div>
        <BackgroundBeams />
      </div>
    </>
  );
}
