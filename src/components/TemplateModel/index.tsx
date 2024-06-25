import { useGLTF } from "@react-three/drei";

const Model = (props: any) => {
    const {url} = props;
    const gltf: any = useGLTF(url);
    return <primitive object={gltf.scene} />;
};

export default Model;
