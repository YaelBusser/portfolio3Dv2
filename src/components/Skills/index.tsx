import "./index.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faCode, 
    faDatabase, 
    faServer, 
    faDesktop, 
    faGlobe,
    faWrench,
    faLanguage
} from "@fortawesome/free-solid-svg-icons";
import { 
    faReact, 
    faVuejs, 
    faNodeJs, 
    faPhp, 
    faLaravel,
    faPython,
    faJs,
    faHtml5,
    faCss3Alt
} from "@fortawesome/free-brands-svg-icons";

const skillCategories = [
    {
        title: "Frontend",
        icon: faGlobe,
        skills: [
            { name: "React", icon: faReact, color: "#61DAFB" },
            { name: "Vue.js 3", icon: faVuejs, color: "#4FC08D" },
            { name: "React Native", icon: faReact, color: "#61DAFB" },
            { name: "Next.js", icon: faReact, color: "#ffffff" },
            { name: "Three.js", icon: faCode, color: "#049EF4" },
            { name: "Tailwind", icon: faCss3Alt, color: "#38B2AC" },
        ]
    },
    {
        title: "Backend",
        icon: faServer,
        skills: [
            { name: "Node.js", icon: faNodeJs, color: "#339933" },
            { name: "Express", icon: faNodeJs, color: "#000000" },
            { name: "Laravel", icon: faLaravel, color: "#FF2D20" },
            { name: "PHP", icon: faPhp, color: "#777BB4" },
        ]
    },
    {
        title: "Base de données",
        icon: faDatabase,
        skills: [
            { name: "MySQL", icon: faDatabase, color: "#4479A1" },
            { name: "MariaDB", icon: faDatabase, color: "#003545" },
            { name: "MongoDB", icon: faDatabase, color: "#47A248" },
            { name: "SQL", icon: faDatabase, color: "#CC2927" },
        ]
    },
    {
        title: "Applications Lourdes",
        icon: faDesktop,
        skills: [
            { name: "C#", icon: faCode, color: "#239120" },
            { name: "C++", icon: faCode, color: "#00599C" },
        ]
    },
    {
        title: "Fondamentaux",
        icon: faCode,
        skills: [
            { name: "JavaScript", icon: faJs, color: "#F7DF1E" },
            { name: "HTML5", icon: faHtml5, color: "#E34F26" },
            { name: "CSS3", icon: faCss3Alt, color: "#1572B6" },
            { name: "Python", icon: faPython, color: "#3776AB" },
        ]
    },
    {
        title: "Autres",
        icon: faWrench,
        skills: [
            { name: "Git", icon: faCode, color: "#F05032" },
            { name: "Agile/Scrum", icon: faCode, color: "#6DB33F" },
            { name: "Management", icon: faCode, color: "#FF6B6B" },
            { name: "WordPress", icon: faCode, color: "#21759B" },
        ]
    }
];

const languages = [
    { name: "Français", level: "Natif", percentage: 100 },
    { name: "Anglais", level: "Professionnel", percentage: 75 },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" }
    }
};

const Skills = () => {
    return (
        <div className="skills-content">
            <div className="skills-container">
                <motion.div 
                    className="skills-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {skillCategories.map((category, index) => (
                        <motion.div 
                            key={index} 
                            className="skill-category"
                            variants={itemVariants}
                        >
                            <div className="category-header">
                                <FontAwesomeIcon icon={category.icon} className="category-icon" />
                                <h3>{category.title}</h3>
                            </div>
                            <div className="skills-tags">
                                {category.skills.map((skill, i) => (
                                    <motion.div 
                                        key={i} 
                                        className="skill-tag"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        style={{ borderColor: skill.color }}
                                    >
                                        <FontAwesomeIcon 
                                            icon={skill.icon} 
                                            style={{ color: skill.color }}
                                        />
                                        <span>{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Section Langues */}
                <motion.div 
                    className="languages-section"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="category-header">
                        <FontAwesomeIcon icon={faLanguage} className="category-icon" />
                        <h3>Langues</h3>
                    </div>
                    <div className="languages-grid">
                        {languages.map((lang, index) => (
                            <div key={index} className="language-item">
                                <div className="language-info">
                                    <span className="language-name">{lang.name}</span>
                                    <span className="language-level">{lang.level}</span>
                                </div>
                                <div className="language-bar">
                                    <motion.div 
                                        className="language-progress"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${lang.percentage}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;
