import type { JSX } from "react";
import { Monitor, Server, Cloud } from "lucide-react";

const skillCategories = [
    {
        name: "Frontend",
        icon: Monitor,
        skills: [
            "JavaScript (ES6+)",
            "TypeScript",
            "React",
            "Sass / SCSS",
            "HTML5 & CSS3",
            "Tailwind CSS",
            "Redux",
        ],
    },
    {
        name: "Backend",
        icon: Server,
        skills: [
            "Node.js",
            "Express",
            "Python",
            "Go",
            "Gin",
            "REST API",
            "Sequelize",
        ],
    },
    {
        name: "Other",
        icon: Cloud,
        skills: [
            "Git & GitHub",
            "PostgreSQL",
            "Docker",
            "AWS",
            "Railway",
            "CI/CD",
            "OpenAI API"
        ],
    },
];

const Skills = (): JSX.Element => {
    return (
        <div className="container">
            <section className="skills-section" id="skills">
                <div className="animate-fade-right" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
                    <div className="section-subtitle">03.</div>
                    <h2 className="section-title">Tech Stack</h2>
                    <div className="section-underline animate-fade-right" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}></div>
                </div>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <div
                                key={category.name}
                                className="skill-card animate-fade-in"
                                style={{ animationDelay: `${0.3 + index * 0.2}s`, animationFillMode: "forwards" }}
                            >
                                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                    <Icon size={24} />
                                    <h3>{category.name}</h3></div>
                                <ul className="skill-list">
                                    {category.skills.map((skill, i) => (
                                        <li key={i}>
                                            <span></span>
                                            <span className="text-muted">{skill}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    );
};

export default Skills;
