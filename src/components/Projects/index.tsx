import "./index.css";
const Projects = () => {
    return (
        <>
            <div className={"allProjects"}>
                <div className={"project"}>
                    <h1>Titre 1</h1>
                    <p>Description du premier élément.</p>
                    <a className={"tertiary-button"}>En savoir plus</a>
                </div>
                <div className={"project2"}>
                    <h1>Titre 2</h1>
                    <p>Description du deuxième élément.</p>
                    <a className={"tertiary-button"}>En savoir plus</a>
                </div>
            </div>
        </>
    )
}

export default Projects;