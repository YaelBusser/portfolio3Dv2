import "./index.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGraduationCap, faRocket, faCode, faServer, faUsers } from "@fortawesome/free-solid-svg-icons";

const experiences = [
    {
        period: "2024 - 2026",
        title: "Développeur Fullstack",
        company: "École de Cavalerie - DFS Saumur",
        type: "Alternance",
        description: [
            "Développement du Simulateur transitoire Générique (StG) de l'EBRC Jaguar",
            "Tableau de bord, scripts bat/ps, communication radio",
            "Couplage de plusieurs simulateurs, découverte VBS4",
            "Encadrement de stagiaires",
            "Méthodologie AGILE avec instructeurs militaires"
        ],
        icon: faRocket,
        highlight: true
    },
    {
        period: "2023 - 2024",
        title: "Développeur Web",
        company: "Challenkers - Laval",
        type: "Alternance",
        description: [
            "Développement front-end & back-end",
            "Plateforme de gestion d'hackathons",
            "Méthode agile SCRUM en équipe"
        ],
        icon: faCode,
        highlight: false
    },
    {
        period: "2022 - 2023",
        title: "Développeur",
        company: "Lactalis Informatique - Laval",
        type: "Stage",
        description: [
            "Découverte et utilisation de l'ERP SAP",
            "Développements de programmes en ABAP"
        ],
        icon: faServer,
        highlight: false
    }
];

const formations = [
    {
        period: "2024 - 2026",
        title: "MBA Développeur Fullstack",
        school: "MyDigitalSchool - Angers",
        level: "BAC+5"
    },
    {
        period: "2023 - 2024",
        title: "Bachelor Concepteur d'Applications Web",
        school: "MyDigitalSchool - Angers",
        level: "BAC+3"
    },
    {
        period: "2021 - 2023",
        title: "BTS SIO Option SLAM",
        school: "Lycée Chevrollier - Angers",
        level: "BAC+2"
    },
    {
        period: "2018 - 2020",
        title: "Bac Scientifique SI Option ISN",
        school: "Lycée Victor Hugo - Château-Gontier",
        level: "BAC"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

const Experience = () => {
    return (
        <div className="experience-content">
            <div className="experience-container">
                {/* Section Expériences */}
                <motion.div 
                    className="exp-column"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="section-header">
                        <FontAwesomeIcon icon={faBriefcase} className="section-icon" />
                        <h2>Expériences</h2>
                    </div>
                    <div className="timeline">
                        {experiences.map((exp, index) => (
                            <motion.div 
                                key={index} 
                                className={`timeline-item ${exp.highlight ? 'highlight' : ''}`}
                                variants={itemVariants}
                            >
                                <div className="timeline-marker">
                                    <FontAwesomeIcon icon={exp.icon} />
                                </div>
                                <div className="timeline-content">
                                    <span className="period">{exp.period}</span>
                                    <span className="type-badge">{exp.type}</span>
                                    <h3>{exp.title}</h3>
                                    <p className="company">{exp.company}</p>
                                    <ul className="description-list">
                                        {exp.description.map((desc, i) => (
                                            <li key={i}>{desc}</li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Section Formation */}
                <motion.div 
                    className="formation-column"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="section-header">
                        <FontAwesomeIcon icon={faGraduationCap} className="section-icon" />
                        <h2>Formation</h2>
                    </div>
                    <div className="formation-list">
                        {formations.map((form, index) => (
                            <motion.div 
                                key={index} 
                                className="formation-item"
                                variants={itemVariants}
                            >
                                <div className="formation-level">{form.level}</div>
                                <div className="formation-info">
                                    <span className="period">{form.period}</span>
                                    <h3>{form.title}</h3>
                                    <p className="school">{form.school}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Experience;
