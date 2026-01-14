import "./index.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDays, faCircle, faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";

const Projects = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className={"allProjects"}>
                <div
                    className={"project-makee"}
                    onClick={() => {
                        sessionStorage.setItem("homeScroll", String(window.scrollY));
                        navigate("/project/makee");
                    }}
                >
                    <div className={"content-project"}>
                        <div className={"top"}>
                            <p className={"text"}>Alternance - Makee<br/>2023-2024 <FontAwesomeIcon icon={faCalendarDays}/>
                            </p>
                            <p className={"button-click"}>
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={"arrow"}/>
                                <FontAwesomeIcon icon={faCircle} className={"circle"}/>
                            </p>
                        </div>
                        <img className={"bg-project"} src={"/images/makee.png"} alt={"makee"}/>
                    </div>
                </div>
                <div
                    className={"lactalis"}
                    onClick={() => {
                        sessionStorage.setItem("homeScroll", String(window.scrollY));
                        navigate("/project/lactalis");
                    }}
                >
                    <div className={"content-project"}>
                        <div className={"top"}>
                            <p className={"text"}>Stage - Lactalis Informatique<br/>2022-2023 <FontAwesomeIcon icon={faCalendarDays}/>
                            </p>
                            <p className={"button-click"}>
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={"arrow"}/>
                                <FontAwesomeIcon icon={faCircle} className={"circle"}/>
                            </p>
                        </div>
                        <img className={"bg-project"} src={"/vite.svg"} alt={"Lactalis Informatique"}/>
                    </div>
                </div>
                <div
                    className={"apv"}
                    onClick={() => {
                        sessionStorage.setItem("homeScroll", String(window.scrollY));
                        navigate("/project/apv");
                    }}
                >
                    <div className={"content-project"}>
                        <div className={"top"}>
                            <p className={"text"}>Auprès De Vous<br/>2024 <FontAwesomeIcon icon={faCalendarDays}/></p>
                            <p className={"button-click"}>
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={"arrow"}/>
                                <FontAwesomeIcon icon={faCircle} className={"circle"}/>
                            </p>
                        </div>
                        <img className={"bg-project"} src={"/images/aupresdevous.png"} alt={"Aupres De Vous"}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;
