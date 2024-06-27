import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { AnimationMixer } from "three";

const Model = (props: any) => {
    const { url, scale, position } = props;
    const gltf: any = useGLTF(url);
    const mixer = useRef<AnimationMixer | null>(null);
    const actions = useRef<any[]>([]);

    useEffect(() => {
        if (!mixer.current) {
            mixer.current = new AnimationMixer(gltf.scene);
            actions.current = gltf.animations.map((clip: any) => mixer.current!.clipAction(clip));
            actions.current.forEach((action) => action.play());
        }

        return () => {
            if (mixer.current) {
                actions.current.forEach((action) => action.stop());
            }
        };
    }, [gltf]);

    useFrame((state, delta) => {
        console.log(state);
        if (mixer.current) {
            mixer.current.update(delta);
        }
    });

    return <primitive object={gltf.scene} scale={[scale, scale, scale]} position={position} />;
};

export default Model;
