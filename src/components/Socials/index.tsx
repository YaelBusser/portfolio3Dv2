import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import "./index.css";

const Socials = () => {
    return (
        <div className="socials">
            <div className={"content-socials"}>
                <a href="https://github.com/yaelbusser" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="icon-social"/>
                </a>
                <a href="https://linkedin.com/in/ya%C3%ABl-busser/" target="_blank"
                   rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="icon-social"/>
                </a>
            </div>
        </div>
    );
};

export default Socials;
