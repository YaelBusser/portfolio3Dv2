// Home.js
import {useRef, useState, useLayoutEffect, useCallback, useEffect} from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import {motion, useTransform, useSpring, useMotionValue, useScroll} from 'framer-motion';
import './index.css';
import {useScrollPercentage} from 'react-scroll-percentage';
import Hero from '../../components/Scenes/Hero';
import About from '../../components/About';
import Projects from '../../components/Projects';
import Me from '../../components/Me';
import Socials from '../../components/Socials';
import Contact from "../../components/Contact";

const pageTransition = {
    initial: {opacity: 0, y: 100},
    animate: {opacity: 1, y: 0, transition: {duration: 0.5}},
    exit: {opacity: 0, y: -100, transition: {duration: 0.5}},
};

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

    const {scrollY} = useScroll();
    const smoothScrollY = useSpring(scrollY, {
        stiffness: 2000,
        damping: 120,
    });

    const aboutOpacity = useTransform(smoothScrollY, [0, 2000], [1, 0]);

    const [containerRef, percentage] = useScrollPercentage({
        threshold: 0.1,
    });

    useEffect(() => {
        scrollPerc.set(percentage);
    }, [percentage]);

    const transformX = useTransform(scrollPerc, [-0.3, 0.55], [3000, -(scrollRange - viewportW)]);
    const projectsOpacity = useTransform(scrollPerc, [0.6, 0.8], [1, -1]);
    const projectsZIndex = useTransform(scrollPerc, [0.5, 0.75], [-1, 1]);
    const projectsY = useTransform(scrollPerc, [0, 5], ['0%', '0%']);
    const springX = useSpring(transformX, {damping: 15, mass: 0.27, stiffness: 100});
    const springOpacity = useSpring(projectsOpacity, {damping: 15, mass: 0.27, stiffness: 100});
    const springY = useSpring(projectsY, {damping: 15, mass: 0.27, stiffness: 100});
    const springZIndex = useSpring(projectsZIndex, {damping: 15, mass: 0.27, stiffness: 100});

    const meOpacity = useTransform(smoothScrollY, [3700, 4100], [1, 0]);
    const contactOpacity = useTransform(smoothScrollY, [3500, 4000], [0, 1]);

    return (
        <motion.div
            ref={containerRef}
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <Socials/>
            <div className="hero">
                <Hero/>
            </div>
            <div className="scroll-container">
                <motion.section id="about" className="about" style={{opacity: aboutOpacity}}>
                    <About/>
                </motion.section>
            </div>
            <div className="scroll-container">
                <motion.section
                    ref={scrollRef}
                    style={{x: springX, opacity: springOpacity, zIndex: springZIndex, y: springY}}
                    className="projects-container"
                >
                    <Projects/>
                </motion.section>
            </div>
            <div ref={ghostRef} style={{height: scrollRange}} className="ghost"/>
            <div className="scroll-container">
                <motion.div
                    className="me"
                    style={{opacity: meOpacity}}
                >
                    <Me/>
                </motion.div>
            </div>
            <div className="scroll-container">
                <motion.div
                    className="contact"
                    style={{opacity: contactOpacity}}
                >
                    <Contact/>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Home;
