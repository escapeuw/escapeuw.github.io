
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Navbar from "../components/Navbar";

const Index = () => {
    return (
        <div className="container">
            <Navbar />
            <Hero />
            <Projects />
            <Skills />

        </div>
    );
};

export default Index;
