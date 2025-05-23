// src/components/Projects.tsx

import type { JSX } from "react";
import eatwhat from "../assets/eatwhat-ai.png";
import faithbook from "../assets/faithbook.png";
import iphone from "../assets/iphone-clone.png";
import portfolio from "../assets/portfolio.png";


const projects = [
    {
        id: 1,
        title: "EatWhat.ai",
        description: "An AI-powered meal recommendation web application that suggests personalized dishes based on user mood, taste preferences, location, and time of day — helping users decide what to eat with minimal input.",
        tech: ["React", "TypeScript", "Go", "PostgreSQL", "OpenAI"],
        image: eatwhat,
        link: "https://dhwang.dev/eatwhat-ai",
    },
    {
        id: 2,
        title: "Faithbook",
        description: "A Christian social networking platform with user authentication, post creation, comment threads, Bible search, and customizable profiles — designed to make sharing personal reflections more convenient.",
        tech: ["React", "JavaScript", "Node.js", "Express", "PostgreSQL"],
        image: faithbook,
        link: "https://faithbook.site",
    },
    {
        id: 3,
        title: "Iphone Clone",
        description: "An iPhone interface clone featuring functional apps like Calculator, YouTube, and Weather — built with integrated APIs to demonstrate advanced front-end skills and UI precision.",
        tech: ["React", "JavaScript", "OpenWeather API", "Youtube Data API"],
        image: iphone,
        link: "https://dhwang.dev/iphone-clone",
    },
    {
        id: 4,
        title: "Portfolio Website",
        description: "A personal portfolio website built with React and Typescript — showcasing projects, technical skills, and a strong sense of design through a clean, responsive UI.",
        tech: ["React", "TypeScript", "Tailwind CSS"],
        image: portfolio,
        link: "https://dhwang.dev",
    },
];

const Projects = (): JSX.Element => {
    return (
        <div className="container">
            <section className="projects-section" id="projects">
                <div className="animate-fade-right" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
                    <div className="section-subtitle">02.</div>
                    <h2 className="section-title">Projects</h2>
                    <div className="section-underline animate-fade-right" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}></div>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="project-card card-hover animate-fade-in"
                            style={{ animationDelay: `${0.3 + index * 0.2}s`, animationFillMode: "forwards" }}
                        >
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div style={{ padding: "1rem" }}>
                                <h3 style={{ fontSize: "1.25rem", fontWeight: 600 }}>{project.title}</h3>
                                <p className="text-muted" style={{ marginTop: "0.5rem" }}>{project.description}</p>
                            </div>
                            <div>
                                <div className="project-tech" style={{ paddingLeft: '0.75rem' }}>
                                    {project.tech.map((tech, i) => (
                                        <span key={i}>{tech}</span>
                                    ))}
                                </div>
                                <div className="project-footer" style={{ padding: '1rem' }}>
                                    <a href={project.link} target='blank' className="text-highlight highlight-text">
                                        View Project
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>);
};

export default Projects;
