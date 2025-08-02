"use client";

import React, { useState, useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Projects", page: "projects" },
];

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [active, setActive] = useState<string>("home");
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Close on outside click
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (
        navbarOpen &&
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setNavbarOpen(false);
      }
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [navbarOpen]);

  // Scroll spy: update active based on scroll position
  useEffect(() => {
    const sections = NAV_ITEMS.map((n) =>
      document.getElementById(n.page)
    ).filter(Boolean) as HTMLElement[];

    const onScroll = () => {
      const scrollY = window.scrollY + 120; // offset for header height
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec.offsetTop <= scrollY) {
          setActive(sec.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className="w-full fixed top-0 z-50 backdrop-blur-md bg-white/60 dark:bg-stone-900/80 shadow transition">
      <div
        ref={containerRef}
        className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2"
      >
        <div className="flex items-center gap-2">
          <ScrollLink
            to="home"
            spy
            smooth
            offset={-100}
            duration={500}
            className="cursor-pointer"
            onClick={() => setNavbarOpen(false)}
          >
            <h2 className="text-xl font-bold select-none">
              Jose Francisco Naranjo
            </h2>
          </ScrollLink>
        </div>

        <div className="flex items-center gap-4">
          {/* desktop links */}
          <nav className="hidden md:flex gap-4 items-center">
            {NAV_ITEMS.map((item) => (
              <ScrollLink
                key={item.page}
                to={item.page}
                spy
                smooth
                offset={-100}
                duration={500}
                className={`relative px-3 py-2 text-sm font-medium cursor-pointer transition ${
                  active === item.page
                    ? "text-red-600"
                    : "text-neutral-900 dark:text-neutral-100 hover:text-red-500"
                }`}
              >
                {item.label}
                {active === item.page && (
                  <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-red-600 rounded" />
                )}
              </ScrollLink>
            ))}
            <a
              href="/Jose_Naranjo_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-3 py-2 text-sm font-medium cursor-pointer transition text-neutral-900 dark:text-neutral-100 hover:text-red-500"
            >
              Resume
            </a>

            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${
                currentTheme === "dark" ? "light" : "dark"
              } mode`}
              className="p-2 rounded-md ring-offset-1 ring focus:outline-none focus:ring"
            >
              {currentTheme === "dark" ? (
                <RiSunLine size={22} />
              ) : (
                <RiMoonFill size={22} />
              )}
            </button>
          </nav>

          {/* mobile hamburger */}
          <div className="md:hidden flex items-center">
            <button
              aria-label="Toggle menu"
              onClick={() => setNavbarOpen((o) => !o)}
              className="p-2 rounded-md focus:outline-none focus:ring"
            >
              {navbarOpen ? <IoMdClose size={26} /> : <IoMdMenu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={`md:hidden transition-max-height duration-300 overflow-hidden ${
          navbarOpen ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-4 flex flex-col gap-3">
          {NAV_ITEMS.map((item) => (
            <ScrollLink
              key={item.page}
              to={item.page}
              spy
              smooth
              offset={-100}
              duration={500}
              onClick={() => setNavbarOpen(false)}
              className={`block px-4 py-2 rounded-md text-base font-medium cursor-pointer transition ${
                active === item.page
                  ? "text-red-600"
                  : "text-neutral-900 dark:text-neutral-100 hover:text-red-500"
              }`}
            >
              {item.label}
            </ScrollLink>
          ))}
          <a
            href="/Jose_Naranjo_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setNavbarOpen(false)}
            className="block px-4 py-2 rounded-md text-base font-medium cursor-pointer transition text-neutral-900 dark:text-neutral-100 hover:text-red-500"
          >
            Resume
          </a>
          <div className="mt-2">
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${
                currentTheme === "dark" ? "light" : "dark"
              } mode`}
              className="flex items-center gap-2 px-4 py-2 bg-gray-400 rounded-md"
            >
              {currentTheme === "dark" ? (
                <>
                  <RiSunLine size={20} /> Light Mode
                </>
              ) : (
                <>
                  <RiMoonFill size={20} /> Dark Mode
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
