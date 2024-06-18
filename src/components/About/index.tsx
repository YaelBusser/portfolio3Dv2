import "./index.css";

const About = () => {
    return (
        <div className={"presentation"}>
            <div className={"content-presentation"}>
                <h1>Hi, I'm <br/></h1><h1><span>Yaël Busser</span></h1>
                <p>A fullstack developper !</p>
                <div className={"buttons"}>
                    <a className={"secondary-button"}>My resume</a>
                    <a className={"primary-button"}>Get in touch</a>
                </div>
            </div>
        </div>
    )
}

export default About;