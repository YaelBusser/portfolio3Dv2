// Home.js
import './index.css';
import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from '../../components/Scenes/Hero';
import About from '../../components/About';
import Projects from '../../components/Projects';
import Me from '../../components/Me';
import Socials from '../../components/Socials';
import Contact from "../../components/Contact";
import Experience from "../../components/Experience";
import Skills from "../../components/Skills";

interface StackSectionProps {
    children: React.ReactNode;
    className?: string;
    index: number;
    id: string;
}

const StackSection = ({ children, className = '', index, id }: StackSectionProps) => {
    const ref = useRef<HTMLDivElement>(null);
    
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 85%", "start 15%"]
    });

    // Transform scroll progress to Y position and opacity
    const y = useTransform(scrollYProgress, [0, 1], ["60%", "0%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.6, 1, 1]);

    // First section doesn't need animation
    if (index === 0) {
        return (
            <div id={id} ref={ref} className={`stack-section ${className}`} style={{ zIndex: index + 1 }}>
                {children}
            </div>
        );
    }

    return (
        <div id={id} ref={ref} className="stack-section-wrapper">
            <motion.div 
                className={`stack-section ${className}`}
                style={{ 
                    y,
                    opacity,
                    zIndex: index + 1,
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};

const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.35, ease: "easeIn" } },
};

const Home = () => {
    useEffect(() => {
        const savedScroll = sessionStorage.getItem("homeScroll");
        if (savedScroll) {
            const top = Number(savedScroll);
            if (!Number.isNaN(top)) {
                window.scrollTo({ top, left: 0, behavior: "auto" });
            }
            sessionStorage.removeItem("homeScroll");
        }
    }, []);

    return (
        <motion.div
            className="home-container"
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <Socials />
            
            {/* Section 1: Hero */}
            <StackSection id="hero" index={0} className="hero-section">
                <Hero />
                <About />
            </StackSection>

            {/* Section 2: Projets */}
            <StackSection id="projects" index={1} className="projects-section">
                <div className="section-content">
                    <div className="section-title">
                        <h2>Mes Projets</h2>
                    </div>
                    <Projects />
                </div>
            </StackSection>

            {/* Section 3: Qui suis-je */}
            <StackSection id="about-me" index={2} className="me-section">
                <div className="section-content">
                    <Me />
                </div>
            </StackSection>

            {/* Section 4: Mon Parcours */}
            <StackSection id="experience" index={3} className="experience-section">
                <div className="section-content">
                    <div className="section-title">
                        <h2>Mon Parcours</h2>
                    </div>
                    <Experience />
                </div>
            </StackSection>

            {/* Section 5: Compétences */}
            <StackSection id="skills" index={4} className="skills-section">
                <div className="section-content">
                    <div className="section-title">
                        <h2>Mes Compétences</h2>
                    </div>
                    <Skills />
                </div>
            </StackSection>

            {/* Section 6: Contact */}
            <StackSection id="contact" index={5} className="contact-section">
                <div className="section-content">
                    <div className="section-title">
                        <h2>Me Contacter</h2>
                    </div>
                    <Contact />
                </div>
            </StackSection>
        </motion.div>
    );
};

export default Home;
