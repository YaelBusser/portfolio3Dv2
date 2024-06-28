import { useRef, useState, useLayoutEffect, useCallback, useEffect } from "react";
import ResizeObserver from "resize-observer-polyfill";
import { motion, useTransform, useSpring, useMotionValue, useScroll } from "framer-motion";
import "./index.css";
import { useScrollPercentage } from "react-scroll-percentage";
import Hero from "../../components/Scenes/Hero";
import About from "../../components/About";
import Projects from "../../components/Projects";
import Me from "../../components/Me";
import Socials from "../../components/Socials";

const Home = () => {
    const scrollRef = useRef<any>(null);
    const ghostRef = useRef<any>(null);
    const [scrollRange, setScrollRange] = useState(0);
    const [viewportW, setViewportW] = useState(0);
    const scrollPerc = useMotionValue(0);

    useLayoutEffect(() => {
        if (scrollRef.current) {
            setScrollRange(scrollRef.current.scrollWidth);
        }
    }, [scrollRef]);

    const onResize = useCallback((entries: any) => {
        for (let entry of entries) {
            setViewportW(entry.contentRect.width);
        }
    }, []);

    useLayoutEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => onResize(entries));
        resizeObserver.observe(ghostRef.current);
        return () => resizeObserver.disconnect();
    }, [onResize]);

    const { scrollY } = useScroll();
    const smoothScrollY = useSpring(scrollY, {
        stiffness: 2000,
        damping: 120,
    });

    const aboutOpacity = useTransform(smoothScrollY, [0, 300], [1, 0]);
    const aboutScale = useTransform(smoothScrollY, [0, 300], [1, 0.9]);

    const [containerRef, percentage] = useScrollPercentage({
        threshold: 0.1,
    });

    useEffect(() => {
        scrollPerc.set(percentage);
    }, [percentage]);

    const transformX = useTransform(scrollPerc, [-0.3, .7], [2000, -(scrollRange - viewportW)]);
    const projectsOpacity = useTransform(scrollPerc, [0.7, 1], [1, 0]);
    const projectsZIndex = useTransform(scrollPerc, [0.5, 0.75], [-1, 1]);
    const projectsY = useTransform(scrollPerc, [0, 5], ["0%", "-10%"]);
    const springX = useSpring(transformX, { damping: 15, mass: 0.27, stiffness: 100 });
    const springOpacity = useSpring(projectsOpacity, { damping: 15, mass: 0.27, stiffness: 100 });
    const springY = useSpring(projectsY, { damping: 15, mass: 0.27, stiffness: 100 });
    const springZIndex = useSpring(projectsZIndex, { damping: 15, mass: 0.27, stiffness: 100 });

    return (
        <div ref={containerRef}>
            <Socials/>
            <div className="hero">
                <Hero />
            </div>
            <div className="scroll-container">
            <motion.section id={"about"} className="about" style={{ opacity: aboutOpacity, scale: aboutScale }}>
                <About />
            </motion.section>
            </div>
            <div className="scroll-container">
                <motion.section
                    ref={scrollRef}
                    style={{ x: springX, opacity: springOpacity, zIndex: springZIndex, y: springY }}
                    className="projects-container"
                >
                    <Projects />
                </motion.section>
            </div>
            <div ref={ghostRef} style={{ height: scrollRange }} className="ghost" />
            <div className="scroll-container">
                <motion.div className="me">
                    <Me />
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
