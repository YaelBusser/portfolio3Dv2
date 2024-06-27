import "./index.css";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, PerspectiveCamera} from "@react-three/drei";
import Model from "../TemplateModel";

const Me = () => {
    return (
        <div className={"container-me"}>
            <div className={"card-photo"}>
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
            </div>
        </div>
    );
}

export default Me;
