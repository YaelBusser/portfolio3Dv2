import {useLocation, useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeftLong} from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import Header from "../Header";

const Nav = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isProjectRoute = location.pathname.includes("/project/");
    return (
        <nav>
            <div className="nav-primary">
                <button>About</button>
                <button>Projects</button>
                <button>Contact</button>
            </div>
            {isProjectRoute && (
                <button className="back-button" onClick={() => navigate(-1)}>
                    <FontAwesomeIcon icon={faArrowLeftLong} className="icon"/>
                    <p>back</p>
                </button>
            )}
            <Header/>
        </nav>
    );
};

export default Nav;
