import Image from "next/image";
import data from "../../../public/data.json";
import Header from "../../components/header";
import Link from "next/link";



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

export default async function JobDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const job = (data as Job[]).find((j) => j.id === Number(id));

  if (!job) {
    return (
      <div className="w-full">
        <Header />
        <p className="text-center mt-10 text-magenta">404 Page not found.</p>
        
      </div>
    );
  }

  return (
    <div className="w-full bg-[#F4F6F8] dark:bg-[#121721] min-h-screen">
      <Header />

      {/* Company header card */}
      <div className="max-w-[730px] mx-auto mt-8 px-4">
        <Link
          href="/"
          className="inline-block ml-10 mb-6 text-[#6E8098] hover:text-[#19202D] dark:hover:text-white transition font-bold"
        >
          ← Back to Board
        </Link>
        <div className="mx-10 bg-white dark:bg-[#19202D] rounded-lg flex flex-col md:flex-row overflow-hidden">
          <div
            className="flex items-center justify-center w-full md:w-[140px] h-[140px] md:h-auto shrink-0"
            style={{ backgroundColor: job.logoBackground }}
          >
            <Image
              src={job.logo.replace(/^\.\//,'/')}
              alt={`${job.company} logo`}
              width={60}
              height={60}
            />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between w-full p-8 gap-4">
            <div className="text-center md:text-left">
              <h2 className="text-xl font-bold text-[#19202D] dark:text-white">
                {job.company}
              </h2>
              <p className="text-[#6E8098]">{job.website}</p>
            </div>
            <a
              href={job.website}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#EEEFFC] dark:bg-[#303642] text-[#5964E0] font-bold rounded-lg hover:bg-[#C5C9F4] dark:hover:bg-[#505764] transition"
            >
              Company Site
            </a>
          </div>
        </div>

        {/* Job details card */}
        <div className="mx-10 bg-white dark:bg-[#19202D] rounded-lg p-8 mt-6 mb-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-[#6E8098]">
                {job.postedAt} · {job.contract}
              </p>
              <h1 className="text-2xl font-bold text-[#19202D] dark:text-white mt-1">
                {job.position}
              </h1>
              <p className="text-[#5964E0] font-bold mt-1">{job.location}</p>
            </div>
            <a
              href={job.apply}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#5964E0] text-white font-bold rounded-lg text-center hover:bg-[#939BF4] transition"
            >
              Apply Now
            </a>
          </div>

          <p className="text-[#6E8098] mt-8 leading-relaxed">{job.description}</p>

          <h3 className="text-lg font-bold text-[#19202D] dark:text-white mt-10 mb-4">
            Requirements
          </h3>
          <p className="text-[#6E8098] leading-relaxed">{job.requirements.content}</p>
          <ul className="mt-4 space-y-3 list-none">
            {job.requirements.items.map((item, i )=> (
              <li key={i} className="flex gap-4 text-[#6E8098]">
                <span className="text-[#5964E0] font-bold shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>

          <h3 className="text-lg font-bold text-[#19202D] dark:text-white mt-10 mb-4">
            What You Will Do
          </h3>
          <p className="text-[#6E8098] leading-relaxed">{job.role.content}</p>
          <ol className="mt-4 space-y-3 list-none">
            {job.role.items.map((item, i) => (
              <li key={i} className="flex gap-4 text-[#6E8098]">
                <span className="text-[#5964E0] font-bold shrink-0">{i + 1}</span>
                {item}
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Footer apply bar */}
      <div className="sticky bottom-0 w-full bg-white dark:bg-[#19202D] py-4 px-18">
        <div className="max-w-[730px] mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div className="hidden md:block">
            <p className="font-bold text-[#19202D] dark:text-white">{job.position}</p>
            <p className="text-[#6E8098]">{job.company}</p>
          </div>
          <a
            href={job.apply}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#5964E0] text-white font-bold rounded-lg text-center hover:bg-[#939BF4] transition"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
}
