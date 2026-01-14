import "./index.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGuitar, faGamepad, faFilm, faDog, faCode, faRocket, faLightbulb, faUsers } from "@fortawesome/free-solid-svg-icons";

const highlights = [
    { icon: faRocket, text: "Développeur Fullstack", subtext: "MBA en cours" },
    { icon: faLightbulb, text: "Passionné d'innovation", subtext: "Simulateurs militaires" },
    { icon: faUsers, text: "Travail d'équipe", subtext: "Méthode Agile" },
];

const Me = () => {
    return (
        <div className={"container-me"}>
            <motion.div 
                className={"card-left"}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <img src={"/images/me.jpg"} className={"photo"} alt="Yaël Busser"/>
                <div className="photo-overlay">
                    <span className="overlay-text">23 ans</span>
                    <span className="overlay-location">Angers, France</span>
                </div>
            </motion.div>
            <motion.div 
                className={"card-right"}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <h2>Qui suis-je ?</h2>
                <p className={"description"}>
                    Je m'appelle <strong>Yaël</strong>, développeur fullstack passionné de <strong>23 ans</strong>. 
                    Actuellement en alternance à l'<strong>École de Cavalerie de Saumur</strong>, je travaille sur 
                    le développement de simulateurs militaires innovants.
                    <br/><br/>
                    Curieux et autodidacte depuis toujours, je suis constamment à la recherche de nouveaux défis 
                    techniques. J'aime explorer les dernières technologies et les mettre en pratique dans des 
                    projets concrets et ambitieux.
                    <br/><br/>
                    Mon objectif : créer des applications modernes et performantes tout en continuant à apprendre 
                    et à me perfectionner dans ce domaine qui me passionne.
                </p>
                
                <div className="highlights-container">
                    {highlights.map((item, index) => (
                        <motion.div 
                            key={index} 
                            className="highlight-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                        >
                            <FontAwesomeIcon icon={item.icon} className="highlight-icon"/>
                            <div className="highlight-text">
                                <span className="highlight-main">{item.text}</span>
                                <span className="highlight-sub">{item.subtext}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className={"my-hobbies"}>
                    <h2>Mes passions</h2>
                    <div className={"icons"}>
                        <motion.div className="hobby-icon" whileHover={{ scale: 1.2, y: -5 }} title="Guitare">
                            <FontAwesomeIcon icon={faGuitar} className={"icon"}/>
                        </motion.div>
                        <motion.div className="hobby-icon" whileHover={{ scale: 1.2, y: -5 }} title="Gaming">
                            <FontAwesomeIcon icon={faGamepad} className={"icon"}/>
                        </motion.div>
                        <motion.div className="hobby-icon" whileHover={{ scale: 1.2, y: -5 }} title="Cinéma">
                            <FontAwesomeIcon icon={faFilm} className={"icon"}/>
                        </motion.div>
                        <motion.div className="hobby-icon" whileHover={{ scale: 1.2, y: -5 }} title="Animaux">
                            <FontAwesomeIcon icon={faDog} className={"icon"}/>
                        </motion.div>
                        <motion.div className="hobby-icon" whileHover={{ scale: 1.2, y: -5 }} title="Code">
                            <FontAwesomeIcon icon={faCode} className={"icon"}/>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Me;
