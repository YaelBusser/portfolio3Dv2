import { useGLTF } from "@react-three/drei";

const Model = (props: any) => {
    const {url, scale, position} = props;
    const gltf: any = useGLTF(url);
    return <primitive object={gltf.scene} scale={[scale, scale, scale]} position={position} />;
};

export default Model;
