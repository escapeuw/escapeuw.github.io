// src/components/Hero.tsx
import { useEffect, useState } from "react";
import "../assets/styles.css";

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="hero-section">
            <div className="hero-bg" />
            <div className="hero-blur-layer">
                <div className="hero-blur-1"></div>
                <div className="hero-blur-2"></div>
            </div>

            <div className="hero-content">
                <div className={`hero-text-group ${isVisible ? 'animate-fade-in' : ''}`}>
                    <div>
                        <p className="text-highlight animate-fade-right" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                            Hello, my name is
                        </p>
                        <div className="hero-title animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                            <span style={{ color: "white" }}>John Doe</span>
                        </div>
                        <div className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                            I build <span className="text-glow text-highlight">exceptional</span> digital experiences.
                        </div>
                    </div>

                    <p className="hero-description animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                        I'm a software developer specialized in creating remarkable digital experiences.
                        Currently, I'm focused on building accessible, user-centered products at{" "}
                        <a href="#" className="text-highlight highlight-text">Company XYZ</a>.
                    </p>

                    <div className="hero-button animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
                        <button className="btn">Check out my work</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
