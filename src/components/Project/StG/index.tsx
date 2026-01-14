import { motion } from "framer-motion";
import "../index.css";
import "./index.css";

const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.35, ease: "easeIn" } },
};

const StG = () => {
    return (
        <motion.div
            className="container-project project-detail"
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <header className="project-hero">
                <p className="project-kicker">Alternance - StG (EBRC Jaguar)</p>
                <h1 className="project-title">Simulateur transitoire Générique</h1>
                <p className="project-subtitle">
                    Projet interne des Écoles Militaires de Saumur pour combler le retard des
                    simulateurs industriels et garantir une formation opérationnelle immédiate.
                </p>
                <img
                    className="project-cover"
                    src="/images/stg1.png"
                    alt="EBRC Jaguar - StG"
                />
            </header>

            <section className="project-section">
                <h2>Contexte</h2>
                <p>
                    Le StG est développé au sein de l'Atelier 3D (DFS - Écoles Militaires de Saumur)
                    par une équipe de 4 personnes (civils + militaire). L'objectif est de fournir un
                    simulateur transitoire fiable, rapidement déployable et ajusté en continu avec
                    les instructeurs et les stagiaires.
                </p>
            </section>

            <section className="project-section">
                <h2>Architecture & base technique</h2>
                <ul>
                    <li>Base technologique: VBS4, coeur de la simulation.</li>
                    <li>Architecture en microservices pour enrichir et modulariser les briques.</li>
                    <li>Postes interconnectés permettant l'entrainement collectif type peloton.</li>
                    <li>Évolutivité pensée pour suivre l'arrivée des versions opérationnelles.</li>
                </ul>
            </section>

            <section className="project-section">
                <h2>Approche projet</h2>
                <ul>
                    <li>Co-construction continue avec les instructeurs (retours terrain).</li>
                    <li>Cycles courts pour intégrer rapidement les besoins pédagogiques.</li>
                    <li>Décisions rapides grâce à une équipe réduite et dédiée.</li>
                    <li>Priorité à l'efficacité opérationnelle et à la pertinence métier.</li>
                </ul>
            </section>

            <section className="project-section">
                <h2>Mes missions</h2>
                <ul>
                    <li>Conception de l'IHM et du tableau de bord Jaguar (usage pédagogique).</li>
                    <li>Programmes et scripts pour la maintenabilité et l'outillage.</li>
                    <li>Systèmes interphone/radio pour l'équipage et l'instructeur.</li>
                    <li>Structuration technique: versioning, normes communes, collaboration.</li>
                    <li>Encadrement et accompagnement de stagiaires.</li>
                </ul>
            </section>

            <section className="project-section">
                <h2>Pourquoi ce projet compte</h2>
                <p>
                    Le StG répond à un besoin critique: former efficacement les équipages Jaguar
                    malgré le retard des solutions industrielles. Il démontre qu'un développement
                    interne, agile et proche des utilisateurs, peut produire un outil opérationnel
                    pertinent, évolutif et économiquement maîtrisé.
                </p>
            </section>
        </motion.div>
    );
};

export default StG;
