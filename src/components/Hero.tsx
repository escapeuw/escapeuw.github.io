// src/components/Hero.tsx
import { useEffect, useState, type JSX } from "react";
import "../assets/styles.css";
import resume from "../assets/resume.pdf"

const Hero = (): JSX.Element => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="hero-section" id="hero">
            <div className="hero-bg" />
            <div className="hero-blur-layer">
                <div className="hero-blur-1"></div>
                <div className="hero-blur-2"></div>
            </div>

            <div className="hero-content">
                <div className={`hero-text-group ${isVisible ? 'animate-fade-in' : ''}`}>
                    <div>
                        <div className="text-highlight animate-fade-right" style={{ animationDelay: '0.2s', animationFillMode: 'forwards', marginBottom: '0.25rem' }}>
                            Hello, my name is
                        </div>
                        <div className="hero-title animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                            <span style={{ color: "white" }}>Daniel Hwang</span>
                        </div>
                        <div className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                            I build <span className="text-glow text-focus">exceptional</span> digital experiences.
                        </div>
                    </div>

                    <p className="hero-description animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'forwards', lineHeight: '1.5rem' }}>
                        I'm a <span className="text-highlight">software engineer</span> specialized in crafting intuitive user interfaces and scalable backend systems —
                        leveraging technology to simplify, streamline, and empower real-world experiences.
                    </p>

                    <div className="hero-button animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
                        <a href={resume} target="blank"><button className="btn">View Resume</button></a>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Hero;
