import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
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

const navItems = [
    { label: "Projets", id: "projects" },
    { label: "À propos", id: "about-me" },
    { label: "Parcours", id: "experience" },
    { label: "Compétences", id: "skills" },
    { label: "Contact", id: "contact" },
];

const Nav = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isProjectRoute = location.pathname.includes("/project/");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (!element) return;

        const top = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top, behavior: "smooth" });
        setIsMenuOpen(false);
    };

    return (
        <nav className={isProjectRoute ? "project-mode" : ""}>
            <button
                className={`hamburger ${isMenuOpen ? "is-open" : ""}`}
                type="button"
                aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen((prev) => !prev)}
            >
                <span />
                <span />
                <span />
            </button>
            {!isProjectRoute && (
                <motion.div
                    className={`nav-primary ${isMenuOpen ? "is-open" : ""}`}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    {navItems.map((item) => (
                        <motion.button
                            key={item.id}
                            variants={buttonVariants}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollToSection(item.id)}
                        >
                            {item.label}
                        </motion.button>
                    ))}
                </motion.div>
            )}
            {isProjectRoute && (
                <motion.button
                    className="back-button project-back"
                    onClick={() => navigate(-1)}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={buttonVariants}
                    whileTap={{ scale: 0.95 }}
                >
                    <FontAwesomeIcon icon={faArrowLeftLong} className="icon" />
                    <p>Retour</p>
                </motion.button>
            )}
            {!isProjectRoute && <Header />}
        </nav>
    );
};

export default Nav;
