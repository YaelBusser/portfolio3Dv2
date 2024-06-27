import {useEffect, useState} from 'react';
import {motion, useMotionValue, useSpring} from 'framer-motion';
import './index.css';

const Cursor = () => {
    const [hovering, setHovering] = useState(false);
    const [hoveringTheme, setHoveringTheme] = useState(false);
    const [highStiffness, setHighStiffness] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = {stiffness: highStiffness ? 500 : 200, damping: 20};
    const x = useSpring(cursorX, springConfig);
    const y = useSpring(cursorY, springConfig);

    useEffect(() => {
        const handleMouseMove = (event: any) => {
            cursorX.set((event.clientX) - (hovering ? 20 : 50));
            cursorY.set((event.clientY) - (hovering ? 20 : 50));

            const target = event.target;
            if (target instanceof Element && (target.tagName === 'A' || target.tagName === 'BUTTON' || target.className === 'content-project' || target.className === 'bg-project')) {
                setHovering(true);
            } else {
                setHovering(false);
            }
            if (target instanceof Element && (target.className === "toggleTheme" || target.className === "block-theme")) {
                setHoveringTheme(true);
            } else {
                setHoveringTheme(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [cursorX, cursorY, hovering, hoveringTheme]);
    useEffect(() => {
        let timeoutId: any;
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
    }, [hovering, highStiffness, hoveringTheme]);

    useEffect(() => {
        if (hovering) {
            setHighStiffness(true);
        }
    }, [hovering]);
    return (
        <motion.div
            className={`custom-cursor ${hovering ? 'hovering' : ''} ${hoveringTheme ? 'hovering-theme' : ''}`}
            style={
                {
                    translateX: x,
                    translateY: y,
                }
            }
        />
    );
};

export default Cursor;
