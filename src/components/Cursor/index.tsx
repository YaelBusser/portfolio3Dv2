import {useEffect, useState} from 'react';
import {motion, useMotionValue, useSpring} from 'framer-motion';
import './index.css';

const Cursor = () => {
    const [position, setPosition] = useState({x: 0, y: 0});
    const [hovering, setHovering] = useState(false);
    const [highStiffness, setHighStiffness] = useState(false); // Nouvel état pour gérer le temps de maintien du stiffness élevé

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { stiffness: highStiffness ? 1000 : 200, damping: 20};
    const x = useSpring(cursorX, springConfig);
    const y = useSpring(cursorY, springConfig);

    useEffect(() => {
        const handleMouseMove = (event: any) => {
            cursorX.set((event.clientX + window.scrollX) - (hovering ? 30 : 70));
            cursorY.set((event.clientY + window.scrollY) - (hovering ? 30 : 70));

            const target = event.target;
            if (target instanceof Element && (target.tagName === 'A' || target.tagName === 'INPUT')) {
                setHovering(true);
            } else {
                setHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [cursorX, cursorY, hovering]);
    useEffect(() => {
        let timeoutId;
        if (!hovering && highStiffness) {
            timeoutId = setTimeout(() => {
                setHighStiffness(false);
            }, 100);
        }

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [hovering, highStiffness]);

    // Gérer le changement de stiffness lors du passage de hovering à true ou false
    useEffect(() => {
        if (hovering) {
            setHighStiffness(true); // Activer stiffness élevé lorsque hovering est true
        }
    }, [hovering]);
    return (
        <motion.div
            className={`custom-cursor ${hovering ? 'hovering' : ''}`}
            style={{
                translateX: x,
                translateY: y,
            }}
        />
    );
};

export default Cursor;
