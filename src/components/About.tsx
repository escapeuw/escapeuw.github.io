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
                    I'm a passionate <span className="text-highlight">software engineer</span> crafting meaningful digital experiences.<br />
                    Here's a bit more about my background and what I do.
                </p>

                <div className="about-content">
                    <div className="about-text">
                        <p>
                            My journey started when I realized I’ve always loved shaping ideas into real, thoughtful products — combining structured thinking
                            with a strong sense of aesthetics. <br />
                            After graduating from the <span className="text-highlight">University of Waterloo</span> with a non-technical degree,
                            I discovered my strength in problem solving and began teaching myself software development by building projects
                            that solve real-world problems from scratch. <br />
                            <br />
                            I'm deeply immersed in tech — not just in writing code, but in exploring where the industry is heading.
                            From building with the latest advancements in AI to exploring emerging patterns like Model Context Protocol,
                            I'm always excited to see what's next — and to experiment with new tools and paradigms.
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
