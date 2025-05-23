
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";

const Index = () => {
    return (
        <>
            <div className="container">
                <Navbar />
                <Hero />
                <About />
                <Projects />
                <Skills />
            </div>
            <Footer />
        </>
    );
};

export default Index;
