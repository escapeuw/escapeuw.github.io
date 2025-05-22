// src/components/Projects.tsx

import type { JSX } from "react";


const projects = [
    {
        id: 1,
        title: "EatWhat.ai",
        description: "A personalized meal recommendation web application that uses AI to suggest dishes based on user preferences, mood, location and time.",
        tech: ["React", "TypeScript", "Go", "PostgreSQL", "OpenAI"],
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
        link: "https://dhwang.dev/eatwhat-ai",
    },
    {
        id: 2,
        title: "Faithbook",
        description: "A Christian community-driven social platform featuring user authentication, post creation, prayer request threads, comment interactions, and devotional sharing.",
        tech: ["React", "JavaScript", "Node.js", "PostgreSQL"],
        image: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?auto=format&fit=crop&w=800&q=80",
        link: "https://faithbook.site",
    },
    {
        id: 3,
        title: "Iphone Clone",
        description: "Interactive dashboard for visualizing financial data with advanced filtering and reporting capabilities.",
        tech: ["TypeScript", "D3.js", "Express", "PostgreSQL"],
        image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&w=800&q=80",
        link: "https://dhwang.dev/iphone-clone",
    },
    {
        id: 4,
        title: "Portfolio Website",
        description: "Interactive dashboard for visualizing financial data with advanced filtering and reporting capabilities.",
        tech: ["TypeScript", "D3.js", "Express", "PostgreSQL"],
        image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&w=800&q=80",
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
