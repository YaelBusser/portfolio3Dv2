import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"; // Importez faLinkedin depuis free-brands-svg-icons
import "./index.css";

const Socials = () => {
    return (
        <div className="socials">
            <div className={"content-socials"}>
                <a href="https://github.com/yaelbusser" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="icon"/>
                </a>
                <a href="https://www.linkedin.com/votre_nom_utilisateur_linkedin" target="_blank"
                   rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="icon"/>
                </a>
            </div>
        </div>
    );
};

export default Socials;
