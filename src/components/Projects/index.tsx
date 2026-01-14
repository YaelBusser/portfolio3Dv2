import "./index.css";
import type {SyntheticEvent} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDays, faCircle, faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import {useEffect, useRef} from "react";

const Projects = () => {
    const navigate = useNavigate();
    const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

    const calculateCardRatio = (image: HTMLImageElement) => {
        const card = image.closest(".project-card") as HTMLElement | null;
        if (!card) return;

        const ratio = image.naturalWidth / image.naturalHeight;
        if (!Number.isFinite(ratio) || ratio <= 0) return;

        card.style.setProperty("--card-ratio", ratio.toString());

        // Attendre que le layout soit calculé pour ajuster la largeur selon le contenu réel
        requestAnimationFrame(() => {
            const isContain = image.classList.contains("bg-project--contain");
            if (!isContain || image.naturalWidth === 0) return;

            const cardHeight = card.offsetHeight;
            const cardWidth = card.offsetWidth;
            const minCardWidth = parseFloat(getComputedStyle(card).minWidth) || 200;

            // Calculer la taille réelle à laquelle l'image sera affichée avec object-fit: contain
            const imageNaturalWidth = image.naturalWidth;
            const imageNaturalHeight = image.naturalHeight;
            
            // Calculer l'échelle pour que l'image rentre dans la card (object-fit: contain)
            const scaleX = cardWidth / imageNaturalWidth;
            const scaleY = cardHeight / imageNaturalHeight;
            const scale = Math.min(scaleX, scaleY);
            
            // Taille réelle de l'image affichée dans la card
            const displayedImageWidth = imageNaturalWidth * scale;
            
            // Si l'image affichée est plus petite que la card, réduire la card pour correspondre exactement
            if (displayedImageWidth < cardWidth * 0.95) {
                // La largeur optimale correspond à la taille réelle de l'image affichée
                const optimalWidth = Math.max(displayedImageWidth, minCardWidth);
                
                if (optimalWidth < cardWidth) {
                    card.style.width = `${optimalWidth}px`;
                    card.style.maxWidth = `${optimalWidth}px`;
                }
            }
        });
    };

    const handleProjectImageLoad = (event: SyntheticEvent<HTMLImageElement>) => {
        const image = event.currentTarget;
        calculateCardRatio(image);
    };

    useEffect(() => {
        // Vérifier si les images sont déjà chargées (cache du navigateur)
        imageRefs.current.forEach((image) => {
            if (image && image.complete && image.naturalWidth > 0) {
                calculateCardRatio(image);
            }
        });

        // Réajuster les cards lors du redimensionnement
        const handleResize = () => {
            imageRefs.current.forEach((image) => {
                if (image && image.complete && image.naturalWidth > 0) {
                    calculateCardRatio(image);
                }
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <>
            <div className={"allProjects"}>
                <div
                    className={"project-card stg"}
                    onClick={() => {
                        sessionStorage.setItem("homeScroll", String(window.scrollY));
                        navigate("/project/stg");
                    }}
                >
                    <div className={"content-project"}>
                        <div className={"top"}>
                            <p className={"text"}>Alternance - StG<br/>2024-2026 <FontAwesomeIcon icon={faCalendarDays}/>
                            </p>
                            <p className={"button-click"}>
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={"arrow"}/>
                                <FontAwesomeIcon icon={faCircle} className={"circle"}/>
                            </p>
                        </div>
                        <img
                            ref={(el) => { imageRefs.current[0] = el; }}
                            className={"bg-project"}
                            src={"/images/stg2.png"}
                            alt={"StG EBRC Jaguar"}
                            onLoad={handleProjectImageLoad}
                        />
                    </div>
                </div>
                <div
                    className={"project-card project-makee"}
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
                        <img
                            ref={(el) => { imageRefs.current[1] = el; }}
                            className={"bg-project bg-project--contain"}
                            src={"/images/makee.png"}
                            alt={"makee"}
                            onLoad={handleProjectImageLoad}
                        />
                    </div>
                </div>
                <div
                    className={"project-card lactalis"}
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
                        <img
                            ref={(el) => { imageRefs.current[2] = el; }}
                            className={"bg-project"}
                            src={"/images/lactalis1.jpg"}
                            alt={"Lactalis Informatique"}
                            onLoad={handleProjectImageLoad}
                        />
                    </div>
                </div>
                <div
                    className={"project-card apv"}
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
                        <img
                            ref={(el) => { imageRefs.current[3] = el; }}
                            className={"bg-project bg-project--contain"}
                            src={"/images/aupresdevous.png"}
                            alt={"Aupres De Vous"}
                            onLoad={handleProjectImageLoad}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;
