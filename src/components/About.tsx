import "../assets/styles.css";
import profilePic from "../assets/profile.jpg";

const About = () => {
    return (
        <div className="container">
            <section id="about" className="about-section">

                <div className="section-header">
                    <span className="section-subtitle">01.</span>
                    <h2 className="section-title">About Me</h2>
                    <div className="section-underline animate-fade-right" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}></div>
                    <div className="section-line"></div>
                </div>

                <p className="about-intro">
                    I'm a passionate fullstack developer with a love for clean code and modern user interfaces.
                    Here's a bit more about my background and what I do.
                </p>

                <div className="about-content">
                    <div className="about-text">
                        <p>
                            Hi, I'm <span className="text-highlight">Daniel Hwang</span>, a fullstack software engineer who specializes in building
                            intuitive user experiences and scalable backend systems.
                        </p>
                        <p>
                            I enjoy working with <strong>React</strong>, <strong>TypeScript</strong>, and <strong>Node.js</strong>,
                            and I care deeply about design, code quality, and creating seamless digital experiences.
                            Hello! I'm John, a fullstack developer based in New York City with over 5 years of experience building web applications. My journey in software development started when I was in college, tinkering with HTML and CSS to build simple websites.

                            Fast-forward to today, and I've had the privilege of working at a startup, a large corporation, and a software agency. My main focus these days is building accessible, inclusive digital experiences at Company XYZ.

                            I love working across the entire stack and enjoy the challenge of integrating frontend and backend systems. When I'm not coding, you'll find me hiking, reading science fiction, or experimenting with new tech
                        </p>
                    </div>
                    <div className="about-photo">
                        <img src={profilePic} alt="Profile picture" className="profile-image" />
                    </div>
                </div>

            </section>
        </div>
    );
};

export default About;
