import "./index.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDays, faCircle, faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
    return (
        <>
            <div className={"allProjects"}>
                <div className={"project"}>
                    <div className={"content-project"}>
                        <div className={"top"}>
                            <p className={"text"}>work-study - Makee<br/>2023-2024 <FontAwesomeIcon icon={faCalendarDays}/>
                            </p>
                            <p className={"button-click"}>
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={"arrow"}/>
                                <FontAwesomeIcon icon={faCircle} className={"circle"}/>
                            </p>
                        </div>
                        <img className={"bg-project"} src={"/images/makee.png"} alt={"makee"}/>
                    </div>
                </div>
                <div className={"project2"}>
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
                <div className={"project2"}>
                    <div className={"content-project"}>
                        <div className={"top"}>
                            <p className={"text"}>Project 001<br/>2024 <FontAwesomeIcon icon={faCalendarDays}/></p>
                            <p className={"button-click"}>
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={"arrow"}/>
                                <FontAwesomeIcon icon={faCircle} className={"circle"}/>
                            </p>
                        </div>
                        <img className={"bg-project"} src={"/images/aupresdevous.png"} alt={"Aupres De Vous"}/>
                    </div>
                </div>
                <div className={"project2"}>
                    <div className={"content-project"}>
                        <div className={"top"}>
                            <p className={"text"}>Project 001<br/>2024 <FontAwesomeIcon icon={faCalendarDays}/></p>
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
