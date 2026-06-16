"use client";

import ProjectDetail from "./ProjectDetail";
import { projects } from "@/data/projects";

export default function AllProjectDetails() {
  return (
    <div>
      {projects.map((project) => (
        <ProjectDetail key={project.slug} project={project} />
      ))}
    </div>
  );
}
