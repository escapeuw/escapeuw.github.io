// src/components/Navbar.tsx
import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo-container">
                    <div className="logo"></div>
                    <div className="navbar-brand" style={{ fontWeight: "700", fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif" }}>
                        dHwang
                        <span className="text-gradient">.dev</span>
                    </div>
                </div>
                <div className="navbar-links">
                    <a href="#projects">Projects</a>
                    <a href="#skills">Skills</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
