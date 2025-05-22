import React, { useState, type JSX } from "react";
import "../assets/styles.css"; // 스타일은 따로 관리

const Navbar = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo-container">
                    <div className="logo"></div>
                    <div className="navbar-brand">
                        dHwang<span className="text-gradient">.dev</span>
                    </div>
                </div>

                <div className={`navbar-links ${isOpen ? "active" : ""}`}>
                    <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                    <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
                    <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
                    <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
                </div>

                <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
