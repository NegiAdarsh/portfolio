"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Read And Write",
    description: "Developed an anonymous web application with a focus on secure secret sharing, anonymous blogging, and robust credential encryption and provides sharing anonymous secret.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/NegiAdarsh/read-write",
    previewUrl: "https://read-write.onrender.com/",
  },
  {
    id: 2,
    title: "Student Help Portal",
    description: "A portal featuring a keyword search function with interactive API,providing all relevant information such as relevant image, definitions with example and much more at your fingertips.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/NegiAdarsh/Student-Help-Portal",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Uttarakhand Tour and Travel",
    description: "Designed and developed a web application exclusively for Uttarakhand, featuring seamless tour and travel functionalities, integrated payment systems, a donation feature, and an intuitive UI/UX design, including a blogging section.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/NegiAdarsh/uttarakhand-tour",
    previewUrl: "https://negiadarsh.github.io/uttarakhand-tour/",
  },
  {
    id: 4,
    title: "To-do-List",
    description: "Generate an original name list that’s exclusively yours, safeguarded from modifications by devising a unique name as its guardian. This ensures that other users cannot alter the contents.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/NegiAdarsh/to-do-list",
    previewUrl: "https://to-do-list-qjtq.onrender.com/",
  },
  {
    id: 5,
    title: "Tasty Food (UI/UX)",
    description: "UI UX design of a food ordering web application",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/NegiAdarsh/Tasty-Food",
    previewUrl: "https://negiadarsh.github.io/Tasty-Food/",
  },
  {
    id: 6,
    title: "Authentication and Registration",
    description: "Built with with MongoDB and Salted Encryption. In an age where data security is paramount, our solution ensures the utmost protection for user credentials. ",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/NegiAdarsh/read-write",
    previewUrl: "https://read-write.onrender.com/",
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
