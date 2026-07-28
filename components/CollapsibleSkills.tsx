"use client";

import React, { useState } from "react";

const allSkills = [
  // --- FRONT-LOADED TOP 12 (Visible on initial load) ---
  "Active Directory",
  "System Troubleshooting",
  "TCP/IP & Networking",
  "PowerShell",
  "Linux",
  "Python",
  "TypeScript",
  "ReactJS",
  "NextJS",
  "Tailwind",
  "Git",
  "AWS (Cloud Deployment)",

  // --- REST OF SKILLS (Expanded view) ---
  ".NET Framework",
  "ASP.NET Core",
  "C#",
  "NodeJS",
  "ExpressJS",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "RESTful APIs",
  "API Integration",
  "Figma",
  "Docker",
  "Bash/Shell",
  "Machine Learning Models",
  "FAISS",
  "Pinecone",
  "HTML",
  "CSS",
  "JavaScript",
  "Bootstrap",
  "WordPress",
  "Jupyter",
  "NumPy",
  "Pandas",
  "PyTorch",
  "Google Colab",
  "AJAX",
  "JSX",
  "jQuery",
  "ASP.NET MVC",
  "NetworkX",
  "BeautifulSoup",
];

const SkillPill: React.FC<{ skill: string }> = ({ skill }) => (
  <span className="inline-flex items-center bg-gray-200 px-3 py-1 text-xs font-semibold mr-2 mt-2 rounded transition-transform duration-200 hover:scale-105 hover:bg-red-300 select-none text-gray-700">
    {skill}
  </span>
);

const CollapsibleSkills = () => {
  const [expanded, setExpanded] = useState(false);
  const top = allSkills.slice(0, 12);
  const rest = allSkills.slice(12);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-2">
        {top.map((s) => (
          <SkillPill key={s} skill={s} />
        ))}
        {expanded && rest.map((s) => <SkillPill key={s} skill={s} />)}
      </div>
      <button
        onClick={() => setExpanded((e) => !e)}
        className="text-sm font-medium text-red-600 hover:underline"
        aria-expanded={expanded}
      >
        {expanded ? "Show less" : `+ ${rest.length} more`}
      </button>
    </div>
  );
};

export default CollapsibleSkills;
