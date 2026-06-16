"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { getFeaturedProjects } from "@/data/projects";

export default function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section
      id="featured-projects"
      className="py-24 sm:py-32 relative"
      style={{ background: "var(--color-bg-primary)" }}
    >
      <div className="section-container">
        <SectionHeading
          title="FEATURED PROJECTS"
          subtitle="Highlight Reel"
          accentColor="#00e5ff"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((project, i) => {
            const accentColor =
              project.domains.includes("ai-systems")
                ? "#00e5ff"
                : project.domains.includes("secure-engineering")
                  ? "#a855f7"
                  : "#00ff88";

            return (
              <ProjectCard
                key={project.slug}
                title={project.title}
                tagline={project.tagline}
                description={project.description}
                stack={project.stack}
                github={project.github}
                live={project.live}
                accentColor={accentColor}
                index={i}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
