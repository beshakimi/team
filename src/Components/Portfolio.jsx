import { useState } from "react";
import projectsData from "../data/projectsData";
import ProjectCard from "./Portfolio/ProjectCard";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  return (
    <div className="bg-white p-6 rounded-sm flex flex-col gap-4">
      <h1 className="text-lg md:text-3xl text-[#e87a35] font-bold text-center">
        Portfolio
      </h1>
      <p className="w-[90%] md:w-[50%] mx-auto text-center text-sm md:text-base">
        Here are some of my projects. Click the tabs to filter by category.
      </p>

      {/* Menu */}
      <div className="flex justify-center gap-2 md:gap-4">
        {["all", "web", "mobile", "ml"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-2 md:px-4 py-1 text-xs md:text-base font-semibold rounded-sm text-white text-nowrap ${
              filter === cat ? "bg-slate-800" : "bg-orange-500"
            }`}
          >
            {cat === "all"
              ? "All"
              : cat === "web"
              ? "Website"
              : cat === "mobile"
              ? "Mobile"
              : "Machine Learning"}
          </button>
        ))}
      </div>

      {/* Projects */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
