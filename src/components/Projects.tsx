// src/components/Projects.tsx


const projects = [
    {
        id: 1,
        title: "E-commerce Platform",
        description: "A full-featured e-commerce solution with product management, shopping cart, and payment processing.",
        tech: ["React", "Node.js", "MongoDB", "Stripe"],
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
        link: "#",
    },
    {
        id: 2,
        title: "Task Management App",
        description: "A productivity tool designed to help users organize tasks, set priorities, and track their progress.",
        tech: ["React", "Firebase", "Tailwind CSS"],
        image: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?auto=format&fit=crop&w=800&q=80",
        link: "#",
    },
    {
        id: 3,
        title: "Finance Dashboard",
        description: "Interactive dashboard for visualizing financial data with advanced filtering and reporting capabilities.",
        tech: ["TypeScript", "D3.js", "Express", "PostgreSQL"],
        image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&w=800&q=80",
        link: "#",
    },
];

const Projects = () => {
    return (
        <section className="projects-section">
            <div className="container">
                <div className="animate-fade-right" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
                    <div className="section-subtitle">02.</div>
                    <h2 className="section-title">Featured Projects</h2>
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
                                <div className="project-tech">
                                    {project.tech.map((tech, i) => (
                                        <span key={i}>{tech}</span>
                                    ))}
                                </div>
                                <div className="project-footer" style={{ marginTop: "1rem" }}>
                                    <a href={project.link} className="text-highlight highlight-text">
                                        View Project
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
