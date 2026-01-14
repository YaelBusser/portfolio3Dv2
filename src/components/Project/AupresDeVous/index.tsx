import { motion } from "framer-motion";
import "../index.css";
import "./index.css";

const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.35, ease: "easeIn" } },
};

const AupresDeVous = () => {
    return (
        <motion.div
            className="container-project project-detail"
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <header className="project-hero">
                <p className="project-kicker">Auprès de vous</p>
                <h1 className="project-title">Plateforme d'entraide et de services</h1>
                <p className="project-subtitle">
                    Application qui met en relation des aidants et des personnes ayant besoin
                    d'aide, avec des annonces claires et une messagerie simple.
                </p>
                <img
                    className="project-cover"
                    src="/images/aupresdevous.png"
                    alt="Aperçu du projet Auprès de vous"
                />
            </header>

            <section className="project-section">
                <h2>Objectif</h2>
                <p>
                    Faciliter la mise en relation locale via des demandes et des offres de services,
                    tout en assurant une experience utilisateur securisee et fluide.
                </p>
            </section>

            <section className="project-section">
                <h2>Fonctionnalites essentielles</h2>
                <ul>
                    <li>Inscription, connexion et securisation via JWT.</li>
                    <li>Profils utilisateurs avec avatar (upload + suppression).</li>
                    <li>Creation et gestion d'annonces (demandes / offres).</li>
                    <li>Recherche et filtrage par categories et mots-cles.</li>
                    <li>Contacts + messagerie pour echanger entre utilisateurs.</li>
                </ul>
            </section>

            <section className="project-section">
                <h2>Architecture & stack</h2>
                <ul>
                    <li>Front mobile: React Native (MVVM en couches).</li>
                    <li>Back: Node.js, Express, Sequelize.</li>
                    <li>Base de donnees: MariaDB.</li>
                    <li>Auth: JWT, middleware securite.</li>
                    <li>Fichiers: Multer pour les images.</li>
                </ul>
            </section>

            <section className="project-section">
                <h2>Repos</h2>
                <div className="project-links">
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/YaelBusser/AupresDeVousApi"
                    >
                        API (Back-end)
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/YaelBusser/aupresdevousfront"
                    >
                        Front (React Native)
                    </a>
                </div>
            </section>
        </motion.div>
    );
};

export default AupresDeVous;
