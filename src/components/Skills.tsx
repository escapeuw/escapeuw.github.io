
const skillCategories = [
    {
        name: "Frontend",
        skills: [
            "JavaScript (ES6+)",
            "TypeScript",
            "React",
            "Next.js",
            "HTML5 & CSS3",
            "Tailwind CSS",
            "Redux",
        ],
    },
    {
        name: "Backend",
        skills: [
            "Node.js",
            "Express",
            "Python",
            "Django",
            "GraphQL",
            "REST APIs",
            "WebSockets",
        ],
    },
    {
        name: "Other",
        skills: [
            "Git & GitHub",
            "Docker",
            "AWS",
            "CI/CD",
            "Jest & Testing",
            "Figma",
            "Agile/Scrum",
        ],
    },
];

const Skills = () => {
    return (
        <section className="skills-section">
            <div className="container">
                <div className="animate-fade-right" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
                    <div className="section-subtitle">03.</div>
                    <h2 className="section-title">My Skills</h2>
                    <div className="section-underline animate-fade-right" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}></div>
                </div>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div
                            key={category.name}
                            className="skill-card animate-fade-in"
                            style={{ animationDelay: `${0.3 + index * 0.2}s`, animationFillMode: "forwards" }}
                        >
                            <h3>{category.name}</h3>
                            <ul className="skill-list">
                                {category.skills.map((skill, i) => (
                                    <li key={i}>
                                        <span></span>
                                        <span className="text-muted">{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
