import Hero from "../../components/Scenes/Hero";
import "./index.css";
import About from "../../components/About";
import Header from "../../components/Header";
import {motion, useScroll, useTransform, useSpring} from 'framer-motion';
import Projects from "../../components/Projects";

const Home = () => {
    const {scrollY} = useScroll();

    const smoothScrollY = useSpring(scrollY, {
        stiffness: 100,
        damping: 30
    });

    const aboutOpacity = useTransform(smoothScrollY, [0, 300], [1, 0]);
    const aboutScale = useTransform(smoothScrollY, [0, 300], [1, 0.9]);

    const projectsY = useTransform(smoothScrollY, [0, 300], [300, 0]);

    return (
        <>
            <main>
                <Header/>
                <div className="hero">
                    <Hero/>
                </div>
                <motion.section
                    className="about"
                    style={{opacity: aboutOpacity, scale: aboutScale}}
                >
                    <About/>
                </motion.section>
                <motion.section
                    className="projects"
                    style={{y: projectsY}}
                >
                    <Projects/>
                </motion.section>
            </main>
        </>
    );
}

export default Home;
