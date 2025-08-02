import React from "react";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-red-500 border-0 rounded" />
      <div className="p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between items-center gap-2">
        <div className="text-neutral-500 dark:text-neutral-100 text-sm">
          © {year} Jose Naranjo
        </div>
        <div className="flex flex-row items-center justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/josefnaranjo/"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="LinkedIn profile"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-200"
              size={28}
            />
          </a>
          <a
            href="https://github.com/josefnaranjo"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="GitHub profile"
          >
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-200"
              size={28}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
