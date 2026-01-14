import { motion } from "framer-motion";
import "../index.css";
import "./index.css";

const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.35, ease: "easeIn" } },
};

const Lactalis = () => {
    return (
        <motion.div
            className="container-project project-detail"
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <header className="project-hero">
                <p className="project-kicker">Stage - Lactalis Informatique</p>
                <h1 className="project-title">Automatisation SAP & ABAP</h1>
                <p className="project-subtitle">
                    Lactalis est une multinationale française de l&apos;industrie agroalimentaire,
                    leader mondial des produits laitiers.
                </p>
            </header>

            <section className="project-section">
                <h2>Contexte</h2>
                <p>
                    Pendant ce stage, j&apos;ai utilisé SAP, l&apos;ERP le plus utilisé au monde
                    pour la gestion globale d&apos;entreprise. J&apos;ai ainsi découvert le
                    développement en ABAP et l&apos;écosystème SAP.
                </p>
            </section>

            <section className="project-section">
                <h2>Mission principale</h2>
                <p>
                    Automatiser l&apos;envoi par mail d&apos;un report SAP afin d&apos;informer
                    les Stream Leaders (Responsables Fonctionnels) sur les OTs (Ordres de transport)
                    et leurs codes retour chaque semaine.
                </p>
                <ul>
                    <li>Conception d&apos;un programme ABAP dédié.</li>
                    <li>Génération et diffusion automatique du report.</li>
                    <li>Validation avec les équipes métiers.</li>
                </ul>
            </section>

            <section className="project-section">
                <h2>Découvrir le projet</h2>
                <p>
                    Pour comprendre le fonctionnement d&apos;un programme en ABAP, je vous invite à
                    observer comment j&apos;ai mis en place mon premier programme en ABAP.
                </p>
                <div className="project-links">
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://docs.google.com/document/d/1mzbJIjaw9wXK5clw3Z9cxhpydM7A8ZIg51GMzey3GLo/edit?tab=t.0"
                    >
                        Voir mon programme ABAP
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://docs.google.com/document/d/1NUWDR-IRqNy2OyYgmWavpTFX0syrK8IMp1vcs3YinMI/edit?tab=t.0"
                    >
                        Voir la démarche du projet
                    </a>
                </div>
            </section>

            <section className="project-section">
                <h2>Autres missions</h2>
                <p>
                    J&apos;ai également participé à plusieurs missions complémentaires, telles que
                    l&apos;assignation de rôles utilisateurs et la gestion d&apos;utilisateurs.
                </p>
            </section>

            <section className="project-section project-thanks">
                <h2>Remerciements</h2>
                <p>
                    Merci à mon tuteur Louis Huaumé pour la confiance accordée, ainsi qu&apos;à
                    Jean-Marie Gérard et Fabrice Le Devec pour leur aide précieuse.
                </p>
            </section>
        </motion.div>
    );
};

export default Lactalis;
