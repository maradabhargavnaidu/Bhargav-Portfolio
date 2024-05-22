import React from "react";
import { BackgroundGradient } from "./ui/Background-gradient";
// import { IconAppWindow } from "@tabler/icons-react";
// import Image from "react-image";

export function BackgroundGradientDemo() {
  return (
    <div className="bg-neutral-950">
      <p className="text-center mb-10 bg-clip-text text-transparent bg-gradient-to-b from-yellow-200 to-yellow-700 font-semibold md:text-5xl text-4xl">
        Projects
      </p>
      <div className="flex md:flex-row flex-col px-2 items-center justify-center gap-5 bg-neutral-950">
        <BackgroundGradient className=" p-4 sm:p-10 md:max-w-[400px] bg-white dark:bg-zinc-900 rounded-3xl">
          <div className="  rounded-[15px]">
            <p className="text-3xl  text-black mt-4 mb-2 dark:text-neutral-200">
              Yaatra
            </p>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              This is a Trip planning website
            </p>
            <div className="flex gap-5 py-4 px-5">
              <a
                href="https://github.com/maradabhargavnaidu/Yaatra"
                target="_blank"
                className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800"
              >
                <span>Github Link</span>
                <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                  {"</>"}
                </span>
              </a>
              <a
                href="https://yaatra.onrender.com/"
                target="_blank"
                className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800"
              >
                <span>Live Demo</span>
                <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                  {"</>"}
                </span>
              </a>
            </div>
          </div>
        </BackgroundGradient>
        <BackgroundGradient className=" p-4 max-w-[330px] md:max-w-[400px] max-h-[240px] sm:p-10 bg-white dark:bg-zinc-900 rounded-3xl">
          <div className="  rounded-[15px]">
            <p className="text-3xl text-black mt-4 mb-2 dark:text-neutral-200">
              College Portal
            </p>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              College admin can store the expenses and other data
            </p>
            <div className="flex gap-5 py-4 px-5">
              <a
                href="https://github.com/maradabhargavnaidu/vasavi-dashboard"
                target="_blank"
                className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800"
              >
                <span>Github Link</span>
                <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                  {"</>"}
                </span>
              </a>
              <a
                href="https://cllgportal.netlify.app/"
                target="_blank"
                className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800"
              >
                <span>Live Demo</span>
                <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                  {"</>"}
                </span>
              </a>
            </div>
          </div>
        </BackgroundGradient>
      </div>
    </div>
  );
}
