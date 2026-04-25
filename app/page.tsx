"use client";

import { useState } from "react";
import data from "../public/data.json";
import Header from "./components/header";
import Search from "./components/search";
import Card from "./components/card";


type Job = {
  id: string | number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: {
    content: string;
    items: string[];
  };
  role: {
    content: string;
    items: string[];
  };
};



export default function Home() {
  const [searchTerm1, setSearchTerm1] = useState("");
  const [searchTerm2, setSearchTerm2] = useState("");
  const [searchTerm3, setSearchTerm3] = useState(false);
  const [cardNum, setCardNum] = useState(12);

  const filteredJobs = data.filter((job: Job) => {
    const normalizedSearchTerm1 = searchTerm1.trim().toLowerCase();
    const normalizedSearchTerm2 = searchTerm2.trim().toLowerCase();

    const matchesPrimarySearch =
      !normalizedSearchTerm1 ||
      [job.position, job.company].some((value) =>
        value.toLowerCase().includes(normalizedSearchTerm1),
      );

    const matchesLocation =
      !normalizedSearchTerm2 ||
      job.location.toLowerCase().includes(normalizedSearchTerm2);

    const matchesContract = !searchTerm3 || job.contract === "Full Time";

    return matchesPrimarySearch && matchesLocation && matchesContract;
  });

  const handleSearch = (term1: string, term2: string, term3: boolean) => {
    setSearchTerm1(term1);
    setSearchTerm2(term2);
    setSearchTerm3(term3);
  };

    
  return (
    <div className="w-full bg-[#F4F6F8] dark:bg-[#121721]">
      <Header />
      <Search onSearch={handleSearch} />
      <div className="w-[80%] sm:w-[92%] mx-auto p-3  
        flex flex-row flex-wrap gap-6 justify-center items-center">
        {
                
        filteredJobs.slice(0,cardNum).map((job: Job) => (
          <Card key={job.id} job={job}  />
        ))}
      </div>
      <div className="w-full flex justify-center items-center h-16 m-0 bg-white dark:bg-[#19202D] ">
         <button className="w-[144px] h-[44px] mx-auto mt-0  pt-0 pb-0 text-center
          text-white bg-[#5964E0] rounded-lg" onClick ={() => setCardNum(cardNum + 12)}>
         Load More
         </button>
      </div>
    </div>
  );
}
