'use client';

import { useState, useEffect } from "react";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const next = !isDarkMode;
    setIsDarkMode(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  

    return (
        <header className="w-full text-[#5964E0] dark:text-white ">
            <div className="h-[160px] w-full rounded-bl-full bg-[url('/assets/desktop/bg-pattern-header.svg')] bg-cover bg-no-repeat">
            </div>
            <div className="flex flex-row w-[80%] mx-auto justify-between items-center
                relative -top-28">
                <img src="/assets/desktop/logo.svg" 
                      alt="Logo" 
                      width={115} 
                      height={32} 
                      className=""/>
                <div className="flex items-center justify-between pr-0 ">
                <div className="switch-button flex items-center justify-around gap-1"
                      > 
                  <img src="/assets/desktop/icon-sun.svg" alt="Sun Icon" width={20} height={20} className="mr-2" />
                <button
                  type="button"
                  aria-label="Toggle theme"
                  aria-pressed={isDarkMode}
                  className="flex h-8 w-14 items-center rounded-full bg-white dark:bg-white px-1 hover:cursor-pointer dark:bg-[#19202D]"
                  onClick={toggleDarkMode}
                >

                 <span
            className={`h-5 w-5 rounded-full bg-[#5964E0] dark:bg-[#5964E0] transition-transform duration-200 ease-out ${
              isDarkMode ? "translate-x-6" : "translate-x-0"
            }`}
          />
                </button>
                <img src="/assets/desktop/icon-moon.svg" alt="Moon Icon" width={20} height={20} className="ml-2" />
                </div>
            </div>
            </div>
               
    </header>
    );

}