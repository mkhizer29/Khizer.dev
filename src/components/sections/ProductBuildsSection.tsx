"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { getProjectsByDomain } from "@/data/projects";

export default function ProductBuildsSection() {
  const productProjects = getProjectsByDomain("product-builds");

  return (
    <section
      id="product-builds"
      className="py-24 sm:py-32 relative"
      style={{ background: "var(--color-bg-primary)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 50% 40% at 80% 60%, rgba(0,255,136,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="section-container relative z-10">
        <SectionHeading
          title="PRODUCT BUILDS"
          subtitle="Application Layer"
          accentColor="#00ff88"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {productProjects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              tagline={project.tagline}
              description={project.description}
              stack={project.stack}
              github={project.github}
              live={project.live}
              accentColor="#00ff88"
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
