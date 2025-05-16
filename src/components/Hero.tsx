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
                            <span style={{ color: "white" }}>Daniel Hwang</span>
                        </div>
                        <div className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                            I build <span className="text-glow text-focus">exceptional</span> digital experiences.
                        </div>
                    </div>

                    <p className="hero-description animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                        I'm a <span className="text-highlight">software engineer</span> specialized in crafting intuitive user interfaces and scalable backend systems —
                        leveraging technology to simplify, streamline, and empower real-world experiences.
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
