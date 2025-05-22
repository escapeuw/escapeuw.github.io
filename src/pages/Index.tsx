
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Navbar from "../components/Navbar";
import About from "../components/About";


const Index = () => {
    return (
        <div className="container">
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Skills />

        </div>
    );
};

export default Index;
