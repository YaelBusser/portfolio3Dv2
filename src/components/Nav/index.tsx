import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "./index.css";
import Header from "../Header";

const buttonVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

const Nav = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isProjectRoute = location.pathname.includes("/project/");

    return (
        <nav>
            <motion.div className="nav-primary" initial="initial" animate="animate" exit="exit">
                <motion.button variants={buttonVariants} whileTap={{ scale: 0.95 }}>
                    About
                </motion.button>
                <motion.button variants={buttonVariants} whileTap={{ scale: 0.95 }}>
                    Projects
                </motion.button>
                <motion.button variants={buttonVariants} whileTap={{ scale: 0.95 }}>
                    Contact
                </motion.button>
            </motion.div>
            {isProjectRoute && (
                <motion.button
                    className="back-button"
                    onClick={() => navigate(-1)}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={buttonVariants}
                    whileTap={{ scale: 0.95 }}
                >
                    <FontAwesomeIcon icon={faArrowLeftLong} className="icon" />
                    <p>back</p>
                </motion.button>
            )}
            <Header />
        </nav>
    );
};

export default Nav;
