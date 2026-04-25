'use client';

import {useState, useEffect } from "react";

export default function Search({ onSearch }) {
  const [searchTerm1, setSearchTerm1] = useState("");
  const [searchTerm2, setSearchTerm2] = useState("");
  const [searchTerm3, setSearchTerm3] = useState(false);
 

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onSearch(searchTerm1, searchTerm2, searchTerm3);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm1, searchTerm2, searchTerm3, onSearch]);

  return (
    <div className="w-[80%] mx-auto relative -top-[80px] 
        bg-white dark:bg-[#19202D] z-10 p-6 rounded-lg shadow-lg shadow-gray-100 
        dark:shadow-gray-800
        items-center gap-4 mb-6
        md:min-w-[800px] flex flex-row ">
      <div className="input-wrapper relative w-full">
      <input
        type="text"
        placeholder="Filter by title or company..."
        value={searchTerm1}
        onChange={(e) => setSearchTerm1(e.target.value)}
        className="min-w-[200px] w-full p-3 rounded-lg 
              border-gray-300 border-1 
          bg-white dark:bg-[#19202D] text-gray-900 dark:text-white
          focus:outline-none focus:ring-2 focus:ring-magenta focus:ring-offset-2
          "
      />
        <svg className="lg:hidden md:hidden sm:block absolute right-4 top-1/2 
            transform -translate-y-1/2" width="20" height="20" 
            xmlns="http://www.w3.org/2000/svg"><path d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z" fill="#6E8098" fillRule="nonzero"/></svg>
      </div>
      
      <input
        type="text"
        placeholder="Filter by location..."
        value={searchTerm2}
        onChange={(e) => setSearchTerm2(e.target.value)}
        className="hidden w-full p-3 md:block 
          rounded-lg border-gray-300 border-1 
          bg-white dark:bg-[#19202D] text-gray-900 dark:text-white
          focus:outline-none focus:ring-2 focus:ring-magenta focus:ring-offset-2"
      />
      
      <label htmlFor="checkbox1" className="hidden md:min-w-[160px] md:flex flex-row 
           items-center 
         text-gray-900 dark:text-white">

        <input
          type="checkbox"
          id="checkbox1"
          checked={searchTerm3}
          onChange={(e) => setSearchTerm3(e.target.checked)}
          className="mr-2"
        />
        Full Time Only
      </label>
      <button type="button" className="sm:w-[64px] md:hidden h-[64px] px-5 py-5 bg-[#5964E0] 
          text-white rounded-lg dark:bg-[#5964E0] hover:cursor-pointer 
          transition-colors duration-300"
          onClick={() => onSearch(searchTerm1, searchTerm2, searchTerm3)}>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z" fill="#FFFFFF" fillRule="nonzero"/></svg>
      </button>
      <button type="button" className="hidden md:block w-[240px] h-[64px] px-5 py-5 bg-[#5964E0] 
          font-bold text-white
          text-white rounded-lg dark:bg-[#5964E0] hover:cursor-pointer 
          transition-colors duration-300"
          onClick={() => onSearch(searchTerm1, searchTerm2, searchTerm3)}>
            Search
          </button>
    </div>
  );
}