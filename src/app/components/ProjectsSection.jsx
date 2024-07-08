"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Netflix Clone",
    description: "Watch movies with subscription",
    image: "/images/netflix-img.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Deepseed06/netflix-clone",
    previewUrl: "https://netflix-clone-kappa-hazel.vercel.app/",
  },
  {
    id: 2,
    title: "University Website",
    description: "Responsive demo school website that advertises the courses, structures and testimonials about the school",
    image: "/images/schoolwebsite-img.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Deepseed06/school-website-portfolio.git",
    previewUrl: "https://school-website-portfolio.vercel.app/",
  },
  {
    id: 3,
    title: "Music Player",
    description: "A music-player with a progress bar",
    image: "/images/music-player-img.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Deepseed06/music-player.git",
    previewUrl: "https://music-player-vert-nine.vercel.app/",
  },
  {
    id: 4,
    title: "Blog Website",
    description: "A simple multi-purpose blog",
    image: "/images/blog-img.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Deepseed06/Blog-Website.git",
    previewUrl: "https://blog-website-gamma-livid.vercel.app/",
  },
  {
    id: 5,
    title: "Geolocation App",
    description: "Finds your location and neighboring countries",
    image: "/images/geo-location-img.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Deepseed06/geo-location-api.git",
    previewUrl: "https://geo-location-api.vercel.app/",
  },
  {
    id: 6,
    title: "Monster Rolodex",
    description: "Searhes a list of monsters",
    image: "/images/monster-rolodex-img.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Deepseed06/monster-rolodex",
    previewUrl: "https://monster-rolodex-xi.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
