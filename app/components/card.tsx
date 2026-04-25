"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

type Job = {
  id: number;
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

export default function Card({ job }: { job: Job }) {
  const router = useRouter();

  return (
    <div
      className="mx-auto my-5 mx-auto px-7 pl-5 pr-2 bg-white dark:bg-[#19202D] rounded-lg shadow-md 
         w-[360px] h-[253px] flex flex-col justify-start items-start gap-4 md:max-w-[1040px] "
      
    >
      <div className="relative -top-6 w-[50px] h-[50px] rounded-[16px] flex items-center justify-center" style={{ backgroundColor: job.logoBackground}}>
        <Image src={job.logo.replace(/^\.\//,'/')} alt={`${job.company} logo`} width={50} height={50} className="m-5"  />
      </div>
      <div className="flex flex-col gap-2">
          <p className="text-magenta dark:text-[#6E8980]">{job.postedAt} * {job.contract}</p>
          <h2 className="text-2xl font-bold text-purple-700 dark:text-gray-200 pb-4 ">
            {job.position}
          </h2>
          <h2 className="text-magenta dark:text-[#6E8980] ">{job.company}</h2>
          <h3 className="text-14 font-bold text-[#5964E0] dark:text-[#5964E0] my-4 py-0">
            {job.location}
          </h3>
          <button type="button" onClick={() => router.push(`/jobs/${job.id}`)}
       className="w-35 h-12 m-3 pr-4 block relative -right-42 -top-60 rounded-md cursor-pointer
          border-1 border-[#5964E0] text-center text-white bg-[#5964E0] hover:bg-[#939BF4] transition-colors">
       Details
      </button>
      </div>
      
    </div>
  );
}
 