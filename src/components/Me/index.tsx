import "./index.css";
/*
import {Canvas} from "@react-three/fiber";
import {OrbitControls, PerspectiveCamera} from "@react-three/drei";
import Model from "../TemplateModel";
 */
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGuitar, faGamepad, faFilm, faDog, faCode} from "@fortawesome/free-solid-svg-icons";

const Me = () => {
    return (
        <div className={"container-me"}>
            <div className={"card-left"}>
                <img src={"/images/me.jpg"} className={"photo"}/>
            </div>
            <div className={"card-right"}>
                <h2>About</h2>
                <p className={"description"}>My name is Yaël, I'm 22 years old and I'm not afraid of the unknown. <br/>
                    I'm
                    always looking to learn in the IT field, which is full of skills and concepts just waiting to be
                    acquired.<br/><br/>
                    Ever since I was a child, I've been very curious and passionate about IT, and I love discovering new
                    technologies, how they work and, above all, how to put them into practice.<br/>
                    When I don't understand a mistake, I do everything I can to remedy it and learn from it.<br/><br/>

                    My goal is simple, but just as exciting: I want to gain experience while developing concrete, modern
                    applications. I'm keen to learn new technologies, new ways of doing things and how to carry out
                    projects, because that's what I love about development.
                </p>
                <div className={"my-hobbies"}>
                    <h2>My hobbies</h2>
                    <div className={"icons"}>
                        <FontAwesomeIcon icon={faGuitar} className={"icon"}/>
                        <FontAwesomeIcon icon={faGamepad} className={"icon"}/>
                        <FontAwesomeIcon icon={faFilm} className={"icon"}/>
                        <FontAwesomeIcon icon={faDog} className={"icon"}/>
                        <FontAwesomeIcon icon={faCode} className={"icon"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

{
    /*
<div className={"container-model"}>
    <Canvas>
        <PerspectiveCamera
            makeDefault
            position={[0, 0, 5]}
            fov={50}
        />
        <Model url={`${import.meta.env.VITE_PUBLIC_ROUTE}/models/me.glb`} scale={5}
               position={[0, -8, 0]}/>
        <ambientLight/>
        <OrbitControls enableZoom={false}/>
    </Canvas>
</div>
    */
}
export default Me;