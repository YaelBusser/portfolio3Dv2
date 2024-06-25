import "./index.css"
import {Canvas} from "@react-three/fiber";
import Model from "../TemplateModel";

const Me = () => {
    return (
        <div className={"container-me"}>
            <div className={"card-photo"}>
                <Canvas>
                    <Model url={`${import.meta.env.VITE_PUBLIC_ROUTE}/models/me.glb`} />
                </Canvas>
            </div>
        </div>
    )
}

export default Me;