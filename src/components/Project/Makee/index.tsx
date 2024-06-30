import { motion } from "framer-motion";
import "../index.css";

const pageTransition = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
};

const Makee = () => {
    return (
        <motion.div
            className="container-project"
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {/* Contenu de Makee */}
        </motion.div>
    );
};

export default Makee;
