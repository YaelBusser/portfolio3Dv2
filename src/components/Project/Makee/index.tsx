import { motion } from "framer-motion";
import "../index.css";
import "./index.css";

const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.35, ease: "easeIn" } },
};

const Makee = () => {
    return (
        <motion.div
            className="container-project project-detail"
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <header className="project-hero">
                <p className="project-kicker">Alternance - Makee</p>
                <h1 className="project-title">Plateforme de challenges & hackathons</h1>
                <p className="project-subtitle">
                    Makee permet aux organisateurs de creer et gerer des challenges sur mesure,
                    tout en offrant une experience fluide pour les participants.
                </p>
                <img
                    className="project-cover"
                    src="/images/makee.png"
                    alt="Aperçu du projet Makee"
                />
            </header>

            <section className="project-section">
                <h2>Objectif</h2>
                <p>
                    Centraliser la creation, la gestion et le suivi des challenges, avec des outils
                    simples pour les organisateurs et un parcours clair pour les participants.
                </p>
            </section>

            <section className="project-section">
                <h2>Fonctionnalites clees</h2>
                <div className="project-columns">
                    <div>
                        <h3>Organisateurs</h3>
                        <ul>
                            <li>Creation personnalisee de challenges.</li>
                            <li>Gestion en temps reel des inscriptions et projets.</li>
                            <li>Regles sur mesure et suivi des etapes.</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Participants</h3>
                        <ul>
                            <li>Inscription simple et rapide.</li>
                            <li>Suivi de progression et feedbacks.</li>
                            <li>Interface claire pour soumettre son travail.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="project-section">
                <h2>Innovation</h2>
                <p>
                    Mise en place d&apos;algorithmes de correspondance pour proposer des challenges
                    pertinents et garantir une plateforme evolutive.
                </p>
            </section>

            <section className="project-section">
                <h2>Stack technique</h2>
                <ul>
                    <li>Front: React + Material UI + TypeScript.</li>
                    <li>Back: Node.js, Express, Sequelize.</li>
                    <li>Database: MySQL.</li>
                    <li>CI/CD & outils: Git, GitLab, Docker.</li>
                </ul>
            </section>

            <section className="project-section">
                <h2>Mes contributions</h2>
                <ul>
                    <li>Integration front et mise en place d&apos;interfaces React.</li>
                    <li>Connexion API et affichage de donnees dynamiques.</li>
                    <li>Creation d&apos;endpoints et migrations base de donnees.</li>
                    <li>Routes protegees et gestion des permissions.</li>
                    <li>Mise en place i18n pour la traduction.</li>
                    <li>Tests unitaires et d&apos;integration.</li>
                </ul>
            </section>
        </motion.div>
    );
};

export default Makee;
