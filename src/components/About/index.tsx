import "./index.css";
import {
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
    motion
} from "framer-motion";
import {wrap} from "@motionone/utils";
import {useRef} from "react";

interface ParallaxProps {
    children: string;
    baseVelocity: number;
}

function ParallaxText({children, baseVelocity = 100}: ParallaxProps) {
    const baseX = useMotionValue(0);
    const {scrollY} = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((_t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 3000);

        /**
         * This is what changes the direction of the scroll once we
         * switch scrolling directions.
         */
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    /**
     * The number of times to repeat the child text should be dynamically calculated
     * based on the size of the text and viewport. Likewise, the x motion value is
     * currently wrapped between -20 and -45% - this 25% is derived from the fact
     * we have four children (100% / 4). This would also want deriving from the
     * dynamically generated number of children.
     */
    return (
        <div className="parallax">
            <motion.div className="scroller" style={{x}}>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
            </motion.div>
        </div>
    );
}

const About = () => {
    return (
        <div className={"presentation"}>
            <div className={"content-presentation"}>
                <h1>Salut, je suis <br/>Yaël Busser</h1>
                <p>Développeur fullstack</p>
                <div className={"buttons"}>
                    <motion.a
                        className={"secondary-button"}
                        href="/files/cv_yael_busser.pdf"
                        download="CV_Yael_Busser.pdf"
                        whileTap={{scale: 0.95}}
                    >
                        Mon CV
                    </motion.a>
                    <motion.a
                        className={"primary-button"}
                        href="#contact"
                        whileTap={{scale: 0.95}}
                    >
                        Me contacter
                    </motion.a>
                </div>
                <div className={"container-parallaxtext"}>
                    <ParallaxText baseVelocity={-5}>
                        HTML CSS JS PHP WORDPRESS REACT REACT-NATIVE VUEJS 3 NEXT TAILWIND THREEJS R3F
                    </ParallaxText>
                    <ParallaxText baseVelocity={5}>
                        NODEJS EXPRESS LARAVEL API SQL NOSQL MYSQL MARIADB MONGODB C# C++ PYTHON
                    </ParallaxText>
                    <ParallaxText baseVelocity={-4}>
                        MATERIALUI FRAMER-MOTION METHODE AGILE GESTION DE PROJET MANAGEMENT
                    </ParallaxText>
                </div>
            </div>
        </div>
    );
}

export default About;
